import sqlite3
import json
from datetime import datetime
from config import DB_PATH


def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()

    c.execute("""CREATE TABLE IF NOT EXISTS properties (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT, type TEXT, area INTEGER, rooms INTEGER,
        price INTEGER, district TEXT, address TEXT,
        description TEXT, features TEXT, embedding TEXT,
        created_at TEXT)""")

    c.execute("""CREATE TABLE IF NOT EXISTS sessions (
        id TEXT PRIMARY KEY,
        customer_id TEXT,
        ip TEXT, user_agent TEXT,
        started_at TEXT, last_seen TEXT)""")

    c.execute("""CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        session_id TEXT, role TEXT, content TEXT, created_at TEXT)""")

    c.execute("""CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        session_id TEXT,
        name TEXT, phone TEXT, property_type TEXT,
        district TEXT, budget TEXT,
        interested_property_id INTEGER,
        notes TEXT, created_at TEXT)""")

    conn.commit()
    conn.close()


def add_property(d):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("""INSERT INTO properties
        (title, type, area, rooms, price, district, address,
         description, features, embedding, created_at)
        VALUES (?,?,?,?,?,?,?,?,?,?,?)""",
        (d['title'], d['type'], d['area'], d['rooms'], d['price'],
         d['district'], d['address'], d['description'],
         json.dumps(d['features'], ensure_ascii=False),
         json.dumps(d.get('embedding', [])),
         datetime.now().isoformat()))
    pid = c.lastrowid
    conn.commit()
    conn.close()
    return pid


def get_all_properties():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("SELECT * FROM properties ORDER BY id DESC")
    rows = [dict(r) for r in c.fetchall()]
    conn.close()
    return rows


def delete_property(pid):
    conn = sqlite3.connect(DB_PATH)
    conn.execute("DELETE FROM properties WHERE id=?", (pid,))
    conn.commit()
    conn.close()


# ---------- جلسات ----------
def create_session(sid, customer_id, ip, ua):
    conn = sqlite3.connect(DB_PATH)
    now = datetime.now().isoformat()
    conn.execute(
        "INSERT OR REPLACE INTO sessions (id, customer_id, ip, user_agent, started_at, last_seen) VALUES (?,?,?,?,?,?)",
        (sid, customer_id, ip, ua, now, now))
    conn.commit()
    conn.close()


def touch_session(sid):
    conn = sqlite3.connect(DB_PATH)
    conn.execute("UPDATE sessions SET last_seen=? WHERE id=?",
                 (datetime.now().isoformat(), sid))
    conn.commit()
    conn.close()


def get_customer_sessions(customer_id):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("""
        SELECT s.id, s.started_at, s.last_seen,
          (SELECT content FROM messages
           WHERE session_id=s.id AND role='user'
           ORDER BY id ASC LIMIT 1) as title
        FROM sessions s
        WHERE s.customer_id = ?
        ORDER BY s.last_seen DESC
    """, (customer_id,))
    rows = [dict(r) for r in c.fetchall()]
    conn.close()
    return rows


# ---------- پیام‌ها ----------
def save_message(sid, role, content):
    conn = sqlite3.connect(DB_PATH)
    conn.execute("INSERT INTO messages (session_id, role, content, created_at) VALUES (?,?,?,?)",
                 (sid, role, content, datetime.now().isoformat()))
    conn.commit()
    conn.close()


def get_history(sid, limit=20):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("SELECT role, content FROM messages WHERE session_id=? ORDER BY id DESC LIMIT ?",
              (sid, limit))
    rows = [dict(r) for r in c.fetchall()]
    conn.close()
    return list(reversed(rows))


def get_session_messages(sid):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("SELECT role, content, created_at FROM messages WHERE session_id=? ORDER BY id",
              (sid,))
    rows = [dict(r) for r in c.fetchall()]
    conn.close()
    return rows


# ---------- لیدها ----------
def save_lead(sid, **kwargs):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT id FROM leads WHERE session_id=?", (sid,))
    existing = c.fetchone()
    if existing:
        fields = ", ".join(f"{k}=?" for k in kwargs.keys())
        values = list(kwargs.values()) + [sid]
        c.execute(f"UPDATE leads SET {fields} WHERE session_id=?", values)
    else:
        cols = ", ".join(kwargs.keys())
        qs = ", ".join("?" * len(kwargs))
        values = [sid] + list(kwargs.values())
        c.execute(f"INSERT INTO leads (session_id, {cols}, created_at) VALUES (?, {qs}, ?)",
                  values + [datetime.now().isoformat()])
    conn.commit()
    conn.close()


def get_lead(sid):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("SELECT * FROM leads WHERE session_id=?", (sid,))
    row = c.fetchone()
    conn.close()
    return dict(row) if row else None


def get_all_leads():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("SELECT * FROM leads ORDER BY id DESC")
    rows = [dict(r) for r in c.fetchall()]
    conn.close()
    return rows


def get_all_sessions():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("""SELECT s.*,
                 (SELECT COUNT(*) FROM messages WHERE session_id=s.id) as msg_count,
                 (SELECT name FROM leads WHERE session_id=s.id) as lead_name,
                 (SELECT phone FROM leads WHERE session_id=s.id) as lead_phone
                 FROM sessions s ORDER BY s.last_seen DESC""")
    rows = [dict(r) for r in c.fetchall()]
    conn.close()
    return rows

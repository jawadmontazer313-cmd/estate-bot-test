// ═══════════════════════════════════════════════════════════
// Robat Nemati - v27 (منوی همکار کامل)
// ═══════════════════════════════════════════════════════════

const SITE_MAIN = "https://emlaknemati.ir";
const CHANNEL_URL = "https://t.me/emlak_nemati";
const BOT_URL = "https://t.me/emlaknematibot";
const DEFAULT_LISTING_PHOTO = "https://emlaknemati.ir/default-listing.jpg";

const QOM_NEIGHBORHOODS = [
  "کلهری","صفائیه","زنبیل آباد","یخچال قاضی","باجک","هفت تیر",
  "عمار یاسر","چهارمردان","ارم","طالقانی","انقلاب","سعدی","جمهوری",
  "نواب صفوی","چهل اختران","میدان نو","اسکندری","راه آهن","خاکفرج",
  "نیروگاه","شادقلی خان","آذر","بازار","شهدا","شهیدین",
  "شهید بهشتی","بلوار امین","۱۹ دی","نوزده دی","شهید صدوقی","بهار",
  "ایستگاه","شهرک امام","دور شهر","شهر قائم","امیرآباد","شهرک مهدیه",
  "شهرک بهار","شهرک فردوسی","شهرک کوثر","شهرک گلها","شهرک پردیسان",
  "پردیسان","دانشگاه","سالاریه","قنوات","شهرک قدس","شهرک فاطمیه",
  "قم نو","زیتون","بستان","انسجام","مهدیه","گلستان","توحید","خانم آباد",
  "شهرک الهیه","شهرک صنعتی","شکوهیه","شهرک فجر",
  "جمکران","گلدشت","امامزاده ابراهیم","صفا و شهدا","بلوار غدیر",
  "شهرک جهانگیر","شهرک مهدی","شهرک ولیعصر",
  "سلفچگان","کهک","دستجرد","قمرود","جعفریه","خلجستان",
  "آب‌فین","آب‌نوآقا","آب‌نوزمان","ابرَجس","اشتریه","اسپید","آغلک","الکان",
  "امره","امامزاده سلیمان","امامزاده عباس","انجیله","اول","آدریس‌آباد",
  "ابراهیم‌آباد","احمدآباد","الویرآباد","باقرآباد","باغ پورشاد","بنابر",
  "بیدهند","بستان‌آباد","بید یونجه","پاشیون","پاچیان","پستگان","پیمانه بالا",
  "پیمانه پایین","تکیه","تلخاب","تیره‌رو","جمیزقان","جمال‌آباد","جعفرآباد",
  "جوجک‌آباد","جولادر","چال‌کباد","چاه احمدزاده","چاه کرباسی","چاه لاجوردی",
  "چشمه","چشمه حسنعلی","چشمه شجاع","چشمه کولی","چنارک","چهل‌بندگان","حلاج‌آباد",
  "حسن‌آباد","حسن‌جوی","حسن‌نوری","حسین‌آباد","حسین‌آباد گائینی","حسین‌آباد زند",
  "حسین‌آباد وزیر","حیدرآباد","حصارسرخ","خاوه","خدرآباد","خیرآباد","خورآباد",
  "خوشاب","خوشدره","خشه","خلفستان","درباغ","دریاده","دودانگه","رضاآباد",
  "رحمت‌آباد","رستگان","رستک","روشکان","زیزگان","صَرم","سیرو","طینوج",
  "عبدالله‌آباد","فردو","فوجرد","فتح‌آباد","فیض‌آباد","قبادبزن","قاهان",
  "قاسم‌آباد","قلعه آقا محمود","قلعه عبدالله","قلندر","کاسوا","کرمجگان",
  "کهندان","کتانعلی","کله‌چنار","کورش‌آباد","کورس‌آباد","گیو","گازران",
  "گازران کهنه","گزدر","گزنه","گنداب","گورک","لاچنار","لیسون","محمدآباد",
  "محمدآباد اسلامی","محمودآباد","مبارک‌آباد","موجان","معصوم‌آباد","مقبل‌آباد",
  "نجم‌آباد","نویس","نایه","نورآباد","ونارج","ونان","ونوشه","وشنوه","ورجان",
  "وسفونجرد","هرمزآباد","یگانه"
];

const TX = {
  fa: {
    welcome: "سلام! به املاک نعمتی خوش آمدید.\n\n🌐 <b>مشاهده سایت:</b>\n" + SITE_MAIN + "\n\n📢 <b>کانال تلگرام:</b>\n" + CHANNEL_URL,
    langPrompt: "لطفا زبان خود را انتخاب کنید:", langLabel: "زبان فعلی: فارسی",
    menuPrompt: "یکی از گزینه ها را انتخاب کنید:",
    menuViewSell: "🏠 آگهی های فروش", menuViewRent: "🔑 آگهی های رهن و اجاره",
    menuListSell: "📝 ثبت آگهی فروش", menuListRent: "📋 ثبت آگهی رهن و اجاره",
    menuConsult: "💬 مشاوره رایگان", menuSite: "🌐 مشاهده سایت",
    back: "بازگشت", cancel: "لغو", skip: "رد کردن",
    requestBtn: "📩 درخواست این ملک",
    reqSent: "درخواست شما ثبت شد.",
    reqAskPhone: "برای هماهنگی بازدید، لطفا شماره تماس خود را بفرستید.\n\nمثال: ۰۹۱۲۳۴۵۶۷۸۹",
    reqThanks: "ممنون!", reqWithoutPhone: "درخواست شما ثبت شد.",
    askTime: "چه ساعتی برای بازدید راحت‌ترید؟",
    timeSlot1: "🌅 امروز عصر (۱۶-۱۹)", timeSlot2: "🌤️ فردا صبح (۹-۱۲)", timeSlot3: "🌆 فردا عصر (۱۶-۱۹)",
    timeCancel: "❌ لغو",
    reqWithTime: "✅ رزرو شما ثبت شد!",
    noPhoneFound: "شماره معتبر پیدا نشد.",
    filterPrompt: "چطور میخوای جستجو کنی?", filterAll: "📂 همه آگهی ها",
    budgetUnder2: "زیر ۲ میلیارد", budget2to5: "۲ تا ۵ میلیارد", budget5to10: "۵ تا ۱۰ میلیارد", budgetOver10: "بالای ۱۰ میلیارد",
    budgetUnder500Rent: "زیر ۵۰۰ میلیون رهن", budget500to1Rent: "۵۰۰ میلیون تا ۱ میلیارد رهن",
    budget1to2Rent: "۱ تا ۲ میلیارد رهن", budgetOver2Rent: "بالای ۲ میلیارد رهن",
    noResults: "متاسفانه آگهی ای پیدا نشد.",
    fileReqYes: "بله، ثبت کن", fileReqNo: "نه، بی خیال",
    fileReqPrompt: "لطفا جزئیات درخواستت رو بنویس.",
    fileReqSaved: "درخواست فایل یابی ثبت شد.",
    totalListings: "تعداد کل",
    listingTypeSell: "🏠 فروش", listingTypeRent: "🔑 رهن و اجاره",
    introSell: "ثبت آگهی فروش", introListRent: "ثبت آگهی رهن و اجاره",
    introConsult: "مشاوره رایگان\n\nسلام! چه سوالی دارید؟",
    savedOk: "آگهی ثبت شد.", cancelled: "لغو شد.", backToMenu: "به منوی اصلی برگشتید.",
    noListings: "هنوز آگهی ای ثبت نشده.", listingNotFound: "این آگهی پیدا نشد.",
    askMedia: "عکس یا ویدیو از ملک دارید؟",
    mediaAgain: "لطفا عکس یا ویدیو بفرستید یا رد کنید.",
    voiceErr: "متاسفانه ویس شما را نفهمیدم.",
    phoneHidden: "شماره تماس پس از درخواست بازدید اعلام می شود.",
    siteMsg: "🌐 سایت: " + SITE_MAIN + "\n\n📢 کانال: " + CHANNEL_URL,
    qPropertyTypeSell: "نوع ملک و متراژ؟", qPropertyTypeRent: "نوع ملک و متراژ؟",
    qDocument: "وضعیت سند؟", qLocation: "آدرس یا محله؟",
    qPrice: "قیمت مورد نظر؟", qPriceRent: "مبلغ رهن و اجاره؟",
    qSize: "متراژ؟", qNotes: "توضیحات اضافه (اختیاری)",
    qPhone: "شماره تماس؟", qName: "نام و نام خانوادگی؟",
    qYearBuilt: "سال ساخت ملک؟", qRooms: "تعداد اتاق؟",
    qFloor: "طبقه؟", qAmenities: "امکانات ملک؟",
    lblPricePerMeter: "قیمت هر متر",
    notesHasPhone: "⚠️ توی توضیحات شماره پیدا کردم.\n\n❌ لطفاً بدون شماره بنویس.",
    rolePrompt: "برای اینکه بهتر کمکت کنیم، لطفاً بگو کدوم هستی:",
    roleColleague: "🏢 مشاور املاک", roleCustomer: "🏠 خریدار / مستأجر", roleOwner: "💰 مالک / فروشنده",
    roleWelcomeColleague: "خوش اومدی همکار عزیز 🌹\n\nبرای همکاری بهتر، اطلاعاتت رو ثبت کن 👇",
    roleWelcomeCustomer: "خوش اومدی 🌹\n\nچه ملکی می‌خوای؟",
    roleWelcomeOwner: "خوش اومدی 🌹\n\nملکت رو با ما ثبت کن.",
    colleagueBtnForm: "📝 ثبت اطلاعات همکاری",
    colleagueBtnSkip: "⏭️ بعداً، برو منو",
    colleagueHint: "☝️ دکمه بالا رو بزن تا فرم باز شه",
    colleagueAlready: "✅ قبلاً ثبت‌نام کردی همکار عزیز 🌹",
    colleagueThanks: "✅ ممنون! اطلاعاتت ثبت شد.",
    colleagueMenuTitle: "🏢 <b>منوی همکار</b>\n\nیکی از گزینه‌ها رو انتخاب کن:",
    colleagueBtnNewFile: "📝 ثبت فایل جدید",
    colleagueBtnMyFiles: "📁 فایل‌های من",
    colleagueBtnExchange: "🤝 تبادل فایل با همکارها",
    colleagueBtnStats: "📊 آمار فایل‌های من",
    colleagueBtnProfile: "👤 پروفایل من",
    colleagueBtnBackMenu: "🔙 منوی اصلی",
    colleagueMyFilesTitle: "📁 <b>فایل‌های من</b>\n\n",
    colleagueNoFiles: "📁 هنوز فایلی ثبت نکردی.\n\nاز گزینه «📝 ثبت فایل جدید» شروع کن.",
    colleagueExchangeTitle: "🤝 <b>تبادل فایل با همکارها</b>\n\nاینا آخرین فایل‌های همکارهای دیگه‌ست:",
    colleagueExchangeEmpty: "🤝 هنوز هیچ همکاری فایلی نذاشته.",
    colleagueStatsTitle: "📊 <b>آمار فایل‌های من</b>\n\n",
    colleagueProfileTitle: "👤 <b>پروفایل من</b>\n\n",
    colleagueProfileBtnEdit: "✏️ ویرایش اطلاعات",
    colleagueOwnerTag: "🤝 فایل همکار",
    colleagueFileOwner: "🏢 از طرف: ",
    webappIntro: "📸 <b>قدم ۱ از ۲ — عکس و ویدیو</b>\n\nاز ملکت عکس یا ویدیو داری؟\n\nهر تعداد که می‌خوای بفرست 👇",
    webappMediaReceived: "✅ فایل ثبت شد.\n\n📎 تعداد: <b>{count}</b>",
    webappMediaIntro: "✅ عکس‌ها ذخیره شد!\n\nحالا فرم اطلاعات ملک رو پر کن 👇",
    webappNoMedia: "⏭️ بدون عکس ادامه می‌دیم.",
    webappBtnDone: "✅ تمومه، برو فرم",
    webappBtnSkip: "⏭️ عکس ندارم، مستقیم برو فرم",
    webappBtnForm: "📝 باز کردن فرم ثبت آگهی",
    webappHint: "☝️ دکمه بالا رو بزن",
    resetDone: "🔄 نقش شما ریست شد.\n\nلطفاً دوباره /start بزنید."
  },
  en: {
    welcome: "Welcome to Nemati Real Estate.\n\n🌐 " + SITE_MAIN + "\n📢 " + CHANNEL_URL,
    langPrompt: "Choose your language:", langLabel: "Language: English",
    menuPrompt: "Choose an option:",
    menuViewSell: "🏠 Listings for Sale", menuViewRent: "🔑 Listings for Rent",
    menuListSell: "📝 List for Sale", menuListRent: "📋 List for Rent",
    menuConsult: "💬 Free Consultation", menuSite: "🌐 Visit Website",
    back: "Back", cancel: "Cancel", skip: "Skip",
    requestBtn: "📩 Request", reqSent: "Registered.", reqAskPhone: "Send phone.",
    reqThanks: "Thanks!", reqWithoutPhone: "Registered.", askTime: "What time?",
    timeSlot1: "Evening", timeSlot2: "Morning", timeSlot3: "Tomorrow evening",
    timeCancel: "❌ Cancel", reqWithTime: "✅ Confirmed!",
    noPhoneFound: "No phone.", filterPrompt: "Search how?", filterAll: "📂 All",
    budgetUnder2: "Under 2B", budget2to5: "2-5B", budget5to10: "5-10B", budgetOver10: "Over 10B",
    budgetUnder500Rent: "Under 500M", budget500to1Rent: "500M-1B", budget1to2Rent: "1-2B", budgetOver2Rent: "Over 2B",
    noResults: "None.", fileReqYes: "Yes", fileReqNo: "No", fileReqPrompt: "Details.", fileReqSaved: "Saved.",
    totalListings: "Total", listingTypeSell: "🏠 Sale", listingTypeRent: "🔑 Rent",
    introSell: "Sale", introListRent: "Rent", introConsult: "Consultation",
    savedOk: "Saved.", cancelled: "Cancelled.", backToMenu: "Back.",
    noListings: "None.", listingNotFound: "Not found.", askMedia: "Photos?", mediaAgain: "Send media.",
    voiceErr: "?", phoneHidden: "Contact after request.", siteMsg: SITE_MAIN,
    qPropertyTypeSell: "Type?", qPropertyTypeRent: "Type?", qDocument: "Doc?", qLocation: "Location?",
    qPrice: "Price?", qPriceRent: "Rent?", qSize: "Size?", qNotes: "Notes.",
    qPhone: "Phone?", qName: "Name?", qYearBuilt: "Year?", qRooms: "Rooms?",
    qFloor: "Floor?", qAmenities: "Amenities?", lblPricePerMeter: "Per sqm",
    notesHasPhone: "No phone.", rolePrompt: "Who are you?",
    roleColleague: "🏢 Agent", roleCustomer: "🏠 Buyer", roleOwner: "💰 Owner",
    roleWelcomeColleague: "Welcome colleague 🌹", roleWelcomeCustomer: "Welcome 🌹", roleWelcomeOwner: "Welcome 🌹",
    colleagueBtnForm: "📝 Register", colleagueBtnSkip: "⏭️ Skip", colleagueHint: "☝️",
    colleagueAlready: "✅ Already registered.", colleagueThanks: "✅ Thanks!",
    colleagueMenuTitle: "🏢 Colleague menu", colleagueBtnNewFile: "📝 New file",
    colleagueBtnMyFiles: "📁 My files", colleagueBtnExchange: "🤝 Exchange",
    colleagueBtnStats: "📊 Stats", colleagueBtnProfile: "👤 Profile",
    colleagueBtnBackMenu: "🔙 Main menu", colleagueMyFilesTitle: "📁 My files",
    colleagueNoFiles: "No files yet.", colleagueExchangeTitle: "🤝 Exchange",
    colleagueExchangeEmpty: "None yet.", colleagueStatsTitle: "📊 Stats",
    colleagueProfileTitle: "👤 Profile", colleagueProfileBtnEdit: "✏️ Edit",
    colleagueOwnerTag: "🤝 Colleague file", colleagueFileOwner: "🏢 From: ",
    webappIntro: "📸 Send media", webappMediaReceived: "✅ {count}",
    webappMediaIntro: "✅ Form", webappNoMedia: "⏭️ Form",
    webappBtnDone: "✅ Done", webappBtnSkip: "⏭️ Skip",
    webappBtnForm: "📝 Form", webappHint: "☝️", resetDone: "🔄 Reset."
  },
  ar: {
    welcome: "مرحبا بعقارات نعمتي.\n\n🌐 " + SITE_MAIN + "\n📢 " + CHANNEL_URL,
    langPrompt: "اختر اللغة:", langLabel: "اللغة: العربية",
    menuPrompt: "اختر:",
    menuViewSell: "🏠 البيع", menuViewRent: "🔑 الإيجار",
    menuListSell: "📝 تسجيل بيع", menuListRent: "📋 تسجيل إيجار",
    menuConsult: "💬 استشارة", menuSite: "🌐 الموقع",
    back: "رجوع", cancel: "إلغاء", skip: "تخطي",
    requestBtn: "📩 طلب", reqSent: "تم.", reqAskPhone: "أرسل رقمك.",
    reqThanks: "شكرا!", reqWithoutPhone: "تم.", askTime: "الوقت؟",
    timeSlot1: "مساء", timeSlot2: "صباح", timeSlot3: "مساء غد",
    timeCancel: "إلغاء", reqWithTime: "✅ تم!", noPhoneFound: "غير صالح.",
    filterPrompt: "بحث؟", filterAll: "📂 الكل",
    budgetUnder2: "أقل 2", budget2to5: "2-5", budget5to10: "5-10", budgetOver10: "أكثر 10",
    budgetUnder500Rent: "أقل 500", budget500to1Rent: "500-1000", budget1to2Rent: "1-2", budgetOver2Rent: "أكثر 2",
    noResults: "لا نتائج.", fileReqYes: "نعم", fileReqNo: "لا", fileReqPrompt: "التفاصيل.", fileReqSaved: "تم.",
    totalListings: "المجموع", listingTypeSell: "🏠 بيع", listingTypeRent: "🔑 إيجار",
    introSell: "تسجيل بيع", introListRent: "تسجيل إيجار", introConsult: "استشارة",
    savedOk: "تم.", cancelled: "ألغي.", backToMenu: "عودة.",
    noListings: "لا.", listingNotFound: "غير موجود.", askMedia: "صور؟", mediaAgain: "أرسل.",
    voiceErr: "?", phoneHidden: "بعد الطلب.", siteMsg: SITE_MAIN,
    qPropertyTypeSell: "النوع؟", qPropertyTypeRent: "النوع؟", qDocument: "السند؟", qLocation: "العنوان؟",
    qPrice: "السعر؟", qPriceRent: "الإيجار؟", qSize: "المساحة؟", qNotes: "ملاحظات.",
    qPhone: "الهاتف؟", qName: "الاسم؟", qYearBuilt: "السنة؟", qRooms: "الغرف؟",
    qFloor: "الطابق؟", qAmenities: "المرافق؟", lblPricePerMeter: "للمتر",
    notesHasPhone: "لا رقم.", rolePrompt: "من أنت؟",
    roleColleague: "🏢 وسيط", roleCustomer: "🏠 مشتري", roleOwner: "💰 مالك",
    roleWelcomeColleague: "أهلا 🌹", roleWelcomeCustomer: "أهلا 🌹", roleWelcomeOwner: "أهلا 🌹",
    colleagueBtnForm: "📝 تسجيل", colleagueBtnSkip: "⏭️ تخطي", colleagueHint: "☝️",
    colleagueAlready: "✅ مسجل مسبقا.", colleagueThanks: "✅ شكرا!",
    colleagueMenuTitle: "🏢 قائمة الوسيط", colleagueBtnNewFile: "📝 ملف جديد",
    colleagueBtnMyFiles: "📁 ملفاتي", colleagueBtnExchange: "🤝 تبادل",
    colleagueBtnStats: "📊 إحصائيات", colleagueBtnProfile: "👤 الملف",
    colleagueBtnBackMenu: "🔙 القائمة", colleagueMyFilesTitle: "📁 ملفاتي",
    colleagueNoFiles: "لا ملفات.", colleagueExchangeTitle: "🤝 تبادل",
    colleagueExchangeEmpty: "لا شيء.", colleagueStatsTitle: "📊 إحصائيات",
    colleagueProfileTitle: "👤 الملف", colleagueProfileBtnEdit: "✏️ تعديل",
    colleagueOwnerTag: "🤝 ملف وسيط", colleagueFileOwner: "🏢 من: ",
    webappIntro: "📸 أرسل وسائط", webappMediaReceived: "✅ {count}",
    webappMediaIntro: "✅ الاستمارة", webappNoMedia: "⏭️ الاستمارة",
    webappBtnDone: "✅ تم", webappBtnSkip: "⏭️ تخطي",
    webappBtnForm: "📝 استمارة", webappHint: "☝️", resetDone: "🔄 تم."
  }
};

// ═══════════════════════════════════════════════════════════
// 🧠 MEMORY
// ═══════════════════════════════════════════════════════════

const HISTORY_LIMIT = 6;
const HISTORY_TTL = 7 * 24 * 3600;

async function getHistory(env, chatId) { try { const h = await env.DATA.get(`chat_history_${chatId}`, "json"); return Array.isArray(h) ? h : []; } catch (e) { return []; } }
async function saveHistory(env, chatId, history) { try { await env.DATA.put(`chat_history_${chatId}`, JSON.stringify(history.slice(-HISTORY_LIMIT)), { expirationTtl: HISTORY_TTL }); } catch (e) {} }
async function addToHistory(env, chatId, role, content) { if (!content) return; const h = await getHistory(env, chatId); h.push({ role, content, ts: Date.now() }); await saveHistory(env, chatId, h); }
async function clearHistory(env, chatId) { try { await env.DATA.delete(`chat_history_${chatId}`); } catch (e) {} }

// ═══════════════════════════════════════════════════════════
// 🔔 SERIOUS INTENT DETECTION
// ═══════════════════════════════════════════════════════════

function detectSeriousIntent(text) {
  if (!text) return null;
  const t = String(text);
  if (/(همکارم|همکار\s*هستم|همکاریم|من\s*همکار|ما\s*همکار|بنده\s*همکار)/i.test(t)) return "🤝 همکار املاک";
  if (/(مشاور\s*املاک|مشاور\s*ملکی|مشاور\s*هستم|مشاورم)/i.test(t)) return "🏢 مشاور املاک";
  if (/(آژانس\s*املاک|بنگاه\s*املاک|دفتر\s*املاک|آژانس\s*دارم|بنگاه\s*دارم|املاک\s*دارم)/i.test(t)) return "🏛️ آژانس/بنگاه";
  if (/(دنبال\s*فایل|تبادل\s*فایل|فایل\s*مشترک|فایل\s*دارم|معرفی\s*فایل|فایل\s*معرفی)/i.test(t)) return "📁 تبادل فایل";
  if (/(مالک\s*هستم|مالکم|خودم\s*مالک|خودم\s*مالکم)/i.test(t)) return "🏠 مالک";
  if (/(واسطه|واسطه‌ام|واسطه\s*هستم)/i.test(t)) return "👤 واسطه";
  if (/(?:میخوام\s*بخرم|میخوام\s*خرید|خریدارم|قصد\s*خرید|برا\s*خرید|میخرم|بخرم|معامله|قرارداد|امضا|امضاء|واریز|پیش\s*پرداخت|بیعانه)/i.test(t)) return "💰 قصد خرید";
  if (/(?:پسندیدم|خوشم\s*اومد|قبول\s*دارم|همین\s*رو\s*میخوام|همینو\s*میخوام|این\s*ملک\s*رو\s*میخوام|مناسب\s*هست|مناسبه)/i.test(t)) return "⭐ علاقه جدی به ملک";
  if (/(?:الان\s*میام|الان\s*بیام|همین\s*امروز\s*میام|فردا\s*صبح\s*میام|میام\s*ببینم|برای\s*بازدید\s*میام|کی\s*بیام|کِی\s*بیام)/i.test(t)) return "🚶 قصد بازدید فوری";
  if (/(?:زنگ\s*بزنید|زنگ\s*بزن|تماس\s*بگیرید|تماس\s*بگیر|شماره\s*بدید|شماره\s*بده)/i.test(t)) return "📞 درخواست تماس";
  if (/(?:فوری|فوریه|خیلی\s*فوری|عجله|زودتر|سریع)/i.test(t)) return "⚡ فوری";
  return null;
}

function isColleagueIntent(intentType) {
  if (!intentType) return false;
  return /همکار|مشاور|آژانس|بنگاه|تبادل|مالک|واسطه/.test(intentType);
}

async function getAdminChatId(env) {
  if (env.ADMIN_CHAT_ID && String(env.ADMIN_CHAT_ID).trim()) return String(env.ADMIN_CHAT_ID).trim();
  try { const kvId = await env.DATA.get("admin_chat_id"); if (kvId && String(kvId).trim()) return String(kvId).trim(); } catch (e) {}
  return null;
}

function isAdminUser(chatId, env) { return String(chatId) === String(env.ADMIN_CHAT_ID); }

// ═══════════════════════════════════════════════════════════
// 📊 آمار امروز و هفته
// ═══════════════════════════════════════════════════════════

async function getTodayStats(env) {
  try {
    const now = Date.now();
    const oneDayAgo = now - 24 * 60 * 60 * 1000;
    const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;

    let listingsToday = 0, listingsWeek = 0;
    let fileReqsToday = 0, fileReqsWeek = 0;
    let apptsToday = 0, apptsWeek = 0;
    let colleaguesToday = 0, colleaguesWeek = 0;
    let negotiationsToday = 0, negotiationsWeek = 0;

    try {
      const p = await env.DATA.list({ prefix: "pub_listing_" });
      for (const k of p.keys) {
        const ts = parseInt(k.name.replace("pub_listing_", ""));
        if (ts >= oneDayAgo) listingsToday++;
        if (ts >= oneWeekAgo) listingsWeek++;
      }
    } catch (e) {}

    try {
      const f = await env.DATA.list({ prefix: "file_req_" });
      for (const k of f.keys) {
        const ts = parseInt(k.name.replace("file_req_", ""));
        if (ts >= oneDayAgo) fileReqsToday++;
        if (ts >= oneWeekAgo) fileReqsWeek++;
      }
    } catch (e) {}

    try {
      const ap = await env.DATA.list({ prefix: "appt_" });
      for (const k of ap.keys) {
        const ts = parseInt(k.name.replace("appt_", ""));
        if (ts >= oneDayAgo) apptsToday++;
        if (ts >= oneWeekAgo) apptsWeek++;
      }
    } catch (e) {}

    try {
      const c = await env.DATA.list({ prefix: "colleague_" });
      for (const k of c.keys) {
        const col = await env.DATA.get(k.name, "json");
        if (!col || !col.ts) continue;
        if (col.ts >= oneDayAgo) colleaguesToday++;
        if (col.ts >= oneWeekAgo) colleaguesWeek++;
      }
    } catch (e) {}

    try {
      const n = await env.DATA.list({ prefix: "neg_" });
      for (const k of n.keys) {
        const ts = parseInt(k.name.replace("neg_", ""));
        if (ts >= oneDayAgo) negotiationsToday++;
        if (ts >= oneWeekAgo) negotiationsWeek++;
      }
    } catch (e) {}

    let usersToday = 0, usersWeek = 0;
    try {
      const u = await env.DATA.get("active_users", "json") || {};
      for (const uid in u) {
        if (u[uid] >= oneDayAgo) usersToday++;
        if (u[uid] >= oneWeekAgo) usersWeek++;
      }
    } catch (e) {}

    return {
      today: { users: usersToday, listings: listingsToday, fileReqs: fileReqsToday, appts: apptsToday, colleagues: colleaguesToday, negotiations: negotiationsToday },
      week: { users: usersWeek, listings: listingsWeek, fileReqs: fileReqsWeek, appts: apptsWeek, colleagues: colleaguesWeek, negotiations: negotiationsWeek }
    };
  } catch (e) { return { today: {}, week: {} }; }
}

async function trackActiveUser(env, chatId) {
  try {
    const u = await env.DATA.get("active_users", "json") || {};
    u[String(chatId)] = Date.now();
    const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
    for (const uid in u) { if (u[uid] < cutoff) delete u[uid]; }
    await env.DATA.put("active_users", JSON.stringify(u), { expirationTtl: 30 * 24 * 3600 });
  } catch (e) {}
}
async function alertAdminSerious(env, chatId, userName, userUsername, userText, intentType) {
  try {
    const adminId = await getAdminChatId(env);
    if (!adminId) return false;
    const isColleague = isColleagueIntent(intentType);
    const emoji = isColleague ? "🟢" : "🔴";
    const header = isColleague ? "همکار شناسایی شد!" : "هشدار مشتری جدی!";
    let msg = `${emoji} <b>${header}</b>\n\n🎯 <b>نوع:</b> ${intentType}\n👤 <b>نام:</b> ${userName}\n📛 <b>یوزرنیم:</b> @${userUsername}\n🆔 <b>چت:</b> ${chatId}\n\n💬 <b>پیام:</b>\n<i>${utf8Clean(userText).substring(0, 300)}</i>\n\n`;
    msg += isColleague ? `🤝 <b>یه همکاره، بررسی کن.</b>` : `⚡ <b>سریع وارد شو!</b>`;
    const r = await sendToTelegram(env, "sendMessage", { chat_id: adminId, text: msg, parse_mode: "HTML" });
    return r.ok;
  } catch (e) { return false; }
}

function getMapUrl(locationShort) { if (!locationShort) return ""; return `https://maps.google.com/?q=${encodeURIComponent(locationShort + " قم")}`; }

// ═══════════════════════════════════════════════════════════
// 📅 PERSIAN CALENDAR
// ═══════════════════════════════════════════════════════════

function gregorianToJalali(gy, gm, gd) {
  const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  let jy = (gy <= 1600) ? 0 : 979;
  gy -= (gy <= 1600) ? 621 : 1600;
  const gy2 = (gm > 2) ? (gy + 1) : gy;
  let days = (365 * gy) + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) - 80 + gd + g_d_m[gm - 1];
  jy += 33 * Math.floor(days / 12053);
  days %= 12053;
  jy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) { jy += Math.floor((days - 1) / 365); days = (days - 1) % 365; }
  const jm = (days < 186) ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
  const jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));
  return { jy, jm, jd };
}

function jalaliToGregorian(jy, jm, jd) {
  jy += 1595;
  let days = -355668 + (365 * jy) + (Math.floor(jy / 33) * 8) + Math.floor(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
  let gy = 400 * Math.floor(days / 146097);
  days %= 146097;
  if (days > 36524) { gy += 100 * Math.floor(--days / 36524); days %= 36524; if (days >= 365) days++; }
  gy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) { gy += Math.floor((days - 1) / 365); days = (days - 1) % 365; }
  let gd = days + 1;
  const sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let gm = 0;
  for (gm = 0; gm < 13; gm++) { const v = sal_a[gm]; if (gd <= v) break; gd -= v; }
  return { gy, gm, gd };
}

function getTehranToday() {
  const nowUtc = new Date();
  const tehranNow = new Date(nowUtc.getTime() + 3.5 * 60 * 60 * 1000);
  const today = new Date(Date.UTC(tehranNow.getUTCFullYear(), tehranNow.getUTCMonth(), tehranNow.getUTCDate()));
  const todayJ = gregorianToJalali(today.getUTCFullYear(), today.getUTCMonth() + 1, today.getUTCDate());
  return { today, todayJ, tehranNow };
}

function toEnglishDigits(s) { return String(s).replace(/[۰-۹]/g, d => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/[٠-٩]/g, d => String("٠١٢٣٤٥٦٧٨٩".indexOf(d))); }

function parsePersianDate(text) {
  if (!text) return null;
  const t = String(text).trim();
  const PERSIAN_MONTHS = {"فروردین":1,"فرودین":1,"اردیبهشت":2,"خرداد":3,"تیر":4,"مرداد":5,"شهریور":6,"مهر":7,"آبان":8,"ابان":8,"آذر":9,"اذر":9,"دی":10,"بهمن":11,"اسفند":12};
  const WEEKDAYS = {"شنبه":6,"یکشنبه":0,"یک‌شنبه":0,"یک شنبه":0,"دوشنبه":1,"دو‌شنبه":1,"دو شنبه":1,"سه‌شنبه":2,"سه شنبه":2,"چهارشنبه":3,"چهار‌شنبه":3,"چهار شنبه":3,"پنجشنبه":4,"پنج‌شنبه":4,"پنج شنبه":4,"جمعه":5};
  const { today, todayJ } = getTehranToday();
  let hour = 10, minute = 0;
  const timeMatch = t.match(/(?:ساعت\s*)?([۰-۹\d]+)(?::([۰-۹\d]+))?/);
  if (timeMatch) {
    let h = parseInt(toEnglishDigits(timeMatch[1]));
    let m = timeMatch[2] ? parseInt(toEnglishDigits(timeMatch[2])) : 0;
    if (h <= 8 && /عصر|شب/.test(t)) h += 12;
    if (h >= 0 && h <= 23) { hour = h; minute = m; }
  } else {
    if (/صبح/.test(t)) hour = 9;
    else if (/ظهر/.test(t)) hour = 12;
    else if (/عصر/.test(t)) hour = 17;
    else if (/شب/.test(t)) hour = 20;
  }
  let targetDate = null;
  if (/پس\s*فردا|پس‌فردا|پسفردا/.test(t)) { targetDate = new Date(today); targetDate.setUTCDate(targetDate.getUTCDate() + 2); }
  else if (/فردا/.test(t)) { targetDate = new Date(today); targetDate.setUTCDate(targetDate.getUTCDate() + 1); }
  else if (/امروز/.test(t)) { targetDate = new Date(today); }
  else if (/دیروز/.test(t)) { targetDate = new Date(today); targetDate.setUTCDate(targetDate.getUTCDate() - 1); }
  if (!targetDate) { for (const [dayName, dayNum] of Object.entries(WEEKDAYS)) { if (t.includes(dayName)) { const currentDay = today.getUTCDay(); let diff = dayNum - currentDay; if (diff <= 0) diff += 7; targetDate = new Date(today); targetDate.setUTCDate(targetDate.getUTCDate() + diff); break; } } }
  if (!targetDate) { const daysMatch = t.match(/([۰-۹\d]+)\s*روز\s*(?:دیگه|بعد|آینده|اینده)/); if (daysMatch) { const n = parseInt(toEnglishDigits(daysMatch[1])); targetDate = new Date(today); targetDate.setUTCDate(targetDate.getUTCDate() + n); } }
  if (!targetDate && /هفته\s*(?:آینده|اینده|بعد|دیگه)/.test(t)) { targetDate = new Date(today); targetDate.setUTCDate(targetDate.getUTCDate() + 7); }
  if (!targetDate && /ماه\s*(?:آینده|اینده|بعد|دیگه)/.test(t)) { targetDate = new Date(today); targetDate.setUTCDate(targetDate.getUTCDate() + 30); }
  if (!targetDate) { for (const [monthName, monthNum] of Object.entries(PERSIAN_MONTHS)) { if (t.includes(monthName)) { const dayMatch = t.match(/([۰-۹\d]+)/); let day = 1; if (dayMatch) day = parseInt(toEnglishDigits(dayMatch[1])); let year = todayJ.jy; if (monthNum < todayJ.jm) year += 1; const g = jalaliToGregorian(year, monthNum, day); targetDate = new Date(Date.UTC(g.gy, g.gm - 1, g.gd)); break; } } }
  if (!targetDate && timeMatch) targetDate = new Date(today);
  if (!targetDate) return null;
  return `${targetDate.getUTCFullYear()}-${String(targetDate.getUTCMonth()+1).padStart(2,"0")}-${String(targetDate.getUTCDate()).padStart(2,"0")}T${String(hour).padStart(2,"0")}:${String(minute).padStart(2,"0")}:00+03:30`;
}

async function convertPersianDateForAI(env, args) {
  const text = args.persianText || args.text || "";
  const iso = parsePersianDate(text);
  if (!iso) return { ok: false, error: "نتوانستم تاریخ رو تشخیص بدم" };
  const d = new Date(iso);
  const faDate = d.toLocaleString("fa-IR", { weekday: "long", year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Tehran' });
  return { ok: true, iso, faDate };
}

async function calculateMortgageForAI(env, args) {
  try {
    const amountMillion = parseFloat(args.loanAmount || 0);
    const years = parseInt(args.years || 10);
    const rate = parseFloat(args.rate || 23);
    if (!amountMillion || amountMillion <= 0) return { ok: false, error: "مبلغ وام نامعتبر" };
    const principal = amountMillion * 1000000;
    const monthlyRate = rate / 100 / 12;
    const n = years * 12;
    let monthlyPayment = 0;
    if (monthlyRate > 0) { monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1); } else { monthlyPayment = principal / n; }
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - principal;
    const toMillion = (v) => Math.round(v / 1000000 * 10) / 10;
    return { ok: true, loanAmountMillion: amountMillion, years, rate, monthlyPaymentMillion: toMillion(monthlyPayment), totalPaymentMillion: toMillion(totalPayment), totalInterestMillion: toMillion(totalInterest) };
  } catch (e) { return { ok: false, error: e.message }; }
}

async function estimatePropertyPriceForAI(env, args) {
  try {
    const all = await getListings(env, "all", "0");
    let similar = all;
    if (args.type && args.type !== "any") similar = similar.filter(x => x.type === args.type);
    if (args.propertyType) { const pt = args.propertyType.toLowerCase(); similar = similar.filter(x => (x.propertyType || "").toLowerCase().includes(pt)); }
    if (args.location) { const lc = args.location.toLowerCase(); similar = similar.filter(x => ((x.location_short || x.location) || "").toLowerCase().includes(lc)); }
    if (args.minSize || args.maxSize) { similar = similar.filter(x => { const m = (x.size || "").match(/(\d+)/); if (!m) return false; const sz = parseInt(m[1]); if (args.minSize && sz < args.minSize) return false; if (args.maxSize && sz > args.maxSize) return false; return true; }); }
    if (similar.length < 3) return { ok: false, error: "ملک مشابه کافی نیست" };
    const prices = [];
    for (const x of similar) { const sizeMatch = (x.size || "").match(/(\d+)/); if (!sizeMatch) continue; const size = parseInt(sizeMatch[1]); const p = priceToNumber(x.price || ""); if (p > 0 && size > 0) prices.push(p / size); }
    if (prices.length === 0) return { ok: false, error: "قیمت‌ها قابل محاسبه نبود" };
    const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
    const mn = Math.min(...prices); const mx = Math.max(...prices);
    const result = { ok: true, count: similar.length, avgPricePerSqmMillion: Math.round(avg * 10) / 10, minPricePerSqmMillion: Math.round(mn * 10) / 10, maxPricePerSqmMillion: Math.round(mx * 10) / 10 };
    if (args.size) result.estimatedTotalMillion = Math.round(avg * args.size);
    return result;
  } catch (e) { return { ok: false, error: e.message }; }
}

// ═══════════════════════════════════════════════════════════
// 🤝 NEGOTIATION
// ═══════════════════════════════════════════════════════════

async function negotiatePriceForAI(env, args, chatId, userName, userUsername) {
  try {
    const adminId = await getAdminChatId(env);
    if (!adminId) return { ok: false, error: "مدیر در دسترس نیست." };
    const ts = Date.now();
    const negKey = `neg_${ts}`;
    await env.DATA.put(negKey, JSON.stringify({ chatId, userName, userUsername, propertyKey: args.propertyKey || "", propertyDesc: args.propertyDesc || "", originalPrice: args.originalPrice || "", customerOffer: args.customerOffer || "", customerNote: args.customerNote || "", status: "pending", createdAt: new Date().toISOString() }), { expirationTtl: 7 * 24 * 3600 });
    let msg = `🤝 <b>پیشنهاد مذاکره جدید!</b>\n\n👤 <b>مشتری:</b> ${userName}\n📛 <b>یوزرنیم:</b> @${userUsername}\n🆔 <b>چت:</b> ${chatId}\n\n`;
    if (args.propertyDesc) msg += `🏠 <b>ملک:</b> ${args.propertyDesc}\n`;
    if (args.originalPrice) msg += `💰 <b>قیمت اعلامی:</b> ${args.originalPrice}\n`;
    msg += `\n💬 <b>پیشنهاد مشتری:</b> ${args.customerOffer}\n`;
    if (args.customerNote) msg += `📝 <b>توضیحات:</b> ${args.customerNote}\n`;
    msg += `\n👆 یه گزینه انتخاب کن:`;
    await sendToTelegram(env, "sendMessage", { chat_id: adminId, text: msg, parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "✅ قبول", callback_data: `neg_accept_${negKey}` }, { text: "❌ رد", callback_data: `neg_reject_${negKey}` }], [{ text: "💬 پیام خودم", callback_data: `neg_custom_${negKey}` }]] } });
    return { ok: true, message: "پیشنهادت به مدیر رسید." };
  } catch (e) { return { ok: false, error: e.message }; }
}

// ═══════════════════════════════════════════════════════════
// 📢 SMART AUTO-NOTIFY
// ═══════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════
// ⚖️ COMPARE SYSTEM
// ═══════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════
// 👀 VIEWER PROFILE (ذخیره سلیقه مشتری)
// ═══════════════════════════════════════════════════════════

async function trackViewerProfile(env, chatId, userName, userUsername, listing) {
  try {
    let profile = await env.DATA.get(`viewer_${chatId}`, "json") || { chatId, userName, userUsername, views: [] };
    profile.userName = userName || profile.userName || "کاربر";
    profile.userUsername = userUsername || profile.userUsername || "ندارد";
    profile.views = profile.views || [];
    // پاک کردن تکراری‌ها
    profile.views = profile.views.filter(v => v.key !== listing._key);
    // اضافه کردن بازدید جدید
    const sizeMatch = (listing.size || "").match(/\d+/);
    profile.views.push({
      key: listing._key,
      type: listing.type || "",
      propertyType: listing.propertyType || "",
      location: sanitizeLocation(listing.location_short || listing.location || "") || "",
      size: sizeMatch ? parseInt(sizeMatch[0]) : 0,
      price: priceToNumber(listing.price || ""),
      ts: Date.now()
    });
    // فقط ۲۰ بازدید آخر
    if (profile.views.length > 20) profile.views = profile.views.slice(-20);
    profile.updatedAt = Date.now();
    await env.DATA.put(`viewer_${chatId}`, JSON.stringify(profile), { expirationTtl: 60 * 24 * 3600 });
  } catch (e) {}
}

async function getViewerProfile(env, chatId) {
  try {
    return await env.DATA.get(`viewer_${chatId}`, "json");
  } catch (e) { return null; }
}

// 🎯 محاسبه امتیاز تطبیق سلیقه با آگهی جدید
function calculateViewerScore(profile, listing) {
  if (!profile || !profile.views || profile.views.length === 0) return { score: 0, reasons: [] };
  const views = profile.views;
  const listingType = listing.type || "";
  const listingLoc = sanitizeLocation(listing.location_short || listing.location || "").toLowerCase();
  const listingPt = (listing.propertyType || "").toLowerCase();
  const sizeMatch = (listing.size || "").match(/\d+/);
  const listingSize = sizeMatch ? parseInt(sizeMatch[0]) : 0;
  const listingPrice = priceToNumber(listing.price || "");
  
  let score = 0;
  let reasons = [];
  
  // ۱. نوع معامله (فروش/رهن)
  const typeViews = views.filter(v => v.type === listingType).length;
  if (typeViews >= 2) score += 2;
  
  // ۲. محله (حداقل ۲ بار دیده باشه)
  if (listingLoc) {
    const locViews = views.filter(v => v.location && v.location.toLowerCase().includes(listingLoc)).length;
    if (locViews >= 2) { score += 4; reasons.push(`محله ${listingLoc}`); }
    else if (locViews === 1) score += 1;
  }
  
  // ۳. نوع ملک (حداقل ۲ بار دیده باشه)
  if (listingPt) {
    const ptViews = views.filter(v => v.propertyType && v.propertyType.toLowerCase().includes(listingPt)).length;
    if (ptViews >= 2) { score += 4; reasons.push(listing.propertyType); }
    else if (ptViews === 1) score += 1;
  }
  
  // ۴. متراژ مشابه (تا ۲۰٪ اختلاف)
  if (listingSize > 0) {
    const sizeViews = views.filter(v => v.size > 0 && Math.abs(v.size - listingSize) / listingSize <= 0.2).length;
    if (sizeViews >= 2) { score += 3; reasons.push(`متراژ حدود ${listingSize} متر`); }
  }
  
  // ۵. قیمت مشابه (تا ۲۰٪ اختلاف)
  if (listingPrice > 0) {
    const priceViews = views.filter(v => v.price > 0 && Math.abs(v.price - listingPrice) / listingPrice <= 0.2).length;
    if (priceViews >= 2) score += 2;
  }
  
  return { score, reasons };
}

async function getCompareList(env, chatId) {
  try {
    const cmp = await env.DATA.get(`compare_${chatId}`, "json");
    return Array.isArray(cmp) ? cmp : [];
  } catch (e) { return []; }
}

async function addToCompare(env, chatId, listingKey) {
  try {
    let cmp = await getCompareList(env, chatId);
    if (cmp.includes(listingKey)) return { ok: false, msg: "قبلاً اضافه شده" };
    if (cmp.length >= 2) cmp = cmp.slice(1);
    cmp.push(listingKey);
    await env.DATA.put(`compare_${chatId}`, JSON.stringify(cmp), { expirationTtl: 7 * 24 * 3600 });
    return { ok: true, count: cmp.length, msg: `به مقایسه اضافه شد (${cmp.length}/۲)` };
  } catch (e) { return { ok: false, msg: "خطا" }; }
}

async function clearCompare(env, chatId) {
  try { await env.DATA.delete(`compare_${chatId}`); } catch (e) {}
}

async function showCompare(env, chatId, lang) {
  const t = TX[lang] || TX.fa;
  const cmp = await getCompareList(env, chatId);
  if (cmp.length === 0) {
    await sendMsg(env, chatId, "⚖️ <b>مقایسه ملک‌ها</b>\n\nهنوز ملکی برای مقایسه انتخاب نکردی.\n\nوقتی یه ملک دیدی، دکمه «⚖️ مقایسه» رو بزن. برای مقایسه به ۲ ملک نیازه.", kbMain(lang));
    return;
  }
  if (cmp.length === 1) {
    const l1 = await env.DATA.get(cmp[0], "json");
    await sendMsg(env, chatId, `⚖️ <b>مقایسه</b>\n\nتا الان <b>۱ ملک</b> انتخاب کردی. برای دیدن مقایسه، یه ملک دیگه هم اضافه کن.`, kbMain(lang));
    if (l1) await showListing(env, chatId, lang, l1, 1, cmp[0]);
    return;
  }
  const l1 = await env.DATA.get(cmp[0], "json");
  const l2 = await env.DATA.get(cmp[1], "json");
  if (!l1 || !l2) { await sendMsg(env, chatId, "⚠️ یکی از ملک‌ها پیدا نشد.", kbMain(lang)); return; }

  const typeL1 = l1.type === "sell" ? "💰 فروش" : "🔑 رهن";
  const typeL2 = l2.type === "sell" ? "💰 فروش" : "🔑 رهن";
  const loc1 = sanitizeLocation(l1.location_short || l1.location || "") || "-";
  const loc2 = sanitizeLocation(l2.location_short || l2.location || "") || "-";

  let msg = `⚖️ <b>مقایسه دو ملک</b>\n\n`;
  msg += `━━━━━━━━━━━━━━\n\n`;
  msg += `📌 <b>مشخصه</b> | <b>ملک ۱</b> | <b>ملک ۲</b>\n`;
  msg += `━━━━━━━━━━━━━━\n`;
  msg += `🏘️ <b>نوع</b>: ${l1.propertyType || "-"} | ${l2.propertyType || "-"}\n`;
  msg += `💰 <b>معامله</b>: ${typeL1} | ${typeL2}\n`;
  msg += `📐 <b>متراژ</b>: ${l1.size || "-"} | ${l2.size || "-"}\n`;
  msg += `📍 <b>محله</b>: ${loc1} | ${loc2}\n`;
  if (l1.year_built || l2.year_built) msg += `🏗️ <b>سال ساخت</b>: ${l1.year_built || "-"} | ${l2.year_built || "-"}\n`;
  if (l1.rooms || l2.rooms) msg += `🛏️ <b>اتاق</b>: ${l1.rooms || "-"} | ${l2.rooms || "-"}\n`;
  if (l1.floor || l2.floor) msg += `🏢 <b>طبقه</b>: ${l1.floor || "-"} | ${l2.floor || "-"}\n`;
  if (l1.amenities || l2.amenities) msg += `✨ <b>امکانات</b>: ${l1.amenities || "-"} | ${l2.amenities || "-"}\n`;
  if (l1.document || l2.document) msg += `📄 <b>سند</b>: ${l1.document || "-"} | ${l2.document || "-"}\n`;
  msg += `💵 <b>قیمت</b>: ${l1.price || "-"} | ${l2.price || "-"}\n`;
  if (l1.price_per_meter || l2.price_per_meter) msg += `📊 <b>هر متر</b>: ${l1.price_per_meter || "-"} | ${l2.price_per_meter || "-"}\n`;
  msg += `\n━━━━━━━━━━━━━━\n`;
  msg += `💡 <b>کدوم رو بیشتر پسندیدی؟</b>`;

  const kbCmp = {
    inline_keyboard: [
      [{ text: `📩 درخواست ملک ۱`, callback_data: `req_${cmp[0]}` }],
      [{ text: `📩 درخواست ملک ۲`, callback_data: `req_${cmp[1]}` }],
      [{ text: "🗑️ پاک کردن مقایسه", callback_data: "cmp_clear" }]
    ]
  };
  await sendMsg(env, chatId, msg, kbCmp);
}

// ═══════════════════════════════════════════════════════════

async function notifyMatchingCustomers(env, listing) {
  try {
    const adminId = await getAdminChatId(env);
    const listingType = listing.type;
    const listingLoc = ((listing.location_short || listing.location) || "").toLowerCase().trim();
    const listingPt = (listing.propertyType || "").toLowerCase().trim();
    const listingPrice = priceToNumber(listing.price || "");
    const listingSizeMatch = (listing.size || "").match(/\d+/);
    const listingSize = listingSizeMatch ? parseInt(listingSizeMatch[0]) : 0;
    
    let notifiedChatIds = new Set();
    let matchedNames = [];
    
    // ═══ بخش ۱: مشتریانی که فرم فایل‌یابی پر کردن ═══
    const frList = await env.DATA.list({ prefix: "file_req_" });
    for (const k of frList.keys) {
      try {
        const fr = await env.DATA.get(k.name, "json");
        if (!fr || !fr.chatId) continue;
        if (fr.notified) continue;
        if (notifiedChatIds.has(String(fr.chatId))) continue;
        const frText = ((fr.details || "")).toLowerCase();
        let score = 0;
        if (listingLoc && frText.includes(listingLoc)) score += 4;
        if (listingPt && frText.includes(listingPt)) score += 4;
        if (listingType === "sell" && /(فروش|خرید|بخرم|میخرم|خریدار)/.test(frText)) score += 2;
        else if (listingType === "rent" && /(اجاره|رهن)/.test(frText)) score += 2;
        if (listingPrice > 0) { 
          const budgetMatch = frText.match(/(\d+(?:\.\d+)?)\s*(میلیارد|میلیون)/); 
          if (budgetMatch) { 
            let budget = parseFloat(budgetMatch[1]); 
            if (/میلیارد/.test(budgetMatch[2])) budget *= 1000; 
            const ratio = listingPrice / budget; 
            if (ratio <= 1.0) score += 3; 
            else if (ratio <= 1.15) score += 1; 
          } 
        }
        if (score >= 6) {
          await sendSmartListingNotification(env, fr.chatId, listing, "فایل‌یابی");
          fr.notified = true; 
          fr.notifiedListingKey = listing._key || ""; 
          await env.DATA.put(k.name, JSON.stringify(fr));
          notifiedChatIds.add(String(fr.chatId));
          matchedNames.push(fr.userName || fr.userUsername || "مشتری");
        }
      } catch (e) {}
    }
    
    // ═══ بخش ۲: مشتریانی که آگهی‌های مشابه رو زیاد دیدن ═══
    const viewerList = await env.DATA.list({ prefix: "viewer_" });
    for (const k of viewerList.keys) {
      try {
        const profile = await env.DATA.get(k.name, "json");
        if (!profile || !profile.chatId) continue;
        if (notifiedChatIds.has(String(profile.chatId))) continue;
        const result = calculateViewerScore(profile, listing);
        if (result.score >= 6) {
          await sendSmartListingNotification(env, profile.chatId, listing, "سلیقه", result.reasons);
          notifiedChatIds.add(String(profile.chatId));
          matchedNames.push(profile.userName || profile.userUsername || "مشتری");
        }
      } catch (e) {}
    }
    
    // ═══ گزارش به ادمین ═══
    if (adminId && notifiedChatIds.size > 0) {
      let report = `📢 <b>اعلان خودکار هوشمند ارسال شد</b>\n\n`;
      report += `🏘️ ملک: ${listing.propertyType || "-"} ${listing.size || ""}\n`;
      report += `📍 ${sanitizeLocation(listing.location_short || listing.location || "") || "-"}\n`;
      report += `💰 ${listing.price || "-"}\n\n`;
      report += `✅ به <b>${notifiedChatIds.size}</b> مشتری پیام دادم:\n`;
      report += matchedNames.slice(0, 10).map(n => "• " + n).join("\n");
      if (matchedNames.length > 10) report += `\n... و ${matchedNames.length - 10} نفر دیگه`;
      await sendToTelegram(env, "sendMessage", { chat_id: adminId, text: report, parse_mode: "HTML" });
    }
  } catch (e) {}
}

// 🎯 ارسال پیام هوشمند و شخصی‌سازی‌شده به مشتری
async function sendSmartListingNotification(env, chatId, listing, reason, reasonsList) {
  try {
    const listingLoc = sanitizeLocation(listing.location_short || listing.location || "") || "-";
    let msg = `🎯 <b>خبر خوب!</b>\n\n`;
    msg += `یه ملک جدید پیدا شد که با سلیقه‌ت هماهنگه 👇\n\n`;
    msg += `🏘️ ${listing.propertyType || "ملک"} ${listing.size || ""}\n`;
    msg += `📍 محله: ${listingLoc}\n`;
    if (listing.year_built) msg += `🏗️ سال ساخت: ${listing.year_built}\n`;
    if (listing.rooms) msg += `🛏️ اتاق: ${listing.rooms}\n`;
    if (listing.floor) msg += `🏢 طبقه: ${listing.floor}\n`;
    if (listing.amenities) msg += `✨ امکانات: ${listing.amenities}\n`;
    if (listing.document) msg += `📄 سند: ${listing.document}\n`;
    if (listing.price) msg += `💰 قیمت: ${listing.price}\n`;
    if (listing.price_per_meter) msg += `📊 هر متر: ${listing.price_per_meter}\n`;
    if (listing.extra_notes) {
      const cleanNotes = masterSanitize(listing.extra_notes);
      if (cleanNotes && cleanNotes !== "-") msg += `📝 توضیحات: ${cleanNotes}\n`;
    }
    
    // 🎯 توضیح چرا این ملک مناسب مشتریه
    if (reason === "فایل‌یابی") {
      msg += `\n💡 این ملک با درخواستی که قبلاً ثبت کرده بودی هماهنگه.`;
    } else if (reasonsList && reasonsList.length > 0) {
      msg += `\n💡 این ملک با <b>${reasonsList.join("، ")}</b> که قبلاً دیده بودی مشابهه.`;
    }
    
    msg += `\n\n📩 برای اطلاعات بیشتر و هماهنگی بازدید، دکمه زیر رو بزن.`;
    
    const kb = {
      inline_keyboard: [
        [{ text: "📩 درخواست بازدید", callback_data: `req_${listing._key || ""}` }],
        [{ text: "❤️ ذخیره", callback_data: `fav_add_${listing._key || ""}` }, { text: "⚖️ مقایسه", callback_data: `cmp_add_${listing._key || ""}` }]
      ]
    };
    
    await sendToTelegram(env, "sendMessage", { chat_id: chatId, text: msg, parse_mode: "HTML", reply_markup: kb });
  } catch (e) {}
}

// ═══════════════════════════════════════════════════════════
// 🛡️ UTF-8 CLEANER
// ═══════════════════════════════════════════════════════════

function utf8Clean(text) {
  if (!text) return "";
  let s = String(text);
  s = s.replace(/\u0000/g, "").replace(/\uFEFF/g, "");
  s = s.replace(/[\u0001-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
  s = s.replace(/[\u200B-\u200F\u2028-\u202F\u2060-\u206F]/g, "");
  let out = "";
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF) { const n = s.charCodeAt(i + 1); if (n >= 0xDC00 && n <= 0xDFFF) { out += s[i] + s[i + 1]; i++; } }
    else if (c >= 0xDC00 && c <= 0xDFFF) {}
    else { out += s[i]; }
  }
  try { const bytes = new TextEncoder().encode(out); out = new TextDecoder("utf-8", { fatal: false, ignoreBOM: true }).decode(bytes); out = out.replace(/\uFFFD/g, ""); } catch (e) {}
  return out.trim();
}

// ═══════════════════════════════════════════════════════════
// ❤️ FAVORITES SYSTEM
// ═══════════════════════════════════════════════════════════

async function getFavorites(env, chatId) {
  try {
    const favs = await env.DATA.get(`favorites_${chatId}`, "json");
    return Array.isArray(favs) ? favs : [];
  } catch (e) { return []; }
}

async function saveFavorite(env, chatId, listingKey) {
  try {
    const favs = await getFavorites(env, chatId);
    if (!favs.includes(listingKey)) {
      favs.push(listingKey);
      await env.DATA.put(`favorites_${chatId}`, JSON.stringify(favs.slice(-20)), { expirationTtl: 30 * 24 * 3600 });
      return true;
    }
    return false;
  } catch (e) { return false; }
}

async function removeFavorite(env, chatId, listingKey) {
  try {
    let favs = await getFavorites(env, chatId);
    favs = favs.filter(k => k !== listingKey);
    await env.DATA.put(`favorites_${chatId}`, JSON.stringify(favs), { expirationTtl: 30 * 24 * 3600 });
    return true;
  } catch (e) { return false; }
}

async function showFavorites(env, chatId, lang) {
  const t = TX[lang] || TX.fa;
  const favs = await getFavorites(env, chatId);
  if (favs.length === 0) {
    await sendMsg(env, chatId, "❤️ <b>علاقه‌مندی‌های شما</b>\n\nهنوز هیچ ملکی رو ذخیره نکردی.\n\nوقتی یه ملک پسندیدی، دکمه «❤️ ذخیره» رو بزن تا اینجا ذخیره بشه.", kbMain(lang));
    return;
  }
  await sendMsg(env, chatId, `❤️ <b>علاقه‌مندی‌های شما (${favs.length} ملک)</b>\n\nدر حال نمایش...`, kbMain(lang));
  let i = 0;
  for (const key of favs.slice(-10)) {
    try {
      const listing = await env.DATA.get(key, "json");
      if (listing) { i++; await showListing(env, chatId, lang, listing, i, key); }
    } catch (e) {}
  }
  if (favs.length > 10) await sendMsg(env, chatId, `... و ${favs.length - 10} ملک دیگه`, null);
}

// ⏸️ پایان پارت ۱ — بگو «پارت ۲»// ═══════════════════════════════════════════════════════════
// 🛡️ MASTER SHIELD
// ═══════════════════════════════════════════════════════════

function wordsToNumbers(text) {
  if (!text) return text;
  let r = text;
  const emojiMap = {"0️⃣":"0","1️⃣":"1","2️⃣":"2","3️⃣":"3","4️⃣":"4","5️⃣":"5","6️⃣":"6","7️⃣":"7","8️⃣":"8","9️⃣":"9"};
  for (const [k, v] of Object.entries(emojiMap)) r = r.split(k).join(v);
  r = r.replace(/[۰-۹]/g, d => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));
  r = r.replace(/[٠-٩]/g, d => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
  const numMap = { "صفر":"0","یک":"1","دو":"2","سه":"3","چهار":"4","پنج":"5","شش":"6","شیش":"6","هفت":"7","هشت":"8","نه":"9","نُه":"9","sefr":"0","sifr":"0","yek":"1","do":"2","se":"3","seh":"3","chahar":"4","char":"4","panj":"5","pang":"5","shesh":"6","shish":"6","haft":"7","hasht":"8","noh":"9" };
  const sortedWords = Object.keys(numMap).sort((a, b) => b.length - a.length);
  for (const w of sortedWords) { const re = new RegExp(`(^|[^a-zA-Z\\u0600-\\u06FF])${w}(?![a-zA-Z\\u0600-\\u06FF])`, "gi"); r = r.replace(re, (m, pre) => pre + numMap[w]); }
  return r;
}

function detectSuspiciousNumbers(text) {
  if (!text) return false;
  const normalized = wordsToNumbers(text);
  const digitsOnly = normalized.replace(/[^\d]/g, "");
  const patterns = [/\d{4}[\s\-\.\(\)]*\d{3,4}[\s\-\.\(\)]*\d{3,4}/, /\d{10,}/, /@[a-zA-Z0-9_]{3,}/];
  for (const p of patterns) if (p.test(normalized)) return true;
  if (digitsOnly.length >= 8) return true;
  return false;
}

function masterSanitize(text) {
  if (!text) return text;
  let r = wordsToNumbers(text);
  r = r.replace(/(?:0|98|\+98)?[\s\-\.]*9[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d/g, "");
  r = r.replace(/\d{4}[\s\-\.]+\d{3,4}[\s\-\.]+\d{3,4}/g, "");
  r = r.replace(/\d{8,}/g, "");
  r = r.replace(/@[a-zA-Z0-9_]{3,}/g, "");
  r = r.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "");
  r = r.replace(/(?:https?:\/\/)?(?:t\.me|wa\.me|telegram|whatsapp)[^\s]*/gi, "");
  r = r.replace(/[،,]{3,}/g, "،");
  r = r.replace(/\s{3,}/g, " ");
  r = r.replace(/^\s*[،,.\-\s]+|[،,.\-\s]+$/g, "");
  return r.trim();
}

// ═══════════════════════════════════════════════════════════
// 🗺️ SANITIZE LOCATION
// ═══════════════════════════════════════════════════════════

function sanitizeLocation(location) {
  if (!location) return "";
  let r = wordsToNumbers(location);
  r = r.replace(/\n/g, " ").trim();
  const sorted = [...QOM_NEIGHBORHOODS].sort((a, b) => b.length - a.length);
  for (const hood of sorted) { if (r.includes(hood)) return hood; }
  const parts = r.split(/[،,]+/).map(p => p.trim()).filter(p => p);
  if (parts.length > 0) {
    const addrKeywords = /(?:خیابان|کوچه|پلاک|بن\s*بست|نبش|جنب|روبروی|مقابل|انتهای|ابتدای|فرعی|پ\.|ک\.|خ\.)/i;
    const clean = parts.filter(p => !addrKeywords.test(p) && !/\d{3,}/.test(p));
    r = clean.length > 0 ? clean[0] : parts[0];
  }
  r = r.replace(/(?:خیابان|کوچه|پلاک|نبش|جنب|روبروی|مقابل|بن\s*بست|انتهای|ابتدا|فرعی)[^\s,،.]{0,30}/gi, "");
  r = r.replace(/\d+/g, "");
  r = r.replace(/\s{2,}/g, " ");
  r = r.replace(/^\s*[،,.\s]+|[،,\s]+$/g, "");
  const words = r.split(/\s+/).filter(w => w.length > 0);
  if (words.length > 2) r = words.slice(0, 2).join(" ");
  return r.trim();
}

function cleanFullAddress(addr) {
  if (!addr) return "";
  let r = wordsToNumbers(addr);
  r = r.replace(/\n/g, " ").trim();
  r = r.replace(/(?:0|98|\+98)?[\s\-\.]*9[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d/g, "");
  r = r.replace(/\d{8,}/g, "");
  r = r.replace(/@[a-zA-Z0-9_]{3,}/g, "");
  r = r.replace(/\s{2,}/g, " ");
  r = r.replace(/^\s*[،,.\-\s]+|[،,.\-\s]+$/g, "");
  return r.trim();
}

// ═══════════════════════════════════════════════════════════
// 📢 TELEGRAM SEND (SAFE)
// ═══════════════════════════════════════════════════════════

async function sendToTelegram(env, method, payload) {
  try {
    const jsonStr = JSON.stringify(payload);
    const blob = new Blob([jsonStr], { type: "application/json; charset=utf-8" });
    const r = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/${method}`, { method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" }, body: blob });
    const text = await r.text();
    try { return JSON.parse(text); } catch (e) { console.error("sendToTelegram non-JSON:", method, text.substring(0, 200)); return { ok: false, description: "Non-JSON response" }; }
  } catch (e) { console.error("sendToTelegram failed:", method, e.message); return { ok: false, description: "Fetch failed: " + e.message }; }
}

// ═══════════════════════════════════════════════════════════
// 📢 POST TO CHANNEL (با پشتیبانی از آگهی همکار)
// ═══════════════════════════════════════════════════════════

async function postToChannelWithAI(env, listing, listingKey) {
  const channelId = await getChannelId(env);
  if (!channelId) return { ok: false, error: "CHANNEL_ID تنظیم نشده" };
  let cleanNotes = listing.extra_notes || "";
  if (cleanNotes && detectSuspiciousNumbers(cleanNotes)) { cleanNotes = masterSanitize(cleanNotes); if (detectSuspiciousNumbers(cleanNotes)) cleanNotes = ""; }
  const cleanLoc = sanitizeLocation(listing.location || "");
  let aiDesc = "";
  try {
    const prompt = `یه جمله کوتاه جذاب (حداکثر ۱۵ کلمه) برای توضیحات این ملک بنویس.\nنوع: ${listing.propertyType || "-"}, متراژ: ${listing.size || "-"}, محله: ${cleanLoc || "-"}, قیمت: ${listing.price || "-"}\nقوانین: بدون شماره، آدرس دقیق، لینک. فقط یه جمله.`;
    const gr = await fetch("https://api.groq.com/openai/v1/chat/completions", { method: "POST", headers: { "Authorization": `Bearer ${env.GROQ_API_KEY}`, "Content-Type": "application/json; charset=utf-8" }, body: JSON.stringify({ model: "openai/gpt-oss-120b", messages: [{ role: "user", content: prompt }], temperature: 0.7, max_tokens: 80 }) });
    
    if (gr.ok) {
      const gd = await gr.json();
      const msgContent = (gd.choices && gd.choices[0] && gd.choices[0].message && gd.choices[0].message.content) ? gd.choices[0].message.content : "";
      if (msgContent) {
        aiDesc = msgContent.trim().replace(/^["«»]+|["«»]+$/g, "");
        if (detectSuspiciousNumbers(aiDesc)) aiDesc = masterSanitize(aiDesc);
      }
    }
  } catch (e) { aiDesc = ""; }
  const typeLabel = listing.type === "rent" ? "🔑 رهن و اجاره" : "💰 فروش";
  const isFeatured = listing.featured && listing.featuredUntil && listing.featuredUntil > Date.now();
  const isColleagueFile = listing.source === "colleague" && listing.colleagueAgency;
  let postText = "";
  if (isColleagueFile) {
    postText += `🤝 <b>فایل همکار</b>\n`;
    postText += `🏢 از طرف: <b>${listing.colleagueAgency}</b>\n`;
    postText += `━━━━━━━━━━━━━━\n\n`;
  }
  if (isFeatured) postText += `💎 <b>آگهی ویژه</b> 💎\n`;
postText += `🏘️ ${listing.propertyType || "ملک"}\n${typeLabel}\n━━━━━━━━━━━━━━\n\n`;
  if (cleanLoc) postText += `📍 محله: ${cleanLoc}\n`;
  if (listing.size) postText += `📐 متراژ: ${listing.size}\n`;
  if (listing.year_built) postText += `🏗️ سال ساخت: ${listing.year_built}\n`;
  if (listing.rooms) postText += `🛏️ تعداد اتاق: ${listing.rooms}\n`;
  if (listing.floor) postText += `🏢 طبقه: ${listing.floor}\n`;
  if (listing.amenities) postText += `✨ امکانات: ${listing.amenities}\n`;
  if (listing.document) postText += `📄 سند: ${listing.document}\n`;
  if (listing.price) postText += `💰 قیمت: ${listing.price}\n`;
  if (listing.price_per_meter && listing.type === "sell") postText += `📊 هر متر: ${listing.price_per_meter}\n`;
  if (cleanNotes) postText += `📝 ویژگی‌ها: ${cleanNotes}\n`;
  if (aiDesc) postText += `\n💬 ${aiDesc}\n`;
  if (detectSuspiciousNumbers(postText)) postText = masterSanitize(postText);
  postText = utf8Clean(postText);
  postText += `\n━━━━━━━━━━━━━━\n`;
  postText += `🌐 <a href="${SITE_MAIN}">مشاهده سایت املاک نعمتی</a>\n`;
  postText += `🤖 <a href="${BOT_URL}">مشاوره با ربات الی</a>`;
  try { const footer = await env.DATA.get("channel_footer"); if (footer && footer.trim()) { const cleanFooter = utf8Clean(footer); if (cleanFooter) postText += `\n\n━━━━━━━━━━━━━━\n${cleanFooter}`; } } catch (e) {}
  if (listing.mediaFiles && listing.mediaFiles.length > 0) {
    const first = listing.mediaFiles[0];
    try {
      let d = null;
      if (first.type === "photo") { d = await sendToTelegram(env, "sendPhoto", { chat_id: channelId, photo: first.fileId, caption: postText, parse_mode: "HTML" }); if (!d.ok) d = await sendToTelegram(env, "sendPhoto", { chat_id: channelId, photo: first.fileId, caption: postText }); }
      else if (first.type === "video") { d = await sendToTelegram(env, "sendVideo", { chat_id: channelId, video: first.fileId, caption: postText, parse_mode: "HTML" }); if (!d.ok) d = await sendToTelegram(env, "sendVideo", { chat_id: channelId, video: first.fileId, caption: postText }); }
      if (d && d.ok) { for (let i = 1; i < listing.mediaFiles.length && i < 10; i++) { const m = listing.mediaFiles[i]; try { if (m.type === "photo") await sendToTelegram(env, "sendPhoto", { chat_id: channelId, photo: m.fileId }); else if (m.type === "video") await sendToTelegram(env, "sendVideo", { chat_id: channelId, video: m.fileId }); } catch (e) {} } return { ok: true, postText, messageId: d.result.message_id }; }
    } catch (e) {}
  }
  if (listing.mediaFileId && listing.mediaType === "photo") { try { let data = await sendToTelegram(env, "sendPhoto", { chat_id: channelId, photo: listing.mediaFileId, caption: postText, parse_mode: "HTML" }); if (!data.ok) data = await sendToTelegram(env, "sendPhoto", { chat_id: channelId, photo: listing.mediaFileId, caption: postText }); if (data.ok) return { ok: true, postText, messageId: data.result.message_id }; } catch (e) {} }
  if (listing.mediaFileId && listing.mediaType === "video") { try { let data = await sendToTelegram(env, "sendVideo", { chat_id: channelId, video: listing.mediaFileId, caption: postText, parse_mode: "HTML" }); if (!data.ok) data = await sendToTelegram(env, "sendVideo", { chat_id: channelId, video: listing.mediaFileId, caption: postText }); if (data.ok) return { ok: true, postText, messageId: data.result.message_id }; } catch (e) {} }
  try { let d = await sendToTelegram(env, "sendPhoto", { chat_id: channelId, photo: DEFAULT_LISTING_PHOTO, caption: postText, parse_mode: "HTML" }); if (!d.ok) d = await sendToTelegram(env, "sendPhoto", { chat_id: channelId, photo: DEFAULT_LISTING_PHOTO, caption: postText }); if (d.ok) return { ok: true, postText, messageId: d.result.message_id }; } catch (e) {}
  let data = await sendToTelegram(env, "sendMessage", { chat_id: channelId, text: postText, parse_mode: "HTML" });
  if (!data.ok) data = await sendToTelegram(env, "sendMessage", { chat_id: channelId, text: postText });
  if (!data.ok) return { ok: false, error: data.description || "خطای ارسال" };
  return { ok: true, postText, messageId: data.result.message_id };
}

// ═══════════════════════════════════════════════════════════
// 🎭 SYSTEM PROMPT
// ═══════════════════════════════════════════════════════════

function buildSystemPrompt(lang, userName, mode) {
  const name = userName || "کاربر";
  const isConsult = mode === "consult";
  const langMap = { fa: "فارسی", en: "English", ar: "العربية" };
  const currentLang = langMap[lang] || "فارسی";
  const { todayJ, tehranNow } = getTehranToday();
  const dayNames = ["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"];
  const dayName = dayNames[tehranNow.getUTCDay()];
  const faDate = `${todayJ.jy}/${String(todayJ.jm).padStart(2,"0")}/${String(todayJ.jd).padStart(2,"0")}`;

  const baseInfo = `## 📅 امروز: ${dayName} — ${faDate}
## زبان: ${currentLang} | نام کاربر: ${name}

## 🏢 اطلاعات کسب‌وکار:
- **نام:** املاک نعمتی | **شهر:** قم
- **آدرس:** قم، خیابان شهید کلهری، نبش کوچه ۶
- **شماره تماس:** ۰۹۱۲۴۵۲۷۹۰۳
- **ساعات کاری:** شنبه تا پنجشنبه، ۹ صبح تا ۹ شب
- **سایت:** ${SITE_MAIN} | **کانال:** ${CHANNEL_URL}

## 📋 قوانین:
1. هیچ شماره/آیدی توی متن آگهی نره
2. تاریخ شمسی → convert_persian_date
3. وام → calculate_mortgage (نرخ ۲۳٪)
4. تخمین قیمت → estimate_property_price
5. قیمت فقط تومان
6. اگه کاربر گفت همکاره، خوش‌آمد بگو

## 🤝 مذاکره:
مشتری گفت گرونه یا تخفیف خواست → negotiate_price
❌ هرگز خودت تخفیف نده.`;

  const personality = `
## 🎭 شخصیت تو (خیلی مهم!):
**تو "الی" هستی — مشاور املاک گرم، صمیمی، حرفه‌ای و متقاعدکننده. اصلاً رباتیک حرف نزن.**

### ⛔ نکن:
- جواب یک‌خطی نده (مثل "بله"، "موجوده")
- سؤال‌های خشک نپرس
- پشت سر هم بازپرسی نکن

### ✅ بکن:
- **حداقل ۳ تا ۵ خط** جواب بده
- **حس همدلی** بذار: «چه انتخاب خوبی!»، «حق داری»
- **یه سؤال پایانی** بپرس تا گفتگو ادامه پیدا کنه
- **ایموجی به‌جا** استفاده کن
- **اول توضیح، بعد پیشنهاد، بعد سؤال**

### 📝 الگوی جواب:
1. **همدلی:** «چه خوب که...» / «سوال خوبیه»
2. **توضیح:** اطلاعات مفید و کامل
3. **پیشنهاد:** چیزی به نفع مشتری
4. **سؤال:** گفتگو رو ادامه بده

### 💡 مثال:
**مشتری:** «آپارتمان ۱۰۰ متری می‌خوام»
**جواب:** «سلام رفیق! چه انتخاب خوبی 🌹 آپارتمان ۱۰۰ متری توی قم پرطرفداره چون هم فضا کافیه هم قیمتش منطقیه. الان توی محله‌های صفائیه، کلهری و بلوار امین چند تا گزینه داریم. یه سؤال: برای **سکونت** می‌خوای یا **سرمایه‌گذاری**؟ چون بسته به هدفت پیشنهادم فرق می‌کنه 😊»`;

  if (isConsult) {
    return `تو "الی" هستی، مشاور املاک حرفه‌ای املاک نعمتی در قم. مشتری‌ها عاشق حرف زدن با تو هستن چون صمیمی، مهربون و راهنما هستی.

${baseInfo}
${personality}

## 🎯 حالت مشاوره (فعال):
1. **گفتگو رو باز نگه دار** — اصلاً نذار مکالمه تموم بشه
2. **سؤال بپرس:** خرید یا اجاره؟ محله؟ بودجه؟
3. **راهنمایی کن** با اطلاعات مفید
4. **پیشنهاد ملک بده** از search_listings با جزئیات کامل
5. **آدرس و شماره** رو یادآوری کن ولی خشک نباش
6. **هرگز آدرس/شماره از خودت نساز!**

## 🎁 نکته طلایی:
اگه مشتری مردد بود، بگو «اگه جای تو بودم، اول یه بازدید حضوری می‌رفتم بعد تصمیم می‌گرفتم. چطوره یه قرار بذاریم؟»

## 📞 اطلاعات تماس (فقط وقتی کاربر خواست):
- آدرس: قم، خیابان شهید کلهری، نبش کوچه ۶
- شماره: ۰۹۱۲۴۵۲۷۹۰۳
- ساعات: شنبه تا پنجشنبه، ۹ صبح تا ۹ شب`;
  }

  return `تو "الی" هستی، دستیار هوشمند املاک نعمتی در قم. یه دوست صمیمی و راهنما.

${baseInfo}
${personality}

## 🎯 نکته:
اگه کاربر سؤال جدی پرسید (ملک، قیمت، خرید)، **حداقل ۳ خط** جواب بده. اگه فقط سلام کرد، گرم و کوتاه.`;
}
const AI_TOOLS = [
  { type: "function", function: { name: "search_listings", description: "جستجوی ملک.", parameters: { type: "object", properties: { type: { type: "string", enum: ["sell", "rent", "any"] }, propertyType: { type: "string" }, location: { type: "string" }, minSize: { type: "number" }, maxSize: { type: "number" }, maxPrice: { type: "number" } }, required: [], additionalProperties: false } }},
  { type: "function", function: { name: "save_file_request", description: "ثبت فایل‌یابی.", parameters: { type: "object", properties: { details: { type: "string" }, customerName: { type: "string" }, customerPhone: { type: "string" } }, required: ["details"], additionalProperties: false } }},
  { type: "function", function: { name: "book_appointment", description: "ثبت قرار بازدید.", parameters: { type: "object", properties: { customerName: { type: "string" }, customerPhone: { type: "string" }, dateISO: { type: "string" }, propertyDesc: { type: "string" }, note: { type: "string" }, type: { type: "string", enum: ["visit", "call", "meeting"] } }, required: ["customerName", "customerPhone", "dateISO"], additionalProperties: false } }},
  { type: "function", function: { name: "convert_persian_date", description: "تبدیل تاریخ شمسی به ISO.", parameters: { type: "object", properties: { persianText: { type: "string" } }, required: ["persianText"], additionalProperties: false } }},
  { type: "function", function: { name: "calculate_mortgage", description: "محاسبه قسط وام. نرخ پیش‌فرض ۲۳٪.", parameters: { type: "object", properties: { loanAmount: { type: "number" }, years: { type: "number" }, rate: { type: "number" } }, required: ["loanAmount"], additionalProperties: false } }},
  { type: "function", function: { name: "estimate_property_price", description: "تخمین قیمت ملک.", parameters: { type: "object", properties: { type: { type: "string", enum: ["sell", "rent", "any"] }, propertyType: { type: "string" }, location: { type: "string" }, minSize: { type: "number" }, maxSize: { type: "number" }, size: { type: "number" } }, required: [], additionalProperties: false } }},
  { type: "function", function: { name: "negotiate_price", description: "وقتی مشتری گفت گرونه، تخفیف میخواد، قیمت پیشنهاد داد، یا درخواست چانه زنی کرد، این ابزار رو صدا بزن.", parameters: { type: "object", properties: { propertyDesc: { type: "string" }, originalPrice: { type: "string" }, customerOffer: { type: "string" }, customerNote: { type: "string" } }, required: ["customerOffer"], additionalProperties: false } }}
];

async function searchListingsForAI(env, args) {
  const clean = {};
  for (const [k, v] of Object.entries(args || {})) { if (v !== null && v !== undefined && v !== "") clean[k] = v; }
  args = clean;
  const all = await getListings(env, "all", "0");
  let f = all;
  if (args.type && args.type !== "any") f = f.filter(x => x.type === args.type);
  if (args.propertyType) { const pt = args.propertyType.toLowerCase(); f = f.filter(x => (x.propertyType || "").toLowerCase().includes(pt)); }
  if (args.location) { const lc = args.location.toLowerCase(); f = f.filter(x => ((x.location_short || x.location) || "").toLowerCase().includes(lc)); }
  if (args.minSize || args.maxSize) { f = f.filter(x => { const m = (x.size || "").match(/(\d+)/); if (!m) return false; const sz = parseInt(m[1]); if (args.minSize && sz < args.minSize) return false; if (args.maxSize && sz > args.maxSize) return false; return true; }); }
  if (args.maxPrice) { f = f.filter(x => { const p = priceToNumber(x.price || ""); return p > 0 && p <= args.maxPrice; }); }
  const results = f.slice(0, 5).map(x => ({ key: x._key, type: x.type === "rent" ? "اجاره" : "فروش", propertyType: x.propertyType || "-", size: x.size || "-", year_built: x.year_built || "-", rooms: x.rooms || "-", floor: x.floor || "-", amenities: x.amenities || "-", location: (x.location_short || x.location) || "-", price: x.price || "-", price_per_meter: x.price_per_meter || "-", document: x.document || "-", notes: x.extra_notes || "" }));
  return { total: f.length, shown: results.length, listings: results };
}

async function bookAppointmentForAI(env, args, chatId, userName, userUsername) {
  try {
    const pd = new Date(args.dateISO);
    if (isNaN(pd.getTime())) return { ok: false, error: "تاریخ نامعتبر" };
    const ts = Date.now();
    const appt = { customerKey: "", customerName: args.customerName || userName, customerPhone: args.customerPhone || "", chatId, username: userUsername, date: args.dateISO, duration: 30, type: args.type || "visit", propertyKey: "", propertyDesc: args.propertyDesc || "", note: args.note || "📱 ثبت AI", status: "pending", source: "bot_ai", createdAt: new Date().toISOString() };
    await env.DATA.put(`appt_${ts}`, JSON.stringify(appt));
    const faDate = pd.toLocaleString("fa-IR", { weekday: "long", year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Tehran' });
    const tL = { visit: "🏠 بازدید", call: "📞 تماس", meeting: "🤝 جلسه" };
    let msg = `📅 قرار جدید\n\n👤 ${appt.customerName}\n📛 @${userUsername}\n`;
    if (appt.customerPhone) msg += `📞 ${appt.customerPhone}\n`;
    msg += `🎯 ${tL[appt.type] || "🏠 بازدید"}\n🕐 ${faDate}\n`;
    if (appt.propertyDesc) msg += `🏠 ${appt.propertyDesc}\n`;
    msg += `\n🆔 ${chatId}`;
    await notifyAdmin(env, msg);
    return { ok: true, dateFormatted: faDate, faDate };
  } catch (e) { return { ok: false, error: e.message }; }
}

async function saveFileRequestForAI(env, args, chatId, userName, userUsername) {
  try {
    const ts = Date.now();
    await env.DATA.put(`file_req_${ts}`, JSON.stringify({ userName: args.customerName || userName, userUsername, chatId, phone: args.customerPhone || "", details: args.details, source: "bot_ai", date: new Date().toISOString() }));
    let m = `📋 فایل یابی\n\n👤 ${args.customerName || userName}\n📛 @${userUsername}\n🆔 ${chatId}\n`;
    if (args.customerPhone) m += `📞 ${args.customerPhone}\n`;
    m += `\n📝 ${args.details}`;
    await notifyAdmin(env, m);
    return { ok: true };
  } catch (e) { return { ok: false, error: e.message }; }
}
// ═══════════════════════════════════════════════════════════
// ❤️ FAVORITES SYSTEM
// ═══════════════════════════════════════════════════════════



async function callGroq(env, messages, useTools) {
  const body = { model: "openai/gpt-oss-120b", messages, temperature: 0.6, max_tokens: 900 };
  if (useTools) { body.tools = AI_TOOLS; body.tool_choice = "auto"; }
  const r = await fetch("https://api.groq.com/openai/v1/chat/completions", { method: "POST", headers: { "Authorization": `Bearer ${env.GROQ_API_KEY}`, "Content-Type": "application/json; charset=utf-8" }, body: JSON.stringify(body) });
  let data = {};
  try { data = await r.json(); } catch (e) { data = { error: { message: "Non-JSON" } }; }
  return { status: r.status, ok: r.ok, data };
}

async function callGroqWithRetry(env, messages, useTools) {
  const delays = [0, 2000, 4000, 6000, 8000];
  for (let i = 0; i < delays.length; i++) {
    if (delays[i] > 0) await new Promise(r => setTimeout(r, delays[i]));
    let res = await callGroq(env, messages, useTools);
    if (res.status !== 429 && res.status !== 503 && res.status !== 502) return res;
  }
  return { status: 429, ok: false, data: { error: { message: "rate limit" } } };
}

async function aiReply(env, chatId, userText, userLang, userName, userUsername, mode) {
  try {
    const history = await getHistory(env, chatId);
    const normText = wordsToNumbers(userText);
    let messages = [{ role: "system", content: buildSystemPrompt(userLang, userName, mode) }, ...history.map(h => ({ role: h.role, content: h.content })), { role: "user", content: normText }];
    let res = await callGroqWithRetry(env, messages, true);
    if (!res.ok) { if (res.status === 429) return "رفیق الان یه کم سرم شلوغه 🙏 چند لحظه دیگه دوباره بپرس"; return "⚠️ خطای AI"; }
    let gd = res.data;
    let choice = gd.choices && gd.choices[0];
    if (!choice) return "پاسخی دریافت نشد";
    let aiMsg = choice.message;
    let loop = 0;
    while (aiMsg.tool_calls && aiMsg.tool_calls.length > 0 && loop < 3) {
      loop++;
      messages.push(aiMsg);
      for (const tc of aiMsg.tool_calls) {
        let a = {};
        try { a = JSON.parse(tc.function.arguments || "{}"); } catch (e) {}
        let r;
        if (tc.function.name === "search_listings") r = await searchListingsForAI(env, a);
        else if (tc.function.name === "book_appointment") r = await bookAppointmentForAI(env, a, chatId, userName, userUsername);
        else if (tc.function.name === "save_file_request") r = await saveFileRequestForAI(env, a, chatId, userName, userUsername);
        else if (tc.function.name === "convert_persian_date") r = await convertPersianDateForAI(env, a);
        else if (tc.function.name === "calculate_mortgage") r = await calculateMortgageForAI(env, a);
        else if (tc.function.name === "estimate_property_price") r = await estimatePropertyPriceForAI(env, a);
        else if (tc.function.name === "negotiate_price") r = await negotiatePriceForAI(env, a, chatId, userName, userUsername);
        else r = { ok: false, error: "ناشناخته" };
        
    /** @type {any[]} */
let messages = [{ role: "system", content: buildSystemPrompt(userLang, userName, mode) }, ...history.map(h => ({ role: h.role, content: h.content })), { role: "user", content: normText }];    
      }
      res = await callGroqWithRetry(env, messages, true);
      if (!res.ok) return "رفیق الان یه کم سرم شلوغه 🙏 چند لحظه دیگه دوباره بپرس";
      gd = res.data;
      choice = gd.choices && gd.choices[0];
      if (!choice) break;
      aiMsg = choice.message;
    }
    const reply = (aiMsg && aiMsg.content) ? aiMsg.content.trim() : "پاسخی دریافت نشد";
    await addToHistory(env, chatId, "user", userText);
    await addToHistory(env, chatId, "assistant", reply);
    return reply;
  } catch (e) { return "⚠️ خطای ارتباط"; }
}

// ⏸️ پایان پارت ۲ — بگو «پارت ۳»// ═══════════════════════════════════════════════════════════
// ⌨️ KEYBOARDS
// ═══════════════════════════════════════════════════════════

function kbWelcome() { return { inline_keyboard: [[{ text: "شروع - Start - ابدا", callback_data: "start_wizard" }]] }; }
function kbLang() { return { keyboard: [[{ text: "فارسی" }, { text: "عربی" }, { text: "English" }]], resize_keyboard: true, one_time_keyboard: false }; }
function kbMain(lang) {
  const t = TX[lang] || TX.fa;
  const favLabel = lang === "en" ? "❤️ My Favorites" : (lang === "ar" ? "❤️ المفضلة" : "❤️ علاقه‌مندی‌های من");
  const cmpLabel = lang === "en" ? "⚖️ Compare" : (lang === "ar" ? "⚖️ مقارنة" : "⚖️ مقایسه ملک‌ها");
  return { 
    keyboard: [
      [{ text: t.menuViewSell }, { text: t.menuViewRent }],
      [{ text: t.menuListSell }, { text: t.menuListRent }],
      [{ text: t.menuConsult }, { text: favLabel }],
      [{ text: cmpLabel }, { text: t.menuSite }]
    ], 
    resize_keyboard: true, 
    one_time_keyboard: false 
  };
}
function kbSession(lang) { const t = TX[lang] || TX.fa; return { keyboard: [[{ text: t.back }, { text: t.cancel }]], resize_keyboard: true, one_time_keyboard: false }; }
function kbExtra(lang) { const t = TX[lang] || TX.fa; return { keyboard: [[{ text: t.skip }, { text: t.back }, { text: t.cancel }]], resize_keyboard: true, one_time_keyboard: false }; }
function kbBudgetSell(lang) { const t = TX[lang] || TX.fa; return { inline_keyboard: [[{ text: t.filterAll, callback_data: "fshow_sell_all" }], [{ text: t.budgetUnder2, callback_data: "fsell_1" }], [{ text: t.budget2to5, callback_data: "fsell_2" }], [{ text: t.budget5to10, callback_data: "fsell_3" }], [{ text: t.budgetOver10, callback_data: "fsell_4" }]] }; }
function kbBudgetRent(lang) { const t = TX[lang] || TX.fa; return { inline_keyboard: [[{ text: t.filterAll, callback_data: "fshow_rent_all" }], [{ text: t.budgetUnder500Rent, callback_data: "frent_1" }], [{ text: t.budget500to1Rent, callback_data: "frent_2" }], [{ text: t.budget1to2Rent, callback_data: "frent_3" }], [{ text: t.budgetOver2Rent, callback_data: "frent_4" }]] }; }
function kbFileRequest(lang) { const t = TX[lang] || TX.fa; return { inline_keyboard: [[{ text: t.fileReqYes, callback_data: "filereq_yes" }], [{ text: t.fileReqNo, callback_data: "filereq_no" }]] }; }
function kbListingRequest(lang, listingKey) {
  const t = TX[lang] || TX.fa;
  return { 
    inline_keyboard: [
      [{ text: t.requestBtn, callback_data: `req_${listingKey}` }],
      [{ text: "❤️ ذخیره", callback_data: `fav_add_${listingKey}` }, { text: "⚖️ مقایسه", callback_data: `cmp_add_${listingKey}` }],
      [{ text: "🔗 ارسال برای دوست", callback_data: `share_${listingKey}` }]
    ] 
  };
}
function kbReqPhone(lang) { const t = TX[lang] || TX.fa; return { keyboard: [[{ text: t.skip }, { text: t.cancel }]], resize_keyboard: true, one_time_keyboard: false }; }
function kbTimePicker(lang) { const t = TX[lang] || TX.fa; return { inline_keyboard: [[{ text: t.timeSlot1, callback_data: "reqtime_1" }], [{ text: t.timeSlot2, callback_data: "reqtime_2" }], [{ text: t.timeSlot3, callback_data: "reqtime_3" }], [{ text: t.timeCancel, callback_data: "reqtime_cancel" }]] }; }
function kbWebAppMedia(lang) { const t = TX[lang] || TX.fa; return { keyboard: [[{ text: t.webappBtnDone }], [{ text: t.webappBtnSkip }], [{ text: t.cancel }]], resize_keyboard: true, one_time_keyboard: false }; }
function kbWebAppForm(env, lang) { const t = TX[lang] || TX.fa; const baseUrl = (env.WORKER_URL && String(env.WORKER_URL).trim()) || "https://estate-bot-v2.jawadmontazer313.workers.dev"; const webAppUrl = baseUrl.replace(/\/+$/, "") + "/app"; return { inline_keyboard: [[{ text: t.webappBtnForm, web_app: { url: webAppUrl } }]] }; }

function kbRoleSelect() {
  return {
    inline_keyboard: [
      [{ text: "🏢 مشاور املاک", callback_data: "role_colleague" }],
      [{ text: "🏠 خریدار / مستأجر", callback_data: "role_customer" }],
      [{ text: "💰 مالک / فروشنده", callback_data: "role_owner" }]
    ]
  };
}

function kbColleagueForm(env, lang) {
  const t = TX[lang] || TX.fa;
  const baseUrl = (env.WORKER_URL && String(env.WORKER_URL).trim()) || "https://estate-bot-v2.jawadmontazer313.workers.dev";
  const webAppUrl = baseUrl.replace(/\/+$/, "") + "/colleague";
  return { inline_keyboard: [[{ text: t.colleagueBtnForm, web_app: { url: webAppUrl } }]] };
}

// 🎯 منوی همکار
function kbAdminPanel() {
  return {
    inline_keyboard: [
      [{ text: "📊 آمار امروز", callback_data: "admin_today" }, { text: "📈 آمار هفته", callback_data: "admin_week" }],
      [{ text: "📊 آمار کامل", callback_data: "admin_stats" }],
      [{ text: "👥 لیست همکاران", callback_data: "admin_colleagues" }, { text: "📁 همه‌ی فایل‌ها", callback_data: "admin_allfiles" }],
[{ text: "🏘️ آگهی‌های فروش", callback_data: "admin_sell" }, { text: "🔑 آگهی‌های رهن", callback_data: "admin_rent" }],
[{ text: "💎 آگهی‌های ویژه", callback_data: "admin_featured" }],
      [{ text: "📋 فایل یابی‌ها", callback_data: "admin_freqs" }, { text: "📅 قرارها", callback_data: "admin_appts" }],
      [{ text: "🔄 ریست خودم", callback_data: "admin_reset_me" }],
      [{ text: "🌐 سایت", url: SITE_MAIN }, { text: "📢 کانال", url: CHANNEL_URL }]
    ]
  };
}
function kbColleagueMenu(lang) {
  const t = TX[lang] || TX.fa;
  return {
    keyboard: [
      [{ text: t.colleagueBtnNewFile }, { text: t.colleagueBtnMyFiles }],
      [{ text: t.colleagueBtnExchange }, { text: t.colleagueBtnStats }],
      [{ text: t.colleagueBtnProfile }],
      [{ text: t.colleagueBtnBackMenu }]
    ],
    resize_keyboard: true,
    one_time_keyboard: false
  };
}

async function sendMsg(env, chatId, text, kb) {
  try {
    const cleanText = utf8Clean(text);
    const payload = { chat_id: chatId, text: cleanText, parse_mode: "HTML" };
    if (kb) payload.reply_markup = kb;
    const result = await sendToTelegram(env, "sendMessage", payload);
    if (!result.ok && result.description && /can't parse|unsupported start/i.test(result.description)) {
      const fallback = { chat_id: chatId, text: cleanText };
      if (kb) fallback.reply_markup = kb;
      return await sendToTelegram(env, "sendMessage", fallback);
    }
    return result;
  } catch (e) { console.error("sendMsg error:", e.message); return { ok: false }; }
}
async function notifyAdmin(env, text) {
  try { const adminId = await getAdminChatId(env); if (!adminId) return { ok: false }; return await sendToTelegram(env, "sendMessage", { chat_id: adminId, text: utf8Clean(text), parse_mode: "HTML" }); } catch (e) { console.error("notifyAdmin error:", e.message); return { ok: false }; }
}
async function getUserLang(env, chatId) { try { const l = await env.DATA.get(`lang_${chatId}`); return l || "fa"; } catch (e) { return "fa"; } }
async function setUserLang(env, chatId, lang) { try { await env.DATA.put(`lang_${chatId}`, lang); } catch (e) {} }
async function getUserRole(env, chatId) { try { const r = await env.DATA.get(`user_role_${chatId}`); return r || null; } catch (e) { return null; } }
async function setUserRole(env, chatId, role) { try { await env.DATA.put(`user_role_${chatId}`, role); } catch (e) {} }
async function isColleagueRegistered(env, chatId) { try { const c = await env.DATA.get(`colleague_${chatId}`); return !!c; } catch (e) { return false; } }
async function getColleagueData(env, chatId) { try { const c = await env.DATA.get(`colleague_${chatId}`, "json"); return c || null; } catch (e) { return null; } }

function isBack(t) { if (!t) return false; const s = t.trim(); return s === "بازگشت" || s === "Back" || s === "رجوع" || s === "🔙 منوی اصلی"; }
function isCancel(t) { if (!t) return false; const s = t.trim(); return s === "لغو" || s === "Cancel" || s === "إلغاء"; }
function isSkip(t) { if (!t) return false; const s = t.trim().toLowerCase(); return s === "رد کردن" || s === "skip" || s === "تخطي" || s === "ندارم" || s === "no" || s === "لا"; }

function menuKey(text) {
  if (!text) return null;
  const s = text.trim();
  if (s === TX.fa.menuViewSell || s === TX.en.menuViewSell || s === TX.ar.menuViewSell || s === "1" || s === "۱") return "viewSell";
  if (s === TX.fa.menuViewRent || s === TX.en.menuViewRent || s === TX.ar.menuViewRent || s === "2" || s === "۲") return "viewRent";
  if (s === TX.fa.menuListSell || s === TX.en.menuListSell || s === TX.ar.menuListSell || s === "3" || s === "۳") return "listSell";
  if (s === TX.fa.menuListRent || s === TX.en.menuListRent || s === TX.ar.menuListRent || s === "4" || s === "۴") return "listRent";
  if (s === TX.fa.menuConsult || s === TX.en.menuConsult || s === TX.ar.menuConsult || s === "5" || s === "۵") return "consult";
  if (s === TX.fa.menuSite || s === TX.en.menuSite || s === TX.ar.menuSite || s === "6" || s === "۶") return "viewSite";
  // 🎯 منوی همکار
  if (s === TX.fa.colleagueBtnNewFile || s === TX.en.colleagueBtnNewFile) return "colleagueNewFile";
  if (s === TX.fa.colleagueBtnMyFiles || s === TX.en.colleagueBtnMyFiles) return "colleagueMyFiles";
  if (s === TX.fa.colleagueBtnExchange || s === TX.en.colleagueBtnExchange) return "colleagueExchange";
  if (s === TX.fa.colleagueBtnStats || s === TX.en.colleagueBtnStats) return "colleagueStats";
  if (s === TX.fa.colleagueBtnProfile || s === TX.en.colleagueBtnProfile) return "colleagueProfile";
  if (s === TX.fa.colleagueBtnBackMenu || s === TX.en.colleagueBtnBackMenu) return "colleagueBackMenu";
 if (s === "❤️ علاقه‌مندی‌های من" || s === "❤️ My Favorites" || s === "❤️ المفضلة") return "showFavorites";
if (s === "⚖️ مقایسه ملک‌ها" || s === "⚖️ Compare" || s === "⚖️ مقارنة") return "showCompare";
 
return null;

}

function detectLang(text, clientLang) {
  if (clientLang) { const cl = clientLang.toLowerCase(); if (cl.startsWith("ar")) return "ar"; if (cl.startsWith("en")) return "en"; }
  if (!text) return "fa";
  const t = text.trim();
  const latin = (t.match(/[a-zA-Z]/g) || []).length;
  const arRange = (t.match(/[\u0600-\u06FF]/g) || []).length;
  const faSp = (t.match(/[پچژگکی]/g) || []).length;
  const arSp = (t.match(/[أإآؤئةىي]/g) || []).length;
  if (latin > 0 && latin > arRange) return "en";
  if (faSp > 0) return "fa";
  if (arSp > 0) return "ar";
  return "fa";
}

function exPhone(t) { if (!t) return null; let n = wordsToNumbers(t); const m = n.match(/(?:0|98|\+98)?9\d{9}/); if (m) { let p = m[0]; if (p.startsWith("+98")) p = "0" + p.slice(3); else if (p.startsWith("98") && p.length === 12) p = "0" + p.slice(2); else if (p.startsWith("9") && p.length === 10) p = "0" + p; return p; } return null; }
function exSize(t) { if (!t) return null; const n = toEnglishDigits(t); const m = n.match(/(\d+)\s*(?:متر|sqm|meter)/i); return m ? m[1] + " متر" : null; }
function exType(t) {
  if (!t) return null; const s = t.toLowerCase();
  if (/آپارتمان|apartment|flat/.test(s)) return "آپارتمان";
  if (/ویلا|villa/.test(s)) return "ویلا";
  if (/زمین|land/.test(s)) return "زمین";
  if (/مغازه/.test(s)) return "مغازه";
  if (/تجاری|commercial|shop/.test(s)) return "تجاری";
  if (/اداری|office/.test(s)) return "اداری";
  if (/خانه|خونه|house/.test(s)) return "خانه";
  if (/واحد/.test(s)) return "واحد";
  return null;
}
function exDoc(t) {
  if (!t) return null;
  if (/تک\s*برگ|تکبرگ/.test(t)) return "تک برگ";
  if (/قولنامه/.test(t)) return "قولنامه ای";
  if (/مشاع/.test(t)) return "مشاع";
  if (/اوقافی|اوقاف/.test(t)) return "اوقافی";
  if (/سه\s*دنگ|سه\s*دانگ/.test(t)) return "سه دانگ";
  if (/شش\s*دنگ|شش\s*دانگ/.test(t)) return "شش دانگ";
  return null;
}
function exPrice(t) { if (!t) return null; const n = toEnglishDigits(t); const m = n.match(/(\d+(?:\.\d+)?)\s*(میلیارد|میلیون|billion|million)/i); if (m) { const u = /میلیارد|billion/i.test(m[2]) ? "میلیارد تومان" : "میلیون تومان"; return m[1] + " " + u; } return null; }
function exPriceRent(t) {
  if (!t) return null; const n = toEnglishDigits(t);
  let d = "", r = "";
  const dm = n.match(/(\d+(?:\.\d+)?)\s*(میلیون|میلیارد|million|billion)\s*رهن/i);
  if (dm) { const u = /میلیارد|billion/i.test(dm[2]) ? "میلیارد تومان" : "میلیون تومان"; d = dm[1] + " " + u; }
  const rm = n.match(/(\d+(?:\.\d+)?)\s*(میلیون|میلیارد|million|billion)\s*اجاره/i);
  if (rm) { const u = /میلیارد|billion/i.test(rm[2]) ? "میلیارد تومان" : "میلیون تومان"; r = rm[1] + " " + u; }
  if (d && r) return d + " رهن و " + r + " اجاره";
  if (d) return d + " رهن";
  if (r) return r + " اجاره";
  return exPrice(t);
}
function priceToNumber(p) { if (!p) return 0; const n = toEnglishDigits(p); const mm = n.match(/(\d+(?:\.\d+)?)\s*میلیارد/); if (mm) return parseFloat(mm[1]) * 1000; const dm = n.match(/(\d+(?:\.\d+)?)\s*میلیون/); if (dm) return parseFloat(dm[1]); return 0; }
function exAmenities(t) { if (!t) return null; const found = []; if (/آسانسور|اسانسور|elevator/i.test(t)) found.push("آسانسور"); if (/پارکینگ|پارکین|parking/i.test(t)) found.push("پارکینگ"); if (/انباری|انبار|storage/i.test(t)) found.push("انباری"); if (/بالکن|تراس|balcony|terrace/i.test(t)) found.push("بالکن"); return found.length ? found.join(" • ") : null; }
function calculatePricePerMeter(price, size) { const p = priceToNumber(price || ""); const sm = String(size || "").match(/(\d+)/); if (!p || !sm) return ""; const sz = parseInt(sm[1]); if (!sz || sz <= 0) return ""; const ppm = p / sz; if (ppm >= 1000) return (ppm / 1000).toFixed(2) + " میلیارد تومان"; return (Math.round(ppm * 10) / 10) + " میلیون تومان"; }

const SKIPPABLE_FIELDS = ["extra_notes", "amenities", "year_built", "rooms", "floor"];

function emptyCollected(mode) {
  if (mode === "search") return { propertyType: null, size: null, budget: null, location: null, extra_notes: null, customer_phone: null, customer_fullname: null };
  return { propertyType: null, size: null, year_built: null, rooms: null, floor: null, amenities: null, document: null, location: null, price: null, price_per_meter: null, extra_notes: null, customer_phone: null, customer_fullname: null };
}
function fieldOrder(s) {
  if (s.mode === "listing") { if (s.type === "sell") return ["propertyType", "size", "year_built", "rooms", "floor", "amenities", "document", "location", "price", "extra_notes", "customer_phone", "customer_fullname"]; return ["propertyType", "size", "year_built", "rooms", "floor", "amenities", "location", "price", "extra_notes", "customer_phone", "customer_fullname"]; }
  return ["propertyType", "size", "budget", "location", "extra_notes", "customer_phone", "customer_fullname"];
}
function nextField(s) { const fo = fieldOrder(s); for (const f of fo) { if (!s.collected[f]) return f; } return null; }
function questionFor(s, f) {
  const t = TX[s.lang] || TX.fa;
  if (f === "propertyType") return s.type === "sell" ? t.qPropertyTypeSell : t.qPropertyTypeRent;
  if (f === "price" && s.mode === "listing" && s.type === "rent") return t.qPriceRent;
  const map = { size: t.qSize, year_built: t.qYearBuilt, rooms: t.qRooms, floor: t.qFloor, amenities: t.qAmenities, document: t.qDocument, location: t.qLocation, price: t.qPrice, budget: t.qPrice, extra_notes: t.qNotes, customer_phone: t.qPhone, customer_fullname: t.qName };
  return map[f] || "";
}
function summarize(s) {
  const c = s.collected; const l = [];
  if (c.propertyType) l.push("نوع: " + c.propertyType);
  if (c.size) l.push("متراژ: " + c.size);
  if (c.year_built && c.year_built !== "-") l.push("سال ساخت: " + c.year_built);
  if (c.rooms && c.rooms !== "-") l.push("اتاق: " + c.rooms);
  if (c.floor && c.floor !== "-") l.push("طبقه: " + c.floor);
  if (c.amenities && c.amenities !== "-") l.push("امکانات: " + c.amenities);
  if (c.document) l.push("سند: " + c.document);
  if (c.location) l.push("منطقه: " + c.location);
  if (c.price) l.push("قیمت: " + c.price);
  if (c.budget) l.push("بودجه: " + c.budget);
  if (c.extra_notes && c.extra_notes !== "-") l.push("توضیحات: " + c.extra_notes);
  if (c.customer_fullname) l.push("نام: " + c.customer_fullname);
  if (c.customer_phone) l.push("شماره: " + c.customer_phone);
  return l.join("\n");
}

async function finalizeSession(env, session, chatId, username, isAdmin) {
  const c = session.collected;
  const name = c.customer_fullname || c.customer_name || "نامشخص";
  const ts = Date.now();
  const isPublic = isAdmin || session.isAdminListing;
  const prefix = (session.mode === "listing") ? (isPublic ? "pub_listing_" : "listing_") : "search_";
  let finalNotes = c.extra_notes || "";
  if (finalNotes && detectSuspiciousNumbers(finalNotes)) { finalNotes = masterSanitize(finalNotes); if (detectSuspiciousNumbers(finalNotes)) finalNotes = ""; }
  const fullLocation = cleanFullAddress(c.location || "");
  const shortLocation = sanitizeLocation(c.location || "");
  const listingKey = `${prefix}${ts}`;
  const listingData = { mode: session.mode, type: session.type, name, phone: c.customer_phone || "", username, chatId, propertyType: c.propertyType || "", size: c.size || "", year_built: (c.year_built === "-" ? "" : c.year_built) || "", rooms: (c.rooms === "-" ? "" : c.rooms) || "", floor: (c.floor === "-" ? "" : c.floor) || "", amenities: (c.amenities === "-" ? "" : c.amenities) || "", document: c.document || "", location: fullLocation, location_short: shortLocation, price: c.price || "", price_per_meter: session.type === "sell" ? calculatePricePerMeter(c.price || "", c.size || "") : "", budget: c.budget || "", extra_notes: finalNotes, language: session.lang || "fa", mediaType: session.mediaType || null, mediaFileId: session.mediaFileId || null, mediaFiles: session.mediaFiles || [], date: new Date().toISOString(), _key: listingKey };
  await env.DATA.put(listingKey, JSON.stringify(listingData));
  const header = session.mode === "listing" ? (session.type === "sell" ? "آگهی فروش جدید" : "آگهی رهن و اجاره جدید") : (session.type === "buy" ? "درخواست خرید" : "درخواست اجاره");
  const pLabel = (session.mode === "listing" && isPublic) ? " [عمومی]" : "";
  await notifyAdmin(env, `${header}${pLabel}\n\n${summarize(session)}\n\nاز: @${username}\nچت: ${chatId}`);
  if (session.mode === "listing" && isPublic) {
    try { const channelId = await getChannelId(env); if (!channelId) await notifyAdmin(env, `⚠️ کانال تنظیم نشده.`); else { const cr = await postToChannelWithAI(env, listingData, listingKey); if (cr.ok) await notifyAdmin(env, `📢 آگهی به کانال ارسال شد ✅`); else await notifyAdmin(env, `⚠️ خطای کانال: ${cr.error}`); } } catch (e) { await notifyAdmin(env, `⚠️ خطای کانال: ${e.message}`); }
    await notifyMatchingCustomers(env, listingData);
  }
  await env.DATA.delete(`session_${chatId}`);
}

async function showListing(env, chatId, lang, listing, index, listingKey) {
  const t = TX[lang] || TX.fa;
  // ⚠️ اگه آگهی هنوز تأیید نشده، برای مشتری معمولی نمایش نده
if (listing.pendingApproval && !isAdminUser(chatId, env)) {
  return; // نمایش داده نمیشه
}
if (listing.rejected && !isAdminUser(chatId, env)) {
  return;
}
const tl = listing.type === "sell" ? t.listingTypeSell : t.listingTypeRent;
 
// 👀 ذخیره خودکار بازدید مشتری
try {
  const viewerProfile = await getViewerProfile(env, chatId);
  const viewerName = viewerProfile?.userName || "";
  const viewerUsername = viewerProfile?.userUsername || "";
  await trackViewerProfile(env, chatId, viewerName, viewerUsername, listing);
} catch (e) {}
 const isFeat = listing.featured && listing.featuredUntil && listing.featuredUntil > Date.now();
let m = `${isFeat ? "💎 <b>آگهی ویژه</b> 💎\n" : ""}آگهی شماره ${index}\n${tl}\nملک: ${listing.propertyType || "-"}\nمتراژ: ${listing.size || "-"}\n`;
  if (listing.year_built) m += `🏗️ سال ساخت: ${listing.year_built}\n`;
  if (listing.rooms) m += `🛏️ تعداد اتاق: ${listing.rooms}\n`;
  if (listing.floor) m += `🏢 طبقه: ${listing.floor}\n`;
  if (listing.amenities) m += `✨ امکانات: ${listing.amenities}\n`;
  if (listing.document) m += `سند: ${listing.document}\n`;
  const displayLoc = sanitizeLocation(listing.location_short || listing.location || "");
  if (displayLoc) { m += `منطقه: ${displayLoc}\n`; const mapsUrl = getMapUrl(displayLoc); if (mapsUrl) m += `🗺️ ${mapsUrl}\n`; }
  if (listing.price) m += `قیمت: ${listing.price}\n`;
  if (listing.price_per_meter && listing.type === "sell") m += `📊 هر متر: ${listing.price_per_meter}\n`;
  if (listing.budget) m += `بودجه: ${listing.budget}\n`;
  const cleanNotes = masterSanitize(listing.extra_notes || "");
  if (cleanNotes && cleanNotes !== "-") m += `توضیحات: ${cleanNotes}\n`;
  m += `\n${t.phoneHidden}`;
  // 🎯 اگه کاربر ادمین بود، دکمه حذف هم نشون بده
const isAdminViewer = isAdminUser(chatId, env);
let finalKb = kbListingRequest(lang, listingKey);

if (isAdminViewer) {
  finalKb = {
    inline_keyboard: [
      ...finalKb.inline_keyboard,
      [
        { text: "✏️ ویرایش آگهی", callback_data: `edit_${listingKey}` }
      ],
      [
        { text: "💎 ویژه کن", callback_data: `feature_${listingKey}` },
        { text: "🗑️ حذف کامل", callback_data: `delete_${listingKey}` }
      ],
      [
        { text: "📋 کپی کلید", callback_data: `copykey_${listingKey}` }
      ]
    ]
  };
}

  await sendMsg(env, chatId, m, finalKb);
  
  const medias = (listing.mediaFiles && listing.mediaFiles.length > 0) ? listing.mediaFiles : (listing.mediaFileId ? [{ type: listing.mediaType, fileId: listing.mediaFileId }] : []);
  if (medias.length > 0) { 
    for (const media of medias) { 
      try { 
        if (media.type === "photo") await sendToTelegram(env, "sendPhoto", { chat_id: chatId, photo: media.fileId }); 
        else if (media.type === "video") await sendToTelegram(env, "sendVideo", { chat_id: chatId, video: media.fileId }); 
      } catch (e) {} 
    } 
  } else { 
    try { await sendToTelegram(env, "sendPhoto", { chat_id: chatId, photo: DEFAULT_LISTING_PHOTO }); } catch (e) {} 
  }
}

async function getListings(env, filterType, budgetCode) {
 const list = await env.DATA.list({ prefix: "pub_listing_" });
const all = [];
for (const k of list.keys.reverse()) { 
  const d = await env.DATA.get(k.name, "json"); 
  if (!d) continue;
  // ⚠️ آگهی‌های pending یا rejected رو نشون نده
  if (d.pendingApproval || d.rejected) continue;
  all.push({ ...d, _key: k.name }); 
}
let f = all; 
if (filterType === "sell") f = f.filter(x => x.type === "sell");
else if (filterType === "rent") f = f.filter(x => x.type === "rent");

// 💎 آگهی‌های ویژه اول بیان
f = f.sort((a, b) => {
  const aFeat = a.featured && a.featuredUntil && a.featuredUntil > Date.now() ? 1 : 0;
  const bFeat = b.featured && b.featuredUntil && b.featuredUntil > Date.now() ? 1 : 0;
  return bFeat - aFeat;
});
  if (budgetCode && budgetCode !== "0") {
    f = f.filter(x => {
      const p = priceToNumber(x.price || "");
      if (filterType === "sell") { if (budgetCode === "1") return p > 0 && p < 2000; if (budgetCode === "2") return p >= 2000 && p < 5000; if (budgetCode === "3") return p >= 5000 && p < 10000; if (budgetCode === "4") return p >= 10000; }
      else { if (budgetCode === "1") return p > 0 && p < 500; if (budgetCode === "2") return p >= 500 && p < 1000; if (budgetCode === "3") return p >= 1000 && p < 2000; if (budgetCode === "4") return p >= 2000; }
      return true;
    });
  }
  return f;
}

// 🎯 فایل‌های یک همکار خاص
async function getColleagueFiles(env, colleagueChatId) {
  const list = await env.DATA.list({ prefix: "pub_listing_" });
  const files = [];
  for (const k of list.keys.reverse()) {
    const d = await env.DATA.get(k.name, "json");
    if (d && String(d.chatId) === String(colleagueChatId)) files.push({ ...d, _key: k.name });
  }
  return files;
}

// 🎯 فایل‌های همه‌ی همکارها (برای تبادل)
async function getAllColleagueFiles(env, excludeChatId, limit) {
  const list = await env.DATA.list({ prefix: "pub_listing_" });
  const files = [];
  for (const k of list.keys.reverse()) {
    const d = await env.DATA.get(k.name, "json");
    if (!d) continue;
    if (String(d.chatId) === String(excludeChatId)) continue;
    if (d.source !== "colleague") continue;
    files.push({ ...d, _key: k.name });
    if (files.length >= (limit || 10)) break;
  }
  return files;
}

function computeSlotISO(slot) { const now = new Date(); const d = new Date(now.getTime()); if (slot === 1) { d.setUTCHours(13, 30, 0, 0); return d.toISOString(); } else if (slot === 2) { d.setUTCDate(d.getUTCDate() + 1); d.setUTCHours(6, 30, 0, 0); return d.toISOString(); } else if (slot === 3) { d.setUTCDate(d.getUTCDate() + 1); d.setUTCHours(13, 30, 0, 0); return d.toISOString(); } return d.toISOString(); }
function slotLabel(slot, lang) { const t = TX[lang] || TX.fa; if (slot === 1) return t.timeSlot1; if (slot === 2) return t.timeSlot2; if (slot === 3) return t.timeSlot3; return ""; }

// ═══════════════════════════════════════════════════════════
// 🌐 WebApp فرم ثبت آگهی
// ═══════════════════════════════════════════════════════════

function renderWebApp() {
  return `<!DOCTYPE html><html lang="fa" dir="rtl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><title>ثبت آگهی - املاک نعمتی</title><script src="https://telegram.org/js/telegram-web-app.js"><\/script><script src="https://cdn.tailwindcss.com"><\/script><style>
  * { font-family: 'Vazirmatn', 'Tahoma', sans-serif; -webkit-tap-highlight-color: transparent; }
  body { background: var(--tg-theme-bg-color, #0f172a); color: var(--tg-theme-text-color, #fff); padding-bottom: 100px; }
  .card { background: var(--tg-theme-secondary-bg-color, #1e293b); border-radius: 16px; padding: 16px; margin-bottom: 12px; }
  input, select, textarea { background: var(--tg-theme-bg-color, #0f172a); color: var(--tg-theme-text-color, #fff); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 12px; width: 100%; font-size: 15px; outline: none; }
  input:focus, select:focus, textarea:focus { border-color: #3b82f6; }
  label { display: block; font-size: 13px; opacity: 0.8; margin-bottom: 6px; font-weight: 500; }
  .toggle-btn { flex: 1; padding: 14px; border-radius: 12px; font-weight: 600; border: 2px solid transparent; cursor: pointer; background: var(--tg-theme-bg-color, #0f172a); color: var(--tg-theme-text-color, #fff); }
  .toggle-btn.active { background: #3b82f6; color: white; border-color: #3b82f6; box-shadow: 0 4px 12px rgba(59,130,246,0.4); }
  .checkbox-row { display: flex; align-items: center; padding: 12px; background: var(--tg-theme-bg-color, #0f172a); border-radius: 10px; margin-bottom: 8px; cursor: pointer; }
  .checkbox-row input { width: 20px; height: 20px; margin-left: 10px; accent-color: #3b82f6; }
  .submit-btn { position: fixed; bottom: 16px; left: 16px; right: 16px; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; padding: 16px; border-radius: 14px; font-weight: 700; font-size: 17px; border: none; cursor: pointer; box-shadow: 0 8px 24px rgba(59,130,246,0.5); }
  .submit-btn:disabled { opacity: 0.5; }
  .header { text-align: center; padding: 20px 0; }
  .header h1 { font-size: 22px; font-weight: 700; }
  .header p { font-size: 13px; opacity: 0.6; margin-top: 4px; }
  .section-title { font-size: 14px; font-weight: 700; color: #3b82f6; margin-bottom: 10px; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .price-meter { background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.3); border-radius: 10px; padding: 10px; margin-top: 8px; font-size: 13px; text-align: center; }
  .media-info { background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.3); border-radius: 12px; padding: 14px; text-align: center; margin-bottom: 12px; }
  .err { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3); border-radius: 10px; padding: 12px; margin-top: 10px; font-size: 13px; }
  </style></head><body><div class="p-4">
  <div class="header"><h1>🏘️ ثبت آگهی جدید</h1><p>املاک نعمتی — قم</p></div>
  <div id="mediaInfo" class="media-info" style="display:none;"><div style="font-size: 28px;">📎</div><div id="mediaCount" style="font-weight: 600; margin-top: 4px;"></div><div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">فایل‌های ضمیمه‌شده از تلگرام</div></div>
  <div class="card"><label>نوع معامله</label><div style="display:flex; gap: 8px;"><button type="button" class="toggle-btn active" data-type="sell" onclick="setType('sell')">💰 فروش</button><button type="button" class="toggle-btn" data-type="rent" onclick="setType('rent')">🔑 رهن و اجاره</button></div></div>
  <div class="card"><div class="section-title">🏠 اطلاعات ملک</div><div style="margin-bottom: 10px;"><label>نوع ملک</label><select id="propertyType"><option value="آپارتمان">آپارتمان</option><option value="خانه">خانه / ویلایی</option><option value="ویلا">ویلا</option><option value="زمین">زمین</option><option value="مغازه">مغازه</option><option value="اداری">اداری</option><option value="تجاری">تجاری</option><option value="واحد">واحد</option></select></div>
  <div class="grid-2"><div><label>متراژ (متر)</label><input id="size" type="tel" inputmode="numeric" placeholder="مثال: ۱۰۰"></div><div><label>سال ساخت</label><input id="yearBuilt" type="tel" inputmode="numeric" placeholder="مثال: ۱۳۹۵"></div><div><label>تعداد اتاق</label><select id="rooms"><option value="">انتخاب کنید</option><option value="بدون اتاق">بدون اتاق</option><option value="۱ خواب">۱ خواب</option><option value="۲ خواب">۲ خواب</option><option value="۳ خواب">۳ خواب</option><option value="۴ خواب">۴ خواب</option><option value="۵ خواب و بیشتر">۵ خواب و بیشتر</option></select></div><div><label>طبقه</label><input id="floor" placeholder="مثال: طبقه ۳ از ۵"></div></div></div>
  <div class="card"><div class="section-title">📄 سند و موقعیت</div><div style="margin-bottom: 10px;"><label>وضعیت سند</label><select id="document"><option value="تک برگ">تک برگ</option><option value="شش دانگ">شش دانگ</option><option value="سه دانگ">سه دانگ</option><option value="قولنامه‌ای">قولنامه‌ای</option><option value="مشاع">مشاع</option><option value="اوقافی">اوقافی</option></select></div><div style="margin-bottom: 10px;"><label>محله (توی کانال نمایش داده می‌شه)</label><input id="locationShort" placeholder="مثال: کلهری"></div><div><label>آدرس کامل (فقط ادمین می‌بینه)</label><textarea id="locationFull" rows="2" placeholder="خیابان، کوچه، پلاک"></textarea></div></div>
  <div class="card"><div class="section-title">💰 قیمت</div><div id="priceSellBlock"><label>قیمت کل</label><div class="grid-2"><input id="priceAmount" type="tel" inputmode="numeric" placeholder="مثال: ۶"><select id="priceUnit"><option value="میلیارد">میلیارد تومان</option><option value="میلیون">میلیون تومان</option></select></div><div id="ppmBox" class="price-meter" style="display:none;">📊 هر متر: <b id="ppmValue">-</b></div></div><div id="priceRentBlock" style="display:none;"><div class="grid-2"><div><label>رهن</label><input id="rentDeposit" type="tel" inputmode="numeric" placeholder="مثال: ۵۰۰"></div><div><label>اجاره ماهانه</label><input id="rentMonthly" type="tel" inputmode="numeric" placeholder="مثال: ۱۰"></div></div><div style="font-size: 12px; opacity: 0.6; margin-top: 6px;">واحد: میلیون تومان</div></div></div>
  <div class="card"><div class="section-title">✨ امکانات</div><label class="checkbox-row"><input type="checkbox" id="amElevator"><span>🛗 آسانسور</span></label><label class="checkbox-row"><input type="checkbox" id="amParking"><span>🅿️ پارکینگ</span></label><label class="checkbox-row"><input type="checkbox" id="amStorage"><span>📦 انباری</span></label><label class="checkbox-row"><input type="checkbox" id="amBalcony"><span>🌇 بالکن</span></label></div>
  <div class="card"><div class="section-title">📝 توضیحات</div><textarea id="notes" rows="3" placeholder="نکات خاص ملک (بدون شماره تلفن)"></textarea></div>
  <div class="card"><div class="section-title">👤 اطلاعات شما</div><div style="margin-bottom: 10px;"><label>نام و نام خانوادگی</label><input id="fullName" placeholder="مثال: علی احمدی"></div><div><label>شماره تماس (اختیاری)</label><input id="phone" type="tel" inputmode="numeric" placeholder="۰۹۱۲۳۴۵۶۷۸۹"></div></div>
  <div id="errBox" class="err" style="display:none;"></div></div>
  <button id="submitBtn" class="submit-btn" onclick="submitForm()">✅ ثبت نهایی آگهی</button>
  <script>
  const tg = window.Telegram?.WebApp; if (tg) { tg.ready(); tg.expand(); }
  let dealType = 'sell';
  function setType(t) { dealType = t; document.querySelectorAll('.toggle-btn').forEach(b => { b.classList.toggle('active', b.dataset.type === t); }); document.getElementById('priceSellBlock').style.display = (t === 'sell') ? 'block' : 'none'; document.getElementById('priceRentBlock').style.display = (t === 'rent') ? 'block' : 'none'; updatePPM(); }
  function toNum(s) { if (!s) return 0; return parseFloat(String(s).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[^\d.]/g, '')) || 0; }
  function updatePPM() { if (dealType !== 'sell') return; const amt = toNum(document.getElementById('priceAmount').value); const unit = document.getElementById('priceUnit').value; const size = toNum(document.getElementById('size').value); const box = document.getElementById('ppmBox'); const val = document.getElementById('ppmValue'); if (amt > 0 && size > 0) { const totalMillion = (unit === 'میلیارد') ? amt * 1000 : amt; const ppm = totalMillion / size; if (ppm >= 1000) val.textContent = (ppm / 1000).toFixed(2) + ' میلیارد تومان'; else val.textContent = Math.round(ppm * 10) / 10 + ' میلیون تومان'; box.style.display = 'block'; } else { box.style.display = 'none'; } }
  document.getElementById('priceAmount')?.addEventListener('input', updatePPM); document.getElementById('priceUnit')?.addEventListener('change', updatePPM); document.getElementById('size')?.addEventListener('input', updatePPM);
  async function loadMediaInfo() { try { const initData = tg?.initData || ''; const r = await fetch('/api/media-info?initData=' + encodeURIComponent(initData)); const d = await r.json(); if (d.ok && d.count > 0) { document.getElementById('mediaCount').textContent = d.count + ' فایل ثبت شده'; document.getElementById('mediaInfo').style.display = 'block'; } } catch (e) {} }
  loadMediaInfo();
  async function submitForm() {
    const errBox = document.getElementById('errBox'); errBox.style.display = 'none';
    const btn = document.getElementById('submitBtn'); btn.disabled = true; btn.textContent = '⏳ در حال ثبت...';
    const data = { type: dealType, propertyType: document.getElementById('propertyType').value, size: document.getElementById('size').value.trim(), yearBuilt: document.getElementById('yearBuilt').value.trim(), rooms: document.getElementById('rooms').value, floor: document.getElementById('floor').value.trim(), document: document.getElementById('document').value, locationShort: document.getElementById('locationShort').value.trim(), locationFull: document.getElementById('locationFull').value.trim(), priceAmount: document.getElementById('priceAmount')?.value.trim() || '', priceUnit: document.getElementById('priceUnit')?.value || 'میلیارد', rentDeposit: document.getElementById('rentDeposit')?.value.trim() || '', rentMonthly: document.getElementById('rentMonthly')?.value.trim() || '', amenities: { elevator: document.getElementById('amElevator').checked, parking: document.getElementById('amParking').checked, storage: document.getElementById('amStorage').checked, balcony: document.getElementById('amBalcony').checked }, notes: document.getElementById('notes').value.trim(), fullName: document.getElementById('fullName').value.trim(), phone: document.getElementById('phone').value.trim(), initData: tg?.initData || '' };
    if (!data.size) { showErr('متراژ رو وارد کن'); return; }
    if (!data.locationShort) { showErr('محله رو وارد کن'); return; }
    if (!data.fullName) { showErr('نامت رو وارد کن'); return; }
    try {
      const r = await fetch('/api/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const res = await r.json();
      if (res.ok) { btn.textContent = '✅ ثبت شد!'; if (tg) { tg.showAlert('آگهی با موفقیت ثبت شد! ✅', () => { tg.close(); }); } else { alert('آگهی ثبت شد!'); } }
      else { showErr(res.error || 'خطا در ثبت'); btn.disabled = false; btn.textContent = '✅ ثبت نهایی آگهی'; }
    } catch (e) { showErr('خطای شبکه. دوباره تلاش کن.'); btn.disabled = false; btn.textContent = '✅ ثبت نهایی آگهی'; }
  }
  function showErr(msg) { const b = document.getElementById('errBox'); b.textContent = '⚠️ ' + msg; b.style.display = 'block'; b.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  <\/script></body></html>`;
}

// ═══════════════════════════════════════════════════════════
// 🌐 WebApp فرم همکار
// ═══════════════════════════════════════════════════════════

function renderColleagueApp() {
  return `<!DOCTYPE html><html lang="fa" dir="rtl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><title>ثبت همکار - املاک نعمتی</title><script src="https://telegram.org/js/telegram-web-app.js"><\/script><script src="https://cdn.tailwindcss.com"><\/script><style>
  * { font-family: 'Vazirmatn', 'Tahoma', sans-serif; -webkit-tap-highlight-color: transparent; }
  body { background: var(--tg-theme-bg-color, #0f172a); color: var(--tg-theme-text-color, #fff); padding-bottom: 100px; }
  .card { background: var(--tg-theme-secondary-bg-color, #1e293b); border-radius: 16px; padding: 16px; margin-bottom: 12px; }
  input, select, textarea { background: var(--tg-theme-bg-color, #0f172a); color: var(--tg-theme-text-color, #fff); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 12px; width: 100%; font-size: 15px; outline: none; }
  input:focus, select:focus, textarea:focus { border-color: #10b981; }
  label { display: block; font-size: 13px; opacity: 0.8; margin-bottom: 6px; font-weight: 500; }
  .header { text-align: center; padding: 20px 0; }
  .header h1 { font-size: 22px; font-weight: 700; }
  .header p { font-size: 13px; opacity: 0.6; margin-top: 4px; }
  .section-title { font-size: 14px; font-weight: 700; color: #10b981; margin-bottom: 10px; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .checkbox-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .checkbox-row { display: flex; align-items: center; padding: 10px; background: var(--tg-theme-bg-color, #0f172a); border-radius: 10px; cursor: pointer; font-size: 13px; }
  .checkbox-row input { width: 18px; height: 18px; margin-left: 8px; accent-color: #10b981; }
  .submit-btn { position: fixed; bottom: 16px; left: 16px; right: 16px; background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 16px; border-radius: 14px; font-weight: 700; font-size: 17px; border: none; cursor: pointer; box-shadow: 0 8px 24px rgba(16,185,129,0.5); }
  .submit-btn:disabled { opacity: 0.5; }
  .err { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3); border-radius: 10px; padding: 12px; margin-top: 10px; font-size: 13px; }
  .info-box { background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); border-radius: 12px; padding: 14px; margin-bottom: 12px; font-size: 13px; }
  </style></head><body><div class="p-4">
  <div class="header"><h1>🏢 ثبت همکار</h1><p>املاک نعمتی — قم</p></div>
  <div class="info-box">🤝 خوش اومدی همکار عزیز!<br>برای همکاری بهتر، لطفاً این فرم رو پر کن.</div>
  <div class="card"><div class="section-title">👤 اطلاعات شخصی</div>
    <div style="margin-bottom: 10px;"><label>نام و نام خانوادگی *</label><input id="fullName" placeholder="مثال: علی احمدی"></div>
    <div class="grid-2"><div><label>شماره موبایل *</label><input id="mobile" type="tel" inputmode="numeric" placeholder="۰۹۱۲..."></div><div><label>شماره دفتر</label><input id="officePhone" type="tel" inputmode="numeric" placeholder="۰۲۵..."></div></div>
  </div>
  <div class="card"><div class="section-title">🏛️ اطلاعات آژانس</div>
    <div style="margin-bottom: 10px;"><label>نام آژانس / دفتر *</label><input id="agencyName" placeholder="مثال: املاک الف"></div>
    <div style="margin-bottom: 10px;"><label>آدرس دفتر *</label><textarea id="agencyAddress" rows="2" placeholder="خیابان، کوچه، پلاک"></textarea></div>
    <div class="grid-2"><div><label>سابقه کار (سال)</label><input id="experience" type="tel" inputmode="numeric" placeholder="مثال: ۵"></div><div><label>شماره پروانه</label><input id="license" placeholder="اختیاری"></div></div>
  </div>
  <div class="card"><div class="section-title">🎯 تخصص - محله‌ها</div><div class="checkbox-grid" id="hoodsGrid"></div></div>
  <div class="card"><div class="section-title">🏘️ تخصص - نوع ملک</div><div class="checkbox-grid" id="propTypesGrid"></div></div>
  <div class="card"><div class="section-title">🔄 نوع معامله</div>
    <label class="checkbox-row" style="margin-bottom: 8px;"><input type="checkbox" id="dealSell" checked><span>💰 فروش</span></label>
    <label class="checkbox-row"><input type="checkbox" id="dealRent"><span>🔑 رهن و اجاره</span></label>
  </div>
  <div class="card"><div class="section-title">🔗 اطلاعات اضافی</div>
    <div style="margin-bottom: 10px;"><label>وب‌سایت / کانال (اختیاری)</label><input id="website" placeholder="مثال: @my_agency"></div>
    <div><label>توضیحات (اختیاری)</label><textarea id="notes" rows="3" placeholder="هر نکته‌ای..."></textarea></div>
  </div>
  <div id="errBox" class="err" style="display:none;"></div>
</div>
<button id="submitBtn" class="submit-btn" onclick="submitForm()">✅ ثبت اطلاعات همکاری</button>
<script>
  const tg = window.Telegram?.WebApp; if (tg) { tg.ready(); tg.expand(); }
  const HOODS = ["کلهری","صفائیه","ارم","طالقانی","پردیسان","جمکران","قنوات","گلدشت","شهرک قدس","سالاریه","بلوار امین","شهید بهشتی","۱۹ دی","یخچال قاضی","زنبیل آباد","هفت تیر","چهارمردان","امیرآباد","شادقلی خان","سلفچگان","کهک","دستجرد","قمرود","جعفریه"];
  const PROPS = ["آپارتمان","خانه","ویلا","زمین","مغازه","اداری","تجاری","واحد"];
  function renderCheckboxes() {
    document.getElementById('hoodsGrid').innerHTML = HOODS.map(h => '<label class="checkbox-row"><input type="checkbox" class="hood-cb" value="' + h + '"><span>' + h + '</span></label>').join('');
    document.getElementById('propTypesGrid').innerHTML = PROPS.map(p => '<label class="checkbox-row"><input type="checkbox" class="prop-cb" value="' + p + '"><span>' + p + '</span></label>').join('');
  }
  renderCheckboxes();
  async function submitForm() {
    const errBox = document.getElementById('errBox'); errBox.style.display = 'none';
    const btn = document.getElementById('submitBtn'); btn.disabled = true; btn.textContent = '⏳ در حال ثبت...';
    const selectedHoods = [...document.querySelectorAll('.hood-cb:checked')].map(c => c.value);
    const selectedProps = [...document.querySelectorAll('.prop-cb:checked')].map(c => c.value);
    const dealTypes = [];
    if (document.getElementById('dealSell').checked) dealTypes.push('فروش');
    if (document.getElementById('dealRent').checked) dealTypes.push('رهن و اجاره');
    const data = { fullName: document.getElementById('fullName').value.trim(), mobile: document.getElementById('mobile').value.trim(), officePhone: document.getElementById('officePhone').value.trim(), agencyName: document.getElementById('agencyName').value.trim(), agencyAddress: document.getElementById('agencyAddress').value.trim(), experience: document.getElementById('experience').value.trim(), license: document.getElementById('license').value.trim(), hoods: selectedHoods, props: selectedProps, dealTypes: dealTypes, website: document.getElementById('website').value.trim(), notes: document.getElementById('notes').value.trim(), initData: tg?.initData || '' };
    if (!data.fullName) { showErr('نامت رو وارد کن'); return; }
    if (!data.mobile) { showErr('شماره موبایل رو وارد کن'); return; }
    if (!data.agencyName) { showErr('نام آژانس رو وارد کن'); return; }
    if (!data.agencyAddress) { showErr('آدرس دفتر رو وارد کن'); return; }
    try {
      const r = await fetch('/api/colleague-submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const res = await r.json();
      if (res.ok) { btn.textContent = '✅ ثبت شد!'; if (tg) { tg.showAlert('اطلاعاتت ثبت شد! ✅\\n\\nبه‌زودی با تو تماس می‌گیریم 🌹', () => { tg.close(); }); } else { alert('ثبت شد!'); } }
      else { showErr(res.error || 'خطا در ثبت'); btn.disabled = false; btn.textContent = '✅ ثبت اطلاعات همکاری'; }
    } catch (e) { showErr('خطای شبکه. دوباره تلاش کن.'); btn.disabled = false; btn.textContent = '✅ ثبت اطلاعات همکاری'; }
  }
  function showErr(msg) { const b = document.getElementById('errBox'); b.textContent = '⚠️ ' + msg; b.style.display = 'block'; b.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  <\/script></body></html>`;
}

// ═══════════════════════════════════════════════════════════
// 🔐 VERIFY INITDATA
// ═══════════════════════════════════════════════════════════

async function verifyInitData(initData, botToken) {
  if (!initData || !botToken) return null;
  try {
    const token = String(botToken).trim();
    const params = new URLSearchParams(initData);
    const hash = params.get("hash");
    if (!hash) return null;
    params.delete("hash");
    const entries = [...params.entries()].sort((a, b) => a[0].localeCompare(b[0]));
    const dataCheckString = entries.map(([k, v]) => k + "=" + v).join("\n");
    const secretKey = await crypto.subtle.importKey("raw", new TextEncoder().encode("WebAppData"), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
    const secret = await crypto.subtle.sign("HMAC", secretKey, new TextEncoder().encode(token));
    const dataKey = await crypto.subtle.importKey("raw", secret, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
    const sig = await crypto.subtle.sign("HMAC", dataKey, new TextEncoder().encode(dataCheckString));
    const sigHex = [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, "0")).join("");
    if (sigHex !== hash) return null;
    const userJson = params.get("user");
    if (!userJson) return null;
    return JSON.parse(userJson);
  } catch (e) { return null; }
}

async function handleMediaInfo(request, env) {
  try {
    const url = new URL(request.url);
    const initData = url.searchParams.get("initData") || "";
    const user = await verifyInitData(initData, env.TELEGRAM_TOKEN);
    if (!user) return jsonResp({ ok: false, count: 0 });
    const session = await env.DATA.get(`webapp_session_${user.id}`, "json");
    if (!session) return jsonResp({ ok: true, count: 0 });
    return jsonResp({ ok: true, count: (session.mediaFiles || []).length });
  } catch (e) { return jsonResp({ ok: false, count: 0 }); }
}

// ═══════════════════════════════════════════════════════════
// 🔌 API: ثبت آگهی
// ═══════════════════════════════════════════════════════════

async function handleSubmit(request, env, ctx) {
  try {
    const data = await request.json();
    let user = await verifyInitData(data.initData, env.TELEGRAM_TOKEN);
    if (!user) {
      try {
        const params = new URLSearchParams(data.initData || "");
        const userJson = params.get("user");
        if (userJson) user = JSON.parse(userJson);
      } catch (e) {}
    }
    if (!user) return jsonResp({ ok: false, error: "احراز هویت تلگرام ناموفق" });
    
    const chatId = user.id;
    const userName = [user.first_name, user.last_name].filter(Boolean).join(" ") || "کاربر";
    const userUsername = user.username || "ندارد";
    
    // 🎯 چک کن همکاره یا نه
    const colleagueData = await getColleagueData(env, chatId);
    const isColleague = !!colleagueData;
    
    const webappSession = await env.DATA.get(`webapp_session_${chatId}`, "json") || {};
    let priceFinal = "";
    if (data.type === "rent") { 
      const dep = toEnglishDigits(data.rentDeposit || ""); 
      const mon = toEnglishDigits(data.rentMonthly || ""); 
      const parts = []; 
      if (dep) parts.push(dep + " میلیون رهن"); 
      if (mon) parts.push(mon + " میلیون اجاره"); 
      priceFinal = parts.join(" و "); 
    } else { 
      const amt = toEnglishDigits(data.priceAmount || ""); 
      if (amt) priceFinal = amt + " " + (data.priceUnit || "میلیارد") + " تومان"; 
    }
    
    const am = data.amenities || {};
    const amList = [];
    if (am.elevator) amList.push("آسانسور");
    if (am.parking) amList.push("پارکینگ");
    if (am.storage) amList.push("انباری");
    if (am.balcony) amList.push("بالکن");
    const amenitiesStr = amList.join(" • ");
    
    const ts = Date.now();
    const listingKey = `pub_listing_${ts}`;
    const fullLocation = cleanFullAddress(data.locationFull || data.locationShort || "");
    const shortLocation = sanitizeLocation(data.locationShort || "");
    const cleanNotes = masterSanitize(data.notes || "");
    const phone = exPhone(data.phone || "");
    
    const listingData = { 
      mode: "listing", type: data.type || "sell", name: data.fullName || userName, phone: phone || "", 
      username: userUsername, chatId, propertyType: data.propertyType || "", size: (data.size || "") + " متر", 
      year_built: data.yearBuilt || "", rooms: data.rooms || "", floor: data.floor || "", amenities: amenitiesStr, 
      document: data.document || "", location: fullLocation, location_short: shortLocation, price: priceFinal, 
      price_per_meter: data.type === "sell" ? calculatePricePerMeter(priceFinal, (data.size || "") + " متر") : "", 
      extra_notes: cleanNotes, language: "fa", 
      mediaType: (webappSession.mediaFiles?.[0]?.type) || null, mediaFileId: (webappSession.mediaFiles?.[0]?.fileId) || null, 
      mediaFiles: webappSession.mediaFiles || [], date: new Date().toISOString(), 
      source: isColleague ? "colleague" : "webapp",
      colleagueAgency: isColleague ? (colleagueData.agencyName || "") : "",
      colleagueName: isColleague ? (colleagueData.fullName || "") : "",
      _key: listingKey 
    };
    
    await env.DATA.put(listingKey, JSON.stringify(listingData));
    try { await env.DATA.delete(`webapp_session_${chatId}`); } catch (e) {}
    
    const response = jsonResp({ ok: true, listingKey });

    // ═══════════════════════════════════════════════════════════
    // شروع عملیات پس‌زمینه (ctx.waitUntil)
    // ═══════════════════════════════════════════════════════════
    ctx.waitUntil((async () => {
      const hasMedia = (webappSession.mediaFiles || []).length > 0;
      
      // ⚠️ اگه عکس داره، منتظر تأیید ادمین باش
      // (توجه: اگر متغیر isAdmin در جای دیگری تعریف نشده، باید آن را اینجا تعریف کنید)
      if (hasMedia && !isAdmin) {
        // ذخیره وضعیت pending
        listingData.pendingApproval = true;
        await env.DATA.put(listingKey, JSON.stringify(listingData));
        
        // اطلاع به مشتری
        const waitMsg = `✅ <b>آگهی شما ثبت شد!</b> 🌹\n\n🏘️ ${listingData.propertyType} ${listingData.size}\n` +
          (shortLocation ? `📍 ${shortLocation}\n` : "") +
          (priceFinal ? `💰 ${priceFinal}\n` : "") +
          `\n📸 چون آگهی عکس داره، برای اطمینان بیشتر باید توسط مدیر تأیید بشه.\n\n⏳ <b>معمولاً چند ساعت طول می‌کشه.</b> بعد از تأیید، آگهی به کانال و مشتری‌ها ارسال میشه.\n\nممنون که املاک نعمتی رو انتخاب کردی 🌹`;
        await sendMsg(env, chatId, waitMsg, null);
        
        // اطلاع به ادمین با عکس‌ها
        const adminId = await getAdminChatId(env);
        if (adminId) {
          let approvalMsg = `🔔 <b>آگهی جدید نیاز به تأیید داره</b>\n\n`;
          approvalMsg += `👤 ${data.fullName || userName}\n📛 @${userUsername}\n🆔 ${chatId}\n\n`;
          if (isColleague) approvalMsg += `🏢 آژانس: <b>${colleagueData.agencyName}</b>\n`;
          approvalMsg += `━━━━━━━━━━━━━━\n`;
          approvalMsg += `🏘️ <b>نوع:</b> ${listingData.propertyType} ${listingData.size}\n`;
          if (shortLocation) approvalMsg += `📍 <b>محله:</b> ${shortLocation}\n`;
          if (listingData.year_built) approvalMsg += `🏗️ <b>سال ساخت:</b> ${listingData.year_built}\n`;
          if (listingData.rooms) approvalMsg += `🛏️ <b>اتاق:</b> ${listingData.rooms}\n`;
          if (listingData.floor) approvalMsg += `🏢 <b>طبقه:</b> ${listingData.floor}\n`;
          if (listingData.amenities) approvalMsg += `✨ <b>امکانات:</b> ${listingData.amenities}\n`;
          if (listingData.document) approvalMsg += `📄 <b>سند:</b> ${listingData.document}\n`;
          if (priceFinal) approvalMsg += `💰 <b>قیمت:</b> ${priceFinal}\n`;
          if (listingData.price_per_meter) approvalMsg += `📊 <b>هر متر:</b> ${listingData.price_per_meter}\n`;
          approvalMsg += `\n📸 <b>${hasMedia ? webappSession.mediaFiles.length : 0} عکس ضمیمه</b> (پایین ببین)\n\n`;
          approvalMsg += `━━━━━━━━━━━━━━\n`;
          approvalMsg += `⚠️ <b>لطفاً عکس‌ها رو چک کن که شماره/آدرس داخلش نباشه.</b>`;
          
          await sendToTelegram(env, "sendMessage", { chat_id: adminId, text: approvalMsg, parse_mode: "HTML" });
          
          // عکس‌ها رو بفرست
          for (const m of (webappSession.mediaFiles || []).slice(0, 5)) {
            try {
              if (m.type === "photo") await sendToTelegram(env, "sendPhoto", { chat_id: adminId, photo: m.fileId });
              else if (m.type === "video") await sendToTelegram(env, "sendVideo", { chat_id: adminId, video: m.fileId });
            } catch (e) {}
          }
          
          // دکمه‌های تأیید/رد
          const kb = {
            inline_keyboard: [
              [{ text: "✅ تأیید و ارسال", callback_data: `approve_${listingKey}` }, { text: "❌ رد و حذف", callback_data: `reject_${listingKey}` }],
              [{ text: "🗑️ حذف کامل آگهی", callback_data: `delete_${listingKey}` }]
            ]
          };
          await sendToTelegram(env, "sendMessage", { chat_id: adminId, text: "👇 یه گزینه انتخاب کن:", reply_markup: kb });
        }
        return;
      }
      
      // ✅ اگه عکس نداره یا خود ادمین ثبت کرده، مستقیم بره
      try {
        let notifyText = isColleague ? `🏢 <b>فایل جدید از همکار</b>\n\n` : `🏘️ آگهی جدید از WebApp\n\n`;
        notifyText += `👤 ${data.fullName || userName}\n📛 @${userUsername}\n🆔 ${chatId}\n`;
        if (isColleague) notifyText += `🏢 آژانس: <b>${colleagueData.agencyName}</b>\n`;
        notifyText += `\nنوع: ${data.type === "rent" ? "رهن و اجاره" : "فروش"}\nملک: ${listingData.propertyType} ${listingData.size}\n`;
        if (shortLocation) notifyText += `محله: ${shortLocation}\n`;
        if (priceFinal) notifyText += `💰 ${priceFinal}\n`;
        await notifyAdmin(env, notifyText);
      } catch (e) {}
      
      try { const cr = await postToChannelWithAI(env, listingData, listingKey); } catch (e) {}
      try { await notifyMatchingCustomers(env, listingData); } catch (e) {}
      
      try { 
        const cleanNotesForReply = listingData.extra_notes ? listingData.extra_notes.trim() : "";
        let confirmMsg = `✅ <b>آگهی شما با موفقیت ثبت شد!</b> 🌹\n\n`;
        confirmMsg += `🏘️ <b>ملک:</b> ${listingData.propertyType} ${listingData.size}\n`;
        if (shortLocation) confirmMsg += `📍 <b>محله:</b> ${shortLocation}\n`;
        if (listingData.year_built) confirmMsg += `🏗️ <b>سال ساخت:</b> ${listingData.year_built}\n`;
        if (listingData.rooms) confirmMsg += `🛏️ <b>اتاق:</b> ${listingData.rooms}\n`;
        if (listingData.amenities) confirmMsg += `✨ <b>امکانات:</b> ${listingData.amenities}\n`;
        if (priceFinal) confirmMsg += `💰 <b>قیمت:</b> ${priceFinal}\n`;
        if (listingData.price_per_meter && data.type === "sell") confirmMsg += `📊 <b>هر متر:</b> ${listingData.price_per_meter}\n`;

        if (cleanNotesForReply && cleanNotesForReply.length > 3) {
          confirmMsg += `\n📝 <b>توضیحات شما:</b>\n<i>${cleanNotesForReply}</i>\n\n`;
          const nl = cleanNotesForReply.toLowerCase();
          let praise = "";
          if (/(متریال|مصالح|کیفیت|بازسازی|نوساز)/.test(nl)) praise = `👌 توضیحاتی که درباره کیفیت ساخت و متریال دادی، یه امتیاز مثبته. اینجور جزئیات خریدارها رو سریع جذب می‌کنه و باعث می‌شه ملکت زودتر فروش بره.`;
          else if (/(خیابان اصلی|بلوار|دسترسی|نزدیک|مرکز|بازار|مترو)/.test(nl)) praise = `👌 موقعیت مکانی که گفتی، یکی از مهم‌ترین فاکتورهای خریدارهاست. آگهی‌هایی که دسترسی خوب دارن، توی صدر لیست مشتری‌ها قرار می‌گیرن.`;
          else if (/(آسانسور|پارکینگ|انباری|بالکن|استخر)/.test(nl)) praise = `👌 امکاناتی که نوشتی، جزو پرطرفدارترین‌هاست. خریدارها برای این امکانات حاضرن هزینه بیشتری هم بدن.`;
          else if (/(آرام|ساکت|کوچه|خلوت)/.test(nl)) praise = `👌 آرامش و سکوت محیط، یه نکته‌ست که خیلی از خریدارها بهش توجه می‌کنن.`;
          else if (/(نور|آفتاب|روشن|پنجره|ویو)/.test(nl)) praise = `👌 نور و دید خوب یکی از فاکتورهاییه که مشتری‌ها بهش حساس هستن. اشاره‌ات عالیه.`;
          else praise = `👌 توضیحاتت کامل و دقیق بود. اینجور جزئیات مشتری‌ها رو با اطمینان بیشتری تصمیم می‌گیره.`;
          confirmMsg += `💬 <b>نظر من:</b>\n${praise}\n\n`;
        }

        confirmMsg += `━━━━━━━━━━━━━━\n🤔 <b>حالا یه سوال:</b>\n\n`;
        confirmMsg += `آیا <b>ملک دیگه‌ای</b> هم برای فروش یا اجاره داری؟ از منوی زیر یه آگهی جدید ثبت کن. ما فایل‌ها رو توی کانال و بین همکارها هم به اشتراک می‌ذاریم تا زودتر به فروش برسه! 🚀\n\n`;
        confirmMsg += `ممنون که املاک نعمتی رو انتخاب کردی 🌹`;

        const kbAfterSubmit = {
          inline_keyboard: [
            [{ text: "📝 ثبت آگهی جدید", callback_data: "start_new_listing" }],
            [{ text: "💬 مشاوره رایگان", callback_data: "go_consult" }]
          ]
        };

        await sendMsg(env, chatId, confirmMsg, kbAfterSubmit); 
      } catch (e) {}
    })()); // 👈 اصلاح شد: سه پرانتز بسته برای بستن تابع async، اجرای آن، و بستن ctx.waitUntil
    
    return response;
  } catch (e) { 
    return jsonResp({ ok: false, error: e.message }); 
  }
}
// ═══════════════════════════════════════════════════════════
// 🔌 API: ثبت همکار
// ═══════════════════════════════════════════════════════════

async function handleColleagueSubmit(request, env, ctx) {
  try {
    const data = await request.json();
    let user = await verifyInitData(data.initData, env.TELEGRAM_TOKEN);
    if (!user) {
      try {
        const params = new URLSearchParams(data.initData || "");
        const userJson = params.get("user");
        if (userJson) user = JSON.parse(userJson);
      } catch (e) {}
    }
    if (!user) return jsonResp({ ok: false, error: "احراز هویت تلگرام ناموفق" });
    const chatId = user.id;
    const userName = [user.first_name, user.last_name].filter(Boolean).join(" ") || "کاربر";
    const userUsername = user.username || "ندارد";
    const existing = await env.DATA.get(`colleague_${chatId}`, "json");
    if (existing) { return jsonResp({ ok: false, error: "شما قبلاً ثبت‌نام کرده‌اید. ممنون!" }); }
    const ts = Date.now();
    const colleagueKey = `colleague_${chatId}`;
    const colleagueData = { chatId, username: userUsername, telegramName: userName, fullName: data.fullName || userName, mobile: data.mobile || "", officePhone: data.officePhone || "", agencyName: data.agencyName || "", agencyAddress: data.agencyAddress || "", experience: data.experience || "", license: data.license || "", hoods: data.hoods || [], props: data.props || [], dealTypes: data.dealTypes || [], website: data.website || "", notes: data.notes || "", date: new Date().toISOString(), ts };
    await env.DATA.put(colleagueKey, JSON.stringify(colleagueData));
    await setUserRole(env, chatId, "colleague");
    const response = jsonResp({ ok: true, colleagueKey });
    ctx.waitUntil((async () => {
      try {
        let notifyText = `🟢 <b>همکار جدید ثبت‌نام کرد!</b>\n\n`;
        notifyText += `👤 <b>نام:</b> ${colleagueData.fullName}\n📞 <b>موبایل:</b> ${colleagueData.mobile}\n`;
        if (colleagueData.officePhone) notifyText += `☎️ <b>تلفن دفتر:</b> ${colleagueData.officePhone}\n`;
        notifyText += `🏢 <b>آژانس:</b> ${colleagueData.agencyName}\n📍 <b>آدرس:</b> ${colleagueData.agencyAddress}\n`;
        if (colleagueData.experience) notifyText += `📅 <b>سابقه:</b> ${colleagueData.experience} سال\n`;
        if (colleagueData.license) notifyText += `🔖 <b>پروانه:</b> ${colleagueData.license}\n`;
        if (colleagueData.hoods.length > 0) notifyText += `🗺️ <b>محله‌ها:</b> ${colleagueData.hoods.join("، ")}\n`;
        if (colleagueData.props.length > 0) notifyText += `🏘️ <b>نوع ملک:</b> ${colleagueData.props.join("، ")}\n`;
        if (colleagueData.dealTypes.length > 0) notifyText += `🔄 <b>نوع معامله:</b> ${colleagueData.dealTypes.join("، ")}\n`;
        if (colleagueData.website) notifyText += `🔗 <b>وب/کانال:</b> ${colleagueData.website}\n`;
        if (colleagueData.notes) notifyText += `\n📝 <b>توضیحات:</b> ${colleagueData.notes}\n`;
        notifyText += `\n📛 <b>یوزرنیم:</b> @${colleagueData.username}\n🆔 <b>چت:</b> ${chatId}`;
        await notifyAdmin(env, notifyText);
      } catch (e) {}
      try { await sendMsg(env, chatId, "✅ <b>ممنون! اطلاعاتت ثبت شد.</b>\n\nبه‌زودی با تو تماس می‌گیریم 🌹\n\n💡 الان می‌تونی از منوی همکار استفاده کنی.", kbColleagueMenu("fa")); } catch (e) {}
    })());
    return response;
  } catch (e) { return jsonResp({ ok: false, error: e.message }); }
}

function jsonResp(obj) { return new Response(JSON.stringify(obj), { status: 200, headers: { "Content-Type": "application/json; charset=utf-8" } }); }

// ═══════════════════════════════════════════════════════════
// 🚀 MAIN HANDLER
// ═══════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════
// ⏰ APPOINTMENT REMINDERS & SURVEYS (CRON)
// ═══════════════════════════════════════════════════════════

async function checkRemindersAndSurveys(env) {
  const now = Date.now();
  const list = await env.DATA.list({ prefix: "appt_" });
  for (const k of list.keys) {
    try {
      const appt = await env.DATA.get(k.name, "json");
      if (!appt || !appt.date) continue;
      const apptTime = new Date(appt.date).getTime();
      const diffMin = (apptTime - now) / 1000 / 60;

      // ⏰ یادآوری: ۲ ساعت قبل
      if (diffMin > 0 && diffMin <= 150 && !appt.reminderSent) {
        const timeStr = new Date(appt.date).toLocaleString("fa-IR", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Tehran" });
        let msg = `⏰ <b>یادآوری قرار بازدید</b>\n\n👤 ${appt.customerName}\n🕐 امروز ساعت ${timeStr}\n`;
        if (appt.propertyDesc) msg += `🏠 ${appt.propertyDesc}\n`;
        msg += `\nآماده‌ای؟ اگه مشکلی پیش اومد بهم بگو 🌹`;
        await sendToTelegram(env, "sendMessage", { chat_id: appt.chatId, text: msg, parse_mode: "HTML" });
        appt.reminderSent = true;
        await env.DATA.put(k.name, JSON.stringify(appt), { expirationTtl: 7 * 24 * 3600 });
      }

      // ⭐ نظرسنجی: ۴ تا ۱۲ ساعت بعد از بازدید
      if (diffMin < -240 && diffMin > -720 && !appt.surveySent) {
        let msg = `🌟 <b>بازدیدت چطور بود؟</b>\n\nامیدوارم بازدید خوبی بوده باشه 🌹\n\nلطفاً امتیاز بده تا بهتر خدمت کنیم:`;
        await sendToTelegram(env, "sendMessage", {
          chat_id: appt.chatId, text: msg, parse_mode: "HTML",
          reply_markup: { inline_keyboard: [
            [{ text: "⭐", callback_data: `survey_1_${k.name}` }, { text: "⭐⭐", callback_data: `survey_2_${k.name}` }, { text: "⭐⭐⭐", callback_data: `survey_3_${k.name}` }],
            [{ text: "⭐⭐⭐⭐", callback_data: `survey_4_${k.name}` }, { text: "⭐⭐⭐⭐⭐", callback_data: `survey_5_${k.name}` }]
          ]}
        });
        appt.surveySent = true;
        await env.DATA.put(k.name, JSON.stringify(appt), { expirationTtl: 7 * 24 * 3600 });
      }
    } catch (e) {}
  }
}
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/app" && request.method === "GET") { return new Response(renderWebApp(), { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }); }
    if (url.pathname === "/colleague" && request.method === "GET") { return new Response(renderColleagueApp(), { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }); }
    if (url.pathname === "/api/media-info" && request.method === "GET") { return await handleMediaInfo(request, env); }
    if (url.pathname === "/api/submit" && request.method === "POST") { return await handleSubmit(request, env, ctx); }
    if (url.pathname === "/api/colleague-submit" && request.method === "POST") { return await handleColleagueSubmit(request, env, ctx); }
    if (request.method !== "POST") return new Response("Estate Bot is running", { status: 200 });
    try {
      const update = await request.json();
      if (update.callback_query) {
        const cb = update.callback_query;
        const cbChatId = cb.message.chat.id;
        const cbData = cb.data || "";
        const cbUser = cb.from.first_name || "کاربر";
        const cbUsername = cb.from.username || "ندارد";
        const cbLang = await getUserLang(env, cbChatId);
        const ct = TX[cbLang] || TX.fa;
        await sendToTelegram(env, "answerCallbackQuery", { callback_query_id: cb.id });
        
        if (cbData.startsWith("neg_accept_")) {
          const negKey = cbData.replace("neg_accept_", "");
          const neg = await env.DATA.get(negKey, "json");
          if (!neg) { await sendMsg(env, cbChatId, "⚠️ منقضی شده.", null); return new Response("OK"); }
          neg.status = "accepted";
          await env.DATA.put(negKey, JSON.stringify(neg), { expirationTtl: 7 * 24 * 3600 });
          let cm = `🎉 <b>خبر خوب!</b>\n\nمدیر با پیشنهاد شما موافقت کرد.\n\n`;
          if (neg.propertyDesc) cm += `🏠 ${neg.propertyDesc}\n`;
          cm += `💰 قیمت: <b>${neg.customerOffer}</b>\n\n📞 کارشناس ما به زودی باهات تماس می‌گیره.`;
          await sendMsg(env, neg.chatId, cm, null);
          await sendMsg(env, cbChatId, `✅ قبول شد.`, null);
          return new Response("OK");
        }
        if (cbData.startsWith("neg_reject_")) {
          const negKey = cbData.replace("neg_reject_", "");
          const neg = await env.DATA.get(negKey, "json");
          if (!neg) { await sendMsg(env, cbChatId, "⚠️ منقضی شده.", null); return new Response("OK"); }
          neg.status = "rejected";
          await env.DATA.put(negKey, JSON.stringify(neg), { expirationTtl: 7 * 24 * 3600 });
          let cm = `🙏 متأسفانه مدیر موافقت نکرد.\n\n🏠 ${neg.propertyDesc || "ملک"}\n💰 قیمت: <b>${neg.originalPrice || "-"}</b>`;
          await sendMsg(env, neg.chatId, cm, null);
          await sendMsg(env, cbChatId, `❌ رد شد.`, null);
          return new Response("OK");
        }
        if (cbData.startsWith("neg_custom_")) {
          const negKey = cbData.replace("neg_custom_", "");
          await env.DATA.put(`admin_state_${cbChatId}`, JSON.stringify({ mode: "custom_neg_msg", negKey }), { expirationTtl: 3600 });
          await sendMsg(env, cbChatId, `✏️ <b>پیام خودت رو بنویس:</b>`, null);
          return new Response("OK");
        }
        // 🎛️ پنل ادمین
if (cbData.startsWith("admin_") && isAdminUser(cbChatId, env)) {
  if (cbData === "admin_today") {
    const stats = await getTodayStats(env);
    const { todayJ } = getTehranToday();
    const faDate = `${todayJ.jy}/${String(todayJ.jm).padStart(2,"0")}/${String(todayJ.jd).padStart(2,"0")}`;
    let msg = `📊 <b>آمار امروز — ${faDate}</b>\n\n`;
    msg += `👤 کاربر فعال: <b>${stats.today.users || 0}</b>\n`;
    msg += `🏘️ آگهی جدید: <b>${stats.today.listings || 0}</b>\n`;
    msg += `📁 فایل یابی: <b>${stats.today.fileReqs || 0}</b>\n`;
    msg += `📅 قرار بازدید: <b>${stats.today.appts || 0}</b>\n`;
    msg += `👥 همکار جدید: <b>${stats.today.colleagues || 0}</b>\n`;
    msg += `🤝 مذاکره: <b>${stats.today.negotiations || 0}</b>\n\n`;
    msg += `🔥 امروز بریم بترکونیم!`;
    await sendMsg(env, cbChatId, msg, kbAdminPanel());
    return new Response("OK");
  }
  if (cbData === "admin_week") {
    const stats = await getTodayStats(env);
    let msg = `📈 <b>آمار ۷ روز گذشته</b>\n\n`;
    msg += `👤 کاربر فعال: <b>${stats.week.users || 0}</b>\n`;
    msg += `🏘️ آگهی جدید: <b>${stats.week.listings || 0}</b>\n`;
    msg += `📁 فایل یابی: <b>${stats.week.fileReqs || 0}</b>\n`;
    msg += `📅 قرار بازدید: <b>${stats.week.appts || 0}</b>\n`;
    msg += `👥 همکار جدید: <b>${stats.week.colleagues || 0}</b>\n`;
    msg += `🤝 مذاکره: <b>${stats.week.negotiations || 0}</b>\n\n`;
    msg += `💪 هفته‌ی خوبی بود!`;
    await sendMsg(env, cbChatId, msg, kbAdminPanel());
    return new Response("OK");
  }
  if (cbData === "admin_stats") {
    const p = await env.DATA.list({ prefix: "pub_listing_" });
    const l = await env.DATA.list({ prefix: "listing_" });
    const f = await env.DATA.list({ prefix: "file_req_" });
    const ap = await env.DATA.list({ prefix: "appt_" });
    const col = await env.DATA.list({ prefix: "colleague_" });
    const ch = await getChannelId(env);
    let msg = `📊 <b>آمار کامل</b>\n\n`;
    msg += `🏘️ آگهی عمومی: <b>${p.keys.length}</b>\n`;
    msg += `👤 آگهی مشتری: <b>${l.keys.length}</b>\n`;
    msg += `📁 فایل یابی: <b>${f.keys.length}</b>\n`;
    msg += `📅 قرارها: <b>${ap.keys.length}</b>\n`;
    msg += `👥 همکاران: <b>${col.keys.length}</b>\n\n`;
    msg += `🛡️ کانال: ${ch ? "✅ متصل" : "❌ تنظیم نشده"}`;
    await sendMsg(env, cbChatId, msg, kbAdminPanel());
    return new Response("OK");
  }
  if (cbData === "admin_colleagues") {
    const list = await env.DATA.list({ prefix: "colleague_" });
    if (list.keys.length === 0) {
      await sendMsg(env, cbChatId, "👥 <b>لیست همکاران</b>\n\nهنوز همکاری ثبت‌نام نکرده.", kbAdminPanel());
      return new Response("OK");
    }
    let out = `👥 <b>لیست همکاران (${list.keys.length} نفر)</b>\n\n`;
    let n = 0;
    for (const k of list.keys) {
      const c = await env.DATA.get(k.name, "json");
      if (!c) continue;
      n++;
      if (n > 15) { out += `\n... و ${list.keys.length - 15} نفر دیگه`; break; }
      const files = await getColleagueFiles(env, c.chatId);
      out += `${n}. <b>${c.fullName}</b>\n`;
      out += `   🏢 ${c.agencyName}\n`;
      out += `   📞 ${c.mobile}\n`;
      out += `   📁 <b>${files.length}</b> فایل\n`;
      out += `   <a href="tg://user?id=${c.chatId}">💬 پیام</a> | /cfiles_${c.chatId}\n\n`;
    }
    await sendMsg(env, cbChatId, out, kbAdminPanel());
    return new Response("OK");
  }
  if (cbData === "admin_allfiles") {
    const list = await env.DATA.list({ prefix: "colleague_" });
    if (list.keys.length === 0) {
      await sendMsg(env, cbChatId, "📁 <b>همه‌ی فایل‌ها</b>\n\nهنوز همکاری ثبت‌نام نکرده.", kbAdminPanel());
      return new Response("OK");
    }
    let out = "";
    let totalFiles = 0;
    for (const k of list.keys) {
      const c = await env.DATA.get(k.name, "json");
      if (!c) continue;
      const files = await getColleagueFiles(env, c.chatId);
      if (files.length === 0) continue;
      totalFiles += files.length;
      out += `🏢 <b>${c.agencyName}</b>\n`;
      out += `📊 ${files.length} فایل | /cfiles_${c.chatId}\n\n`;
    }
    if (totalFiles === 0) {
      await sendMsg(env, cbChatId, "📁 <b>همه‌ی فایل‌ها</b>\n\nهنوز هیچ همکاری فایل نذاشته.", kbAdminPanel());
      return new Response("OK");
    }
    let header = `📁 <b>فایل‌های همه‌ی همکارها</b>\n📊 مجموع: <b>${totalFiles}</b> فایل\n\n`;
    await sendMsg(env, cbChatId, header + out, kbAdminPanel());
    return new Response("OK");
  }
  if (cbData === "admin_sell") {
    const l = await getListings(env, "sell", "0");
    if (l.length === 0) {
      await sendMsg(env, cbChatId, "🏘️ <b>آگهی‌های فروش</b>\n\nهنوز آگهی فروشی ثبت نشده.", kbAdminPanel());
      return new Response("OK");
    }
    await sendMsg(env, cbChatId, `🏘️ <b>آگهی‌های فروش (${l.length})</b>\n\nدر حال ارسال...`, kbAdminPanel());
    let i = 0;
    for (const x of l.slice(0, 5)) { i++; await showListing(env, cbChatId, cbLang, x, i, x._key); }
    if (l.length > 5) await sendMsg(env, cbChatId, `... و ${l.length - 5} آگهی دیگه`, null);
    return new Response("OK");
  }
  if (cbData === "admin_rent") {
    const l = await getListings(env, "rent", "0");
    if (l.length === 0) {
      await sendMsg(env, cbChatId, "🔑 <b>آگهی‌های رهن و اجاره</b>\n\nهنوز آگهی رهنی ثبت نشده.", kbAdminPanel());
      return new Response("OK");
    }
    await sendMsg(env, cbChatId, `🔑 <b>آگهی‌های رهن (${l.length})</b>\n\nدر حال ارسال...`, kbAdminPanel());
    let i = 0;
    for (const x of l.slice(0, 5)) { i++; await showListing(env, cbChatId, cbLang, x, i, x._key); }
    if (l.length > 5) await sendMsg(env, cbChatId, `... و ${l.length - 5} آگهی دیگه`, null);
    return new Response("OK");
  }
  
  if (cbData === "admin_featured") {
  const l = await getListings(env, "all", "0");
  const featured = l.filter(x => x.featured && x.featuredUntil && x.featuredUntil > Date.now());
  if (featured.length === 0) {
    await sendMsg(env, cbChatId, "💎 <b>آگهی‌های ویژه</b>\n\nهنوز هیچ آگهی ویژه نداری.\n\nبرای ویژه کردن، روی آگهی مورد نظر بزن و دستور /feature_KEY رو بفرست.", kbAdminPanel());
    return new Response("OK");
  }
  let out = `💎 <b>آگهی‌های ویژه (${featured.length})</b>\n\n`;
  for (const f of featured) {
    const remainDays = Math.ceil((f.featuredUntil - Date.now()) / (24*60*60*1000));
    out += `🏘️ ${f.propertyType || "-"} ${f.size || ""}\n`;
    out += `📍 ${sanitizeLocation(f.location_short || f.location || "") || "-"}\n`;
    out += `💰 ${f.price || "-"}\n`;
    out += `⏰ ${remainDays} روز | <code>/unfeature_${f._key}</code>\n\n`;
  }
  await sendMsg(env, cbChatId, out, kbAdminPanel());
  return new Response("OK");
}
  if (cbData === "admin_freqs") {
    const f = await env.DATA.list({ prefix: "file_req_" });
    if (f.keys.length === 0) {
      await sendMsg(env, cbChatId, "📋 <b>فایل یابی‌ها</b>\n\nهنوز درخواست فایل یابی ثبت نشده.", kbAdminPanel());
      return new Response("OK");
    }
    let out = `📋 <b>درخواست‌های فایل یابی (${f.keys.length})</b>\n\n`;
    let n = 0;
    for (const k of f.keys.reverse()) {
      const fr = await env.DATA.get(k.name, "json");
      if (!fr) continue;
      n++;
      if (n > 10) { out += `\n... و ${f.keys.length - 10} درخواست دیگه`; break; }
      out += `${n}. 👤 ${fr.userName || "-"}\n`;
      out += `   📛 @${fr.userUsername || "-"}\n`;
      out += `   <a href="tg://user?id=${fr.chatId}">💬 پیام</a>\n`;
      out += `   📝 ${(fr.details || "-").substring(0, 80)}\n\n`;
    }
    await sendMsg(env, cbChatId, out, kbAdminPanel());
    return new Response("OK");
  }
  if (cbData === "admin_appts") {
    const ap = await env.DATA.list({ prefix: "appt_" });
    if (ap.keys.length === 0) {
      await sendMsg(env, cbChatId, "📅 <b>قرارها</b>\n\nهنوز قراری ثبت نشده.", kbAdminPanel());
      return new Response("OK");
    }
    let out = `📅 <b>قرارها (${ap.keys.length})</b>\n\n`;
    let n = 0;
    for (const k of ap.keys.reverse()) {
      const a = await env.DATA.get(k.name, "json");
      if (!a) continue;
      n++;
      if (n > 10) { out += `\n... و ${ap.keys.length - 10} قرار دیگه`; break; }
      let faDate = a.date;
      try { faDate = new Date(a.date).toLocaleString("fa-IR", { timeZone: "Asia/Tehran" }); } catch (e) {}
      out += `${n}. 👤 ${a.customerName || "-"}\n`;
      out += `   📞 ${a.customerPhone || "-"}\n`;
      out += `   🕐 ${faDate}\n`;
      if (a.propertyDesc) out += `   🏠 ${a.propertyDesc.substring(0, 60)}\n`;
      out += `   <a href="tg://user?id=${a.chatId}">💬 پیام</a>\n\n`;
    }
    await sendMsg(env, cbChatId, out, kbAdminPanel());
    return new Response("OK");
  }
  if (cbData === "admin_reset_me") {
    await env.DATA.delete(`user_role_${cbChatId}`);
    await env.DATA.delete(`session_${cbChatId}`);
    await env.DATA.delete(`webapp_session_${cbChatId}`);
    await env.DATA.delete(`colleague_${cbChatId}`);
    await clearHistory(env, cbChatId);
    await sendMsg(env, cbChatId, "🔄 <b>پروفایل شما ریست شد.</b>\n\nبرای شروع مجدد /start بزنید.", kbAdminPanel());
    return new Response("OK");
  }
  return new Response("OK");
}
  // ❤️ علاقه‌مندی‌ها
if (cbData.startsWith("fav_add_")) {
  const lk = cbData.replace("fav_add_", "");
  const ok = await saveFavorite(env, cbChatId, lk);
  await sendToTelegram(env, "answerCallbackQuery", { callback_query_id: cb.id, text: ok ? "❤️ به علاقه‌مندی‌ها اضافه شد" : "قبلاً ذخیره شده", show_alert: false });
  return new Response("OK");
}
if (cbData.startsWith("fav_del_")) {
  const lk = cbData.replace("fav_del_", "");
  await removeFavorite(env, cbChatId, lk);
  await sendToTelegram(env, "answerCallbackQuery", { callback_query_id: cb.id, text: "🗑️ حذف شد" });
  await showFavorites(env, cbChatId, cbLang);
  return new Response("OK");
}
if (cbData === "show_favorites") {
  await showFavorites(env, cbChatId, cbLang);
  return new Response("OK");
}
// 📝 ثبت آگهی جدید بعد از تایید
if (cbData === "start_new_listing") {
  try { await env.DATA.delete(`session_${cbChatId}`); } catch (e) {}
  try { await env.DATA.delete(`webapp_session_${cbChatId}`); } catch (e) {}
  const s = { active: true, mode: "webapp_media", type: "sell", lang: cbLang, collected: emptyCollected("listing"), isAdminListing: false };
  await env.DATA.put(`session_${cbChatId}`, JSON.stringify(s), { expirationTtl: 3600 });
  await env.DATA.put(`webapp_session_${cbChatId}`, JSON.stringify({ mediaFiles: [], type: "sell" }), { expirationTtl: 3600 });
  await sendMsg(env, cbChatId, TX[cbLang].webappIntro, kbWebAppMedia(cbLang));
  return new Response("OK");
}
if (cbData === "go_consult") {
  try { await env.DATA.delete(`session_${cbChatId}`); } catch (e) {}
  const s = { active: true, mode: "consult", lang: cbLang };
  await env.DATA.put(`session_${cbChatId}`, JSON.stringify(s), { expirationTtl: 3600 });
  await sendMsg(env, cbChatId, TX[cbLang].introConsult, kbSession(cbLang));
  return new Response("OK");
}
// ⭐ نظرسنجی بعد از بازدید
if (cbData.startsWith("survey_")) {
  const parts = cbData.split("_");
  const rating = parseInt(parts[1]);
  const apptKey = parts.slice(2).join("_");
  const appt = await env.DATA.get(apptKey, "json");
  const adminId = await getAdminChatId(env);
  if (adminId && appt) {
    await sendToTelegram(env, "sendMessage", {
      chat_id: adminId,
      text: `⭐ <b>نظرسنجی جدید</b>\n\n👤 ${appt.customerName || "-"}\n🏠 ${appt.propertyDesc || "-"}\n\nامتیاز: ${"⭐".repeat(rating)} (${rating}/۵)`,
      parse_mode: "HTML"
    });
  }
  await sendMsg(env, cbChatId, `🙏 <b>ممنون از امتیازت!</b>\n\nامتیاز ${rating} از ۵ ثبت شد. نظرت برامون خیلی ارزشمنده 🌹`, null);
  return new Response("OK");
} 
// 🔗 اشتراک‌گذاری
if (cbData.startsWith("share_")) {
  const lk = cbData.replace("share_", "");
  const botUser = env.BOT_USERNAME || "emlaknematibot";
  const shareLink = `https://t.me/${botUser}?start=${lk}`;
  const lst = await env.DATA.get(lk, "json");
  let shareMsg = `🔗 <b>لینک اشتراک‌گذاری این ملک:</b>\n\n`;
  if (lst) shareMsg += `🏘️ ${lst.propertyType || "ملک"} ${lst.size || ""}\n📍 ${sanitizeLocation(lst.location_short || lst.location || "") || "-"}\n💰 ${lst.price || "-"}\n\n`;
  shareMsg += `<code>${shareLink}</code>\n\n`;
  shareMsg += `👆 این متن رو کپی کن و برای دوستت بفرست. وقتی روش بزنه، این ملک رو می‌بینه.`;
  await sendMsg(env, cbChatId, shareMsg, null);
  return new Response("OK");
}

// ⚖️ افزودن به مقایسه
if (cbData.startsWith("cmp_add_")) {
  const lk = cbData.replace("cmp_add_", "");
  const res = await addToCompare(env, cbChatId, lk);
  await sendToTelegram(env, "answerCallbackQuery", { callback_query_id: cb.id, text: res.msg, show_alert: true });
  if (res.ok && res.count === 2) {
    await sendMsg(env, cbChatId, "✅ دو ملک آماده‌ی مقایسه شدن! برو از منوی اصلی «⚖️ مقایسه ملک‌ها» رو بزن.", null);
  }
  return new Response("OK");
}

// 🗑️ پاک کردن مقایسه
// ✅ تأیید آگهی توسط ادمین
if (cbData.startsWith("approve_") && isAdminUser(cbChatId, env)) {
  const listingKey = cbData.replace("approve_", "");
  const listing = await env.DATA.get(listingKey, "json");
  if (!listing) {
    await sendMsg(env, cbChatId, "⚠️ آگهی پیدا نشد.", null);
    return new Response("OK");
  }
  listing.pendingApproval = false;
  listing.adminApproved = true;
  await env.DATA.put(listingKey, JSON.stringify(listing));
  
  // ارسال به کانال
  try {
    const cr = await postToChannelWithAI(env, listing, listingKey);
    if (cr.ok) await sendMsg(env, cbChatId, "✅ تأیید شد و به کانال ارسال شد.", null);
    else await sendMsg(env, cbChatId, `⚠️ تأیید شد ولی ارسال به کانال خطا داد: ${cr.error}`, null);
  } catch (e) { await sendMsg(env, cbChatId, `⚠️ خطا: ${e.message}`, null); }
  
  // اعلان به مشتری‌های مناسب
  try { await notifyMatchingCustomers(env, listing); } catch (e) {}
  
  // اطلاع به ثبت‌کننده
  try {
    const approvedMsg = `🎉 <b>خبر خوب!</b>\n\nآگهی شما تأیید شد و به کانال و مشتری‌ها ارسال شد. 🌹\n\n🏘️ ${listing.propertyType} ${listing.size}\n📍 ${sanitizeLocation(listing.location_short || listing.location || "") || "-"}\n💰 ${listing.price || "-"}`;
    await sendMsg(env, listing.chatId, approvedMsg, null);
  } catch (e) {}
  
  return new Response("OK");
}

// ❌ رد آگهی
if (cbData.startsWith("reject_") && isAdminUser(cbChatId, env)) {
  const listingKey = cbData.replace("reject_", "");
  const listing = await env.DATA.get(listingKey, "json");
  if (!listing) {
    await sendMsg(env, cbChatId, "⚠️ آگهی پیدا نشد.", null);
    return new Response("OK");
  }
  listing.pendingApproval = false;
  listing.rejected = true;
  listing.rejectedAt = Date.now();
  await env.DATA.put(listingKey, JSON.stringify(listing), { expirationTtl: 7 * 24 * 3600 });
  await sendMsg(env, cbChatId, "❌ آگهی رد شد (ولی هنوز در دیتابیس هست).\n\nبرای حذف کامل، دکمه «🗑️ حذف کامل» رو بزن.", null);
  
  // اطلاع به مشتری
  try {
    const rejectMsg = `🙏 <b>متأسفانه آگهی شما تأیید نشد.</b>\n\nعلت‌ها می‌تونه اینها باشه:\n• شماره یا آدرس توی عکس‌ها بود\n• عکس‌ها کیفیت مناسبی نداشتن\n• اطلاعات ناقص بود\n\n💬 اگه سوالی داری، با ما تماس بگیر.`;
    await sendMsg(env, listing.chatId, rejectMsg, null);
  } catch (e) {}
  
  return new Response("OK");
}

// 🗑️ حذف کامل آگهی
if (cbData.startsWith("delete_") && isAdminUser(cbChatId, env)) {
  const listingKey = cbData.replace("delete_", "");
  const listing = await env.DATA.get(listingKey, "json");
  if (!listing) {
    await sendMsg(env, cbChatId, "⚠️ آگهی پیدا نشد.", null);
    return new Response("OK");
  }
  await env.DATA.delete(listingKey);
  await sendMsg(env, cbChatId, `🗑️ آگهی «${listing.propertyType || "-"} ${listing.size || ""}» کاملاً حذف شد.`, null);
  return new Response("OK");
}
if (cbData === "cancel_delete" && isAdminUser(cbChatId, env)) {
  await sendMsg(env, cbChatId, "✅ لغو شد. آگهی پاک نشد.", null);
  return new Response("OK");
}
if (cbData === "cmp_clear") {
  await clearCompare(env, cbChatId);
  await sendMsg(env, cbChatId, "🗑️ لیست مقایسه پاک شد.", null);
  return new Response("OK");
}     
// 🗑️ تأیید حذف آگهی
if (cbData.startsWith("delete_") && isAdminUser(cbChatId, env)) {
  const listingKey = cbData.replace("delete_", "");
  const listing = await env.DATA.get(listingKey, "json");
  if (!listing) {
    await sendMsg(env, cbChatId, "⚠️ آگهی پیدا نشد.", null);
    return new Response("OK");
  }
  await env.DATA.delete(listingKey);
  await sendMsg(env, cbChatId, `🗑️ آگهی «${listing.propertyType || "-"} ${listing.size || ""}» کاملاً حذف شد.`, null);
  return new Response("OK");
}

// ❌ لغو حذف
if (cbData === "cancel_delete" && isAdminUser(cbChatId, env)) {
  await sendMsg(env, cbChatId, "✅ لغو شد. آگهی پاک نشد.", null);
  return new Response("OK");
}
// 💎 ویژه کردن آگهی از دکمه
if (cbData.startsWith("feature_") && isAdminUser(cbChatId, env)) {
  const listingKey = cbData.replace("feature_", "");
  const listing = await env.DATA.get(listingKey, "json");
  if (!listing) {
    await sendMsg(env, cbChatId, "⚠️ آگهی پیدا نشد.", null);
    return new Response("OK");
  }
  listing.featured = true;
  listing.featuredUntil = Date.now() + 7 * 24 * 60 * 60 * 1000;
  await env.DATA.put(listingKey, JSON.stringify(listing));
  await sendMsg(env, cbChatId, `💎 آگهی «${listing.propertyType || "-"} ${listing.size || ""}» به مدت ۷ روز ویژه شد.`, null);
  return new Response("OK");
}

// 📋 کپی کلید آگهی
if (cbData.startsWith("copykey_") && isAdminUser(cbChatId, env)) {
  const listingKey = cbData.replace("copykey_", "");
  await sendMsg(env, cbChatId, `📋 کلید آگهی:\n\n<code>${listingKey}</code>\n\n👆 روش بزن تا کپی بشه.`, null);
  return new Response("OK");
}
// ✏️ منوی ویرایش آگهی
if (cbData.startsWith("edit_") && isAdminUser(cbChatId, env)) {
  const listingKey = cbData.replace("edit_", "");
  const listing = await env.DATA.get(listingKey, "json");
  if (!listing) {
    await sendMsg(env, cbChatId, "⚠️ آگهی پیدا نشد.", null);
    return new Response("OK");
  }
  const photoCount = (listing.mediaFiles || []).length;
  const loc = sanitizeLocation(listing.location_short || listing.location || "") || "-";
  let msg = `✏️ <b>ویرایش آگهی</b>\n\n`;
  msg += `🏘️ ${listing.propertyType || "-"} ${listing.size || ""}\n`;
  msg += `📍 ${loc}\n`;
  msg += `💰 ${listing.price || "-"}\n`;
  msg += `📸 تعداد عکس: <b>${photoCount}</b>\n`;
  if (listing.extra_notes) msg += `📝 ${listing.extra_notes.substring(0, 60)}\n`;
  msg += `\n👇 چی رو می‌خوای تغییر بدی؟`;
  const kb = {
    inline_keyboard: [
      [{ text: `📸 مدیریت عکس‌ها (${photoCount})`, callback_data: `editphotos_${listingKey}` }],
      [{ text: "💰 تغییر قیمت", callback_data: `editfield_price_${listingKey}` }],
      [{ text: "📐 تغییر متراژ", callback_data: `editfield_size_${listingKey}` }],
      [{ text: "📝 تغییر توضیحات", callback_data: `editfield_extra_notes_${listingKey}` }],
      [{ text: "🔙 بستن", callback_data: `close_edit` }]
    ]
  };
  await sendMsg(env, cbChatId, msg, kb);
  return new Response("OK");
}

// 📸 مدیریت عکس‌ها
if (cbData.startsWith("editphotos_") && isAdminUser(cbChatId, env)) {
  const listingKey = cbData.replace("editphotos_", "");
  const listing = await env.DATA.get(listingKey, "json");
  if (!listing) { await sendMsg(env, cbChatId, "⚠️ آگهی پیدا نشد.", null); return new Response("OK"); }
  if (!listing.mediaFiles || listing.mediaFiles.length === 0) {
    const kb = { inline_keyboard: [
      [{ text: "➕ افزودن عکس جدید", callback_data: `addphoto_${listingKey}` }],
      [{ text: "🔙 بازگشت", callback_data: `edit_${listingKey}` }]
    ]};
    await sendMsg(env, cbChatId, "📸 این آگهی هیچ عکسی نداره.", kb);
    return new Response("OK");
  }
  
  await sendMsg(env, cbChatId, `📸 <b>مدیریت عکس‌ها</b>\n\n${listing.mediaFiles.length} فایل ضمیمه‌ست. برای حذف هر عکس، دکمه‌ی زیرش رو بزن.`, null);
  
  for (let i = 0; i < listing.mediaFiles.length; i++) {
    const m = listing.mediaFiles[i];
    const kb = { inline_keyboard: [[{ text: `🗑️ حذف این عکس (${i+1})`, callback_data: `delphoto_${i}_${listingKey}` }]] };
    try {
      if (m.type === "photo") {
        await sendToTelegram(env, "sendPhoto", { chat_id: cbChatId, photo: m.fileId, caption: `عکس ${i+1} از ${listing.mediaFiles.length}`, reply_markup: kb });
      } else if (m.type === "video") {
        await sendToTelegram(env, "sendVideo", { chat_id: cbChatId, video: m.fileId, caption: `ویدیو ${i+1} از ${listing.mediaFiles.length}`, reply_markup: kb });
      }
    } catch (e) {}
  }
  
  const addKb = { inline_keyboard: [
    [{ text: "➕ افزودن عکس جدید", callback_data: `addphoto_${listingKey}` }],
    [{ text: "🔙 بازگشت به ویرایش", callback_data: `edit_${listingKey}` }]
  ]};
  await sendMsg(env, cbChatId, "👇 برای مدیریت بیشتر:", addKb);
  return new Response("OK");
}

// 🗑️ حذف یه عکس خاص
if (cbData.startsWith("delphoto_") && isAdminUser(cbChatId, env)) {
  const parts = cbData.replace("delphoto_", "").split("_");
  const photoIdx = parseInt(parts[0]);
  const listingKey = parts.slice(1).join("_");
  const listing = await env.DATA.get(listingKey, "json");
  if (!listing || !listing.mediaFiles) { await sendMsg(env, cbChatId, "⚠️ آگهی پیدا نشد.", null); return new Response("OK"); }
  
  const removed = listing.mediaFiles.splice(photoIdx, 1);
  if (listing.mediaFiles.length > 0) {
    listing.mediaType = listing.mediaFiles[0].type;
    listing.mediaFileId = listing.mediaFiles[0].fileId;
  } else {
    listing.mediaType = null;
    listing.mediaFileId = null;
  }
  await env.DATA.put(listingKey, JSON.stringify(listing));
  await sendMsg(env, cbChatId, `🗑️ عکس حذف شد. الان <b>${listing.mediaFiles.length}</b> فایل باقی مونده.`, null);
  // نمایش مجدد لیست
  const kb = { inline_keyboard: [[{ text: "🔙 بازگشت به مدیریت عکس", callback_data: `editphotos_${listingKey}` }]] };
  await sendMsg(env, cbChatId, "👇", kb);
  return new Response("OK");
}

// ➕ افزودن عکس جدید
if (cbData.startsWith("addphoto_") && isAdminUser(cbChatId, env)) {
  const listingKey = cbData.replace("addphoto_", "");
  await env.DATA.put(`admin_state_${cbChatId}`, JSON.stringify({ mode: "add_photo_to_listing", listingKey }), { expirationTtl: 600 });
  await sendMsg(env, cbChatId, "📸 عکس یا ویدیوی جدید رو بفرست. بعد از ارسال، خودکار به آگهی اضافه میشه.", null);
  return new Response("OK");
}

// 💰/📐/📝 ویرایش فیلد متنی
if (cbData.startsWith("editfield_") && isAdminUser(cbChatId, env)) {
  const parts = cbData.replace("editfield_", "").split("_");
  const field = parts[0];
  const listingKey = parts.slice(1).join("_");
  const listing = await env.DATA.get(listingKey, "json");
  if (!listing) { await sendMsg(env, cbChatId, "⚠️ آگهی پیدا نشد.", null); return new Response("OK"); }
  
  const fieldNames = { price: "قیمت", size: "متراژ", extra_notes: "توضیحات" };
  const currentValues = { price: listing.price, size: listing.size, extra_notes: listing.extra_notes };
  
  await env.DATA.put(`admin_state_${cbChatId}`, JSON.stringify({ mode: "edit_field", listingKey, field }), { expirationTtl: 600 });
  await sendMsg(env, cbChatId, `✏️ <b>تغییر ${fieldNames[field]}</b>\n\nمقدار فعلی: <code>${currentValues[field] || "-"}</code>\n\n👇 مقدار جدید رو بفرست:`, null);
  return new Response("OK");
}

// 🔙 بستن ویرایش
if (cbData === "close_edit") {
  await sendMsg(env, cbChatId, "✅ بسته شد.", null);
  return new Response("OK");
}
if (cbData === "start_wizard") { await sendMsg(env, cbChatId, ct.langPrompt, kbLang()); return new Response("OK"); }
        if (cbData === "role_colleague" || cbData === "role_customer" || cbData === "role_owner") {
          const role = cbData.replace("role_", "");
          await setUserRole(env, cbChatId, role);
          if (role === "colleague") {
            const alreadyRegistered = await isColleagueRegistered(env, cbChatId);
            if (alreadyRegistered) {
              await sendMsg(env, cbChatId, ct.colleagueAlready || TX.fa.colleagueAlready, kbColleagueMenu(cbLang));
              return new Response("OK");
            }
            await sendMsg(env, cbChatId, ct.roleWelcomeColleague || TX.fa.roleWelcomeColleague, kbMain(cbLang));
            await sendMsg(env, cbChatId, ct.colleagueHint || TX.fa.colleagueHint, kbColleagueForm(env, cbLang));
            if (!isAdminUser(cbChatId, env)) {
              await notifyAdmin(env, `🟢 <b>مشاور املاک وارد ربات شد!</b>\n\n👤 ${cbUser}\n📛 @${cbUsername}\n🆔 ${cbChatId}\n\n⏳ منتظر ثبت فرم همکاری...`);
            }
            return new Response("OK");
          }
          let welcomeMsg = "";
          if (role === "customer") welcomeMsg = TX[cbLang].roleWelcomeCustomer || TX.fa.roleWelcomeCustomer;
          else welcomeMsg = TX[cbLang].roleWelcomeOwner || TX.fa.roleWelcomeOwner;
          await sendMsg(env, cbChatId, welcomeMsg, kbMain(cbLang));
          return new Response("OK");
        }
        if (cbData === "fshow_sell_all") { const l = await getListings(env, "sell", "0"); if (l.length === 0) { await sendMsg(env, cbChatId, ct.noListings, kbMain(cbLang)); return new Response("OK"); } let i = 0; for (const x of l.slice(0, 10)) { i++; await showListing(env, cbChatId, cbLang, x, i, x._key); } await sendMsg(env, cbChatId, `${ct.totalListings}: ${l.length}`, kbMain(cbLang)); return new Response("OK"); }
        if (cbData === "fshow_rent_all") { const l = await getListings(env, "rent", "0"); if (l.length === 0) { await sendMsg(env, cbChatId, ct.noListings, kbMain(cbLang)); return new Response("OK"); } let i = 0; for (const x of l.slice(0, 10)) { i++; await showListing(env, cbChatId, cbLang, x, i, x._key); } await sendMsg(env, cbChatId, `${ct.totalListings}: ${l.length}`, kbMain(cbLang)); return new Response("OK"); }
        if (/^fsell_\d$/.test(cbData)) { const code = cbData.split("_")[1]; const l = await getListings(env, "sell", code); if (l.length === 0) { await sendMsg(env, cbChatId, ct.noResults, kbFileRequest(cbLang)); return new Response("OK"); } let i = 0; for (const x of l.slice(0, 10)) { i++; await showListing(env, cbChatId, cbLang, x, i, x._key); } await sendMsg(env, cbChatId, `${ct.totalListings}: ${l.length}`, kbMain(cbLang)); return new Response("OK"); }
        if (/^frent_\d$/.test(cbData)) { const code = cbData.split("_")[1]; const l = await getListings(env, "rent", code); if (l.length === 0) { await sendMsg(env, cbChatId, ct.noResults, kbFileRequest(cbLang)); return new Response("OK"); } let i = 0; for (const x of l.slice(0, 10)) { i++; await showListing(env, cbChatId, cbLang, x, i, x._key); } await sendMsg(env, cbChatId, `${ct.totalListings}: ${l.length}`, kbMain(cbLang)); return new Response("OK"); }
        if (cbData === "filereq_yes") { try { await env.DATA.delete(`session_${cbChatId}`); } catch (e) {} await env.DATA.put(`session_${cbChatId}`, JSON.stringify({ active: true, mode: "file_request", lang: cbLang }), { expirationTtl: 3600 }); await sendMsg(env, cbChatId, ct.fileReqPrompt, kbSession(cbLang)); return new Response("OK"); }
        if (cbData === "filereq_no") { await sendMsg(env, cbChatId, ct.menuPrompt, kbMain(cbLang)); return new Response("OK"); }
        if (cbData.startsWith("req_")) { const lk = cbData.slice(4); const lst = await env.DATA.get(lk, "json"); if (!lst) { await sendMsg(env, cbChatId, ct.listingNotFound, kbMain(cbLang)); return new Response("OK"); } try { await env.DATA.delete(`session_${cbChatId}`); } catch (e) {} await env.DATA.put(`session_${cbChatId}`, JSON.stringify({ active: true, mode: "request_phone", lang: cbLang, listingKey: lk, listingData: lst, userName: cbUser, userUsername: cbUsername }), { expirationTtl: 3600 }); await sendMsg(env, cbChatId, ct.reqAskPhone, kbReqPhone(cbLang)); return new Response("OK"); }
        if (cbData.startsWith("reqtime_")) {
          const sp = cbData.replace("reqtime_", "");
          if (sp === "cancel") { try { await env.DATA.delete(`session_${cbChatId}`); } catch (e) {} await sendMsg(env, cbChatId, ct.cancelled, kbMain(cbLang)); return new Response("OK"); }
          const slot = parseInt(sp); if (![1, 2, 3].includes(slot)) return new Response("OK");
          let session = null; try { session = await env.DATA.get(`session_${cbChatId}`, "json"); } catch (e) {}
          if (!session || session.mode !== "request_time") { await sendMsg(env, cbChatId, ct.listingNotFound, kbMain(cbLang)); return new Response("OK"); }
          const sl = session.lang || cbLang; const st = TX[sl] || TX.fa; const lst = session.listingData || {};
          const tl = lst.type === "sell" ? st.listingTypeSell : st.listingTypeRent;
          const dateISO = computeSlotISO(slot); const slotText = slotLabel(slot, sl);
          await env.DATA.put(`appt_${Date.now()}`, JSON.stringify({ customerKey: "", customerName: session.userName || cbUser, customerPhone: session.phone || "", chatId: cbChatId, date: dateISO, duration: 30, type: "visit", propertyKey: session.listingKey || "", propertyDesc: (lst.propertyType || "") + " - " + (lst.location || ""), note: "📱 رزرو | " + slotText, status: "pending", source: "bot", createdAt: new Date().toISOString() }));
          let m = `📅 رزرو جدید\n\n${tl}\n👤 ${session.userName || cbUser}\n📛 @${session.userUsername || cbUsername}\n`;
          if (session.phone) m += `📞 ${session.phone}\n`;
          m += `🕐 ${slotText}\n\n🏠 ${lst.propertyType || "-"} ${lst.size || ""}\n📍 ${lst.location || "-"}\n💰 ${lst.price || "-"}\n🆔 ${cbChatId}`;
          await notifyAdmin(env, m);
          await sendMsg(env, cbChatId, st.reqWithTime, kbMain(sl));
          await env.DATA.delete(`session_${cbChatId}`);
          return new Response("OK");
        }
        return new Response("OK");
      }
      
      const msg = update.message;
      if (!msg) return new Response("OK");
      const chatId = msg.chat.id;
      const userName = msg.from.first_name || "کاربر";
      const userUsername = msg.from.username || "ندارد";
      const clientLang = msg.from.language_code || "";
      const isAdmin = String(chatId) === String(env.ADMIN_CHAT_ID);
     if (!isAdmin) { ctx.waitUntil(trackActiveUser(env, chatId)); }
 let userLang = await getUserLang(env, chatId);
      const t = TX[userLang] || TX.fa;
      let userText = null;
      let mediaInfo = null;
      let isVoice = false;
      if (msg.photo && msg.photo.length > 0) { const p = msg.photo[msg.photo.length - 1]; mediaInfo = { type: "photo", fileId: p.file_id }; userText = msg.caption ? msg.caption.trim() : ""; }
      else if (msg.video) { mediaInfo = { type: "video", fileId: msg.video.file_id }; userText = msg.caption ? msg.caption.trim() : ""; }
      else if (msg.voice || msg.audio) {
        isVoice = true;
        try {
          const fid = msg.voice ? msg.voice.file_id : msg.audio.file_id;
          const r1 = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/getFile?file_id=${fid}`);
          const d1 = await r1.json();
          const r2 = await fetch(`https://api.telegram.org/file/bot${env.TELEGRAM_TOKEN}/${d1.result.file_path}`);
          const buf = await r2.arrayBuffer();
          const fd = new FormData(); fd.append("file", new Blob([buf], { type: "audio/ogg" }), "voice.ogg"); fd.append("model", "whisper-large-v3"); fd.append("language", "fa"); fd.append("temperature", "0");
          const wr = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", { method: "POST", headers: { "Authorization": `Bearer ${env.GROQ_API_KEY}` }, body: fd });
          const wd = await wr.json(); userText = wd.text || "";
          if (!userText) { await sendMsg(env, chatId, t.voiceErr, kbMain(userLang)); return new Response("OK"); }
        } catch (e) { await sendMsg(env, chatId, t.voiceErr, kbMain(userLang)); return new Response("OK"); }
      } else { userText = msg.text ? msg.text.trim() : null; if (!userText) return new Response("OK"); }
      
      if (isAdmin && !mediaInfo && userText) {
  try {
  const adminState = await env.DATA.get(`admin_state_${chatId}`, "json");
  
  // ➕ افزودن عکس به آگهی
  if (adminState && adminState.mode === "add_photo_to_listing" && mediaInfo) {
    const listing = await env.DATA.get(adminState.listingKey, "json");
    if (listing) {
      listing.mediaFiles = listing.mediaFiles || [];
      listing.mediaFiles.push({ type: mediaInfo.type, fileId: mediaInfo.fileId, ts: Date.now() });
      if (listing.mediaFiles.length === 1) {
        listing.mediaType = mediaInfo.type;
        listing.mediaFileId = mediaInfo.fileId;
      }
      await env.DATA.put(adminState.listingKey, JSON.stringify(listing));
      await sendMsg(env, chatId, `✅ عکس اضافه شد. الان <b>${listing.mediaFiles.length}</b> فایل ضمیمه‌ست.`, null);
      await env.DATA.delete(`admin_state_${chatId}`);
      const kb = { inline_keyboard: [[{ text: "🔙 بازگشت به مدیریت عکس", callback_data: `editphotos_${adminState.listingKey}` }]] };
      await sendMsg(env, chatId, "👇", kb);
    }
    return new Response("OK");
  }
  
  // ✏️ ویرایش فیلد متنی
  if (adminState && adminState.mode === "edit_field" && userText) {
    const listing = await env.DATA.get(adminState.listingKey, "json");
    if (listing) {
      listing[adminState.field] = userText;
      if (adminState.field === "price" && listing.type === "sell") {
        listing.price_per_meter = calculatePricePerMeter(userText, listing.size || "");
      }
      await env.DATA.put(adminState.listingKey, JSON.stringify(listing));
      await sendMsg(env, chatId, `✅ به روز شد.`, null);
      await env.DATA.delete(`admin_state_${chatId}`);
      const kb = { inline_keyboard: [[{ text: "🔙 بازگشت به ویرایش", callback_data: `edit_${adminState.listingKey}` }]] };
      await sendMsg(env, chatId, "👇", kb);
    }
    return new Response("OK");
  }
} catch (e) {}     
 try {
          const adminState = await env.DATA.get(`admin_state_${chatId}`, "json");
          if (adminState && adminState.mode === "custom_neg_msg") {
            const neg = await env.DATA.get(adminState.negKey, "json");
            if (neg && neg.chatId) { await sendMsg(env, neg.chatId, `💬 <b>پیام از مدیر:</b>\n\n${userText}`, null); neg.status = "custom"; neg.adminReply = userText; await env.DATA.put(adminState.negKey, JSON.stringify(neg), { expirationTtl: 7 * 24 * 3600 }); await env.DATA.delete(`admin_state_${chatId}`); await sendMsg(env, chatId, `✅ ارسال شد.`, null); }
            else { await env.DATA.delete(`admin_state_${chatId}`); await sendMsg(env, chatId, `⚠️ مشتری پیدا نشد.`, null); }
            return new Response("OK");
          }
        } catch (e) {}
      }
      
      let session = null;
      try { session = await env.DATA.get(`session_${chatId}`, "json"); } catch (e) {}
      
      // ═══ دستورات ادمین ═══
      if (userText === "/test-alert" && isAdmin) { const adminId = await getAdminChatId(env); if (!adminId) { await sendMsg(env, chatId, `❌ ADMIN_CHAT_ID نیست.`, kbMain(userLang)); return new Response("OK"); } const testOk = await alertAdminSerious(env, chatId, userName, userUsername, userText, "🧪 تست"); await sendMsg(env, chatId, testOk ? `✅ ارسال شد.` : `❌ ناموفق.`, kbMain(userLang)); return new Response("OK"); }
      if (userText === "/check-alert" && isAdmin) { const adminId = await getAdminChatId(env); let result = `🔍 <b>وضعیت</b>\n\nADMIN_CHAT_ID: ${env.ADMIN_CHAT_ID ? "✅ " + env.ADMIN_CHAT_ID : "❌"}\n`; try { const kvId = await env.DATA.get("admin_chat_id"); result += `KV: ${kvId ? "✅ " + kvId : "❌"}\n`; } catch (e) {} result += `\n🎯 نهایی: ${adminId ? "✅ " + adminId : "❌"}`; await sendMsg(env, chatId, result, kbMain(userLang)); return new Response("OK"); }
      
      // ═══ /reset ═══
      if (userText === "/reset" && !mediaInfo && !isVoice) {
        try { await env.DATA.delete(`user_role_${chatId}`); } catch (e) {}
        try { await env.DATA.delete(`session_${chatId}`); } catch (e) {}
        try { await env.DATA.delete(`webapp_session_${chatId}`); } catch (e) {}
        await clearHistory(env, chatId);
        const rt = TX[userLang] || TX.fa;
        await sendMsg(env, chatId, rt.resetDone || "🔄 ریست شد.\n\n/start بزنید.", kbWelcome());
        return new Response("OK");
      }
      
      // ═══ /start ═══
      if ((userText === "/start" || userText.startsWith("/start ")) && !mediaInfo && !isVoice) {
  const startPayload = userText.startsWith("/start ") ? userText.slice(7).trim() : "";
        try { await env.DATA.delete(`session_${chatId}`); } catch (e) {}
        await clearHistory(env, chatId);
        const det = detectLang("", clientLang);
        userLang = det;
        await setUserLang(env, chatId, det);
        
// 🔗 اگه از لینک اشتراک‌گذاری اومده، ملک رو نشون بده
if (startPayload && (startPayload.startsWith("pub_listing_") || startPayload.startsWith("listing_"))) {
  try {
    const sharedListing = await env.DATA.get(startPayload, "json");
    if (sharedListing) {
      await sendMsg(env, chatId, "🏘️ این ملکی بود که دوستت برات فرستاده 👇", null);
      await showListing(env, chatId, userLang, sharedListing, 1, startPayload);
    }
  } catch (e) {}
}
        const existingRole = await getUserRole(env, chatId);
        if (existingRole) {
          if (existingRole === "colleague") {
            const isReg = await isColleagueRegistered(env, chatId);
            if (!isReg) {
              await sendMsg(env, chatId, TX[det].welcome, kbMain(det));
              await sendMsg(env, chatId, TX[det].colleagueHint || TX.fa.colleagueHint, kbColleagueForm(env, det));
              return new Response("OK");
            }
            // 🎯 منوی همکار
            const colData = await getColleagueData(env, chatId);
            let welcomeMsg = `🏢 <b>خوش اومدی ${colData?.fullName || "همکار"} عزیز</b> 🌹\n\n`;
            welcomeMsg += `از منوی زیر می‌تونی استفاده کنی:`;
            await sendMsg(env, chatId, welcomeMsg, kbColleagueMenu(det));
            return new Response("OK");
          }
          await sendMsg(env, chatId, TX[det].welcome, kbMain(det));
        } else {
          await sendMsg(env, chatId, TX[det].welcome + "\n\n" + TX[det].langPrompt, kbLang());
          if (!isAdmin) await notifyAdmin(env, `👤 کاربر جدید وارد شد\n${userName}\n@${userUsername}\nچت: ${chatId}`);
          if (isAdmin) { try { await sendMsg(env, chatId, "🎛️ برای دسترسی به پنل مدیریت: /admin", null); } catch (e) {} }
        }
        return new Response("OK");
      }
      
      // ═══ /stats ═══
      if (userText === "/admin" && isAdmin && !mediaInfo) {
  let msg = `🎛️ <b>پنل مدیریت املاک نعمتی</b>\n\n`;
  msg += `👋 سلام مدیر عزیز\n`;
  msg += `یکی از گزینه‌ها رو انتخاب کن 👇`;
  await sendMsg(env, chatId, msg, kbAdminPanel());
  return new Response("OK");
}
if (userText === "/today" && isAdmin) {
  const stats = await getTodayStats(env);
  const { todayJ } = getTehranToday();
  const faDate = `${todayJ.jy}/${String(todayJ.jm).padStart(2,"0")}/${String(todayJ.jd).padStart(2,"0")}`;
  let msg = `📊 <b>آمار امروز — ${faDate}</b>\n\n`;
  msg += `👤 کاربر فعال: <b>${stats.today.users || 0}</b>\n`;
  msg += `🏘️ آگهی جدید: <b>${stats.today.listings || 0}</b>\n`;
  msg += `📁 فایل یابی: <b>${stats.today.fileReqs || 0}</b>\n`;
  msg += `📅 قرار بازدید: <b>${stats.today.appts || 0}</b>\n`;
  msg += `👥 همکار جدید: <b>${stats.today.colleagues || 0}</b>\n`;
  msg += `🤝 مذاکره: <b>${stats.today.negotiations || 0}</b>\n`;
  await sendMsg(env, chatId, msg, kbAdminPanel());
  return new Response("OK");
}
if (userText === "/stats" && isAdmin) {
        const p = await env.DATA.list({ prefix: "pub_listing_" });
        const l = await env.DATA.list({ prefix: "listing_" });
        const f = await env.DATA.list({ prefix: "file_req_" });
        const ap = await env.DATA.list({ prefix: "appt_" });
        const col = await env.DATA.list({ prefix: "colleague_" });
        const ch = await getChannelId(env);
        await sendMsg(env, chatId, `آمار\n\nآگهی: ${p.keys.length}\nمشتری: ${l.keys.length}\nفایل: ${f.keys.length}\nقرار: ${ap.keys.length}\n👥 همکاران: ${col.keys.length}\n\n🛡️ کانال: ${ch ? "✅ " + ch : "❌"}`, kbMain(userLang));
        return new Response("OK");
      }
      
      // ═══ /colleagues ═══
   // 💎 ویژه کردن آگهی
// 🗑️ حذف کامل آگهی (فقط ادمین)
if (userText.startsWith("/delete_") && isAdmin) {
  const listingKey = userText.replace("/delete_", "").trim();
  const listing = await env.DATA.get(listingKey, "json");
  if (!listing) { await sendMsg(env, chatId, "⚠️ آگهی پیدا نشد.", kbMain(userLang)); return new Response("OK"); }
  const kb = {
    inline_keyboard: [[
      { text: "✅ بله، حذف کن", callback_data: `delete_${listingKey}` },
      { text: "❌ لغو", callback_data: `cancel_delete` }
    ]]
  };
  await sendMsg(env, chatId, `🗑️ <b>حذف آگهی</b>\n\n🏘️ ${listing.propertyType || "-"} ${listing.size || ""}\n📍 ${sanitizeLocation(listing.location_short || listing.location || "") || "-"}\n💰 ${listing.price || "-"}\n\n⚠️ مطمئنی می‌خوای کاملاً حذف بشه؟`, kb);
  return new Response("OK");
}
if (userText === "/pending" && isAdmin) {
  const list = await env.DATA.list({ prefix: "pub_listing_" });
  const pending = [];
  for (const k of list.keys) {
    const l = await env.DATA.get(k.name, "json");
    if (l && l.pendingApproval) pending.push({ ...l, _key: k.name });
  }
  if (pending.length === 0) {
    await sendMsg(env, chatId, "✅ <b>آگهی در انتظار تأیید</b>\n\nهیچ آگهی در انتظار تأیید نیست.", kbMain(userLang));
    return new Response("OK");
  }
  let out = `🔔 <b>آگهی‌های در انتظار تأیید (${pending.length})</b>\n\n`;
  for (const p of pending) {
    out += `🏘️ ${p.propertyType || "-"} ${p.size || ""}\n`;
    out += `📍 ${sanitizeLocation(p.location_short || p.location || "") || "-"}\n`;
    out += `👤 ${p.name || "-"}\n`;
    out += `🗑️ /delete_${p._key}\n\n`;
  }
  await sendMsg(env, chatId, out, kbMain(userLang));
  return new Response("OK");
}
// 🗑️ حذف آگهی
if (userText.startsWith("/delete_") && isAdmin) {
  const listingKey = userText.replace("/delete_", "").trim();
  const listing = await env.DATA.get(listingKey, "json");
  if (!listing) { 
    await sendMsg(env, chatId, "⚠️ آگهی پیدا نشد.", kbMain(userLang)); 
    return new Response("OK"); 
  }
  const kb = {
    inline_keyboard: [[
      { text: "✅ بله، حذف کن", callback_data: `delete_${listingKey}` },
      { text: "❌ لغو", callback_data: `cancel_delete` }
    ]]
  };
  await sendMsg(env, chatId, 
    `🗑️ <b>حذف آگهی</b>\n\n🏘️ ${listing.propertyType || "-"} ${listing.size || ""}\n📍 ${sanitizeLocation(listing.location_short || listing.location || "") || "-"}\n💰 ${listing.price || "-"}\n\n⚠️ مطمئنی می‌خوای کاملاً حذف بشه؟`, 
    kb
  );
  return new Response("OK");
}

// 📋 لیست آگهی‌های در انتظار
if (userText === "/pending" && isAdmin) {
  const list = await env.DATA.list({ prefix: "pub_listing_" });
  const pending = [];
  for (const k of list.keys) {
    const l = await env.DATA.get(k.name, "json");
    if (l && l.pendingApproval) pending.push({ ...l, _key: k.name });
  }
  if (pending.length === 0) {
    await sendMsg(env, chatId, "✅ <b>آگهی در انتظار تأیید</b>\n\nهیچ آگهی در انتظار تأیید نیست.", kbMain(userLang));
    return new Response("OK");
  }
  let out = `🔔 <b>آگهی‌های در انتظار تأیید (${pending.length})</b>\n\n`;
  for (const p of pending) {
    out += `🏘️ ${p.propertyType || "-"} ${p.size || ""}\n`;
    out += `📍 ${sanitizeLocation(p.location_short || p.location || "") || "-"}\n`;
    out += `👤 ${p.name || "-"}\n`;
    out += `🗑️ <code>/delete_${p._key}</code>\n\n`;
  }
  await sendMsg(env, chatId, out, kbMain(userLang));
  return new Response("OK");
}
if (userText.startsWith("/feature_") && isAdmin) {
  const fileKey = userText.replace("/feature_", "").trim();
  const f = await env.DATA.get(fileKey, "json");
  if (!f) { await sendMsg(env, chatId, "⚠️ فایل پیدا نشد.", kbMain(userLang)); return new Response("OK"); }
  const days = 7;
  f.featured = true;
  f.featuredUntil = Date.now() + days * 24 * 60 * 60 * 1000;
  await env.DATA.put(fileKey, JSON.stringify(f));
  await sendMsg(env, chatId, `💎 <b>آگهی ویژه شد!</b>\n\n🏘️ ${f.propertyType || "-"} ${f.size || ""}\n📍 ${sanitizeLocation(f.location_short || f.location || "") || "-"}\n\n⏰ مدت: ${days} روز\n🔗 کلید: <code>${fileKey}</code>`, kbMain(userLang));
  return new Response("OK");
}

// ❌ حذف ویژه
if (userText.startsWith("/unfeature_") && isAdmin) {
  const fileKey = userText.replace("/unfeature_", "").trim();
  const f = await env.DATA.get(fileKey, "json");
  if (!f) { await sendMsg(env, chatId, "⚠️ فایل پیدا نشد.", kbMain(userLang)); return new Response("OK"); }
  f.featured = false;
  f.featuredUntil = 0;
  await env.DATA.put(fileKey, JSON.stringify(f));
  await sendMsg(env, chatId, `❌ آگهی از حالت ویژه خارج شد.`, kbMain(userLang));
  return new Response("OK");
}

// 💎 لیست آگهی‌های ویژه
if (userText === "/featured" && isAdmin) {
  const l = await getListings(env, "all", "0");
  const featured = l.filter(x => x.featured && x.featuredUntil && x.featuredUntil > Date.now());
  if (featured.length === 0) {
    await sendMsg(env, chatId, "💎 <b>آگهی‌های ویژه</b>\n\nهنوز هیچ آگهی ویژه نداری.\n\nبرای ویژه کردن، از دستور /feature_KEY استفاده کن.", kbMain(userLang));
    return new Response("OK");
  }
  let out = `💎 <b>آگهی‌های ویژه (${featured.length})</b>\n\n`;
  for (const f of featured) {
    const remainDays = Math.ceil((f.featuredUntil - Date.now()) / (24*60*60*1000));
    out += `🏘️ ${f.propertyType || "-"} ${f.size || ""}\n`;
    out += `📍 ${sanitizeLocation(f.location_short || f.location || "") || "-"}\n`;
    out += `💰 ${f.price || "-"}\n`;
    out += `⏰ ${remainDays} روز باقی‌مانده\n`;
    out += `🔗 /unfeature_${f._key}\n\n`;
  }
  await sendMsg(env, chatId, out, kbMain(userLang));
  return new Response("OK");
}   
if (userText === "/colleagues" && isAdmin) {
  const list = await env.DATA.list({ prefix: "colleague_" });
  if (list.keys.length === 0) { await sendMsg(env, chatId, "📋 هنوز همکاری ثبت‌نام نکرده.", kbMain(userLang)); return new Response("OK"); }
  let out = `👥 <b>لیست همکاران (${list.keys.length} نفر)</b>\n\n`;
  let n = 0;
  for (const k of list.keys) {
    const c = await env.DATA.get(k.name, "json");
    if (!c) continue;
    n++;
    if (n > 15) { out += `\n... و ${list.keys.length - 15} نفر دیگه`; break; }
    const files = await getColleagueFiles(env, c.chatId);
    out += `${n}. <b>${c.fullName}</b> — @${c.username}\n`;
    out += `   📞 ${c.mobile} | 🏢 ${c.agencyName}\n`;
    out += `   📁 <b>${files.length}</b> فایل\n`;
    out += `   /cfiles_${c.chatId}\n\n`;
  }
  out += `💡 برای دیدن فایل‌های هر همکار، روی دستورش بزن.`;
  await sendMsg(env, chatId, out, kbMain(userLang));
  return new Response("OK");
}
// 📁 لیست همه‌ی فایل‌های همکارها
if (userText === "/cfiles" && isAdmin) {
  const list = await env.DATA.list({ prefix: "colleague_" });
  if (list.keys.length === 0) { await sendMsg(env, chatId, "📋 هنوز همکاری ثبت‌نام نکرده.", kbMain(userLang)); return new Response("OK"); }
  let out = "";
  let totalFiles = 0;
  for (const k of list.keys) {
    const c = await env.DATA.get(k.name, "json");
    if (!c) continue;
    const files = await getColleagueFiles(env, c.chatId);
    if (files.length === 0) continue;
    totalFiles += files.length;
    out += `🏢 <b>${c.agencyName}</b> — ${c.fullName}\n`;
    out += `📊 ${files.length} فایل:\n`;
    let fi = 0;
    for (const f of files.slice(0, 5)) {
      fi++;
      const typeLabel = f.type === "rent" ? "🔑" : "💰";
      out += `   ${fi}. ${typeLabel} ${f.propertyType || "-"} ${f.size || ""}\n`;
      out += `      📍 ${f.location_short || f.location || "-"}\n`;
      if (f.price) out += `      💵 ${f.price}\n`;
    }
    if (files.length > 5) out += `   ... و ${files.length - 5} فایل دیگه\n`;
    out += `   /cfiles_${c.chatId}\n\n`;
  }
  if (totalFiles === 0) { await sendMsg(env, chatId, "📁 هیچ فایلی از همکارها ثبت نشده.", kbMain(userLang)); return new Response("OK"); }
  let header = `📁 <b>فایل‌های همه‌ی همکارها</b>\n📊 مجموع: <b>${totalFiles}</b> فایل\n\n`;
  await sendMsg(env, chatId, header + out, kbMain(userLang));
  return new Response("OK");
}
// 📁 فایل‌های یه همکار خاص
if (userText.startsWith("/cfiles_") && isAdmin) {
  const targetId = userText.replace("/cfiles_", "").trim();
  if (!targetId) { await sendMsg(env, chatId, "⚠️ آیدی معتبر نیست.", kbMain(userLang)); return new Response("OK"); }
  const col = await env.DATA.get(`colleague_${targetId}`, "json");
  if (!col) { await sendMsg(env, chatId, "⚠️ این همکار پیدا نشد.", kbMain(userLang)); return new Response("OK"); }
  const files = await getColleagueFiles(env, targetId);
  if (files.length === 0) { await sendMsg(env, chatId, `📁 <b>${col.agencyName}</b> — ${col.fullName}\n\nهنوز فایلی ثبت نکرده.`, kbMain(userLang)); return new Response("OK"); }
  let out = `🏢 <b>${col.agencyName}</b> — ${col.fullName}\n`;
  out += `📞 ${col.mobile} | 📛 @${col.username}\n`;
  out += `📊 <b>${files.length}</b> فایل\n`;
  out += `━━━━━━━━━━━━━━\n\n`;
  let fi = 0;
  for (const f of files.slice(0, 10)) {
    fi++;
    const typeLabel = f.type === "rent" ? "🔑 رهن" : "💰 فروش";
    out += `${fi}. <b>${f.propertyType || "-"}</b> — ${typeLabel}\n`;
    out += `   📐 ${f.size || "-"} | 📍 ${f.location_short || f.location || "-"}\n`;
    if (f.price) out += `   💵 ${f.price}\n`;
    if (f.rooms) out += `   🛏️ ${f.rooms} | 🏢 ${f.floor || "-"}\n`;
    if (f.amenities) out += `   ✨ ${f.amenities}\n`;
    if (f.year_built) out += `   🏗️ سال: ${f.year_built}\n`;
    out += `   /file_${f._key}\n\n`;
  }
  if (files.length > 10) out += `... و ${files.length - 10} فایل دیگه\n`;
  out += `\n💡 برای جزئیات کامل: /file_&lt;key&gt;`;
  await sendMsg(env, chatId, out, kbMain(userLang));
  return new Response("OK");
}
// 📄 جزئیات یه فایل خاص
if (userText.startsWith("/file_") && isAdmin) {
  const fileKey = userText.replace("/file_", "").trim();
  const f = await env.DATA.get(fileKey, "json");
  if (!f) { await sendMsg(env, chatId, "⚠️ فایل پیدا نشد.", kbMain(userLang)); return new Response("OK"); }
  let out = `📄 <b>جزئیات فایل</b>\n\n`;
  out += `🏢 آژانس: <b>${f.colleagueAgency || "نامشخص"}</b>\n`;
  out += `👤 نام: ${f.name || "-"}\n`;
  out += `📞 تماس: ${f.phone || "-"}\n`;
  out += `📛 یوزرنیم: @${f.username || "-"}\n`;
  out += `🆔 چت: ${f.chatId || "-"}\n\n`;
  out += `━━━━━━━━━━━━━━\n\n`;
  out += `🏘️ نوع: ${f.propertyType || "-"}\n`;
  out += `🔄 معامله: ${f.type === "rent" ? "رهن و اجاره" : "فروش"}\n`;
  if (f.size) out += `📐 متراژ: ${f.size}\n`;
  if (f.year_built) out += `🏗️ سال ساخت: ${f.year_built}\n`;
  if (f.rooms) out += `🛏️ اتاق: ${f.rooms}\n`;
  if (f.floor) out += `🏢 طبقه: ${f.floor}\n`;
  if (f.amenities) out += `✨ امکانات: ${f.amenities}\n`;
  if (f.document) out += `📄 سند: ${f.document}\n`;
  if (f.location) out += `📍 آدرس کامل: ${f.location}\n`;
  if (f.location_short) out += `🗺️ محله: ${f.location_short}\n`;
  if (f.price) out += `💰 قیمت: ${f.price}\n`;
  if (f.price_per_meter) out += `📊 هر متر: ${f.price_per_meter}\n`;
  if (f.extra_notes) out += `📝 توضیحات: ${f.extra_notes}\n`;
  out += `\n📅 تاریخ: ${new Date(f.date).toLocaleDateString("fa-IR")}`;
  await sendMsg(env, chatId, out, kbMain(userLang));
  return new Response("OK");
}
      if (userText === "/add" && isAdmin && !mediaInfo) { try { await env.DATA.delete(`session_${chatId}`); } catch (e) {} const s = { active: true, mode: "listing", type: "sell", lang: "fa", collected: emptyCollected("listing"), isAdminListing: true, lastAskedField: "propertyType" }; await env.DATA.put(`session_${chatId}`, JSON.stringify(s), { expirationTtl: 3600 }); await sendMsg(env, chatId, TX.fa.introSell + "\n\n" + TX.fa.qPropertyTypeSell, kbSession("fa")); return new Response("OK"); }
      if (userText === "/addrent" && isAdmin && !mediaInfo) { try { await env.DATA.delete(`session_${chatId}`); } catch (e) {} const s = { active: true, mode: "listing", type: "rent", lang: "fa", collected: emptyCollected("listing"), isAdminListing: true, lastAskedField: "propertyType" }; await env.DATA.put(`session_${chatId}`, JSON.stringify(s), { expirationTtl: 3600 }); await sendMsg(env, chatId, TX.fa.introListRent + "\n\n" + TX.fa.qPropertyTypeRent, kbSession("fa")); return new Response("OK"); }
      
      // ═══ session: webapp_media ═══
      if (session && session.active && session.mode === "webapp_media") {
        const sl = session.lang || userLang;
        const st = TX[sl] || TX.fa;
        if (isCancel(userText)) { try { await env.DATA.delete(`session_${chatId}`); } catch (e) {} try { await env.DATA.delete(`webapp_session_${chatId}`); } catch (e) {} await sendMsg(env, chatId, st.cancelled, kbMain(sl)); return new Response("OK"); }
        if (mediaInfo) {
          const webapp = await env.DATA.get(`webapp_session_${chatId}`, "json") || { mediaFiles: [] };
          webapp.mediaFiles = webapp.mediaFiles || [];
          webapp.mediaFiles.push({ type: mediaInfo.type, fileId: mediaInfo.fileId, ts: Date.now() });
          await env.DATA.put(`webapp_session_${chatId}`, JSON.stringify(webapp), { expirationTtl: 3600 });
          if (!isAdmin && env.ADMIN_CHAT_ID) { try { await sendToTelegram(env, "forwardMessage", { chat_id: env.ADMIN_CHAT_ID, from_chat_id: chatId, message_id: msg.message_id }); } catch (e) {} }
          const confirmMsg = st.webappMediaReceived.replace("{count}", String(webapp.mediaFiles.length));
          await sendMsg(env, chatId, confirmMsg, kbWebAppMedia(sl));
          return new Response("OK");
        }
        if (userText === st.webappBtnDone || userText === st.webappBtnSkip) {
          const webapp = await env.DATA.get(`webapp_session_${chatId}`, "json") || { mediaFiles: [] };
          const hasMedia = (webapp.mediaFiles || []).length > 0;
          const introMsg = hasMedia ? st.webappMediaIntro : st.webappNoMedia;
          session.mode = "webapp_ready";
          session.mediaCount = (webapp.mediaFiles || []).length;
          await env.DATA.put(`session_${chatId}`, JSON.stringify(session), { expirationTtl: 3600 });
          await sendMsg(env, chatId, introMsg, kbMain(sl));
          await sendMsg(env, chatId, st.webappHint, kbWebAppForm(env, sl));
          return new Response("OK");
        }
        await sendMsg(env, chatId, st.webappIntro, kbWebAppMedia(sl));
        return new Response("OK");
      }
      
      // ═══ session: webapp_ready ═══
      if (session && session.active && session.mode === "webapp_ready") {
        const sl = session.lang || userLang;
        const st = TX[sl] || TX.fa;
        if (mediaInfo) {
          const webapp = await env.DATA.get(`webapp_session_${chatId}`, "json") || { mediaFiles: [] };
          webapp.mediaFiles = webapp.mediaFiles || [];
          webapp.mediaFiles.push({ type: mediaInfo.type, fileId: mediaInfo.fileId, ts: Date.now() });
          await env.DATA.put(`webapp_session_${chatId}`, JSON.stringify(webapp), { expirationTtl: 3600 });
          if (!isAdmin && env.ADMIN_CHAT_ID) { try { await sendToTelegram(env, "forwardMessage", { chat_id: env.ADMIN_CHAT_ID, from_chat_id: chatId, message_id: msg.message_id }); } catch (e) {} }
          const confirmMsg = st.webappMediaReceived.replace("{count}", String(webapp.mediaFiles.length));
          await sendMsg(env, chatId, confirmMsg, kbWebAppMedia(sl));
          await sendMsg(env, chatId, st.webappHint, kbWebAppForm(env, sl));
          return new Response("OK");
        }
        if (userText && isCancel(userText)) { try { await env.DATA.delete(`session_${chatId}`); } catch (e) {} try { await env.DATA.delete(`webapp_session_${chatId}`); } catch (e) {} await sendMsg(env, chatId, st.cancelled, kbMain(sl)); return new Response("OK"); }
        if (userText) { await sendMsg(env, chatId, st.webappHint, kbWebAppForm(env, sl)); return new Response("OK"); }
        return new Response("OK");
      }
      
      if (isCancel(userText) && !mediaInfo) { try { await env.DATA.delete(`session_${chatId}`); } catch (e) {} await sendMsg(env, chatId, t.cancelled, kbMain(userLang)); return new Response("OK"); }
      if (isBack(userText) && !mediaInfo) { try { await env.DATA.delete(`session_${chatId}`); } catch (e) {} await sendMsg(env, chatId, t.backToMenu, kbMain(userLang)); return new Response("OK"); }
      
      // ═══ انتخاب زبان ═══
      if (!mediaInfo && !isVoice && userText) {
        if (userText === "فارسی" || userText === "Persian" || userText === "الفارسية") {
          await setUserLang(env, chatId, "fa");
          const existingRole = await getUserRole(env, chatId);
          if (existingRole) {
            if (existingRole === "colleague") {
              const isReg = await isColleagueRegistered(env, chatId);
              if (isReg) { await sendMsg(env, chatId, "🏢 منوی همکار:", kbColleagueMenu("fa")); return new Response("OK"); }
              await sendMsg(env, chatId, TX.fa.colleagueHint, kbColleagueForm(env, "fa"));
              return new Response("OK");
            }
            await sendMsg(env, chatId, TX.fa.langLabel + "\n\n" + TX.fa.menuPrompt, kbMain("fa"));
          } else { await sendMsg(env, chatId, TX.fa.rolePrompt, kbRoleSelect()); }
          return new Response("OK");
        }
        if (userText === "عربی" || userText === "Arabic" || userText === "العربية") {
          await setUserLang(env, chatId, "ar");
          const existingRole = await getUserRole(env, chatId);
          if (existingRole) { await sendMsg(env, chatId, TX.ar.langLabel + "\n\n" + TX.ar.menuPrompt, kbMain("ar")); }
          else { await sendMsg(env, chatId, TX.ar.rolePrompt || TX.fa.rolePrompt, kbRoleSelect()); }
          return new Response("OK");
        }
        if (userText === "English") {
          await setUserLang(env, chatId, "en");
          const existingRole = await getUserRole(env, chatId);
          if (existingRole) { await sendMsg(env, chatId, TX.en.langLabel + "\n\n" + TX.en.menuPrompt, kbMain("en")); }
          else { await sendMsg(env, chatId, TX.en.rolePrompt || TX.fa.rolePrompt, kbRoleSelect()); }
          return new Response("OK");
        }
      }
      
      // ═══ session: request_phone ═══
      if (session && session.active && session.mode === "request_phone" && !mediaInfo && userText) {
        const sl = session.lang || userLang;
        const st = TX[sl] || TX.fa;
        let phone = null;
        if (!isSkip(userText)) { phone = exPhone(userText); if (!phone) { await sendMsg(env, chatId, st.noPhoneFound, kbReqPhone(sl)); return new Response("OK"); } }
        session.mode = "request_time"; session.phone = phone || "";
        await env.DATA.put(`session_${chatId}`, JSON.stringify(session), { expirationTtl: 3600 });
        await sendMsg(env, chatId, st.askTime, kbTimePicker(sl));
        return new Response("OK");
      }
      
      // ═══ session: file_request ═══
      if (session && session.active && session.mode === "file_request" && !mediaInfo && userText) {
        const sl = session.lang || userLang;
        const st = TX[sl] || TX.fa;
        await env.DATA.put(`file_req_${Date.now()}`, JSON.stringify({ userName, userUsername, chatId, details: userText, date: new Date().toISOString() }));
        await notifyAdmin(env, `📋 فایل یابی\n\n👤 ${userName}\n📛 @${userUsername}\n🆔 ${chatId}\n\n📝 ${userText}`);
        await sendMsg(env, chatId, st.fileReqSaved, kbMain(sl));
        await env.DATA.delete(`session_${chatId}`);
        return new Response("OK");
      }
      
      // ═══ منو (شامل منوی همکار) ═══
      if (!mediaInfo && !isVoice && userText) {
        const key = menuKey(userText);
        
        // 🎯 منوی همکار
        const userRole = await getUserRole(env, chatId);
        const isColleague = userRole === "colleague" && await isColleagueRegistered(env, chatId);
        
        if (isColleague) {
          if (key === "colleagueNewFile") {
            try { await env.DATA.delete(`session_${chatId}`); } catch (e) {}
            try { await env.DATA.delete(`webapp_session_${chatId}`); } catch (e) {}
            const s = { active: true, mode: "webapp_media", type: "sell", lang: userLang, collected: emptyCollected("listing"), isAdminListing: true };
            await env.DATA.put(`session_${chatId}`, JSON.stringify(s), { expirationTtl: 3600 });
            await env.DATA.put(`webapp_session_${chatId}`, JSON.stringify({ mediaFiles: [], type: "sell" }), { expirationTtl: 3600 });
            await sendMsg(env, chatId, t.webappIntro, kbWebAppMedia(userLang));
            return new Response("OK");
          }
          if (key === "colleagueMyFiles") {
            const files = await getColleagueFiles(env, chatId);
            if (files.length === 0) {
              await sendMsg(env, chatId, t.colleagueNoFiles, kbColleagueMenu(userLang));
              return new Response("OK");
            }
            await sendMsg(env, chatId, `${t.colleagueMyFilesTitle}تعداد: ${files.length}`, kbColleagueMenu(userLang));
            let i = 0;
            for (const f of files.slice(0, 5)) { i++; await showListing(env, chatId, userLang, f, i, f._key); }
            return new Response("OK");
          }
          if (key === "colleagueExchange") {
            const files = await getAllColleagueFiles(env, chatId, 10);
            if (files.length === 0) {
              await sendMsg(env, chatId, t.colleagueExchangeEmpty, kbColleagueMenu(userLang));
              return new Response("OK");
            }
            await sendMsg(env, chatId, `${t.colleagueExchangeTitle}\n\n📊 ${files.length} فایل`, kbColleagueMenu(userLang));
            let i = 0;
            for (const f of files.slice(0, 5)) { i++; await showListing(env, chatId, userLang, f, i, f._key); }
            return new Response("OK");
          }
          if (key === "colleagueStats") {
            const files = await getColleagueFiles(env, chatId);
            const col = await getColleagueData(env, chatId);
            let stats = `${t.colleagueStatsTitle}`;
            stats += `👤 ${col?.fullName || "همکار"}\n🏢 ${col?.agencyName || "-"}\n\n`;
            stats += `📊 <b>آمار:</b>\n`;
            stats += `📁 تعداد فایل‌ها: <b>${files.length}</b>\n`;
            const sellCount = files.filter(f => f.type === "sell").length;
            const rentCount = files.filter(f => f.type === "rent").length;
            stats += `💰 فروش: ${sellCount}\n🔑 رهن و اجاره: ${rentCount}\n`;
            await sendMsg(env, chatId, stats, kbColleagueMenu(userLang));
            return new Response("OK");
          }
          if (key === "colleagueProfile") {
            const col = await getColleagueData(env, chatId);
            if (!col) { await sendMsg(env, chatId, "خطا", kbColleagueMenu(userLang)); return new Response("OK"); }
            let profile = `${t.colleagueProfileTitle}`;
            profile += `👤 <b>نام:</b> ${col.fullName}\n`;
            profile += `📞 <b>موبایل:</b> ${col.mobile}\n`;
            if (col.officePhone) profile += `☎️ <b>تلفن دفتر:</b> ${col.officePhone}\n`;
            profile += `🏢 <b>آژانس:</b> ${col.agencyName}\n`;
            profile += `📍 <b>آدرس:</b> ${col.agencyAddress}\n`;
            if (col.experience) profile += `📅 <b>سابقه:</b> ${col.experience} سال\n`;
            if (col.hoods.length > 0) profile += `🗺️ <b>محله‌ها:</b> ${col.hoods.join("، ")}\n`;
            if (col.props.length > 0) profile += `🏘️ <b>نوع ملک:</b> ${col.props.join("، ")}\n`;
            profile += `\n📛 @${col.username}\n`;
            await sendMsg(env, chatId, profile, kbColleagueMenu(userLang));
            return new Response("OK");
          }
          if (key === "colleagueBackMenu") {
            await sendMsg(env, chatId, "🏢 منوی اصلی:", kbColleagueMenu(userLang));
            return new Response("OK");
          }
        }
        
        if (key === "viewSell") { await sendMsg(env, chatId, t.filterPrompt, kbBudgetSell(userLang)); return new Response("OK"); }
        if (key === "viewRent") { await sendMsg(env, chatId, t.filterPrompt, kbBudgetRent(userLang)); return new Response("OK"); }
        if (key === "listSell" || key === "listRent") {
          try { await env.DATA.delete(`session_${chatId}`); } catch (e) {}
          try { await env.DATA.delete(`webapp_session_${chatId}`); } catch (e) {}
          const type = key === "listSell" ? "sell" : "rent";
          const s = { active: true, mode: "webapp_media", type: type, lang: userLang, collected: emptyCollected("listing"), isAdminListing: isAdmin };
          await env.DATA.put(`session_${chatId}`, JSON.stringify(s), { expirationTtl: 3600 });
          await env.DATA.put(`webapp_session_${chatId}`, JSON.stringify({ mediaFiles: [], type: type }), { expirationTtl: 3600 });
          await sendMsg(env, chatId, t.webappIntro, kbWebAppMedia(userLang));
          return new Response("OK");
        }       
 if (key === "consult") { try { await env.DATA.delete(`session_${chatId}`); } catch (e) {} const s = { active: true, mode: "consult", lang: userLang }; await env.DATA.put(`session_${chatId}`, JSON.stringify(s), { expirationTtl: 3600 }); await sendMsg(env, chatId, t.introConsult, kbSession(userLang)); return new Response("OK"); }
 if (key === "showFavorites") { await showFavorites(env, chatId, userLang); return new Response("OK"); }
if (key === "showCompare") { await showCompare(env, chatId, userLang); return new Response("OK"); }
if (key === "viewSite") { await sendMsg(env, chatId, t.siteMsg, kbMain(userLang)); return new Response("OK"); }
      }
      
      // ═══ مشاوره ═══
      if (session && session.active && session.mode === "consult") {
        const intent = detectSeriousIntent(userText);
        if (intent && !isAdmin) await alertAdminSerious(env, chatId, userName, userUsername, userText, intent);
        const reply = await aiReply(env, chatId, userText, session.lang || userLang, userName, userUsername, "consult");
        await sendMsg(env, chatId, reply, kbSession(session.lang || userLang));
        if (!isAdmin) await notifyAdmin(env, `💬 مشاوره\n👤 ${userName} @${userUsername}\n\n${userText}\n\n${reply}`);
        return new Response("OK");
      }
      
      // ═══ پیش‌فرض AI ═══
      const intent = detectSeriousIntent(userText);
      if (intent && !isAdmin) await alertAdminSerious(env, chatId, userName, userUsername, userText, intent);
      const aiAns = await aiReply(env, chatId, userText, userLang, userName, userUsername, "general");
      const userRoleNow = await getUserRole(env, chatId);
      const kbReply = (userRoleNow === "colleague" && await isColleagueRegistered(env, chatId)) ? kbColleagueMenu(userLang) : kbMain(userLang);
      await sendMsg(env, chatId, aiAns, kbReply);
      if (!isAdmin) await notifyAdmin(env, `💬 AI\n👤 ${userName} @${userUsername}\n\n${userText}\n\n${aiAns}`);
      return new Response("OK");
    } catch (error) {
      console.error("Main handler error:", error.message);
      return new Response("OK");
    }
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil(checkRemindersAndSurveys(env));
  }
};

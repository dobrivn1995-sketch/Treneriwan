import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  // ===== CONTACT LINKS (UTM готові, при бажанні поміняєш) =====
  const utm = "&utm_source=site&utm_medium=cta&utm_campaign=landing";
  const wa = "https://wa.me/48796559143?text=" + encodeURIComponent("Привіт! Хочу тренування") + utm;
  const tg = "https://t.me/Grutos";
  const ig = "https://instagram.com/trener_iwan";
  const mail = "mailto:Dobr.ivn1995@gmail.com";

  // ===== i18n словники =====
  const dict = {
    ua: {
      badge: "м. Кельце • Персональний тренер",
      h1: "Тренуйся з Іваном",
      h2: "LEVEL UP YOUR BODY",
      heroLead:
        "9 років досвіду. Персональні тренування в Кельце <b>і онлайн</b> з нуля. Техніка без болю + стабільний прогрес.",
      ctaBook: "Записатися",

      strengthsTitle: "9 років досвіду. Кельце і онлайн.",
      strengths: ["Чітка техніка", "Керований дискомфорт", "Швидкий прогрес"],
      strengthsNote:
        "Треную початківців і допомагаю відновитись після травм. Підхід — точність, безпека й стабільний результат. Легка крепатура — це норм: тіло адаптується 💪",

      aboutTitle: "Про мене",
      aboutText:
        "Я Іван — тренер із 9-річним досвідом. Працюю з початківцями, з відновленням після травм та онлайн. Принцип — чиста техніка, результат і повага до тіла.",

      priceTitle: "Ціни (конвертуються за регіоном)",
      priceNote: "База — PLN. Показуємо у вашій валюті автоматично.",
      p1: "Разове тренування",
      p2: "Блок 5 занять (за заняття)",
      p3: "Блок 10 занять — Знижка (разом)",
      buyBlock: "Взяти блок занять",

      onlineTitle: "Онлайн-ведення (за місяць)",
      onlineNote:
        "План тренувань, харчування і підтримка онлайн. Ідеально, якщо ти не в Кельце.",

      formTitle: "Залиш заявку — я напишу особисто",
      formName: "Ім’я",
      formContact: "Телефон або Email",
      formType: "Вибери варіант",
      formOption1: "Тренування в Кельце",
      formOption2: "Онлайн-ведення",
      formMsg: "Коментар (необов’язково)",
      formSend: "Надіслати заявку",

      locTitle: "Де тренуємось (Кельце)",
      loc1: "RMG — Sandomierska 112, Kielce",
      loc2: "Endorfina — Zagnańska 92, Kielce",
      maps: "Google Maps",

      reviewsTitle: "Клієнти про роботу",
      reviews: [
        { name: "Наталія", text: "–8 кг за 2 місяці. Техніка без болю. Комфортно." },
        { name: "Олег", text: "Після травми спини повернувся до присідань. Безпечно." },
        { name: "Марія", text: "Онлайн—чіткий план + підтримка. Є результат щотижня." },
      ],

      footerTitle: "Написати мені",
      footerBrand: `© ${new Date().getFullYear()} Trener Iwan — Discipline. Power. Balance.`,
      lang: "🇺🇦",
      langAlt: "🇵🇱",
      toastSent: "Заявку надіслано ✅ Я відповім особисто.",
    },
    pl: {
      badge: "Kielce • Trener personalny",
      h1: "Trenuj z Iwanem",
      h2: "LEVEL UP YOUR BODY",
      heroLead:
        "9 lat doświadczenia. Treningi w Kielcach <b>i online</b>. Technika bez bólu + systemowy progres.",
      ctaBook: "Zapisz się",

      strengthsTitle: "9 lat doświadczenia. Kielce i online.",
      strengths: ["Czysta technika", "Kontrolowany dyskomfort", "Szybki progres"],
      strengthsNote:
        "Pracuję z początkującymi i po kontuzjach. Dokładność, bezpieczeństwo i stabilne efekty. Delikatne DOMS-y — ok 💪",

      aboutTitle: "O mnie",
      aboutText:
        "Jestem Iwan — trener z 9-letnim doświadczeniem. Pomagam poprawić technikę, zrzucić wagę i wrócić do formy bez kontuzji.",

      priceTitle: "Cennik (przeliczany wg regionu)",
      priceNote: "Bazą jest PLN. Pokazujemy automatycznie w Twojej walucie.",
      p1: "Pojedynczy trening",
      p2: "Pakiet 5 treningów (za trening)",
      p3: "Pakiet 10 treningów — Rabat (razem)",
      buyBlock: "Weź pakiet",

      onlineTitle: "Prowadzenie online (mies.)",
      onlineNote:
        "Plan treningów, żywienia i wsparcie online. Idealne, jeśli nie jesteś w Kielcach.",

      formTitle: "Zostaw zgłoszenie — odezwę się osobiście",
      formName: "Imię",
      formContact: "Telefon lub Email",
      formType: "Wybierz opcję",
      formOption1: "Trening w Kielcach",
      formOption2: "Prowadzenie online",
      formMsg: "Komentarz (opcjonalnie)",
      formSend: "Wyślij zgłoszenie",

      locTitle: "Gdzie trenujemy (Kielce)",
      loc1: "RMG — Sandomierska 112, Kielce",
      loc2: "Endorfina — Zagnańska 92, Kielce",
      maps: "Google Maps",

      reviewsTitle: "Opinie klientów",
      reviews: [
        { name: "Natalia", text: "–8 kg w 2 miesiące. Technika bez bólu, komfort." },
        { name: "Olek", text: "Po kontuzji pleców wróciłem do przysiadów. Bezpiecznie." },
        { name: "Maria", text: "Prowadzenie online: plan + wsparcie. Efekty co tydzień." },
      ],

      footerTitle: "Napisz do mnie",
      footerBrand: `© ${new Date().getFullYear()} Trener Iwan — Discipline. Power. Balance.`,
      lang: "🇵🇱",
      langAlt: "🇺🇦",
      toastSent: "Zgłoszenie wysłane ✅ Odezwę się osobiście.",
    },
  };

  // ===== Netflix-style мова =====
  const [lang, setLang] = useState("ua");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("lang");
    if (saved === "ua" || saved === "pl") return setLang(saved);
    const L = (navigator.language || "").toLowerCase();
    const next = L.startsWith("pl") ? "pl" : "ua";
    setLang(next);
    localStorage.setItem("lang", next);
  }, []);
  const t = dict[lang];
  const switchLang = () => {
    const next = lang === "ua" ? "pl" : "ua";
    setLang(next);
    if (typeof window !== "undefined") localStorage.setItem("lang", next);
  };

  // ===== Валюта за регіоном (PLN база) =====
  const [currency, setCurrency] = useState("PLN");
  const [rate, setRate] = useState({ PLN: 1, EUR: 0.23, USD: 0.25, UAH: 5.9 });
  const symbol = { PLN: "zł", EUR: "€", UAH: "₴", USD: "$" };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedCur = localStorage.getItem("currency");
    if (savedCur && symbol[savedCur]) setCurrency(savedCur);

    fetch("https://ipapi.co/json/")
      .then(r => r.json())
      .then(d => {
        const cc = d?.country_code || "";
        let cur = "EUR";
        if (cc === "PL") cur = "PLN";
        else if (cc === "UA") cur = "UAH";
        else if (cc === "US") cur = "USD";
        setCurrency(cur);
        localStorage.setItem("currency", cur);
      })
      .catch(() => {
        const L = (navigator.language || "").toLowerCase();
        if (L.startsWith("pl")) setCurrency("PLN");
        else if (L.startsWith("uk")) setCurrency("UAH");
        else if (L.startsWith("en-us")) setCurrency("USD");
        else setCurrency("EUR");
      });
  }, []);

  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,UAH")
      .then(r => r.json())
      .then(d => {
        const rts = d?.rates || {};
        setRate({
          PLN: 1,
          EUR: rts.EUR || 0.23,
          USD: rts.USD || 0.25,
          UAH: rts.UAH || 5.9,
        });
      })
      .catch(() => {});
  }, []);

  const fmt = (pln) => `${Math.round(pln * (rate[currency] || 1))} ${symbol[currency] || "zł"}`;

  // Базові ціни в PLN
  const P = useMemo(() => ({
    single: 90,
    pack5: 80,
    pack10Total: 700,
    onlineMonth: 500,
  }), []);

  // ===== Toast після ?sent=1 =====
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (url.searchParams.get("sent") === "1") {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
      url.searchParams.delete("sent");
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  // ====== СТИЛІ ======
  // Преміум фон: градієнти + SVG-патерн (сітка + “інвентар”)
  const pageBg = {
    backgroundColor: "#0b0f14",
    color: "#eef3f8",
    backgroundImage: `
      radial-gradient(1200px 600px at 80% -10%, rgba(39,166,255,0.12) 0%, rgba(39,166,255,0) 60%),
      radial-gradient(900px 500px at -10% 20%, rgba(255,138,0,0.10) 0%, rgba(255,138,0,0) 60%),
      url("data:image/svg+xml;utf8,
        <svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'>
          <rect width='160' height='160' fill='none'/>
          <path d='M0 40H160 M0 80H160 M0 120H160 M40 0V160 M80 0V160 M120 0V160'
                stroke='%23151e29' stroke-width='1'/>
          <g opacity='0.18'>
            <rect x='18' y='18' rx='3' width='24' height='24' fill='%23263445'/>
            <rect x='118' y='18' rx='3' width='24' height='24' fill='%23263445'/>
            <rect x='18' y='118' rx='3' width='24' height='24' fill='%23263445'/>
            <rect x='118' y='118' rx='3' width='24' height='24' fill='%23263445'/>
          </g>
        </svg>")
    `,
    backgroundSize: "cover, cover, 160px 160px",
    backgroundAttachment: "fixed, fixed, scroll",
  };

  const max = { maxWidth: 1160, margin: "0 auto", padding: "0 20px" };
  const section = { padding: "44px 0", borderTop: "1px solid #151e29", textAlign: "center" };

  const hero = {
    padding: "56px 0 32px",
    textAlign: "center",
    // Якщо захочеш реальне фото залу — поклади /public/bg-gym.jpg і розкоментуй:
    // backgroundImage: "linear-gradient(rgba(11,15,20,.85), rgba(11,15,20,.85)), url('/bg-gym.jpg')",
    // backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed",
  };

  const badge = { display: "inline-block", padding: "6px 12px", borderRadius: 999, border: "1px solid #263445", color: "#a7c7e9", fontSize: 12, marginBottom: 12 };
  const h1 = { fontSize: 50, fontWeight: 900, margin: "12px 0 6px", color: "#ffffff" };
  const h2 = { fontSize: 32, fontWeight: 800, margin: "0 0 18px", color: "#27a6ff" };
  const lead = { opacity: 0.92, fontSize: 18, lineHeight: 1.6, marginBottom: 22 };

  // Мірна стрічка під геро
  const tapeStrip = {
    height: 22,
    margin: "8px 0 0",
    backgroundImage: "repeating-linear-gradient(90deg, #ffbf47 0 20px, #ffbf47 0 20px, #0b0f14 20px 22px)",
    borderTop: "1px solid #cc922f",
    borderBottom: "1px solid #cc922f",
    boxShadow: "0 1px 0 rgba(0,0,0,.3) inset, 0 -1px 0 rgba(0,0,0,.2) inset",
  };

  const btn = { padding: "14px 24px", borderRadius: 14, fontWeight: 700, textDecoration: "none", border: "2px solid #27a6ff", color: "#cfe9ff", display: "inline-flex", alignItems: "center", gap: 10, margin: "6px", transition: "all 0.2s ease" };
  const btnPrimary = { ...btn, background: "#ff8a00", borderColor: "#ff8a00", color: "#0b0f14" };
  const title = { fontSize: 28, fontWeight: 900, marginBottom: 14 };
  const note = { color: "#9bb7d4", marginBottom: 18 };
  const card = { border: "2px solid #263445", borderRadius: 16, padding: 16, backdropFilter: "saturate(120%) blur(0.5px)" };
  const highlight = { border: "2px solid #ff8a00", borderRadius: 14, padding: 16, marginTop: 10, display: "inline-block" };
  const strike = { textDecoration: "line-through", opacity: 0.6, marginRight: 8 };

  // SVG іконки
  const Icon = {
    Telegram: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21.5 3.5L2.6 10.6c-.8.3-.8 1.4 0 1.7l4.6 1.6 1.7 5c.2.8 1.2.9 1.7.3l2.9-3.1 4.8 3.6c.6.5 1.5.1 1.7-.7l3-17c.2-.9-.7-1.6-1.5-1.4Z" stroke="#cfe9ff" strokeWidth="1.5"/></svg>),
    WhatsApp: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20.5 12a8.5 8.5 0 1 1-3.1-6.6" stroke="#cfe9ff" strokeWidth="1.5"/><path d="M7.2 19.6 5 21l.5-2.6" stroke="#cfe9ff" strokeWidth="1.5" strokeLinecap="round"/><path d="M16.8 14.6c-.3.9-1.7 1.1-2.4.9-1.2-.4-2.7-1.4-3.8-2.6s-2.2-2.6-2.6-3.8c-.2-.7 0-2.1.9-2.4.4-.1.8 0 1.1.3l1.1 1.1c.3.3.4.7.3 1.1-.1.4-.3.7-.6 1l.6.9c.5.7 1.2 1.4 1.9 1.9l.9.6c.3-.3.6-.5 1-.6.4-.1.8 0 1.1.3l1.1 1.1c.3.3.4.8.3 1.1Z" fill="none" stroke="#cfe9ff" strokeWidth="1.5" strokeLinecap="round"/></svg>),
    Instagram: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="#cfe9ff" strokeWidth="1.5"/><circle cx="12" cy="12" r="3.5" stroke="#cfe9ff" strokeWidth="1.5"/><circle cx="17.2" cy="6.8" r="1.2" fill="#cfe9ff"/></svg>),
    Email: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3.5 7.5h17v9h-17z" stroke="#cfe9ff" strokeWidth="1.5"/><path d="M4 8l8 5 8-5" stroke="#cfe9ff" strokeWidth="1.5" fill="none"/></svg>)
  };

  return (
    <div style={pageBg}>
      <Head>
        <title>{t.h1} — Trener Iwan | Kielce</title>
        <meta name="description" content="Персональні тренування в Кельце і онлайн. Автомова та валюта за регіоном. 9 років досвіду." />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Twitter */}
        <meta property="og:title" content="Trener Iwan — Kielce & Online" />
        <meta property="og:description" content="Чітка техніка. Керований дискомфорт. Швидкий прогрес." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://treneriwan.vercel.app" />
        {/* Preconnect для швидкості */}
        <link rel="preconnect" href="https://formsubmit.co" />
        <link rel="preconnect" href="https://api.exchangerate.host" />
        <link rel="preconnect" href="https://ipapi.co" />
      </Head>

      {/* TOAST */}
      {showToast && (
        <div style={{ position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)", background: "#0e141c", border: "1px solid #263445", padding: "10px 14px", borderRadius: 12, zIndex: 60 }}>
          {t.toastSent}
        </div>
      )}

      {/* TOP BAR */}
      <div style={{ ...max, display: "flex", justifyContent: "space-between", alignItems: "center", height: 56 }}>
        <div style={{ fontWeight: 900, fontSize: 20 }}>
          <span style={{ color: "#fff" }}>TRENER</span>{" "}
          <span style={{ color: "#ff8a00" }}>IWAN</span>
        </div>
        <button onClick={switchLang} style={{ ...btn, borderRadius: 999, padding: "8px 14px", fontSize: 16, border: "1px solid #27a6ff", background: "transparent" }}>
          {t.lang} ↔ {t.langAlt}
        </button>
      </div>

      {/* HERO */}
      <header style={{ ...hero, borderTop: "1px solid #151e29" }}>
        <div style={max}>
          <span style={badge}>{t.badge}</span>
          <h1 style={h1}>{t.h1}</h1>
          <h2 style={h2}>{t.h2}</h2>
          <p style={lead} dangerouslySetInnerHTML={{ __html: t.heroLead }} />
          <div><a href={wa} target="_blank" rel="noreferrer" style={btnPrimary}>{t.ctaBook}</a></div>
        </div>
      </header>

      {/* TAPE STRIP */}
      <div style={tapeStrip} />

      {/* STRENGTHS */}
      <section style={section}>
        <div style={max}>
          <h3 style={title}>{t.strengthsTitle}</h3>
          <div style={{ ...card, maxWidth: 700, margin: "0 auto" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
              {t.strengths.map((s, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#2bd67b", fontSize: 18 }}>✔</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 12, color: "#a9c3df" }}>{t.strengthsNote}</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={section}>
        <div style={max}>
          <h3 style={title}>{t.aboutTitle}</h3>
          <p style={{ maxWidth: 700, margin: "0 auto", lineHeight: 1.7 }}>{t.aboutText}</p>
        </div>
      </section>

      {/* PRICING */}
      <section style={section}>
        <div style={max}>
          <h3 style={title}>{t.priceTitle}</h3>
          <div style={note}>{t.priceNote}</div>

          <p><b>{t.p1}</b> — {fmt(P.single)}</p>
          <p><b>{t.p2}</b> — {fmt(P.pack5)}</p>

          <div style={highlight}>
            <p>
              <b>{t.p3}</b><br />
              <span style={strike}>{fmt(900)}</span>{fmt(P.pack10Total)}
            </p>
          </div>

          <div style={{ marginTop: 20 }}>
            <a href={wa} target="_blank" rel="noreferrer" style={btnPrimary}>{t.buyBlock}</a>
          </div>
        </div>
      </section>

      {/* ONLINE */}
      <section style={section}>
        <div style={max}>
          <h3 style={title}>{t.onlineTitle} — {fmt(P.onlineMonth)}</h3>
          <p style={note}>{t.onlineNote}</p>
        </div>
      </section>

      {/* FORM */}
      <section id="apply" style={section}>
        <div style={max}>
          <h3 style={title}>{t.formTitle}</h3>
          <form
            action="https://formsubmit.co/Dobr.ivn1995@gmail.com"
            method="POST"
            style={{ maxWidth: 460, margin: "0 auto", padding: 18, border: "2px solid #263445", borderRadius: 16, background: "#0e141c", display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}
            onSubmit={() => { if (typeof window !== "undefined" && window.gtag) gtag('event','form_submit'); }}
          >
            <input type="hidden" name="_subject" value="Нова заявка з сайту treneriwan.vercel.app" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_autoresponse" value="Дякую за заявку! Я — Іван. Відповім особисто. Якщо терміново — WhatsApp: +48 796 559 143" />
            <input type="hidden" name="_next" value="https://treneriwan.vercel.app/?sent=1#apply" />

            <label>{t.formName}</label>
            <input name="name" required style={{ padding: 12, borderRadius: 10, border: "1px solid #263445", background: "#0b121a", color: "#eef3f8" }} />

            <label>{t.formContact}</label>
            <input name="contact" required style={{ padding: 12, borderRadius: 10, border: "1px solid #263445", background: "#0b121a", color: "#eef3f8" }} />

            <label>{t.formType}</label>
            <select name="type" style={{ padding: 12, borderRadius: 10, border: "1px solid #263445", background: "#0b121a", color: "#eef3f8" }}>
              <option>{t.formOption1}</option>
              <option>{t.formOption2}</option>
            </select>

            <label>{t.formMsg}</label>
            <textarea name="message" rows={3} style={{ padding: 12, borderRadius: 10, border: "1px solid #263445", background: "#0b121a", color: "#eef3f8" }} />

            <button type="submit" style={{ ...btnPrimary, textAlign: "center" }}>
              {t.formSend}
            </button>
          </form>
        </div>
      </section>

      {/* LOCATIONS */}
      <section style={section}>
        <div style={max}><h3 style={title}>{t.locTitle}</h3></div>
        <div style={{ ...max, display: "grid", gap: 16 }}>
          <div style={card}>
            <div style={{ fontWeight: 700 }}>{t.loc1}</div>
            <a href="https://maps.google.com/?q=Sandomierska+112+Kielce" target="_blank" rel="noreferrer" style={{ ...btn, borderRadius: 12 }}>{t.maps}</a>
          </div>
          <div style={card}>
            <div style={{ fontWeight: 700 }}>{t.loc2}</div>
            <a href="https://maps.google.com/?q=Zagna%C5%84ska+92+Kielce" target="_blank" rel="noreferrer" style={{ ...btn, borderRadius: 12 }}>{t.maps}</a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={section}>
        <div style={max}>
          <h3 style={title}>{t.reviewsTitle}</h3>
          <div style={{ display: "grid", gap: 14 }}>
            {t.reviews.map((r, i) => (
              <div key={i} style={{ ...card, textAlign: "left" }}>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>{r.name}</div>
                <div style={{ opacity: 0.9 }}>{r.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #151e29", textAlign: "center", padding: "36px 0 80px" }}>
        <div style={{ fontWeight: 900, fontSize: 20, color: "#fff", marginBottom: 16 }}>{t.footerTitle}</div>
        <div>
          <a href={tg} target="_blank" rel="noreferrer" style={btn} onClick={()=>{ if (typeof window!=="undefined"&&window.gtag) gtag('event','click_telegram'); }}>{Icon.Telegram}<span>Telegram</span></a>
          <a href={wa} target="_blank" rel="noreferrer" style={btn} onClick={()=>{ if (typeof window!=="undefined"&&window.gtag) gtag('event','click_whatsapp'); }}>{Icon.WhatsApp}<span>WhatsApp</span></a>
          <a href={ig} target="_blank" rel="noreferrer" style={btn} onClick={()=>{ if (typeof window!=="undefined"&&window.gtag) gtag('event','click_instagram'); }}>{Icon.Instagram}<span>Instagram</span></a>
          <a href={mail} style={btn} onClick={()=>{ if (typeof window!=="undefined"&&window.gtag) gtag('event','click_email'); }}>{Icon.Email}<span>Email</span></a>
        </div>
        <div style={{ fontSize: 13, opacity: 0.6, marginTop: 20 }}>{t.footerBrand}</div>
      </footer>

      {/* STICKY CTA (мобільний) */}
      <div style={{ position: "fixed", bottom: 12, left: "50%", transform: "translateX(-50%)", zIndex: 60 }}>
        <a href="#apply" style={{ ...btnPrimary, borderRadius: 999, padding: "12px 20px" }}>{t.ctaBook}</a>
      </div>

      {/* дрібні ефекти */}
      <style jsx global>{`
        a, button { will-change: transform; }
        a:hover, button:hover { transform: translateY(-2px); }
        @media (min-width: 820px) {
          /* ховаємо sticky CTA на десктопі */
          div[style*="position: fixed"][style*="bottom: 12px"] { display: none; }
        }
      `}</style>
    </div>
  );
}

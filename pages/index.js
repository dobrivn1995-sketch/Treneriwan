import Head from "next/head";
import { useEffect, useState, useMemo } from "react";

export default function Home() {
  // LINKS
  const wa = "https://wa.me/48796559143?text=" + encodeURIComponent("Привіт! Хочу тренування");
  const tg = "https://t.me/Grutos";
  const ig = "https://instagram.com/trener_iwan";
  const mail = "mailto:Dobr.ivn1995@gmail.com";

  // i18n dictionary
  const dict = {
    ua: {
      badge: "м. Кельце • Персональний тренер",
      h1: "Тренуйся з Іваном",
      h2: "LEVEL UP YOUR BODY",
      heroLead:
        "9 років досвіду. Персональні тренування в Кельце та онлайн-ведення з нуля. Техніка без болю + стабільний прогрес.",
      ctaBook: "Записатися",

      strengthsTitle: "9 років досвіду. Кельце та онлайн.",
      strengths: [
        "Чітка техніка",
        "Керований дискомфорт",
        "Швидкий прогрес",
      ],
      strengthsNote:
        "Треную початківців і допомагаю відновитись після травм. Мій підхід — точність, безпека й стабільний результат. Легка крепатура — це норм: тіло адаптується і росте 💪",

      aboutTitle: "Про мене",
      aboutText:
        "Я Іван — тренер із 9-річним досвідом. Працюю з початківцями, з відновленням після травм і онлайн. Принцип — чиста техніка, результат і повага до тіла.",

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

      footerTitle: "Написати мені",
      footerBrand: "© " + new Date().getFullYear() + " Trener Iwan — Discipline. Power. Balance.",
      lang: "🇺🇦",
      langAlt: "🇵🇱",
    },
    pl: {
      badge: "Kielce • Trener personalny",
      h1: "Trenuj z Iwanem",
      h2: "LEVEL UP YOUR BODY",
      heroLead:
        "9 lat doświadczenia. Treningi personalne w Kielcach i prowadzenie online. Technika bez bólu + systemowy progres.",
      ctaBook: "Zapisz się",

      strengthsTitle: "9 lat doświadczenia. Kielce i online.",
      strengths: [
        "Czysta technika",
        "Kontrolowany dyskomfort",
        "Szybki progres",
      ],
      strengthsNote:
        "Pracuję z początkującymi i po kontuzjach. Stawiam na dokładność, bezpieczeństwo i stabilne efekty. Delikatne DOMS-y są OK — to znak adaptacji 💪",

      aboutTitle: "O mnie",
      aboutText:
        "Nazywam się Iwan — trener z 9-letnim doświadczeniem. Pomagam poprawić technikę, zrzucić wagę i wrócić do formy bez kontuzji.",

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

      footerTitle: "Napisz do mnie",
      footerBrand: "© " + new Date().getFullYear() + " Trener Iwan — Discipline. Power. Balance.",
      lang: "🇵🇱",
      langAlt: "🇺🇦",
    },
  };

  // ---------- LANGUAGE DETECTION (Netflix-style) ----------
  const [lang, setLang] = useState("ua");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("lang");
    if (saved === "ua" || saved === "pl") {
      setLang(saved);
      return;
    }
    const userLang = navigator.language || navigator.userLanguage || "";
    if (userLang.startsWith("pl")) {
      setLang("pl");
      localStorage.setItem("lang", "pl");
    } else {
      setLang("ua");
      localStorage.setItem("lang", "ua");
    }
  }, []);
  const t = dict[lang];
  const switchLang = () => {
    const next = lang === "ua" ? "pl" : "ua";
    setLang(next);
    if (typeof window !== "undefined") localStorage.setItem("lang", next);
  };

  // ---------- CURRENCY BY REGION ----------
  const [currency, setCurrency] = useState("PLN"); // PLN / EUR / UAH / USD
  const [rate, setRate] = useState({ PLN: 1, EUR: 0.0, UAH: 0.0, USD: 0.0 }); // how many X for 1 PLN
  // map to symbols
  const symbol = { PLN: "zł", EUR: "€", UAH: "₴", USD: "$" };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1) saved currency?
    const savedCur = localStorage.getItem("currency");
    if (savedCur && symbol[savedCur]) setCurrency(savedCur);

    // 2) detect by IP country
    fetch("https://ipapi.co/json/")
      .then(r => r.json())
      .then(data => {
        const cc = (data && data.country_code) || "";
        let cur = "EUR";
        if (cc === "PL") cur = "PLN";
        else if (cc === "UA") cur = "UAH";
        else if (cc === "US") cur = "USD";
        setCurrency(cur);
        localStorage.setItem("currency", cur);
      })
      .catch(() => {
        // fallback by navigator language
        const nav = navigator.language || "";
        if (nav.startsWith("pl")) setCurrency("PLN");
        else if (nav.startsWith("uk")) setCurrency("UAH");
        else if (nav.startsWith("en-US")) setCurrency("USD");
        else setCurrency("EUR");
      });
  }, []);

  // 3) fetch FX rates (PLN base)
  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,UAH")
      .then(r => r.json())
      .then(d => {
        const rts = d && d.rates ? d.rates : {};
        setRate({
          PLN: 1,
          EUR: rts.EUR || 0.23,
          USD: rts.USD || 0.25,
          UAH: rts.UAH || 5.9,
        });
      })
      .catch(() =>
        setRate({ PLN: 1, EUR: 0.23, USD: 0.25, UAH: 5.9 }) // safe fallback
      );
  }, []);

  // price helpers (base in PLN)
  const fmt = (pln) => {
    const value = Math.round(pln * (rate[currency] || 1));
    return `${value} ${symbol[currency] || "zł"}`;
  };

  // BASE PRICES (PLN)
  const P = useMemo(
    () => ({
      single: 90,     // single session
      pack5: 80,      // per session (5x)
      pack10Total: 700, // total
      onlineMonth: 500 // per month
    }),
    []
  );

  // ----- styles -----
  const wrap = { background: "#0b0f14", color: "#eef3f8" };
  const max = { maxWidth: 1160, margin: "0 auto", padding: "0 20px" };
  const section = { padding: "44px 0", borderTop: "1px solid #151e29", textAlign: "center" };
  const hero = { padding: "56px 0 32px", textAlign: "center" };
  const badge = { display: "inline-block", padding: "6px 12px", borderRadius: 999, border: "1px solid #263445", color: "#a7c7e9", fontSize: 12, marginBottom: 12 };
  const h1 = { fontSize: 50, fontWeight: 900, margin: "12px 0 6px", color: "#ffffff" };
  const h2 = { fontSize: 32, fontWeight: 800, margin: "0 0 18px", color: "#27a6ff" };
  const lead = { opacity: 0.92, fontSize: 18, lineHeight: 1.6, marginBottom: 22 };

  const btn = { padding: "14px 24px", borderRadius: 14, fontWeight: 700, textDecoration: "none", border: "2px solid #27a6ff", color: "#cfe9ff", display: "inline-flex", alignItems: "center", gap: 10, margin: "6px", transition: "all 0.2s ease" };
  const btnPrimary = { ...btn, background: "#ff8a00", borderColor: "#ff8a00", color: "#0b0f14" };
  const title = { fontSize: 28, fontWeight: 900, marginBottom: 14 };
  const note = { color: "#9bb7d4", marginBottom: 18 };
  const card = { border: "2px solid #263445", borderRadius: 16, padding: 16 };
  const highlight = { border: "2px solid #ff8a00", borderRadius: 14, padding: 16, marginTop: 10, display: "inline-block" };
  const strike = { textDecoration: "line-through", opacity: 0.6, marginRight: 8 };

  // SVG icons for footer
  const Icon = {
    Telegram: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21.5 3.5L2.6 10.6c-.8.3-.8 1.4 0 1.7l4.6 1.6 1.7 5c.2.8 1.2.9 1.7.3l2.9-3.1 4.8 3.6c.6.5 1.5.1 1.7-.7l3-17c.2-.9-.7-1.6-1.5-1.4Z" stroke="#cfe9ff" strokeWidth="1.5"/></svg>),
    WhatsApp: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20.5 12a8.5 8.5 0 1 1-3.1-6.6" stroke="#cfe9ff" strokeWidth="1.5"/><path d="M7.2 19.6 5 21l.5-2.6" stroke="#cfe9ff" strokeWidth="1.5" strokeLinecap="round"/><path d="M16.8 14.6c-.3.9-1.7 1.1-2.4.9-1.2-.4-2.7-1.4-3.8-2.6s-2.2-2.6-2.6-3.8c-.2-.7 0-2.1.9-2.4.4-.1.8 0 1.1.3l1.1 1.1c.3.3.4.7.3 1.1-.1.4-.3.7-.6 1l.6.9c.5.7 1.2 1.4 1.9 1.9l.9.6c.3-.3.6-.5 1-.6.4-.1.8 0 1.1.3l1.1 1.1c.3.3.4.8.3 1.1Z" fill="none" stroke="#cfe9ff" strokeWidth="1.5" strokeLinecap="round"/></svg>),
    Instagram: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="#cfe9ff" strokeWidth="1.5"/><circle cx="12" cy="12" r="3.5" stroke="#cfe9ff" strokeWidth="1.5"/><circle cx="17.2" cy="6.8" r="1.2" fill="#cfe9ff"/></svg>),
    Email: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3.5 7.5h17v9h-17z" stroke="#cfe9ff" strokeWidth="1.5"/><path d="M4 8l8 5 8-5" stroke="#cfe9ff" strokeWidth="1.5" fill="none"/></svg>)
  };

  return (
    <div style={wrap}>
      <Head>
        <title>{t.h1} — Trener Iwan | Kielce</title>
        <meta name="description" content="Персональні тренування в Кельце та онлайн. Автовибір мови та валюти. 9 років досвіду." />
      </Head>

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
          <p style={lead}>{t.heroLead}</p>
          <div><a href={wa} target="_blank" rel="noreferrer" style={btnPrimary}>{t.ctaBook}</a></div>
        </div>
      </header>

      {/* STRENGTHS BLOCK */}
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

      {/* PRICING (auto-currency) */}
      <section style={section}>
        <div style={max}>
          <h3 style={title}>{t.priceTitle}</h3>
          <div style={note}>{t.priceNote}</div>

          <p>
            <b>{t.p1}</b> — {fmt(P.single)}
          </p>
          <p>
            <b>{t.p2}</b> — {fmt(P.pack5)}
          </p>

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
          <h3 style={title}>
            {t.onlineTitle} — {fmt(P.onlineMonth)}
          </h3>
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
            style={{
              maxWidth: 460, margin: "0 auto", padding: 18, border: "2px solid #263445",
              borderRadius: 16, background: "#0e141c", display: "flex", flexDirection: "column", gap: 12, textAlign: "left",
            }}
          >
            <input type="hidden" name="_subject" value="Нова заявка з сайту treneriwan.vercel.app" />
            <input type="hidden" name="_captcha" value="false" />
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
        <div style={max}>
          <h3 style={title}>{t.locTitle}</h3>
          <div style={{ display: "grid", gap: 16 }}>
            <div style={card}>
              <div style={{ fontWeight: 700 }}>{t.loc1}</div>
              <a href="https://maps.google.com/?q=Sandomierska+112+Kielce" target="_blank" rel="noreferrer" style={{ ...btn, borderRadius: 12 }}>{t.maps}</a>
            </div>
            <div style={card}>
              <div style={{ fontWeight: 700 }}>{t.loc2}</div>
              <a href="https://maps.google.com/?q=Zagna%C5%84ska+92+Kielce" target="_blank" rel="noreferrer" style={{ ...btn, borderRadius: 12 }}>{t.maps}</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #151e29", textAlign: "center", padding: "36px 0 60px" }}>
        <div style={{ fontWeight: 900, fontSize: 20, color: "#fff", marginBottom: 16 }}>{t.footerTitle}</div>
        <div>
          <a href={tg} target="_blank" rel="noreferrer" style={btn}>{Icon.Telegram}<span>Telegram</span></a>
          <a href={wa} target="_blank" rel="noreferrer" style={btn}>{Icon.WhatsApp}<span>WhatsApp</span></a>
          <a href={ig} target="_blank" rel="noreferrer" style={btn}>{Icon.Instagram}<span>Instagram</span></a>
          <a href={mail} style={btn}>{Icon.Email}<span>Email</span></a>
        </div>
        <div style={{ fontSize: 13, opacity: 0.6, marginTop: 20 }}>{t.footerBrand}</div>
      </footer>

      <style jsx global>{`
        a:hover, button:hover { transform: translateY(-2px); }
      `}</style>
    </div>
  );
    }

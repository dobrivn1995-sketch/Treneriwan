import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const wa = "https://wa.me/48796559143?text=" + encodeURIComponent("Привіт! Хочу тренування");
  const tg = "https://t.me/Grutos";
  const ig = "https://instagram.com/trener_iwan";
  const mail = "mailto:Dobr.ivn1995@gmail.com";

  const dict = {
    ua: {
      badge: "м. Кельце • Персональний тренер",
      h1: "Тренуйся з Іваном",
      h2: "LEVEL UP YOUR BODY",
      heroLead:
        "9 років досвіду. Персональні тренування в Кельце та онлайн-ведення з нуля. Техніка без болю + стабільний прогрес.",
      ctaBook: "Записатися",
      ctaTG: "Telegram",
      ctaWA: "WhatsApp",
      ctaIG: "Instagram",
      ctaMail: "Email",
      aboutTitle: "Про мене",
      aboutText:
        "Я Іван — тренер із 9-річним досвідом. Працюю з початківцями, з відновленням після травм і онлайн. Головний принцип — чиста техніка, результат і повага до тіла.",
      priceTitle: "Ціни (Кельце)",
      priceNote: "Зали: RMG і Endorfina. Оплата разово або блоком.",
      p1: "Разове тренування",
      p1price: "90 zł",
      p2: "Блок 5 занять",
      p2price: "80 zł / заняття",
      p3: "Блок 10 занять — Знижка",
      p3priceOld: "900 zł",
      p3priceNew: "700 zł",
      buyBlock: "Взяти блок занять",
      onlineTitle: "Онлайн-ведення — 500 zł/місяць",
      onlineNote: "План тренувань, харчування і підтримка онлайн. Ідеально, якщо ти не в Кельце.",
      locTitle: "Де тренуємось (Кельце)",
      loc1: "RMG — Sandomierska 112, Kielce",
      loc2: "Endorfina — Zagnańska 92, Kielce",
      maps: "Google Maps",
      footerTitle: "Написати мені",
      footerBrand: "© " + new Date().getFullYear() + " Trener Iwan — Discipline. Power. Balance.",
      lang: "UA",
      langAlt: "PL",
    },
    pl: {
      badge: "Kielce • Trener personalny",
      h1: "Trenuj z Iwanem",
      h2: "LEVEL UP YOUR BODY",
      heroLead:
        "9 lat doświadczenia. Treningi personalne w Kielcach i prowadzenie online. Technika bez bólu + systemowy progres.",
      ctaBook: "Zapisz się",
      ctaTG: "Telegram",
      ctaWA: "WhatsApp",
      ctaIG: "Instagram",
      ctaMail: "Email",
      aboutTitle: "O mnie",
      aboutText:
        "Nazywam się Iwan — trener z 9-letnim doświadczeniem. Pomagam poprawić technikę, zrzucić wagę i wrócić do formy bez kontuzji.",
      priceTitle: "Cennik (Kielce)",
      priceNote: "Kluby: RMG i Endorfina. Płatność jednorazowo lub w pakiecie.",
      p1: "Pojedynczy trening",
      p1price: "90 zł",
      p2: "Pakiet 5 treningów",
      p2price: "80 zł / trening",
      p3: "Pakiet 10 treningów — Rabat",
      p3priceOld: "900 zł",
      p3priceNew: "700 zł",
      buyBlock: "Weź pakiet",
      onlineTitle: "Prowadzenie online — 500 zł/mies.",
      onlineNote: "Plan treningów, żywienia i wsparcie online. Idealne, jeśli nie jesteś w Kielcach.",
      locTitle: "Gdzie trenujemy (Kielce)",
      loc1: "RMG — Sandomierska 112, Kielce",
      loc2: "Endorfina — Zagnańska 92, Kielce",
      maps: "Google Maps",
      footerTitle: "Napisz do mnie",
      footerBrand: "© " + new Date().getFullYear() + " Trener Iwan — Discipline. Power. Balance.",
      lang: "PL",
      langAlt: "UA",
    },
  };

  const [lang, setLang] = useState("ua");
  const t = dict[lang];
  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("lang");
    if (saved === "ua" || saved === "pl") setLang(saved);
  }, []);
  const switchLang = () => {
    const next = lang === "ua" ? "pl" : "ua";
    setLang(next);
    if (typeof window !== "undefined") localStorage.setItem("lang", next);
  };

  const wrap = { background: "#0b0f14", color: "#eef3f8" };
  const max = { maxWidth: 1160, margin: "0 auto", padding: "0 20px" };
  const hero = { padding: "56px 0 32px", background: "#0b0f14", textAlign: "center" };
  const badge = { display: "inline-block", padding: "6px 12px", borderRadius: 999, border: "1px solid #263445", color: "#a7c7e9", fontSize: 12, marginBottom: 12 };
  const h1 = { fontSize: 50, fontWeight: 900, margin: "12px 0 6px", color: "#ffffff" };
  const h2 = { fontSize: 32, fontWeight: 800, margin: "0 0 18px", color: "#27a6ff" };
  const lead = { opacity: 0.92, fontSize: 18, lineHeight: 1.6, marginBottom: 22 };
  const btn = { padding: "14px 24px", borderRadius: 14, fontWeight: 700, textDecoration: "none", border: "2px solid #27a6ff", color: "#cfe9ff", display: "inline-block", margin: "6px" };
  const btnPrimary = { ...btn, background: "#ff8a00", borderColor: "#ff8a00", color: "#0b0f14" };
  const section = { padding: "44px 0", borderTop: "1px solid #151e29", textAlign: "center" };
  const title = { fontSize: 28, fontWeight: 900, marginBottom: 14 };
  const note = { color: "#9bb7d4", marginBottom: 18 };
  const priceTag = { fontWeight: 900, fontSize: 20, color: "#ffd7a6" };
  const highlight = { border: "2px solid #ff8a00", borderRadius: 14, padding: 16, marginTop: 10 };
  const strike = { textDecoration: "line-through", opacity: 0.6, marginRight: 8 };

  return (
    <div style={wrap}>
      <Head>
        <title>{t.h1} — Trener Iwan | Kielce</title>
        <meta name="description" content="Персональні тренування в Кельце та онлайн. 9 років досвіду. RMG і Endorfina. Онлайн 500 zł/міс." />
      </Head>

      <div style={{ ...max, display: "flex", justifyContent: "space-between", alignItems: "center", height: 56 }}>
        <div style={{ fontWeight: 900 }}>TRENER IWAN</div>
        <button onClick={switchLang} style={{ ...btn, borderRadius: 999, padding: "8px 14px", fontSize: 14 }}>
          {t.lang} ↔ {t.langAlt}
        </button>
      </div>

      <header style={hero}>
        <span style={badge}>{t.badge}</span>
        <h1 style={h1}>{t.h1}</h1>
        <h2 style={h2}>{t.h2}</h2>
        <p style={lead}>{t.heroLead}</p>
        <div>
          <a href={wa} target="_blank" rel="noreferrer" style={btnPrimary}>{t.ctaBook}</a>
        </div>
      </header>

      <section style={section}>
        <div style={max}>
          <h3 style={title}>{t.aboutTitle}</h3>
          <p style={{ maxWidth: 700, margin: "0 auto", lineHeight: 1.7 }}>{t.aboutText}</p>
        </div>
      </section>

      <section style={section}>
        <div style={max}>
          <h3 style={title}>{t.priceTitle}</h3>
          <div style={note}>{t.priceNote}</div>
          <p><b>{t.p1}</b> — {t.p1price}</p>
          <p><b>{t.p2}</b> — {t.p2price}</p>
          <div style={highlight}>
            <p><b>{t.p3}</b><br/><span style={strike}>{t.p3priceOld}</span>{t.p3priceNew}</p>
          </div>
          <div style={{ marginTop: 20 }}>
            <a href={wa} target="_blank" rel="noreferrer" style={btnPrimary}>{t.buyBlock}</a>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={max}>
          <h3 style={title}>{t.onlineTitle}</h3>
          <p style={note}>{t.onlineNote}</p>
        </div>
      </section>

      <section style={section}>
        <div style={max}>
          <h3 style={title}>{t.locTitle}</h3>
          <p>{t.loc1} — <a href="https://maps.google.com/?q=Sandomierska+112+Kielce" target="_blank" rel="noreferrer" style={{ color: "#9edbff" }}>{t.maps}</a></p>
          <p>{t.loc2} — <a href="https://maps.google.com/?q=Zagna%C5%84ska+92+Kielce" target="_blank" rel="noreferrer" style={{ color: "#9edbff" }}>{t.maps}</a></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #151e29", background: "#0b0f14", textAlign: "center", padding: "36px 0" }}>
        <div style={{ fontWeight: 900, fontSize: 20, color: "#fff", marginBottom: 16 }}>{t.footerTitle}</div>
        <div>
          <a href={tg} target="_blank" rel="noreferrer" style={btn}>{t.ctaTG}</a>
          <a href={wa} target="_blank" rel="noreferrer" style={btn}>{t.ctaWA}</a>
          <a href={ig} target="_blank" rel="noreferrer" style={btn}>{t.ctaIG}</a>
          <a href={mail} style={btn}>{t.ctaMail}</a>
        </div>
        <div style={{ fontSize: 13, opacity: 0.6, marginTop: 20 }}>{t.footerBrand}</div>
      </footer>
    </div>
  );
}

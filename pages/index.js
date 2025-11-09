import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  // Links
  const wa = "https://wa.me/48796559143?text=" + encodeURIComponent("Привіт! Хочу тренування");
  const tg = "https://t.me/Grutos";
  const ig = "https://instagram.com/trener_iwan";
  const mail = "mailto:Dobr.ivn1995@gmail.com";

  // i18n
  const dict = {
    ua: {
      badge: "м. Кельце • Персональний тренер",
      h1: "Тренуйся з Іваном",
      h2: "LEVEL UP YOUR BODY",
      heroLead:
        "9 років досвіду. Персональні тренування в Кельце та онлайн-ведення з нуля. Техніка без болю + стабільний прогрес.",
      ctaBook: "Записатися",
      aboutTitle: "Про мене",
      aboutText:
        "Я Іван — тренер із 9-річним досвідом. Працюю з початківцями, з відновленням після травм і онлайн. Принцип — чиста техніка, результат і повага до тіла.",
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
      formTitle: "Залиш заявку — я напишу особисто",
      formName: "Ім’я",
      formContact: "Телефон або Email",
      formType: "Вибери варіант",
      formOption1: "Тренування в Кельце",
      formOption2: "Онлайн-ведення",
      formMsg: "Коментар (необов’язково)",
      formSend: "Надіслати заявку 💪",
      locTitle: "Де тренуємось (Кельце)",
      loc1: "RMG — Sandomierska 112, Kielce",
      loc2: "Endorfina — Zagnańska 92, Kielce",
      maps: "Google Maps",
      footerTitle: "Написати мені",
      footerBrand:
        "© " + new Date().getFullYear() + " Trener Iwan — Discipline. Power. Balance.",
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
      formTitle: "Zostaw zgłoszenie — odezwę się osobiście",
      formName: "Imię",
      formContact: "Telefon lub Email",
      formType: "Wybierz opcję",
      formOption1: "Trening w Kielcach",
      formOption2: "Prowadzenie online",
      formMsg: "Komentarz (opcjonalnie)",
      formSend: "Wyślij zgłoszenie 💪",
      locTitle: "Gdzie trenujemy (Kielce)",
      loc1: "RMG — Sandomierska 112, Kielce",
      loc2: "Endorfina — Zagnańska 92, Kielce",
      maps: "Google Maps",
      footerTitle: "Napisz do mnie",
      footerBrand:
        "© " + new Date().getFullYear() + " Trener Iwan — Discipline. Power. Balance.",
      lang: "🇵🇱",
      langAlt: "🇺🇦",
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

  // Styles
  const wrap = { background: "#0b0f14", color: "#eef3f8" };
  const max = { maxWidth: 1160, margin: "0 auto", padding: "0 20px" };
  const hero = { padding: "56px 0 32px", textAlign: "center" };
  const badge = {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: 999,
    border: "1px solid #263445",
    color: "#a7c7e9",
    fontSize: 12,
    marginBottom: 12,
  };
  const h1 = { fontSize: 50, fontWeight: 900, margin: "12px 0 6px", color: "#ffffff" };
  const h2 = { fontSize: 32, fontWeight: 800, margin: "0 0 18px", color: "#27a6ff" };
  const lead = { opacity: 0.92, fontSize: 18, lineHeight: 1.6, marginBottom: 22 };

  const btn = {
    padding: "14px 24px",
    borderRadius: 14,
    fontWeight: 700,
    textDecoration: "none",
    border: "2px solid #27a6ff",
    color: "#cfe9ff",
    display: "inline-block",
    margin: "6px",
    transition: "all 0.2s ease",
  };
  const btnPrimary = { ...btn, background: "#ff8a00", borderColor: "#ff8a00", color: "#0b0f14" };

  const section = { padding: "44px 0", borderTop: "1px solid #151e29", textAlign: "center" };
  const title = { fontSize: 28, fontWeight: 900, marginBottom: 14 };
  const note = { color: "#9bb7d4", marginBottom: 18 };
  const highlight = {
    border: "2px solid #ff8a00",
    borderRadius: 14,
    padding: 16,
    marginTop: 10,
    display: "inline-block",
  };
  const strike = { textDecoration: "line-through", opacity: 0.6, marginRight: 8 };

  return (
    <div style={wrap}>
      <Head>
        <title>{t.h1} — Trener Iwan | Kielce</title>
        <meta name="description" content="Персональні тренування в Кельце та онлайн. 9 років досвіду. Онлайн-ведення 500 zł/міс." />
      </Head>

      {/* TOP BAR */}
      <div style={{ ...max, display: "flex", justifyContent: "space-between", alignItems: "center", height: 56 }}>
        <div style={{ fontWeight: 900, fontSize: 20 }}>
          <span style={{ color: "#fff" }}>TRENER</span>{" "}
          <span style={{ color: "#ff8a00" }}>IWAN</span>
        </div>
        <button
          onClick={switchLang}
          style={{ ...btn, borderRadius: 999, padding: "8px 14px", fontSize: 16, border: "1px solid #27a6ff", background: "transparent" }}
        >
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
          <div>
            <a href={wa} target="_blank" rel="noreferrer" style={btnPrimary}>{t.ctaBook}</a>
          </div>
        </div>
      </header>

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
          <p><b>{t.p1}</b> —  {t.p1price}</p>
          <p><b>{t.p2}</b> —  {t.p2price}</p>
          <div style={highlight}>
            <p>
              <b>{t.p3}</b><br />
              <span style={strike}>{t.p3priceOld}</span>{t.p3priceNew}
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
          <h3 style={title}>{t.onlineTitle}</h3>
          <p style={note}>{t.onlineNote}</p>
        </div>
      </section>

      {/* FORM (inside page, framed look) */}
      <section id="apply" style={section}>
        <div style={max}>
          <h3 style={title}>{t.formTitle}</h3>
          <form
            action="https://formsubmit.co/Dobr.ivn1995@gmail.com"
            method="POST"
            style={{
              maxWidth: 460,
              margin: "0 auto",
              padding: 18,
              border: "2px solid #263445",
              borderRadius: 16,
              background: "#0e141c",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              textAlign: "left",
            }}
          >
            {/* FormSubmit options */}
            <input type="hidden" name="_subject" value="Нова заявка з сайту treneriwan.vercel.app" />
            <input type="hidden" name="_captcha" value="false" />
            {/* <input type="hidden" name="_next" value="https://treneriwan.vercel.app/?sent=1#apply" /> */}

            <label>{t.formName}</label>
            <input name="name" required
              style={{ padding: 12, borderRadius: 10, border: "1px solid #263445", background: "#0b121a", color: "#eef3f8" }} />

            <label>{t.formContact}</label>
            <input name="contact" required
              style={{ padding: 12, borderRadius: 10, border: "1px solid #263445", background: "#0b121a", color: "#eef3f8" }} />

            <label>{t.formType}</label>
            <select name="type"
              style={{ padding: 12, borderRadius: 10, border: "1px solid #263445", background: "#0b121a", color: "#eef3f8" }}>
              <option>{t.formOption1}</option>
              <option>{t.formOption2}</option>
            </select>

            <label>{t.formMsg}</label>
            <textarea name="message" rows={3}
              style={{ padding: 12, borderRadius: 10, border: "1px solid #263445", background: "#0b121a", color: "#eef3f8" }} />

            <button type="submit" style={{ ...btnPrimary, textAlign: "center" }}>{t.formSend}</button>
          </form>
        </div>
      </section>

      {/* LOCATIONS */}
      <section style={section}>
        <div style={max}>
          <h3 style={title}>{t.locTitle}</h3>
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ border: "2px solid #263445", borderRadius: 16, padding: 16 }}>
              <div style={{ fontWeight: 700 }}>{t.loc1}</div>
              <a href="https://maps.google.com/?q=Sandomierska+112+Kielce" target="_blank" rel="noreferrer" style={{ ...btn, borderRadius: 12 }}>
                {t.maps}
              </a>
            </div>
            <div style={{ border: "2px solid #263445", borderRadius: 16, padding: 16 }}>
              <div style={{ fontWeight: 700 }}>{t.loc2}</div>
              <a href="https://maps.google.com/?q=Zagna%C5%84ska+92+Kielce" target="_blank" rel="noreferrer" style={{ ...btn, borderRadius: 12 }}>
                {t.maps}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER with framed, clickable links */}
      <footer style={{ borderTop: "1px solid #151e29", textAlign: "center", padding: "36px 0 60px" }}>
        <div style={{ fontWeight: 900, fontSize: 20, color: "#fff", marginBottom: 16 }}>{t.footerTitle}</div>
        <div>
          <a href={tg} target="_blank" rel="noreferrer" style={btn}>⚡ Telegram</a>
          <a href={wa} target="_blank" rel="noreferrer" style={btn}>💬 WhatsApp</a>
          <a href={ig} target="_blank" rel="noreferrer" style={btn}>📷 Instagram</a>
          <a href={mail} style={btn}>✉️ Email</a>
        </div>
        <div style={{ fontSize: 13, opacity: 0.6, marginTop: 20 }}>{t.footerBrand}</div>
      </footer>

      {/* Small global hover */}
      <style jsx global>{`
        a:hover, button:hover { transform: translateY(-2px); }
      `}</style>
    </div>
  );
            }

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
      formTitle: "Залиш заявку — я напишу особисто",
      formName: "Ім’я",
      formContact: "Телефон або Email",
      formType: "Вибери варіант",
      formOption1: "Тренування в Кельце",
      formOption2: "Онлайн-ведення",
      formMsg: "Коментар (необов’язково)",
      formSend: "Надіслати заявку 💪",
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
      formTitle: "Zostaw zgłoszenie — odezwę się osobiście",
      formName: "Imię",
      formContact: "Telefon lub Email",
      formType: "Wybierz opcję",
      formOption1: "Trening w Kielcach",
      formOption2: "Prowadzenie online",
      formMsg: "Komentarz (opcjonalnie)",
      formSend: "Wyślij zgłoszenie 💪",
      footerTitle: "Napisz do mnie",
      footerBrand: "© " + new Date().getFullYear() + " Trener Iwan — Discipline. Power. Balance.",
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

  const wrap = { background: "#0b0f14", color: "#eef3f8" };
  const max = { maxWidth: 1160, margin: "0 auto", padding: "0 20px" };
  const section = { padding: "44px 0", borderTop: "1px solid #151e29", textAlign: "center" };
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

  return (
    <div style={wrap}>
      <Head>
        <title>{t.h1} — Trener Iwan | Kielce</title>
      </Head>

      {/* ФОРМА ЗАЯВКИ */}
      <section style={section}>
        <div style={max}>
          <h3 style={{ fontSize: 28, fontWeight: 900, marginBottom: 20 }}>{t.formTitle}</h3>
          <form
            action="https://formsubmit.co/Dobr.ivn1995@gmail.com"
            method="POST"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              maxWidth: 400,
              margin: "0 auto",
              textAlign: "left",
            }}
          >
            <input type="hidden" name="_subject" value="Нова заявка з сайту treneriwan.pl" />
            <input type="hidden" name="_captcha" value="false" />
            <label>{t.formName}</label>
            <input name="name" required style={{ padding: 10, borderRadius: 8, border: "1px solid #263445" }} />
            <label>{t.formContact}</label>
            <input name="contact" required style={{ padding: 10, borderRadius: 8, border: "1px solid #263445" }} />
            <label>{t.formType}</label>
            <select name="type" style={{ padding: 10, borderRadius: 8, border: "1px solid #263445" }}>
              <option>{t.formOption1}</option>
              <option>{t.formOption2}</option>
            </select>
            <label>{t.formMsg}</label>
            <textarea name="message" rows="3" style={{ padding: 10, borderRadius: 8, border: "1px solid #263445" }} />
            <button type="submit" style={btnPrimary}>
              {t.formSend}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

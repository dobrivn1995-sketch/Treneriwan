import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  // ----- Links -----
  const wa = "https://wa.me/48796559143?text=" + encodeURIComponent("Привіт! Хочу тренування");
  const tg = "https://t.me/Grutos";
  const ig = "https://instagram.com/trener_iwan";
  const mail = "mailto:Dobr.ivn1995@gmail.com";

  // ----- i18n -----
  const dict = {
    ua: {
      badge: "м. Кельце • Персональний тренер",
      h1: "Тренуйся з Іваном",
      h2: "LEVEL UP YOUR BODY",
      heroLead:
        "9 років досвіду. Персональні тренування в Кельце та повне онлайн-ведення з нуля. Техніка без болю + системний прогрес.",
      ctaBook: "Записатися",
      ctaTG: "Написати в Telegram",
      ctaOnline: "Онлайн-ведення — 500 zł/міс",

      aboutTitle: "Про мене",
      aboutText:
        "Я Іван — тренер із 9-річним досвідом. Допомагаю клієнтам безпечно ставити техніку, скидати вагу, набирати силу та тримати форму роками. Треную в залах RMG (Sandomierska 112) та Endorfina (Zagnańska 92), а також веду онлайн із повною підтримкою.",
      whyPick: "Чому мене обирають",
      why1: "Індивідуальний план під твій графік і рівень",
      why2: "Техніка без болю — здорові суглоби і спина",
      why3: "Мотивація і контроль — щотижневі апдейти",
      why4: "Харчування без фанатизму — реальне життя",

      priceTitle: "Ціни (Кельце)",
      priceNote: "Зали: RMG і Endorfina. Оплата разово або блоком.",
      p1: "Разове тренування",
      p1price: "90 zł",
      p2: "Блок 5 занять",
      p2price: "80 zł / заняття",
      p3: "Блок 10 занять — Знижка",
      p3priceOld: "900 zł",
      p3priceNew: "700 zł",
      pList1a: "60 хв персонально",
      pList1b: "Розбір техніки",
      pList1c: "План на домашні завдання",
      pList2a: "Економія у блоці, гарантований прогрес",
      pList2b: "Проміжні заміри / корекції",
      pList3a: "Найкраща ціна за заняття (70 zł)",
      buyBlock: "Взяти блок занять",

      onlineTitle: "Онлайн-ведення — 500 zł/місяць",
      onlineNote: "Ідеально, якщо ти не в Кельце або тренуєшся сам — старт навіть із нуля.",
      online1: "План тренувань і харчування під тебе",
      online2: "Щотижневий контроль (фото/вага/кроки) + корекції",
      online3: "Розбір техніки за відео",
      online4: "Чат-підтримка щодня у Telegram",
      onlineAsk: "Поставити запитання",
      onlineStart: "Старт онлайн",

      locTitle: "Де тренуємось (Кельце)",
      loc1: "RMG — Sandomierska 112, Kielce",
      loc2: "Endorfina — Zagnańska 92, Kielce",
      maps: "Google Maps",

      revTitle: "Відгуки",
      rev1: "“Мінус 8 кг за 3 місяці, спина перестала боліти. Дисципліна і підтримка — топ.”",
      rev2: "“З нуля поставили техніку, з’явився прогрес і мотивація. Рекомендую!”",

      contact: "Питання по розкладу — пиши у",
      footer: "© " + new Date().getFullYear() + " Ivan Trainer",
      lang: "UA",
      langAlt: "PL",
    },
    pl: {
      badge: "Kielce • Trener personalny",
      h1: "Trenuj z Iwanem",
      h2: "LEVEL UP YOUR BODY",
      heroLead:
        "9 lat doświadczenia. Treningi personalne w Kielcach oraz pełne prowadzenie online od zera. Technika bez bólu + systemowy progres.",
      ctaBook: "Zapisz się",
      ctaTG: "Napisz na Telegramie",
      ctaOnline: "Prowadzenie online — 500 zł/mies.",

      aboutTitle: "O mnie",
      aboutText:
        "Nazywam się Iwan — jestem trenerem z 9-letnim doświadczeniem. Pomagam bezpiecznie opanować technikę, schudnąć, zbudować siłę i utrzymać formę na lata. Prowadzę treningi w klubach RMG (Sandomierska 112) i Endorfina (Zagnańska 92) oraz online z pełnym wsparciem.",
      whyPick: "Dlaczego warto",
      why1: "Plan dopasowany do grafiku i poziomu",
      why2: "Technika bez bólu — zdrowe stawy i kręgosłup",
      why3: "Motywacja i kontrola — cotygodniowe aktualizacje",
      why4: "Odżywianie bez skrajności — realne życie",

      priceTitle: "Cennik (Kielce)",
      priceNote: "Kluby: RMG i Endorfina. Płatność jednorazowo lub w pakiecie.",
      p1: "Pojedynczy trening",
      p1price: "90 zł",
      p2: "Pakiet 5 treningów",
      p2price: "80 zł / trening",
      p3: "Pakiet 10 treningów — Rabat",
      p3priceOld: "900 zł",
      p3priceNew: "700 zł",
      pList1a: "60 min 1-na-1",
      pList1b: "Analiza techniki",
      pList1c: "Zadania domowe",
      pList2a: "Oszczędność i gwarantowany progres",
      pList2b: "Pomiary pośrednie / korekty",
      pList3a: "Najlepsza cena (70 zł / trening)",
      buyBlock: "Weź pakiet",

      onlineTitle: "Prowadzenie online — 500 zł/mies.",
      onlineNote: "Idealne, jeśli nie jesteś w Kielcach lub ćwiczysz sam — start nawet od zera.",
      online1: "Plan treningów i żywienia pod Ciebie",
      online2: "Cotygodniowy monitoring (foto/waga/kroki) + korekty",
      online3: "Analiza techniki na wideo",
      online4: "Codzienne wsparcie w Telegramie",
      onlineAsk: "Zadaj pytanie",
      onlineStart: "Start online",

      locTitle: "Gdzie trenujemy (Kielce)",
      loc1: "RMG — Sandomierska 112, Kielce",
      loc2: "Endorfina — Zagnańska 92, Kielce",
      maps: "Google Maps",

      revTitle: "Opinie",
      rev1: "„-8 kg w 3 miesiące, zero bólu pleców. Dyscyplina i wsparcie — sztos.”",
      rev2: "„Od zera ogarnęliśmy technikę, pojawił się progres i motywacja. Polecam!”",

      contact: "Pytania o grafik — napisz na",
      footer: "© " + new Date().getFullYear() + " Ivan Trainer",
      lang: "PL",
      langAlt: "UA",
    },
  };

  const [lang, setLang] = useState("ua");
  const t = dict[lang];

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("lang");
    if (saved && (saved === "ua" || saved === "pl")) setLang(saved);
  }, []);
  const switchLang = () => {
    const next = lang === "ua" ? "pl" : "ua";
    setLang(next);
    if (typeof window !== "undefined") localStorage.setItem("lang", next);
  };

  // ----- Styles (premium clean) -----
  const wrap = { background: "#0b0f14", color: "#eef3f8" };
  const max = { maxWidth: 1160, margin: "0 auto", padding: "0 20px" };
  const hero = { padding: "56px 0 32px", background: "#0b0f14" };
  const grid = { display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 28, alignItems: "center" };
  const badge = { display: "inline-flex", gap: 8, padding: "6px 12px", borderRadius: 999, border: "1px solid #263445", color: "#a7c7e9", fontSize: 12 };
  const h1 = { fontSize: 58, fontWeight: 900, margin: "12px 0 6px", color: "#ffffff" };
  const h2 = { fontSize: 40, fontWeight: 800, margin: "0 0 18px", color: "#27a6ff" };
  const lead = { opacity: 0.92, fontSize: 18, lineHeight: 1.6, marginBottom: 22 };
  const ctas = { display: "flex", gap: 12, flexWrap: "wrap" };
  const btn = { padding: "14px 24px", borderRadius: 14, fontWeight: 800, textDecoration: "none", display: "inline-block", border: "2px solid transparent", transition: "transform .15s ease" };
  const btnPrimary = { ...btn, background: "#ff8a00", color: "#0b0f14", borderColor: "#ff8a00" };
  const btnOutline = { ...btn, background: "transparent", color: "#cfe9ff", borderColor: "#27a6ff" };
  const heroCard = { borderRadius: 20, overflow: "hidden", border: "1px solid #263445", background: "#0e141c" };
  const heroImg = { width: "100%", height: "100%", minHeight: 420, background: "url(/ivan-hero.jpg) center/cover no-repeat" };

  const section = { padding: "44px 0", borderTop: "1px solid #151e29" };
  const title = { fontSize: 28, fontWeight: 900, textAlign: "center", margin: "0 0 14px" };
  const note = { textAlign: "center", color: "#9bb7d4", marginBottom: 18 };

  const grid3 = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 };
  const card = { background: "#0e141c", border: "1px solid #263445", borderRadius: 16, padding: 18 };

  const priceTop = { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 };
  const priceName = { fontWeight: 800, fontSize: 18 };
  const priceTag = { fontWeight: 900, fontSize: 20, color: "#ffd7a6" };
  const highlight = { ...card, borderColor: "#ff8a00", boxShadow: "0 0 0 1px #ff8a00 inset" };
  const strike = { textDecoration: "line-through", opacity: 0.6, marginRight: 8 };

  const mapBtn = { ...btnOutline, padding: "10px 16px", borderRadius: 12 };

  return (
    <div style={wrap}>
      <Head>
        <title>{t.h1} — Trener Iwan | Kielce</title>
        <meta name="description" content="Персональні тренування в Кельце та онлайн-ведення. 9 років досвіду. RMG і Endorfina. Онлайн 500 zł/міс." />
        <meta property="og:title" content="Trener Iwan — Kielce" />
        <meta property="og:description" content="Персональні тренування та онлайн-ведення. 9 років досвіду." />
        <meta property="og:image" content="/ivan-hero.jpg" />
      </Head>

      {/* LANG SWITCH */}
      <div style={{ position: "sticky", top: 0, zIndex: 5, background: "#0b0f14", borderBottom: "1px solid #151e29" }}>
        <div style={{ ...max, display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          <div style={{ fontWeight: 900 }}>TRENER IWAN</div>
          <button onClick={switchLang} style={{ ...btnOutline, borderRadius: 999, padding: "8px 14px" }}>
            {t.lang} ↔ {t.langAlt}
          </button>
        </div>
      </div>

      {/* HERO */}
      <header style={hero}>
        <div style={{ ...max, ...grid }}>
          <div>
            <span style={badge}>{t.badge}</span>
            <h1 style={h1}>{t.h1}</h1>
            <h2 style={h2}>{t.h2}</h2>
            <p style={lead}>{t.heroLead}</p>
            <div style={ctas}>
              <a href={wa} target="_blank" rel="noreferrer" style={btnPrimary}>{t.ctaBook}</a>
              <a href={tg} target="_blank" rel="noreferrer" style={btnOutline}>{t.ctaTG}</a>
              <a href={wa} target="_blank" rel="noreferrer" style={btnOutline}>{t.ctaOnline}</a>
            </div>
          </div>
          <div style={heroCard}><div style={heroImg} /></div>
        </div>
      </header>

      {/* ABOUT */}
      <section style={section}>
        <div style={max}>
          <h3 style={title}>{t.aboutTitle}</h3>
          <div style={grid3}>
            <div style={card}>
              <p style={{ marginTop: 0, lineHeight: 1.7 }}>{t.aboutText}</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
                <a href={mail} style={btnOutline}>Email</a>
                <a href={ig} target="_blank" rel="noreferrer" style={btnOutline}>Instagram @trener_iwan</a>
              </div>
            </div>
            <div style={{ ...card, padding: 0, overflow: "hidden" }}>
              <div style={{ width: "100%", height: 320, background: "url(/ivan-about.jpg) center/cover no-repeat" }} />
            </div>
            <div style={card}>
              <div style={{ fontWeight: 900, marginBottom: 10 }}>{t.whyPick}</div>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
                <li>{t.why1}</li>
                <li>{t.why2}</li>
                <li>{t.why3}</li>
                <li>{t.why4}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={section}>
        <div style={max}>
          <h3 style={title}>{t.priceTitle}</h3>
          <div style={note}>{t.priceNote}</div>
          <div style={grid3}>
            <div style={card}>
              <div style={priceTop}><div style={priceName}>{t.p1}</div><div style={priceTag}>{t.p1price}</div></div>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
                <li>{t.pList1a}</li><li>{t.pList1b}</li><li>{t.pList1c}</li>
              </ul>
            </div>
            <div style={card}>
              <div style={priceTop}><div style={priceName}>{t.p2}</div><div style={priceTag}>{t.p2price}</div></div>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
                <li>{t.pList2a}</li><li>{t.pList2b}</li>
              </ul>
            </div>
            <div style={highlight}>
              <div style={priceTop}>
                <div style={priceName}>{t.p3}</div>
                <div style={priceTag}><span style={strike}>{t.p3priceOld}</span> {t.p3priceNew}</div>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
                <li>{t.pList3a}</li><li>{t.pList2b}</li>
              </ul>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 18 }}>
            <a href={wa} target="_blank" rel="noreferrer" style={btnPrimary}>{t.buyBlock}</a>
          </div>
        </div>
      </section>

      {/* ONLINE */}
      <section style={section}>
        <div style={max}>
          <h3 style={title}>{t.onlineTitle}</h3>
          <div style={note}>{t.onlineNote}</div>
          <div style={grid3}>
            <div style={card}>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
                <li>{t.online1}</li><li>{t.online2}</li><li>{t.online3}</li><li>{t.online4}</li>
              </ul>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16 }}>
                <a href={tg} target="_blank" rel="noreferrer" style={btnOutline}>{t.onlineAsk}</a>
                <a href={wa} target="_blank" rel="noreferrer" style={btnPrimary}>{t.onlineStart}</a>
              </div>
            </div>
            <div style={{ ...card, padding: 0, overflow: "hidden" }}>
              <div style={{ width: "100%", height: 320, background: "url(/ivan-gym.jpg) center/cover no-repeat" }} />
            </div>
            <div style={card}>
              <div style={{ fontWeight: 900, color: "#7dd3ff", marginBottom: 10 }}>{t.revTitle}</div>
              <div style={{ opacity: 0.95, marginBottom: 10 }}>{t.rev1}</div>
              <div style={{ opacity: 0.95 }}>{t.rev2}</div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section style={section}>
        <div style={max}>
          <h3 style={title}>{t.locTitle}</h3>
          <div style={grid3}>
            <div style={card}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div>{t.loc1}</div>
                <a style={mapBtn} target="_blank" rel="noreferrer" href="https://maps.google.com/?q=Sandomierska+112+Kielce">{t.maps}</a>
              </div>
            </div>
            <div style={card}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div>{t.loc2}</div>
                <a style={mapBtn} target="_blank" rel="noreferrer" href="https://maps.google.com/?q=Zagna%C5%84ska+92+Kielce">{t.maps}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <{/* FOOTER */}
<footer style={{ borderTop: "1px solid #151e29", background: "#0b0f14" }}>
  <div
    style={{
      ...max,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      padding: "28px 0",
      color: "#9bb7d4",
      textAlign: "center",
    }}
  >
    <div style={{ fontWeight: 900, fontSize: 18, color: "#eaf3ff" }}>
      {lang === "ua" ? "Написати мені" : "Napisz do mnie"}
    </div>

    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, fontSize: 16 }}>
      <a href={tg} target="_blank" rel="noreferrer" style={{ color: "#7dd3ff", textDecoration: "none" }}>
        Telegram
      </a>
      <span style={{ opacity: 0.4 }}>•</span>
      <a href={wa} target="_blank" rel="noreferrer" style={{ color: "#ffd7a6", textDecoration: "none" }}>
        WhatsApp
      </a>
      <span style={{ opacity: 0.4 }}>•</span>
      <a href={ig} target="_blank" rel="noreferrer" style={{ color: "#9edbff", textDecoration: "none" }}>
        Instagram
      </a>
      <span style={{ opacity: 0.4 }}>•</span>
      <a href={mail} target="_blank" rel="noreferrer" style={{ color: "#f4c27c", textDecoration: "none" }}>
        Email
      </a>
    </div>

    <div style={{ fontSize: 13, opacity: 0.6, marginTop: 10 }}>
      © {new Date().getFullYear()} Trener Iwan — Discipline. Power. Balance.
    </div>
  </div>
</footer>

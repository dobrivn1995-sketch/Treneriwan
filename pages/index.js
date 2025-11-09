export default function Home() {
  const wa = 'https://wa.me/48796559143?text=' + encodeURIComponent('Привіт! Хочу тренування');
  const tg = 'https://t.me/Grutos';
  const ig = 'https://instagram.com/trener_iwan';

  // --- базові стилі героя ---
  const wrap = {
    minHeight: '100vh',
    background:
      'linear-gradient(180deg, rgba(0,20,40,.88) 0%, rgba(0,12,28,.94) 40%, rgba(0,10,22,.98) 100%), url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop) center/cover no-repeat',
    color: '#eaf6ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 20px'
  };
  const box = { maxWidth: 960, width: '100%', textAlign: 'center' };
  const h1 = { fontSize: '56px', lineHeight: 1.05, fontWeight: 900, margin: 0, color: '#ff8a00', textShadow: '0 0 22px rgba(255,138,0,.25)' };
  const h2 = { fontSize: '42px', lineHeight: 1.1, margin: '12px 0 22px', color: '#24b0ff', fontWeight: 900, textShadow: '0 0 18px rgba(36,176,255,.25)' };
  const lead = { opacity: .92, fontSize: 18, maxWidth: 680, margin: '0 auto 26px' };
  const ctas = { display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', margin: '8px 0 34px' };
  const btn = { padding: '14px 26px', borderRadius: 14, fontWeight: 800, textDecoration: 'none', display: 'inline-block', border: '2px solid transparent', letterSpacing: .4 };
  const btnPrimary = { ...btn, background: 'rgba(255,138,0,.12)', borderColor: '#ff8a00', color: '#ffd7a6', boxShadow: '0 0 0 4px rgba(255,138,0,.08) inset, 0 0 24px rgba(255,138,0,.18)' };
  const btnOutline = { ...btn, background: 'rgba(36,176,255,.08)', borderColor: '#24b0ff', color: '#c8ecff', boxShadow: '0 0 0 4px rgba(36,176,255,.06) inset, 0 0 24px rgba(36,176,255,.18)' };

  // --- блок "Чому варто" ---
  const section = { padding: '42px 20px', background: '#07111d' };
  const max = { maxWidth: 1024, margin: '0 auto' };
  const why = { background: 'rgba(10,18,32,.6)', border: '1px solid rgba(60,110,160,.35)', borderRadius: 16, padding: 18, maxWidth: 760, margin: '0 auto' };
  const whyTitle = { color: '#7dd3ff', fontSize: 26, fontWeight: 900, margin: '0 0 12px', textAlign: 'center' };
  const li = { display: 'flex', gap: 10, alignItems: 'flex-start', margin: '10px 0', fontSize: 16 };
  const bullet = { width: 22, height: 22, borderRadius: 999, border: '2px solid #24b0ff', boxShadow: '0 0 12px rgba(36,176,255,.35) inset' };

  // --- заголовки секцій ---
  const hSec = { fontSize: 30, fontWeight: 900, color: '#eaf6ff', margin: '0 0 16px', textAlign: 'center' };
  const note = { textAlign: 'center', color: '#9cc3e6', opacity: .9, marginBottom: 18 };

  // --- картки ---
  const cards = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 };
  const card = { background: 'rgba(9,16,28,.75)', border: '1px solid rgba(60,110,160,.35)', borderRadius: 16, padding: 18 };

  // --- ціни ---
  const priceTop = { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 10 };
  const priceName = { fontWeight: 800, fontSize: 18 };
  const priceTag = { fontWeight: 900, fontSize: 20, color: '#ffd7a6' };
  const highlight = { ...card, borderColor: '#ff8a00', boxShadow: '0 0 24px rgba(255,138,0,.18)' };
  const strike = { textDecoration: 'line-through', opacity: .6, marginRight: 8 };

  // --- локації ---
  const locRow = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 };
  const mapBtn = { ...btn, borderColor: '#24b0ff', color: '#c8ecff', background: 'rgba(36,176,255,.06)' };

  return (
    <>
      {/* HERO */}
      <main style={wrap}>
        <div style={box}>
          <h1 style={h1}>Тренуйся з Іваном</h1>
          <h2 style={h2}>LEVEL UP YOUR BODY</h2>
          <p style={lead}>Індивідуальний підхід, стабільні результати та мотивація. Безпечні тренування для твого здоров’я та фігури.</p>
          <div style={ctas}>
            <a href={wa} target="_blank" rel="noreferrer" style={btnPrimary}>Записатися</a>
            <a href={tg} target="_blank" rel="noreferrer" style={btnOutline}>Написати в Telegram</a>
          </div>

          <div style={why}>
            <div style={whyTitle}>Чому варто:</div>
            <div style={li}><span style={bullet} /> <span>Індивідуальний підхід — 100% уваги саме тобі</span></div>
            <div style={li}><span style={bullet} /> <span>Швидкі та стабільні результати — без втрати часу</span></div>
            <div style={li}><span style={bullet} /> <span>Мотивація й підтримка — досягаємо мети разом</span></div>
            <div style={li}><span style={bullet} /> <span>Безпека та техніка — тренуйся розумно</span></div>
          </div>
        </div>
      </main>

      {/* PRICING — Кельце */}
      <section style={section}>
        <div style={max}>
          <h3 style={hSec}>Ціни (Кельце)</h3>
          <div style={note}>Діють у залах м. Кельце: <b>RMG</b> та <b>Endorfina</b>. Оплата за блок занять або разово.</div>

          <div style={cards}>
            <div style={card}>
              <div style={priceTop}>
                <div style={priceName}>Разове тренування</div>
                <div style={priceTag}>90 zł</div>
              </div>
              <ul style={{margin:0, paddingLeft: '18px', lineHeight: 1.6}}>
                <li>60 хв персонально</li>
                <li>Розбір техніки</li>
                <li>План на домашні завдання</li>
              </ul>
            </div>

            <div style={card}>
              <div style={priceTop}>
                <div style={priceName}>Блок 5 занять</div>
                <div style={priceTag}>80 zł / заняття</div>
              </div>
              <ul style={{margin:0, paddingLeft: '18px', lineHeight: 1.6}}>
                <li>Економія у блоці</li>
                <li>Гарантований прогрес</li>
                <li>Проміжні заміри</li>
              </ul>
            </div>

            <div style={highlight}>
              <div style={priceTop}>
                <div style={priceName}>Блок 10 занять — Знижка</div>
                <div style={priceTag}><span style={strike}>900 zł</span> 700 zł</div>
              </div>
              <ul style={{margin:0, paddingLeft: '18px', lineHeight: 1.6}}>
                <li>Найкраща ціна за заняття (70 zł)</li>
                <li>Системний прогрес</li>
                <li>Проміжні та фінальні заміри</li>
              </ul>
            </div>
          </div>

          <div style={{textAlign:'center', marginTop: 18}}>
            <a href={wa} target="_blank" rel="noreferrer" style={btnPrimary}>Взяти блок занять</a>
          </div>
        </div>
      </section>

      {/* LOCATIONS — Кельце */}
      <section style={{...section, background:'#06101b'}}>
        <div style={max}>
          <h3 style={hSec}>Де тренуємось (Кельце)</h3>
          <div style={cards}>
            <div style={card}>
              <div style={locRow}>
                <div>
                  <div style={{fontWeight:800, fontSize:18}}>RMG</div>
                  <div style={{opacity:.9, color:'#9cc3e6'}}>Sandomierska 112, Kielce</div>
                </div>
                <a style={mapBtn} target="_blank" rel="noreferrer" href="https://maps.google.com/?q=Sandomierska+112+Kielce">Google Maps</a>
              </div>
            </div>

            <div style={card}>
              <div style={locRow}>
                <div>
                  <div style={{fontWeight:800, fontSize:18}}>Endorfina</div>
                  <div style={{opacity:.9, color:'#9cc3e6'}}>Zagnańska 92, Kielce</div>
                </div>
                <a style={mapBtn} target="_blank" rel="noreferrer" href="https://maps.google.com/?q=Zagna%C5%84ska+92+Kielce">Google Maps</a>
              </div>
            </div>
          </div>

          <div style={{textAlign:'center', marginTop: 18, opacity:.85}}>
            Питання по розкладу — пиши у <a href={tg} target="_blank" rel="noreferrer" style={{color:'#9edbff'}}>Telegram</a> або <a href={wa} target="_blank" rel="noreferrer" style={{color:'#ffd7a6'}}>WhatsApp</a>.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{textAlign:'center', padding:'24px 12px', background:'#05101a', color:'#9bb8d6'}}>
        Instagram: <a href={ig} target="_blank" rel="noreferrer" style={{color:'#9edbff', textDecoration:'none'}}>@trener_iwan</a> • © {new Date().getFullYear()} Ivan Trainer
      </footer>
    </>
  );
}

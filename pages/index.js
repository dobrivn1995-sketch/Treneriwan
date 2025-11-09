export default function Home() {
  const wa = 'https://wa.me/48796559143?text=' + encodeURIComponent('Привіт! Хочу тренування');
  const tg = 'https://t.me/Grutos';
  const ig = 'https://instagram.com/trener_iwan';

  // HERO (з твоїм фото)
  const hero = {
    minHeight: '100vh',
    background:
      'radial-gradient(1000px 400px at 15% -10%, rgba(36,176,255,.18), transparent), radial-gradient(900px 500px at 90% 10%, rgba(255,138,0,.16), transparent), #070e18',
    color: '#eaf6ff',
    display: 'flex',
    alignItems: 'center',
    padding: '54px 20px'
  };
  const heroInner = {
    maxWidth: 1160,
    margin: '0 auto',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1.2fr .9fr',
    gap: 24,
    alignItems: 'center'
  };
  const pill = { display:'inline-flex',alignItems:'center',gap:8,padding:'6px 12px',borderRadius:999,border:'1px solid rgba(60,110,160,.35)',background:'rgba(10,18,32,.6)',fontSize:12,color:'#9edbff' };
  const h1 = { fontSize: 56, lineHeight: 1.05, fontWeight: 900, margin: '10px 0 6px', color: '#ff8a00', textShadow: '0 0 22px rgba(255,138,0,.22)' };
  const h2 = { fontSize: 42, lineHeight: 1.1, margin: '0 0 20px', color: '#24b0ff', fontWeight: 900, textShadow: '0 0 18px rgba(36,176,255,.22)' };
  const lead = { opacity:.92,fontSize:18,maxWidth:640,margin:'0 0 24px' };

  const btn = { padding:'14px 26px', borderRadius:14, fontWeight:800, textDecoration:'none', display:'inline-block', border:'2px solid transparent', letterSpacing:.4, transition:'transform .15s ease, box-shadow .15s ease' };
  const btnPrimary = { ...btn, background:'rgba(255,138,0,.12)', borderColor:'#ff8a00', color:'#ffd7a6', boxShadow:'0 0 0 4px rgba(255,138,0,.08) inset, 0 0 24px rgba(255,138,0,.18)' };
  const btnOutline = { ...btn, background:'rgba(36,176,255,.08)', borderColor:'#24b0ff', color:'#c8ecff', boxShadow:'0 0 0 4px rgba(36,176,255,.06) inset, 0 0 24px rgba(36,176,255,.18)' };

  const photoWrap = { position:'relative', borderRadius:24, overflow:'hidden', border:'1px solid rgba(60,110,160,.35)', background:'#0b1426' };
  const photo = { width:'100%', height:'100%', minHeight:420, background:`linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.35)), url(/ivan-hero.jpg) center/cover no-repeat` };

  // Глобальні секції
  const section = { padding:'44px 20px', background:'#06101b', color:'#eaf6ff' };
  const max = { maxWidth: 1100, margin:'0 auto' };
  const hSec = { fontSize:30, fontWeight:900, margin:'0 0 14px', textAlign:'center' };
  const note = { textAlign:'center', color:'#9cc3e6', opacity:.9, marginBottom:18 };

  // Переваги
  const why = { background:'rgba(9,16,28,.75)', border:'1px solid rgba(60,110,160,.35)', borderRadius:16, padding:18 };
  const li = { display:'flex', gap:10, alignItems:'flex-start', margin:'10px 0', fontSize:16 };
  const bullet = { width:22,height:22,borderRadius:999,border:'2px solid #24b0ff', boxShadow:'0 0 12px rgba(36,176,255,.35) inset', flex:'0 0 auto' };

  // Сітки/картки
  const cards = { display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16 };
  const card = { background:'rgba(9,16,28,.75)', border:'1px solid rgba(60,110,160,.35)', borderRadius:16, padding:18 };

  // Ціни
  const priceTop = { display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:12, marginBottom:10 };
  const priceName = { fontWeight:800, fontSize:18 };
  const priceTag = { fontWeight:900, fontSize:20, color:'#ffd7a6' };
  const highlight = { ...card, borderColor:'#ff8a00', boxShadow:'0 0 24px rgba(255,138,0,.18)' };
  const strike = { textDecoration:'line-through', opacity:.6, marginRight:8 };

  // Локації
  const locRow = { display:'flex', alignItems:'center', justifyContent:'space-between', gap:12 };
  const mapBtn = { ...btn, borderColor:'#24b0ff', color:'#c8ecff', background:'rgba(36,176,255,.06)' };

  return (
    <>
      <style jsx global>{`
        @keyframes glow { 0%{ box-shadow: 0 0 24px rgba(255,138,0,.18) } 50%{ box-shadow: 0 0 36px rgba(255,138,0,.32) } 100%{ box-shadow: 0 0 24px rgba(255,138,0,.18) } }
        .pulse { animation: glow 2.4s ease-in-out infinite }
        .lift:hover { transform: translateY(-2px) }
        @media (max-width: 960px){ .heroGrid { grid-template-columns: 1fr !important; } }
      `}</style>

      {/* HERO */}
      <header style={hero}>
        <div style={{...heroInner}} className="heroGrid">
          <div>
            <div style={{display:'flex',justifyContent:'flex-start',marginBottom:10}}>
              <span style={pill}>м. Кельце • Персональний тренер</span>
            </div>
            <h1 style={h1}>Тренуйся з Іваном</h1>
            <h2 style={h2}>LEVEL UP YOUR BODY</h2>
            <p style={lead}>
              8+ років практики. Силові без болю в спині, індивідуальні плани та реальний контроль прогресу.
              Тренування в залах <b>RMG</b> і <b>Endorfina</b>, або <b>онлайн-ведення</b> з нуля.
            </p>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <a href={wa} target="_blank" rel="noreferrer" style={btnPrimary} className="lift pulse">Записатися</a>
              <a href={tg} target="_blank" rel="noreferrer" style={btnOutline} className="lift">Написати в Telegram</a>
              <a href={ig} target="_blank" rel="noreferrer" style={{...btn,fontWeight:700,color:'#9edbff',borderColor:'rgba(158,219,255,.45)'}} className="lift">@trener_iwan</a>
            </div>
          </div>

          <div style={photoWrap}>
            <div style={photo} />
          </div>
        </div>
      </header>

      {/* ПРО МЕНЕ */}
      <section style={{...section, background:'#07131f'}}>
        <div style={max}>
          <h3 style={hSec}>Про мене</h3>
          <div style={cards}>
            <div style={card}>
              <p style={{marginTop:0,opacity:.95,lineHeight:1.7}}>
                Привіт, я Іван — персональний тренер із <b>8+ роками досвіду</b>. Працюю з початківцями та людьми, які
                повертались після перерв і травм. Моя філософія проста: <b>чиста техніка, системний прогрес, без фанатизму</b>.
                Я не продаю казок — я веду тебе до форми, яка тримається роками.
              </p>
              <ul style={{margin:0,paddingLeft:18,lineHeight:1.7}}>
                <li>Персональні тренування в Кельце — RMG (Sandomierska 112) та Endorfina (Zagnańska 92)</li>
                <li>Програми харчування без “заборонених” продуктів — реальне життя, реальний результат</li>
                <li>Контроль звітів, заміри, корекції — прозорий процес і видимий прогрес</li>
              </ul>
            </div>
            <div style={why}>
              <div style={{fontWeight:900, color:'#7dd3ff', marginBottom:10, textAlign:'center'}}>Чому мене обирають</div>
              <div style={li}><span style={bullet} /> <span><b>100% уваги</b> — програма під твій графік і стан</span></div>
              <div style={li}><span style={bullet} /> <span><b>Без болю</b> — техніка, безпечні навантаження, стабільний прогрес</span></div>
              <div style={li}><span style={bullet} /> <span><b>Мотивація</b> — чесно, по-ділу, без води</span></div>
              <div style={li}><span style={bullet} /> <span><b>Контроль</b> — щотижневі апдейти, корекції, підтримка</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ЦІНИ — Кельце */}
      <section style={{...section, background:'#07111d'}}>
        <div style={max}>
          <h3 style={hSec}>Ціни (Кельце)</h3>
          <div style={{textAlign:'center',color:'#9cc3e6',opacity:.9,marginBottom:18}}>
            Зали: <b>RMG</b> та <b>Endorfina</b>. Оплата разово або блоком.
          </div>
          <div style={cards}>
            <div style={card}>
              <div style={priceTop}><div style={priceName}>Разове тренування</div><div style={priceTag}>90 zł</div></div>
              <ul style={{margin:0,paddingLeft:18,lineHeight:1.6}}>
                <li>60 хв персонально</li><li>Розбір техніки</li><li>План на домашні завдання</li>
              </ul>
            </div>
            <div style={card}>
              <div style={priceTop}><div style={priceName}>Блок 5 занять</div><div style={priceTag}>80 zł / заняття</div></div>
              <ul style={{margin:0,paddingLeft:18,lineHeight:1.6}}>
                <li>Економія у блоці</li><li>Гарантований прогрес</li><li>Проміжні заміри</li>
              </ul>
            </div>
            <div style={highlight}>
              <div style={priceTop}><div style={priceName}>Блок 10 занять — Знижка</div><div style={priceTag}><span style={strike}>900 zł</span> 700 zł</div></div>
              <ul style={{margin:0,paddingLeft:18,lineHeight:1.6}}>
                <li>Найкраща ціна за заняття (70 zł)</li><li>Системний прогрес</li><li>Проміжні та фінальні заміри</li>
              </ul>
            </div>
          </div>
          <div style={{textAlign:'center',marginTop:18}}>
            <a href={wa} target="_blank" rel="noreferrer" style={btnPrimary} className="lift">Взяти блок занять</a>
          </div>
        </div>
      </section>

      {/* ОНЛАЙН-ВЕДЕННЯ */}
      <section style={{...section, background:'#06101b'}}>
        <div style={max}>
          <h3 style={hSec}>Онлайн-ведення — 500 zł/місяць</h3>
          <div style={{textAlign:'center',color:'#9cc3e6',opacity:.95,marginBottom:18}}>
            Ідеально, якщо ти не в Кельце або тренуєшся сам. Старт навіть із “0”.
          </div>
          <div style={cards}>
            <div style={{...card, borderColor:'rgba(36,176,255,.45)'}}>
              <ul style={{margin:0,paddingLeft:18,lineHeight:1.7}}>
                <li><b>План під тебе</b> (графік/рівень/обладнання)</li>
                <li><b>Харчування</b> без фанатизму + заміни страв</li>
                <li><b>Щотижневі апдейти</b> (фото/вага/кроки) + корекції</li>
                <li><b>Розбір техніки</b> за відео</li>
                <li><b>Чат-підтримка</b> у Telegram щодня</li>
              </ul>
              <div style={{display:'flex',gap:12,justifyContent:'center',marginTop:16}}>
                <a href={tg} target="_blank" rel="noreferrer" style={btnOutline} className="lift">Поставити запитання</a>
                <a href={wa} target="_blank" rel="noreferrer" style={btnPrimary} className="lift">Старт онлайн</a>
              </div>
            </div>
            <div style={card}>
              <div style={{fontWeight:900, color:'#7dd3ff', marginBottom:10}}>Відгуки</div>
              <div style={{opacity:.95, marginBottom:10}}>"Почав з нуля — мінус 8 кг і без болю в спині."</div>
              <div style={{opacity:.95}}>"Техніку поставили з першого тижня, прогрес системний."</div>
            </div>
          </div>
        </div>
      </section>

      {/* ЛОКАЦІЇ — Кельце */}
      <section style={{...section, background:'#07111d'}}>
        <div style={max}>
          <h3 style={hSec}>Де тренуємось (Кельце)</h3>
        </div>
        <div style={{...max}}>
          <div style={cards}>
            <div style={card}>
              <div style={locRow}>
                <div><div style={{fontWeight:800,fontSize:18}}>RMG</div><div style={{opacity:.9,color:'#9cc3e6'}}>Sandomierska 112, Kielce</div></div>
                <a style={mapBtn} target="_blank" rel="noreferrer" href="https://maps.google.com/?q=Sandomierska+112+Kielce">Google Maps</a>
              </div>
            </div>
            <div style={card}>
              <div style={locRow}>
                <div><div style={{fontWeight:800,fontSize:18}}>Endorfina</div><div style={{opacity:.9,color:'#9cc3e6'}}>Zagnańska 92, Kielce</div></div>
                <a style={mapBtn} target="_blank" rel="noreferrer" href="https://maps.google.com/?q=Zagna%C5%84ska+92+Kielce">Google Maps</a>
              </div>
            </div>
          </div>
          <div style={{textAlign:'center', marginTop:18, opacity:.85}}>
            Розклад узгодимо в <a href={tg} target="_blank" rel="noreferrer" style={{color:'#9edbff'}}>Telegram</a> або <a href={wa} target="_blank" rel="noreferrer" style={{color:'#ffd7a6'}}>WhatsApp</a>.
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

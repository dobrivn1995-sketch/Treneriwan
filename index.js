
import Head from 'next/head'

export default function Home(){
  const phone = '+48 796 559 143'
  const wa = 'https://wa.me/48796559143?text=' + encodeURIComponent('Привіт! Хочу тренування')
  const tg = 'https://t.me/Grutos'

  return (
    <>
      <Head>
        <title>Іван • Персональний тренер у Кельце — тренування, плани, онлайн</title>
        <meta name="description" content="Персональні тренування у Кельце (RMG, Endorfina), онлайн-ведення, індивідуальні плани та харчування. 8+ років досвіду." />
        <meta property="og:title" content="Іван — персональний тренер у Кельце" />
        <meta property="og:description" content="Персональні тренування • Плани • Онлайн-коучинг" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <header className="nav container">
        <div className="logo"><span className="logo-mark" />ТРЕНЕР ІВАН</div>
        <div className="actions">
          <a className="btn btn-outline" href="https://instagram.com/trener_iwan" target="_blank" rel="noreferrer">@trener_iwan</a>
          <a className="btn btn-outline" href={tg} target="_blank" rel="noreferrer">Telegram</a>
          <a className="btn btn-outline" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="badge">Персональний тренер у Кельце</span>
            <h1 className="title">ТРЕНУЙСЯ З ІВАНОМ<br/>LEVEL UP YOUR BODY</h1>
            <p className="subtitle">8+ років досвіду. Силові тренування без болю в спині, індивідуальні плани харчування та реальний контроль прогресу.</p>
            <div className="trust">
              <div className="item">8+ років практики</div>
              <div className="item">Персональні плани</div>
              <div className="item">Контроль прогресу</div>
            </div>
            <div className="actions">
              <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">Записатися</a>
              <a className="btn btn-outline" href={tg} target="_blank" rel="noreferrer">Написати в Telegram</a>
            </div>
          </div>
          <div>
            {/* decorative gym style block */}
            <div style={{height: '420px', borderRadius: '20px', border:'1px solid var(--border)', background: 'linear-gradient(145deg, rgba(31,161,216,.12), rgba(255,138,0,.12)), radial-gradient(600px 300px at 60% 20%, rgba(255,138,0,.12), transparent), #0c1628'}} />
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Що я роблю</h2>
        <div className="cards">
          <div className="card">
            <h3>Персональні тренування</h3>
            <p>RMG (Sandomierska 112) та Endorfina (Zagnańska 92). Точна техніка, безпека й результат.</p>
          </div>
          <div className="card">
            <h3>План + харчування</h3>
            <p>Програма під твій графік, раціони без фанатизму, корисні заміни страв.</p>
          </div>
          <div className="card">
            <h3>Онлайн-коучинг</h3>
            <p>Щотижневі апдейти, контроль звітів, підтримка в чаті. Індивідуальна пропозиція.</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div style={{display:'flex',alignItems:'end',justifyContent:'space-between',gap:'12px',flexWrap:'wrap'}}>
          <h2>Ціни в залах</h2>
          <p className="note">Актуально для RMG та Endorfina, м. Кельце</p>
        </div>
        <div className="pricing-grid">
          <div className="card">
            <div className="price"><span>Разове тренування</span><span className="tag">90 zł</span></div>
            <ul>
              <li>60 хв персонально</li>
              <li>Розбір техніки</li>
              <li>План на домашні завдання</li>
            </ul>
          </div>
          <div className="card">
            <div className="price"><span>Пакет 5 тренувань</span><span className="tag">80 zł / сесія</span></div>
            <ul>
              <li>Економія в пакеті</li>
              <li>Гарантований прогрес</li>
              <li>Проміжні заміри</li>
            </ul>
          </div>
          <div className="card" style={{borderColor:'var(--primary)'}}>
            <div className="price"><span>Пакет 10 тренувань</span><span className="tag">70 zł / сесія</span></div>
            <ul>
              <li>Найкраща ціна за сесію</li>
              <li>Системний прогрес</li>
              <li>Проміжні та фінальні заміри</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section container" id="contact">
        <h2>Залиш заявку</h2>
        <div className="contact-grid">
          <div className="card">
            <form action="https://formsubmit.co/Dobr.ivn1995@gmail.com" method="POST">
              <input type="hidden" name="_next" value="https://treneriwan.vercel.app/thanks" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
                <input className="input" name="Імʼя" placeholder="Імʼя" required />
                <input className="input" name="Телефон" placeholder="Телефон або WhatsApp/Telegram" required />
              </div>
              <textarea className="textarea" name="Повідомлення" placeholder="Ціль та зручний час"></textarea>
              <div className="help">Натискаючи «Надіслати», ви погоджуєтесь на обробку даних для контакту щодо тренувань.</div>
              <div className="actions" style={{marginTop:'10px'}}>
                <button className="btn btn-primary" type="submit">Надіслати заявку</button>
                <a className="btn btn-outline" href={wa} target="_blank" rel="noreferrer">Написати в WhatsApp</a>
              </div>
            </form>
          </div>
          <div className="card">
            <div className="grid">
              <a href={"tel:+48796559143"} className="btn btn-outline">+48 796 559 143</a>
              <a href={"mailto:Dobr.ivn1995@gmail.com"} className="btn btn-outline">Dobr.ivn1995@gmail.com</a>
              <a href={"https://instagram.com/trener_iwan"} target="_blank" rel="noreferrer" className="btn btn-outline">@trener_iwan</a>
              <a href={tg} target="_blank" rel="noreferrer" className="btn btn-outline">@Grutos (Telegram)</a>
              <div className="note">Kielce • RMG & Endorfina</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container" style={{display:'flex',justifyContent:'space-between',gap:'12px',flexWrap:'wrap'}}>
          <div>© {new Date().getFullYear()} Ivan Trainer • Instagram: @trener_iwan</div>
          <div className="actions">
            <a className="btn btn-outline" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="btn btn-outline" href={tg} target="_blank" rel="noreferrer">Telegram</a>
          </div>
        </div>
      </footer>
    </>
  )
}

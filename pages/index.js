export default function Home() {
  return (
    <main style={{
      backgroundColor: '#0d0d0d',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px'
    }}>
      <h1 style={{ fontSize: '38px', color: '#ff6a00', marginBottom: '10px' }}>
        Тренування з Іваном
      </h1>
      <h2 style={{ fontSize: '26px', color: '#00bfff', marginBottom: '30px' }}>
        Level Up Your Body
      </h2>

      <p style={{ maxWidth: '480px', fontSize: '16px', lineHeight: '1.6' }}>
        Індивідуальний підхід, стабільні результати та мотивація.
        Безпечні тренування для твого здоров’я та фігури.
      </p>

      <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <a href="https://wa.me/48796559143" target="_blank" rel="noreferrer"
          style={{ background: '#ff6a00', color: '#fff', padding: '12px 26px', borderRadius: '8px', textDecoration: 'none' }}>
          Записатися на тренування
        </a>
        <a href="https://t.me/Grutos" target="_blank" rel="noreferrer"
          style={{ background: '#00bfff', color: '#fff', padding: '12px 26px', borderRadius: '8px', textDecoration: 'none' }}>
          Написати в Telegram
        </a>
        <a href="https://www.instagram.com/trener_iwan" target="_blank" rel="noreferrer"
          style={{ color: '#aaa', marginTop: '10px', textDecoration: 'none' }}>
          Instagram: @trener_iwan
        </a>
      </div>

      <p style={{ marginTop: '60px', fontSize: '14px', color: '#888' }}>
        Онлайн-ведення від 0 — почни сьогодні!
      </p>
    </main>
  )
            }

function Home() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        color: '#222'
      }}
    >
      {/* HERO */}
      <header
        style={{
          textAlign: 'center',
          padding: '80px 20px',
          background: 'linear-gradient(135deg, #6c63ff, #8f94fb)',
          color: 'white'
        }}
      >
        <h1 style={{ fontSize: '3rem' }}>Meu Blog</h1>
        <p style={{ margin: '15px 0', fontSize: '1.2rem' }}>
          Conteúdos sobre tecnologia, desenvolvimento e aprendizado
        </p>

        <button
          style={{
            padding: '10px 20px',
            border: 'none',
            background: 'white',
            color: '#6c63ff',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Explorar posts
        </button>
      </header>

      {/* POSTS */}
      <section
        style={{
          padding: '40px 20px',
          textAlign: 'center'
        }}
      >
        <h2 style={{ marginBottom: '30px' }}>Posts recentes</h2>

        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {/* CARD */}
          <div
            style={{
              width: '250px',
              padding: '20px',
              borderRadius: '12px',
              background: '#f9f9f9'
            }}
          >
            <h3>Introdução ao React</h3>
            <p>Aprenda os conceitos básicos para começar com React.</p>
          </div>

          <div
            style={{
              width: '250px',
              padding: '20px',
              borderRadius: '12px',
              background: '#f9f9f9'
            }}
          >
            <h3>JavaScript moderno</h3>
            <p>Entenda ES6+ e como escrever código mais limpo.</p>
          </div>

          <div
            style={{
              width: '250px',
              padding: '20px',
              borderRadius: '12px',
              background: '#f9f9f9'
            }}
          >
            <h3>Consumindo APIs</h3>
            <p>Como buscar dados externos e usar no seu projeto.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
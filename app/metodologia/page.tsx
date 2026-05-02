"use client"

export default function MetodologiaPage() {
  return (
    <div className="min-h-screen" style={{background: '#0a0e1a', color: '#e8eaf0'}}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        * { 
          margin: 0; 
          padding: 0; 
          box-sizing: border-box; 
        }

        .hero {
          padding: 96px 48px 80px;
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }

        .eyebrow {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #ffffff;
          background: linear-gradient(135deg, #7eb8f7, #06b6d4);
          border: 2px solid rgba(126, 184, 247, 0.5);
          padding: 8px 20px;
          border-radius: 100px;
          margin-bottom: 40px;
          box-shadow: 0 4px 12px rgba(126, 184, 247, 0.3);
        }

        h1 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1.05;
          color: #ffffff;
          margin-bottom: 32px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        h1 em {
          font-style: italic;
          color: #7eb8f7;
          text-shadow: 0 2px 8px rgba(126, 184, 247, 0.4);
        }

        .hero-sub {
          font-size: 20px;
          line-height: 1.6;
          color: #b8c8e8;
          max-width: 650px;
          margin: 0 auto 56px;
          font-weight: 400;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .divider {
          width: 40px;
          height: 1px;
          background: rgba(126, 184, 247, 0.4);
          margin: 0 auto 80px;
        }

        .section {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 48px 80px;
        }

        .section-label {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 48px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .section-label::after {
          content: '';
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, #7eb8f7, transparent);
          border-radius: 1px;
        }

        .steps {
          display: flex;
          flex-direction: column;
          gap: 0;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          border: 1px solid rgba(126, 184, 247, 0.2);
          overflow: hidden;
        }

        .step {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 32px;
          padding: 40px 48px;
          border-bottom: 1px solid rgba(126, 184, 247, 0.15);
          transition: all 0.3s ease;
        }

        .step:last-child {
          border-bottom: none;
        }

        .step:hover {
          background: rgba(126, 184, 247, 0.05);
        }

        .step-num {
          font-family: 'DM Serif Display', serif;
          font-size: 18px;
          font-weight: 600;
          color: #7eb8f7;
          padding-top: 2px;
          text-align: right;
          background: rgba(126, 184, 247, 0.1);
          border-radius: 12px;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-content h3 {
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .step-content p {
          font-size: 16px;
          line-height: 1.7;
          color: #b8c8e8;
          font-weight: 400;
        }

        .callout {
          border: 2px solid rgba(126, 184, 247, 0.4);
          border-left: 4px solid #7eb8f7;
          padding: 36px 40px;
          border-radius: 12px;
          margin: 0 0 80px;
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
          margin-left: 48px;
          margin-right: 48px;
          margin-bottom: 80px;
          background: rgba(126, 184, 247, 0.08);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(126, 184, 247, 0.2);
        }

        .callout p {
          font-family: 'DM Serif Display', serif;
          font-size: 24px;
          font-style: italic;
          line-height: 1.5;
          color: #ffffff;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 80px;
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 48px;
          margin-bottom: 80px;
        }

        .why-card {
          padding: 32px;
          border: 2px solid rgba(126, 184, 247, 0.3);
          border-radius: 16px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .why-card:hover {
          transform: translateY(-4px);
          border-color: rgba(126, 184, 247, 0.5);
          box-shadow: 0 8px 32px rgba(126, 184, 247, 0.3);
        }

        .why-card .icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #7eb8f7, #06b6d4);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 20px;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(126, 184, 247, 0.4);
        }

        .why-card h4 {
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .why-card p {
          font-size: 15px;
          color: #b8c8e8;
          line-height: 1.6;
          font-weight: 400;
        }

        .cta-section {
          text-align: center;
          padding: 80px 48px 120px;
          max-width: 860px;
          margin: 0 auto;
          border-top: 2px solid rgba(126, 184, 247, 0.3);
          background: rgba(126, 184, 247, 0.05);
          border-radius: 24px 24px 0 0;
        }

        .cta-section h2 {
          font-family: 'DM Serif Display', serif;
          font-size: 36px;
          color: #ffffff;
          margin-bottom: 24px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .cta-section p {
          font-size: 18px;
          color: #b8c8e8;
          margin-bottom: 40px;
          font-weight: 400;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .btn {
          display: inline-block;
          padding: 18px 40px;
          background: linear-gradient(135deg, #7eb8f7, #06b6d4);
          color: #0a0e1a;
          font-size: 16px;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
          letter-spacing: 0.02em;
          box-shadow: 0 8px 24px rgba(126, 184, 247, 0.4);
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(126, 184, 247, 0.6);
          background: linear-gradient(135deg, #8fc8ff, #08c4e8);
        }

        @media (max-width: 768px) {
          .hero {
            padding: 64px 24px 60px;
          }
          
          .section {
            padding: 0 24px 60px;
          }
          
          .callout {
            margin-left: 24px;
            margin-right: 24px;
            padding: 28px 32px;
          }
          
          .why-grid {
            grid-template-columns: 1fr;
            padding: 0 24px;
            gap: 20px;
          }
          
          .cta-section {
            padding: 60px 24px 80px;
          }
          
          .step {
            grid-template-columns: 56px 1fr;
            gap: 24px;
            padding: 32px 24px;
          }
          
          .step-num {
            font-size: 16px;
          }
          
          .step-content h3 {
            font-size: 20px;
          }
          
          .step-content p {
            font-size: 15px;
          }
          
          .why-card {
            padding: 24px;
          }
          
          .why-card .icon {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
          
          .why-card h4 {
            font-size: 16px;
          }
          
          .why-card p {
            font-size: 14px;
          }
          
          .cta-section h2 {
            font-size: 28px;
          }
          
          .cta-section p {
            font-size: 16px;
          }
          
          .btn {
            padding: 16px 32px;
            font-size: 15px;
          }
        }
      `}</style>

      <section className="hero">
        <span className="eyebrow">Metodología</span>
        <h1>Primero entendemos<br/><em>cómo trabajás.</em></h1>
        <p className="hero-sub">Antes de escribir una línea de código, nos integramos a tu operación. Trabajamos junto a tu equipo para diseñar el sistema que realmente necesitás — no el que suponemos que necesitás.</p>
        <div className="divider"></div>
      </section>

      <div className="callout">
        <p>"La mayoría de los clientes no saben qué app necesitan. Nosotros tampoco lo sabemos hasta que vemos cómo trabajan."</p>
      </div>

      <section className="section">
        <div className="section-label">Cómo trabajamos</div>
        <div className="steps">
          <div className="step">
            <div className="step-num">01</div>
            <div className="step-content">
              <h3>Nos integramos a tu equipo</h3>
              <p>Pasamos tiempo real en tu empresa — aproximadamente dos semanas — trabajando junto a tus empleados. Observamos procesos, hacemos preguntas y entendemos cómo funciona tu operación desde adentro.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div className="step-content">
              <h3>Identificamos lo que falta</h3>
              <p>Con ese contexto, detectamos los puntos de fricción reales: tareas manuales que se repiten, información que se pierde, procesos que dependen de una sola persona. Cosas que desde afuera no se ven.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div className="step-content">
              <h3>Diseñamos el sistema a medida</h3>
              <p>Construimos el software específicamente para tu operación. Sin funciones que no usás, sin adaptaciones forzadas. Una herramienta que encaja en lo que ya hacés — y lo mejora.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">04</div>
            <div className="step-content">
              <h3>Resultado: algo que nunca imaginaste tener</h3>
              <p>Nuestros clientes terminan con sistemas simples, útiles y propios — que resuelven exactamente su problema. No una plataforma genérica adaptada, sino algo construido para ellos.</p>
            </div>
          </div>
        </div>
      </section>

      <div style={{maxWidth:"860px",margin:"0 auto",padding:"0 48px",marginBottom:"16px"}}>
        <div className="section-label" style={{marginBottom:"24px"}}>Por qué funciona</div>
      </div>

      <div className="why-grid">
        <div className="why-card">
          <div className="icon">◈</div>
          <h4>El cliente no siempre sabe lo que necesita</h4>
          <p>Los requerimientos escritos rara vez capturan la realidad del día a día. La presencia in-situ lo cambia todo.</p>
        </div>
        <div className="why-card">
          <div className="icon">◉</div>
          <h4>El software nace del proceso real</h4>
          <p>No adaptamos tu operación al software. Adaptamos el software a tu operación.</p>
        </div>
        <div className="why-card">
          <div className="icon">◇</div>
          <h4>Menos funciones, más utilidad</h4>
          <p>El resultado es siempre más simple de lo esperado — porque está diseñado para lo que realmente se usa.</p>
        </div>
        <div className="why-card">
          <div className="icon">◎</div>
          <h4>Remoto cuando corresponde</h4>
          <p>El desarrollo continúa a distancia. La presencia inicial es para entender — el resto es ejecución.</p>
        </div>
      </div>

      <div className="cta-section">
        <h2>¿Querés que entendamos tu operación?</h2>
        <p>Contanos en qué trabajás y empecemos a conversar.</p>
        <a href="/" className="btn">Iniciar conversación</a>
      </div>
    </div>
  )
}

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge" aria-hidden>
            <span className="live" />
            Disponível para novos desafios
          </div>

          <h1 id="hero-title">
            Transformando <span className="accent">dados</span> em decisões que <span className="accent">movem</span> o negócio.
          </h1>

          <p className="hero-tagline">
            Sou <strong>Lucas Henrique de Sousa</strong>, Estagiário de Dados &amp; Analytics no <strong>Itaú Unibanco</strong>. Estudante de Engenharia da Computação, apaixonado por automação, arquitetura de dados e por resolver problemas reais com código.
          </p>

          <div className="hero-cta">
            <Link href="#contact" className="btn btn-primary">Vamos conversar →</Link>
            <Link href="#story" className="btn btn-outline">Conheça minha trajetória</Link>
          </div>

          <div className="hero-quick" aria-hidden>
            <div className="hero-quick-item">
              <div className="lbl">Localização</div>
              <div className="val">São Paulo, SP</div>
            </div>
            <div className="hero-quick-item">
              <div className="lbl">Formação</div>
              <div className="val">Eng. Computação</div>
            </div>
            <div className="hero-quick-item">
              <div className="lbl">Atualmente</div>
              <div className="val">Itaú Unibanco</div>
            </div>
          </div>
        </div>

        <aside className="hero-visual" aria-hidden>
          <div className="photo-frame" role="img" aria-label="Foto de Lucas Henrique de Sousa">
            <Image src="/profile.png" alt="Foto de Lucas Sousa" width={380} height={380} priority />
            <div className="float-tag t1">☁️ AWS Certified</div>
            <div className="float-tag t2">🐍 Python &amp; SQL</div>
            <div className="float-tag t3">🤖 GenAI</div>
          </div>
        </aside>
      </div>

      <style jsx>{`
        .hero{ display:grid; grid-template-columns:1fr; gap:2.4rem; padding:6rem 1.2rem; align-items:center; }
        @media(min-width:900px){ .hero{ grid-template-columns:1.2fr 1fr; } }
        .hero-content{ padding:1.6rem; background:rgba(255,255,255,0.98); border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.04); }
        .hero-badge{ display:inline-flex; gap:0.6rem; padding:0.4rem 0.8rem; border-radius:999px; color:#FF6200; border:1px solid rgba(255,98,0,0.18); }
        .hero h1{ font-size:clamp(1.8rem, 3.6vw, 3.2rem); color:var(--azul); margin:1rem 0; }
        .accent{ color:#FF6200; position:relative; }
        .hero-tagline{ color:var(--texto-2); margin-bottom:1rem; max-width:560px; }
        .btn{ padding:0.7rem 1.4rem; border-radius:999px; text-decoration:none; font-weight:600; display:inline-flex; align-items:center; justify-content:center; }
        .btn-primary{ background:#FF6200; color:white; }
        .btn-outline{ border:2px solid #000044; color:#000044; background:transparent; padding:0.6rem 1.2rem; }
        .hero-visual{ display:flex; justify-content:center; align-items:center; }
        .photo-frame{ width:340px; height:340px; border-radius:28% 72% 68% 32% / 32% 32% 68% 68%; overflow:hidden; position:relative; }
        .float-tag{ position:absolute; background:white; padding:0.5rem 0.8rem; border-radius:999px; box-shadow:0 10px 30px rgba(0,0,0,0.12); color:#000044; font-weight:600; }
        .t1{ top:6%; left:-6%; }
        .t2{ top:54%; right:-10%; }
        .t3{ bottom:-2%; left:6%; }
        @media (max-width:900px){ .hero-visual{ order:-1; } }
      `}</style>
    </section>
  );
}

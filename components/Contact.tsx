import React from 'react';

export default function Contact(): JSX.Element {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">Capítulo Final</span>
          <h2 className="section-title" id="contact-title">Vamos criar algo <span className="accent">juntos</span>?</h2>
          <p className="section-desc">Se você chegou até aqui, provavelmente temos algo em comum. Bora conversar?</p>
        </div>

        <div className="contact-grid" role="list">
          <a className="contact-card reveal" role="listitem" href="mailto:working.lucasdesousa@outlook.com">
            <div className="contact-icon" aria-hidden="true">✉</div>
            <h3>E-mail</h3>
            <p>working.lucasdesousa@outlook.com</p>
          </a>

          <a className="contact-card reveal" role="listitem" href="https://wa.me/5511953914807" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon" aria-hidden="true">📱</div>
            <h3>WhatsApp</h3>
            <p>(11) 95391-4807</p>
          </a>

          <a className="contact-card reveal" role="listitem" href="https://linkedin.com/in/lucasdesousa2024" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon" aria-hidden="true">💼</div>
            <h3>LinkedIn</h3>
            <p>/in/lucasdesousa2024</p>
          </a>

          <a className="contact-card reveal" role="listitem" href="https://github.com/LucasHenriqueSousa" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon" aria-hidden="true">🐙</div>
            <h3>GitHub</h3>
            <p>@LucasHenriqueSousa</p>
          </a>
        </div>
      </div>
    </section>
  );
}

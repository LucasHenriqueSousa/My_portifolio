import React from 'react';

export default function Education(): JSX.Element {
  return (
    <section className="education" id="education" aria-labelledby="education-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">Capítulo 05</span>
          <h2 className="section-title" id="education-title">Formação &amp; <span className="accent">Certificações</span></h2>
          <p className="section-desc">Aprendizado contínuo é meu combustível.</p>
        </div>

        <div className="edu-timeline">
          <article className="edu-item reveal" aria-labelledby="edu-1">
            <span className="edu-year">2023 · 2027</span>
            <h3 id="edu-1">Engenharia da Computação</h3>
            <p className="edu-inst">Faculdade Impacta</p>
            <p className="edu-desc">Graduação em andamento — foco em algoritmos, arquitetura e sistemas distribuídos.</p>
          </article>

          <article className="edu-item reveal" aria-labelledby="edu-2">
            <span className="edu-year">2025</span>
            <h3 id="edu-2">Practitioner · D&amp;A Foundation</h3>
            <p className="edu-inst">Itaú Unibanco / IOX</p>
            <ul className="edu-list">
              <li>Modelagem de Dados</li>
              <li>Engenharia de Dados &amp; Analytics</li>
              <li>Ciência de Dados</li>
              <li>Engenharia de Machine Learning</li>
              <li>Governança de Dados</li>
            </ul>
          </article>

          <article className="edu-item reveal" aria-labelledby="edu-3">
            <span className="edu-year">2025</span>
            <h3 id="edu-3">Practitioner · Business Analytics</h3>
            <p className="edu-inst">Itaú Unibanco / IOX</p>
          </article>

          <article className="edu-item reveal" aria-labelledby="edu-4">
            <span className="edu-year">2025</span>
            <h3 id="edu-4">Practitioner · Generative AI</h3>
            <p className="edu-inst">Itaú Unibanco / IOX</p>
          </article>

          <article className="edu-item reveal" aria-labelledby="edu-5">
            <span className="edu-year">2021</span>
            <h3 id="edu-5">Técnico em Mecatrônica</h3>
            <p className="edu-inst">Faculdade Impacta</p>
          </article>

          <article className="edu-item reveal" aria-labelledby="edu-6">
            <span className="edu-year">2010</span>
            <h3 id="edu-6">Montagem e Manutenção de Computadores</h3>
            <p className="edu-inst">Cedaspy LTDA</p>
          </article>
        </div>
      </div>
    </section>
  );
}

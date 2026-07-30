import React from 'react';

export default function Skills(): JSX.Element {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">Capítulo 04</span>
          <h2 className="section-title" id="skills-title">Skills &amp; <span className="accent">Ferramentas</span></h2>
          <p className="section-desc">O arsenal técnico que uso todos os dias.</p>
        </div>

        <div className="skills-tabs">
          <div className="skill-block reveal" aria-labelledby="skill-cloud">
            <div className="skill-head">
              <div className="skill-emoji" aria-hidden="true">☁️</div>
              <h3 id="skill-cloud">Cloud &amp; Big Data</h3>
            </div>
            <div className="skill-tags">
              <span className="tag">AWS S3</span>
              <span className="tag">AWS Athena</span>
              <span className="tag">AWS Glue</span>
              <span className="tag">Certificação AWS</span>
            </div>
          </div>

          <div className="skill-block reveal" aria-labelledby="skill-langs">
            <div className="skill-head">
              <div className="skill-emoji" aria-hidden="true">💻</div>
              <h3 id="skill-langs">Linguagens</h3>
            </div>
            <div className="skill-tags">
              <span className="tag">Python</span>
              <span className="tag">SQL</span>
              <span className="tag">Kotlin</span>
              <span className="tag">C++</span>
              <span className="tag">HTML</span>
            </div>
          </div>

          <div className="skill-block reveal" aria-labelledby="skill-frameworks">
            <div className="skill-head">
              <div className="skill-emoji" aria-hidden="true">🔧</div>
              <h3 id="skill-frameworks">Frameworks &amp; APIs</h3>
            </div>
            <div className="skill-tags">
              <span className="tag">Django</span>
              <span className="tag">APIs REST</span>
              <span className="tag">Alteryx</span>
              <span className="tag">Power Apps</span>
              <span className="tag">Power Automate</span>
            </div>
          </div>

          <div className="skill-block reveal" aria-labelledby="skill-genai">
            <div className="skill-head">
              <div className="skill-emoji" aria-hidden="true">🤖</div>
              <h3 id="skill-genai">GenAI &amp; Produtividade</h3>
            </div>
            <div className="skill-tags">
              <span className="tag">Copilot Agents</span>
              <span className="tag">StackSpot</span>
              <span className="tag">Excel Intermediário</span>
            </div>
          </div>

          <div className="skill-block reveal" aria-labelledby="skill-analytics">
            <div className="skill-head">
              <div className="skill-emoji" aria-hidden="true">📈</div>
              <h3 id="skill-analytics">Competências Analíticas</h3>
            </div>
            <div className="skill-tags">
              <span className="tag">Análise de Dados</span>
              <span className="tag">Modelagem de Dados</span>
              <span className="tag">Automação de Pipelines</span>
              <span className="tag">Desenvolvimento de SW</span>
            </div>
          </div>

          <div className="skill-block reveal" aria-labelledby="skill-soft">
            <div className="skill-head">
              <div className="skill-emoji" aria-hidden="true">🤝</div>
              <h3 id="skill-soft">Soft Skills</h3>
            </div>
            <div className="skill-tags">
              <span className="tag">Trabalho em Equipe</span>
              <span className="tag">Metodologias Ágeis</span>
              <span className="tag">Comunicação</span>
              <span className="tag">Inglês Técnico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

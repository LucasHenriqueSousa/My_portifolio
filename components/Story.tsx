import React from 'react';

export default function Story(): JSX.Element {
  return (
    <section className="story" id="story" aria-labelledby="story-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">Capítulo 01</span>
          <h2 className="section-title" id="story-title">
            Minha <span className="accent">história</span> em dados
          </h2>
          <p className="section-desc">Cada linha de código conta uma história. Aqui vai a minha.</p>
        </div>

        <div className="story-grid">
          <div className="story-text">
            <h3>Do hardware ao dado, do dado ao impacto.</h3>
            <p>
              Comecei minha jornada tecnológica ainda cedo, com <strong>Montagem e Manutenção de Computadores</strong> em 2010.
              De lá pra cá, evoluí para <strong>Mecatrônica</strong>, cheguei à <strong>Engenharia da Computação</strong> e hoje mergulho no universo
              de <strong>Dados &amp; Analytics</strong> dentro de um dos maiores bancos da América Latina.
            </p>
            <p>
              No <strong>Itaú Unibanco</strong>, atuo em processos críticos como o <strong>SVR (Serviço de Valores a Receber)</strong>,
              transformando processos manuais em pipelines automatizados que reduzem risco operacional e liberam a equipe para o que realmente importa:
              <strong> pensar estratégia</strong>.
            </p>

            <div className="story-chapters" aria-hidden={false}>
              <article className="chapter reveal" aria-labelledby="chapter-1-title">
                <div className="chapter-num">01</div>
                <div className="chapter-info">
                  <h4 id="chapter-1-title">Fundação técnica</h4>
                  <p>Hardware, mecatrônica e engenharia — base sólida para pensar sistemas.</p>
                </div>
              </article>

              <article className="chapter reveal" aria-labelledby="chapter-2-title">
                <div className="chapter-num">02</div>
                <div className="chapter-info">
                  <h4 id="chapter-2-title">Descoberta dos dados</h4>
                  <p>SQL, Python, AWS e Alteryx entram em cena com a certificação D&amp;A Foundation.</p>
                </div>
              </article>

              <article className="chapter reveal" aria-labelledby="chapter-3-title">
                <div className="chapter-num">03</div>
                <div className="chapter-info">
                  <h4 id="chapter-3-title">Impacto real no Itaú</h4>
                  <p>Automação de pipelines, redução de 30% de risco operacional e governança de dados.</p>
                </div>
              </article>
            </div>
          </div>

          <aside className="story-visual" aria-label="Citação pessoal">
            <p className="story-quote">
              Enxergo dados como narrativa: cada tabela é um personagem, cada query uma cena, e cada insight um final que muda o rumo do negócio.
            </p>
            <div className="story-quote-author">
              <div className="quote-avatar" aria-hidden="true">LS</div>
              <div className="quote-info">
                <div className="name">Lucas H. de Sousa</div>
                <div className="role">Estagiário Dados &amp; Analytics · Itaú Unibanco</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

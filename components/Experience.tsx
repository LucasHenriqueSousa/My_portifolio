import React from 'react';

export default function Experience(): JSX.Element {
  return (
    <section className="experience" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">Capítulo 03</span>
          <h2 className="section-title" id="experience-title">Experiência <span className="accent">profissional</span></h2>
          <p className="section-desc">O que faço no dia a dia e como entrego valor.</p>
        </div>

        <div className="exp-card reveal" role="region" aria-label="Experiência principal">
          <aside className="exp-sidebar" aria-label="Resumo de experiência">
            <div className="exp-logo" aria-hidden="true">
              {/* Mantive o SVG original no HTML — você pode trocar por img/svg aqui */}
              <svg width="140" height="48" viewBox="0 0 128 48" aria-hidden="true" focusable="false">
                <g fill="#ff6101">
                  <rect width="128" height="48" rx="6" />
                </g>
              </svg>
            </div>

            <h3>Itaú Unibanco</h3>
            <div className="exp-role">Estagiário de Dados &amp; Analytics</div>
            <span className="exp-period">Jan/2025 · Presente</span>
          </aside>

          <div className="exp-content">
            <p className="exp-intro">
              Atuo em <strong>processos regulatórios críticos</strong> ligados ao SVR, transformando fluxos manuais em pipelines robustos que garantem
              <strong> compliance com o Banco Central</strong> e reduzem o esforço operacional da equipe.
            </p>

            <div className="exp-tasks">
              <div className="task reveal" aria-labelledby="task-1">
                <div className="task-icon" aria-hidden="true">📊</div>
                <div className="task-info">
                  <h4 id="task-1">Análise de Dados &amp; Insights</h4>
                  <p>Extração, manipulação e análise de grandes volumes de dados (Big Data), gerando insights que apoiam decisões estratégicas de diversas áreas de negócio.</p>
                </div>
              </div>

              <div className="task reveal" aria-labelledby="task-2">
                <div className="task-icon" aria-hidden="true">🛡</div>
                <div className="task-info">
                  <h4 id="task-2">Sustentação &amp; Melhorias</h4>
                  <p>Atuação no processo do SVR, reduzindo a manualidade na geração de arquivos de envio ao Banco Central e nos relatórios de retorno.</p>
                </div>
              </div>

              <div className="task reveal" aria-labelledby="task-3">
                <div className="task-icon" aria-hidden="true">⚙</div>
                <div className="task-info">
                  <h4 id="task-3">Automação de Pipelines</h4>
                  <p>Desenvolvimento e otimização de consultas SQL e fluxos de dados, reduzindo em 30% o risco operacional em processamentos de altos valores.</p>
                </div>
              </div>

              <div className="task reveal" aria-labelledby="task-4">
                <div className="task-icon" aria-hidden="true">📋</div>
                <div className="task-info">
                  <h4 id="task-4">Governança &amp; Dados</h4>
                  <p>Desenvolvi o acompanhamento de capacitação da DIOV, padronizando perfis e centralizando a governança antes manual.</p>
                </div>
              </div>

              <div className="task reveal" aria-labelledby="task-5">
                <div className="task-icon" aria-hidden="true">🗂</div>
                <div className="task-info">
                  <h4 id="task-5">Organização e Mapeamento</h4>
                  <p>Centralização das exceções e mudanças em regras de negócio, com documentação rastreável (motivo + registro visual), garantindo histórico e auditabilidade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

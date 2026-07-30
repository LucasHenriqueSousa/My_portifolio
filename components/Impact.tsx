import React from 'react';

export default function Impact(): JSX.Element {
  return (
    <section className="impact" id="impact" aria-labelledby="impact-title">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">Capítulo 02</span>
          <h2 className="section-title" id="impact-title">
            Impacto <span className="accent">gerado</span>
          </h2>
          <p className="section-desc">Números falam mais que palavras. Aqui está a diferença que já entreguei.</p>
        </div>

        <div className="impact-grid" role="list">
          <article className="metric reveal" role="listitem" aria-labelledby="metric-1">
            <div className="metric-icon" aria-hidden="true">💰</div>
            <div className="metric-value" id="metric-1">R$ 3K+</div>
            <div className="metric-label">Valores preservados no SVR</div>
            <p className="metric-desc">R$ 3.064,20 recuperados em processamentos críticos do Serviço de Valores a Receber.</p>
          </article>

          <article className="metric reveal" role="listitem" aria-labelledby="metric-2">
            <div className="metric-icon" aria-hidden="true">📉</div>
            <div className="metric-value" id="metric-2">30%</div>
            <div className="metric-label">Redução de risco operacional</div>
            <p className="metric-desc">Em processamentos de altos volumes financeiros via otimização de queries SQL.</p>
          </article>

          <article className="metric reveal" role="listitem" aria-labelledby="metric-3">
            <div className="metric-icon" aria-hidden="true">⚡</div>
            <div className="metric-value" id="metric-3">100%</div>
            <div className="metric-label">Automação de trilhas</div>
            <p className="metric-desc">Power Automate eliminou o controle manual no disparo de planos de capacitação.</p>
          </article>

          <article className="metric reveal" role="listitem" aria-labelledby="metric-4">
            <div className="metric-icon" aria-hidden="true">🎯</div>
            <div className="metric-value" id="metric-4">1</div>
            <div className="metric-label">Governança centralizada</div>
            <p className="metric-desc">Padronização de perfis e regras da diretoria DIOV — antes descentralizada, agora auditável.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

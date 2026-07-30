export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <p>© {new Date().getFullYear()} · <strong>Lucas Henrique de Sousa</strong> · Dados, código e propósito <span className="heart">♥</span></p>
      </div>

      <style jsx>{`
        .site-footer{ background:#020617; color:rgba(148,163,184,0.9); padding:1.6rem 1rem; text-align:center; }
        .heart{ color:#FF6200; margin-left:0.3rem; }
      `}</style>
    </footer>
  );
}

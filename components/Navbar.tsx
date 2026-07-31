import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLUListElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    function onClick(e: MouseEvent) {
      const target = e.target as Node;
      if (!navRef.current || !btnRef.current) return;
      if (open && !navRef.current.contains(target) && !btnRef.current.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [open]);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [open]);

  return (
    <header>
      <nav className="site-nav" aria-label="Navegação principal">
        <div className="nav-inner container">
          <div className="logo" aria-hidden>
            <span className="logo-dot" />
            <span>Lucas Sousa</span>
          </div>

          <button
            ref={btnRef}
            className="menu-toggle"
            aria-controls="menu-principal"
            aria-expanded={open}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((s) => !s)}
            type="button"
          >
            <span className="hamb" aria-hidden>☰</span>
          </button>

          <ul
            id="menu-principal"
            ref={navRef}
            className={`nav-links ${open ? 'active' : ''}`}
            role="menu"
          >
            <li role="none"><Link href="#home" role="menuitem" onClick={() => setOpen(false)}>Início</Link></li>
            <li role="none"><Link href="#story" role="menuitem" onClick={() => setOpen(false)}>Minha história</Link></li>
            <li role="none"><Link href="#impact" role="menuitem" onClick={() => setOpen(false)}>Impacto</Link></li>
            <li role="none"><Link href="#experience" role="menuitem" onClick={() => setOpen(false)}>Experiência</Link></li>
            <li role="none"><Link href="#skills" role="menuitem" onClick={() => setOpen(false)}>Skills</Link></li>
            <li role="none"><Link href="#education" role="menuitem" onClick={() => setOpen(false)}>Formação</Link></li>
            <li role="none"><Link href="#contact" role="menuitem" onClick={() => setOpen(false)}>Contato</Link></li>
            <li className="nav-actions" role="none">
              <a className="nav-action-btn primary" href="/curriculo_lucas.pdf" download>⬇ Download PDF</a>
              <a className="nav-action-btn" href="/curriculo_lucas.pdf" target="_blank" rel="noopener noreferrer">👁 Preview</a>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .site-nav { position: sticky; top: 0; backdrop-filter: blur(6px); z-index: 60; }
        .nav-inner { display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:1rem 0; }
        .logo { display:flex; gap:0.6rem; align-items:center; font-weight:700; color:#000044; }
        .logo-dot{ width:10px; height:10px; background:#FF6200; border-radius:50%; }
        .nav-links { display:flex; gap:1.6rem; list-style:none; align-items:center; }
        .nav-links a{ text-decoration:none; color:var(--texto); font-weight:500; }
        .nav-actions{ display:flex; gap:0.6rem; margin-left:0.6rem; }
        .nav-action-btn{ padding:0.45rem 0.8rem; border-radius:999px; border:1px solid rgba(0,0,0,0.06); text-decoration:none; font-weight:600; }
        .nav-action-btn.primary{ background:linear-gradient(135deg,#FF6200,#ff8534); color:white; border:none; }
        .menu-toggle{ display:none; background:none; border:none; font-size:1.25rem; }
        @media (max-width:900px){
          .nav-links{ position: absolute; right:1rem; top:72px; flex-direction:column; background:white; padding:1rem; border-radius:10px; display:none; width:230px; box-shadow:0 10px 30px rgba(0,0,0,0.08); }
          .nav-links.active{ display:flex; }
          .menu-toggle{ display:block; }
        }
      `}</style>
    </header>
  );
}

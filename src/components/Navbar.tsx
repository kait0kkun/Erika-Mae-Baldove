import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

function NavLink({ name, href }: { name: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: 'var(--text)',
        textDecoration: 'none',
        fontWeight: 500,
        fontSize: '0.9rem',
        letterSpacing: '0.03em',
        display: 'inline-flex',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {name.split('').map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            transitionDelay: `${i * 30}ms`,
            transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
            opacity: hovered ? 1 : 0.7,
            color: hovered ? 'var(--primary)' : undefined,
          }}
        >
          {char}
        </span>
      ))}
    </a>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: isScrolled ? '10px 0' : '18px 0',
        transition: '0.3s',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '90%',
          maxWidth: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isScrolled ? '0 24px' : '0 24px',
          borderRadius: 999,
          background: isScrolled ? 'color-mix(in srgb, var(--bg-dark) 88%, transparent)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          border: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.2)' : 'none',
          transition: '0.3s',
          minHeight: 52,
          flexWrap: 'wrap',
        }}
      >
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: 'clamp(0.6rem, 2vw, 2rem)',
            alignItems: 'center',
            margin: 0,
            padding: 0,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink name={link.name} href={link.href} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

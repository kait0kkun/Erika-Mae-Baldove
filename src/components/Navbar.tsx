import { useState, useEffect } from 'react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: isScrolled ? '15px 0' : '25px 0',
                transition: '0.3s',
                zIndex: 1000
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#home" style={{ color: 'white', textDecoration: 'none', fontSize: '1.8rem', fontWeight: 800 }}>
                    Port<span className="gradient-text">folio.</span>
                </a>

                {/* Desktop Menu */}
                <ul className="desktop-menu" style={{ display: 'flex', listStyle: 'none', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500, transition: '0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-main)'}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu logic would go here, simplified for elegance */}
            </div>

            {/* We add basic responsive hidden class trick inline or using pure css */}
            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
        }
      `}</style>
        </nav>
    );
}

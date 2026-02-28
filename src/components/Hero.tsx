import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section
            id="home"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '80px',
                backgroundImage: 'url("/images/aesthetic_pink_bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Dark Overlay to make text readable over the background image */}
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(26, 15, 20, 0.85)', zIndex: 1 }} />

            {/* Dynamic Background Effects */}
            <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--primary)', filter: 'blur(150px)', opacity: '0.3', borderRadius: '50%', zIndex: 2 }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '300px', height: '300px', background: 'var(--secondary)', filter: 'blur(150px)', opacity: '0.3', borderRadius: '50%', zIndex: 2 }} />

            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        Hello, my name is
                    </h3>
                    <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>
                        Erika Mae <span className="gradient-text">Baldove</span>
                    </h1>

                    <h2 style={{ fontSize: '2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                        I'm a{' '}
                        <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Software Engineer</span>
                    </h2>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="btn-primary"
                        >
                            Hire Me <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="btn-secondary"
                        >
                            View Projects
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', color: 'var(--text-muted)' }}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}

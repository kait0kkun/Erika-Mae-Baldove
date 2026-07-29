import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';

const tagline = ['Inspire', 'Innovate', 'Impact'];

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
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/images/hero%20section.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--bg-dark)', opacity: 0.85, zIndex: 1 }} />

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

          <h2 style={{ fontSize: '2rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            I'm a{' '}
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Software Engineer</span>
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '6px', marginBottom: '3rem',
            }}
          >
            {tagline.map((word, i) => (
              <span key={word} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {word}
                {i < tagline.length - 1 && <span style={{ margin: '0 6px', opacity: 0.4 }}>·</span>}
              </span>
            ))}
          </motion.div>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="btn-primary">
              Hire Me <ArrowRight size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" className="btn-secondary">
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href={`${import.meta.env.BASE_URL}ERIKA-MAE-BALDOVE-CV.pdf`}
              download="ERIKA-MAE-BALDOVE-CV.pdf"
              className="btn-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Download size={20} /> Resume
            </motion.a>
          </div>
        </motion.div>
      </div>



      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', color: 'var(--text-muted)', zIndex: 10 }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}

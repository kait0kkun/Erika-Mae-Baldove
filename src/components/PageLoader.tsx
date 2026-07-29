import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tagline = ['Inspire', 'Innovate', 'Impact'];

const plusSize = 13;

const cornerStyle: React.CSSProperties = {
  position: 'absolute',
  width: plusSize,
  height: plusSize,
};

const lineProps = {
  children: (
    <>
      <line x1="6.5" y1="0" x2="6.5" y2="13" stroke="#555" strokeWidth="1" />
      <line x1="0" y1="6.5" x2="13" y2="6.5" stroke="#555" strokeWidth="1" />
    </>
  ),
};

export default function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            background: '#000',
          }}
        >
          {/* Logo box with corners */}
          <div style={{ position: 'relative', padding: '20px' }}>
            {/* Corner pluses */}
            <div style={{ ...cornerStyle, top: 0, left: 0 }}>
              <svg width={plusSize} height={plusSize} viewBox="0 0 13 13" {...lineProps} />
            </div>
            <div style={{ ...cornerStyle, top: 0, right: 0 }}>
              <svg width={plusSize} height={plusSize} viewBox="0 0 13 13" {...lineProps} />
            </div>
            <div style={{ ...cornerStyle, bottom: 0, left: 0 }}>
              <svg width={plusSize} height={plusSize} viewBox="0 0 13 13" {...lineProps} />
            </div>
            <div style={{ ...cornerStyle, bottom: 0, right: 0 }}>
              <svg width={plusSize} height={plusSize} viewBox="0 0 13 13" {...lineProps} />
            </div>

            {/* Border reveal */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background: '#555',
                transformOrigin: 'left',
              }}
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                width: 1,
                background: '#555',
                transformOrigin: 'top',
              }}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 1,
                background: '#555',
                transformOrigin: 'right',
              }}
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                width: 1,
                background: '#555',
                transformOrigin: 'bottom',
              }}
            />

            {/* Logo text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-0.02em',
              }}
            >
              Port<span style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>folio.</span>
            </motion.h1>
          </div>

          {/* Tagline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
            {tagline.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                style={{
                  color: '#888',
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {word}
                {i < tagline.length - 1 && (
                  <span style={{ margin: '0 8px', color: '#555' }}>·</span>
                )}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

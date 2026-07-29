import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CarouselItem {
  img: string;
  title: string;
  desc: string;
  category: string;
}

interface Props {
  items: CarouselItem[];
  onSelect: (img: string) => void;
}

const btn: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: 44,
  height: 44,
  borderRadius: '50%',
  border: '1px solid rgba(255,255,255,0.25)',
  background: 'rgba(0,0,0,0.45)',
  color: '#fff',
  fontSize: '1.4rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(6px)',
  transition: '0.2s',
  zIndex: 2,
  lineHeight: 1,
};

export default function ModernCarousel({ items, onSelect }: Props) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);

  const total = items.length;
  const current = items[index];

  const go = useCallback((delta: number) => {
    setDir(delta);
    setIndex(i => (i + delta + total) % total);
  }, [total]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div style={{ maxWidth: 780, margin: '0 auto' }}>
      {/* Image container */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'relative',
            borderRadius: 16,
            overflow: 'hidden',
            cursor: 'pointer',
            aspectRatio: '16 / 10',
            background: 'var(--bg-dark)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
          }}
          onClick={() => onSelect(current.img)}
        >
          <AnimatePresence mode="popLayout" custom={dir}>
            <motion.img
              key={current.img}
              src={current.img}
              alt={current.title}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.32, 0, 0.15, 1] }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                position: 'absolute',
                inset: 0,
              }}
            />
          </AnimatePresence>

          {/* Bottom gradient + title overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
              padding: '2.5rem 2rem 1.5rem',
              pointerEvents: 'none',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.15rem 0.7rem',
                    borderRadius: 999,
                    background: 'var(--primary)',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}
                >
                  {current.category}
                </span>
                <h3
                  style={{
                    margin: 0,
                    color: '#fff',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    textShadow: '0 1px 6px rgba(0,0,0,0.4)',
                  }}
                >
                  {current.title}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow left */}
          <button
            style={{ ...btn, left: 12 }}
            onClick={e => { e.stopPropagation(); go(-1); }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
            aria-label="Previous"
          >
            &#8249;
          </button>

          {/* Arrow right */}
          <button
            style={{ ...btn, right: 12 }}
            onClick={e => { e.stopPropagation(); go(1); }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>
      </div>

      {/* Bottom row: counter + dots */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '1rem',
          padding: '0 4px',
        }}
      >
        <span
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            fontWeight: 500,
            fontVariantNumeric: 'tabular-nums',
            minWidth: 40,
          }}
        >
          {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
        </span>

        <div style={{ display: 'flex', gap: 6 }}>
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
              style={{
                width: i === index ? 20 : 8,
                height: 8,
                borderRadius: 999,
                border: 'none',
                padding: 0,
                background: i === index ? 'var(--primary)' : 'var(--border)',
                cursor: 'pointer',
                transition: '0.25s',
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <span style={{ minWidth: 40 }} />
      </div>

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.p
          key={current.title}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
            lineHeight: '1.7',
            margin: '0.8rem 0 0',
            textAlign: 'center',
            maxWidth: 560,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {current.desc}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projectsList = [
    {
        img: '/images/HomePage.png',
        title: 'Home Module',
        desc: 'Main dashboard providing system overview and quick access to core ERP features.'
    },
    {
        img: '/images/Accounting.png',
        title: 'Accounting Module',
        desc: 'Handles invoices, cost estimates, and transaction tracking.'
    },
    {
        img: '/images/Inventory.png',
        title: 'Inventory Module',
        desc: 'Tracks products, stock levels, vendors, and units of measurement.'
    },
    {
        img: '/images/Manage.png',
        title: 'Manage Module',
        desc: 'Administrative tools for audit trails, announcements, and system config.'
    },
    {
        img: '/images/Account.png',
        title: 'Account Module',
        desc: 'User profile, credentials, in-app notifications, and account management.'
    },
];

const simpleCrudList = [
    {
        img: '/images/Church Admin Login.png',
        title: 'Admin Login',
        desc: 'Authentication and secure access for administrators.'
    },
    {
        img: '/images/ChurchDashboard.png',
        title: 'Dashboard Overview',
        desc: 'View key metrics and recent system activities.'
    },
    {
        img: '/images/ChurchMember.png',
        title: 'Member Management',
        desc: 'Maintain detailed records of community members.'
    },
    {
        img: '/images/ChurchEvents.png',
        title: 'Events Scheduling',
        desc: 'Organize and track upcoming and past community events.'
    },
    {
        img: '/images/ChurchDonations.png',
        title: 'Donation Tracking',
        desc: 'Manage financial records and contributions securely.'
    },
    {
        img: '/images/ChurchRegistrations.png',
        title: 'Registration Handling',
        desc: 'Process event attendance and program sign-ups.'
    },
    {
        img: '/images/ChurchBirthdays.png',
        title: 'Birthday Reminders',
        desc: 'Keep track of member birthdays for community engagement.'
    }
];

const apisList = [
    {
        img: '/images/Weather.png',
        title: 'Weather App',
        desc: 'Fetches real-time weather data using external APIs.'
    },
    {
        img: '/images/stockpulse_mockup.png',
        title: 'StockPulse',
        desc: 'Real-time stock market tracker powered by financial APIs.'
    }
];

export default function Projects() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    const erpScrollRef = useRef<HTMLDivElement>(null);
    const crudScrollRef = useRef<HTMLDivElement>(null);
    const apiScrollRef = useRef<HTMLDivElement>(null);

    const scroll = (ref: React.RefObject<HTMLDivElement | null>, dir: 'left' | 'right') => {
        if (ref.current) {
            const scrollAmount = dir === 'left' ? -400 : 400;
            ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="projects" style={{ background: 'var(--bg-card)', padding: '5rem 0' }}>
            <div className="container">
                <style>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .no-scrollbar {
                        -ms-overflow-style: none;  /* IE and Edge */
                        scrollbar-width: none;  /* Firefox */
                    }
                    .carousel-btn {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        z-index: 10;
                        background: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(10px);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        color: white;
                        border-radius: 50%;
                        width: 48px;
                        height: 48px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: 0.3s;
                    }
                    .carousel-btn:hover {
                        background: rgba(255, 42, 133, 0.8);
                        transform: translateY(-50%) scale(1.1);
                    }
                    .carousel-container {
                        position: relative;
                        margin-bottom: 4rem;
                    }
                `}</style>

                <h2 className="section-title">ERP System</h2>
                <div style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                    <p>A multi-module business application developed to support core company operations.</p>
                </div>

                <div className="carousel-container">
                    <button className="carousel-btn" onClick={() => scroll(erpScrollRef, 'left')} style={{ left: '-20px' }} aria-label="Scroll left">
                        <ChevronLeft />
                    </button>
                    <div
                        ref={erpScrollRef}
                        className="no-scrollbar"
                        style={{
                            display: 'flex',
                            gap: '1.5rem',
                            overflowX: 'auto',
                            scrollSnapType: 'x mandatory',
                            padding: '1rem 0'
                        }}
                    >
                        {projectsList.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{
                                    position: 'relative',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    aspectRatio: '16/9',
                                    cursor: 'pointer',
                                    flex: '0 0 calc(33.333% - 1rem)',
                                    minWidth: '300px',
                                    scrollSnapAlign: 'start'
                                }}
                                whileHover={{ scale: 1.03 }}
                                onClick={() => setSelectedImg(project.img)}
                            >
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: '0.3s'
                                    }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        padding: '1.5rem',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                                >
                                    <div style={{ color: 'white' }}>
                                        <h4 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.3rem' }}>{project.title}</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.4' }}>{project.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <button className="carousel-btn" onClick={() => scroll(erpScrollRef, 'right')} style={{ right: '-20px' }} aria-label="Scroll right">
                        <ChevronRight />
                    </button>
                </div>

                <h2 className="section-title">Simple CRUD</h2>
                <div style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                    <p>A simple CRUD application designed for community engagement and church management.</p>
                </div>

                <div className="carousel-container" style={{ marginBottom: '1rem' }}>
                    <button className="carousel-btn" onClick={() => scroll(crudScrollRef, 'left')} style={{ left: '-20px' }} aria-label="Scroll left">
                        <ChevronLeft />
                    </button>
                    <div
                        ref={crudScrollRef}
                        className="no-scrollbar"
                        style={{
                            display: 'flex',
                            gap: '1.5rem',
                            overflowX: 'auto',
                            scrollSnapType: 'x mandatory',
                            padding: '1rem 0'
                        }}
                    >
                        {simpleCrudList.map((project, index) => (
                            <motion.div
                                key={`crud-${index}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{
                                    position: 'relative',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    aspectRatio: '16/9',
                                    cursor: 'pointer',
                                    flex: '0 0 calc(33.333% - 1rem)',
                                    minWidth: '300px',
                                    scrollSnapAlign: 'start'
                                }}
                                whileHover={{ scale: 1.03 }}
                                onClick={() => setSelectedImg(project.img)}
                            >
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: '0.3s'
                                    }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        padding: '1.5rem',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                                >
                                    <div style={{ color: 'white' }}>
                                        <h4 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.3rem' }}>{project.title}</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.4' }}>{project.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <button className="carousel-btn" onClick={() => scroll(crudScrollRef, 'right')} style={{ right: '-20px' }} aria-label="Scroll right">
                        <ChevronRight />
                    </button>
                </div>

                <h2 className="section-title">APIs</h2>
                <div style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                    <p>Integrations with external data sources to deliver powerful dynamic content.</p>
                </div>

                <div className="carousel-container" style={{ marginBottom: '1rem' }}>
                    <button className="carousel-btn" onClick={() => scroll(apiScrollRef, 'left')} style={{ left: '-20px' }} aria-label="Scroll left">
                        <ChevronLeft />
                    </button>
                    <div
                        ref={apiScrollRef}
                        className="no-scrollbar"
                        style={{
                            display: 'flex',
                            gap: '1.5rem',
                            overflowX: 'auto',
                            scrollSnapType: 'x mandatory',
                            padding: '1rem 0'
                        }}
                    >
                        {apisList.map((project, index) => (
                            <motion.div
                                key={`api-${index}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{
                                    position: 'relative',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    aspectRatio: '16/9',
                                    cursor: 'pointer',
                                    flex: '0 0 calc(33.333% - 1rem)',
                                    minWidth: '300px',
                                    scrollSnapAlign: 'start'
                                }}
                                whileHover={{ scale: 1.03 }}
                                onClick={() => setSelectedImg(project.img)}
                            >
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: '0.3s'
                                    }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        padding: '1.5rem',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                                >
                                    <div style={{ color: 'white' }}>
                                        <h4 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.3rem' }}>{project.title}</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.4' }}>{project.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <button className="carousel-btn" onClick={() => scroll(apiScrollRef, 'right')} style={{ right: '-20px' }} aria-label="Scroll right">
                        <ChevronRight />
                    </button>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            zIndex: 10000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem',
                            cursor: 'zoom-out'
                        }}
                    >
                        <motion.img
                            src={selectedImg}
                            alt="Enlarged project"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                                borderRadius: '10px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            onClick={() => setSelectedImg(null)}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: 'rgba(255,255,255,0.1)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: '0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 42, 133, 0.5)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            &times;
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

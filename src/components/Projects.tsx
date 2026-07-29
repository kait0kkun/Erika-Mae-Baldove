import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModernCarousel, { type CarouselItem } from './ModernCarousel';

const projectsList: CarouselItem[] = [
    { img: '/images/HomePage.png', title: 'Home Module', desc: 'Main dashboard providing system overview and quick access to core ERP features.', category: 'ERP' },
    { img: '/images/Accounting.png', title: 'Accounting Module', desc: 'Handles invoices, cost estimates, and transaction tracking.', category: 'ERP' },
    { img: '/images/Inventory.png', title: 'Inventory Module', desc: 'Tracks products, stock levels, vendors, and units of measurement.', category: 'ERP' },
    { img: '/images/Manage.png', title: 'Manage Module', desc: 'Administrative tools for audit trails, announcements, and system config.', category: 'ERP' },
    { img: '/images/Account.png', title: 'Account Module', desc: 'User profile, credentials, in-app notifications, and account management.', category: 'ERP' },
    { img: '/images/Church Admin Login.png', title: 'Admin Login', desc: 'Authentication and secure access for administrators.', category: 'CRUD' },
    { img: '/images/ChurchDashboard.png', title: 'Dashboard Overview', desc: 'View key metrics and recent system activities.', category: 'CRUD' },
    { img: '/images/ChurchMember.png', title: 'Member Management', desc: 'Maintain detailed records of community members.', category: 'CRUD' },
    { img: '/images/ChurchEvents.png', title: 'Events Scheduling', desc: 'Organize and track upcoming and past community events.', category: 'CRUD' },
    { img: '/images/ChurchDonations.png', title: 'Donation Tracking', desc: 'Manage financial records and contributions securely.', category: 'CRUD' },
    { img: '/images/ChurchRegistrations.png', title: 'Registration Handling', desc: 'Process event attendance and program sign-ups.', category: 'CRUD' },
    { img: '/images/ChurchBirthdays.png', title: 'Birthday Reminders', desc: 'Keep track of member birthdays for community engagement.', category: 'CRUD' },
    { img: '/images/Weather.png', title: 'Weather App', desc: 'Fetches real-time weather data using external APIs.', category: 'API' },
    { img: '/images/stockpulse_mockup.png', title: 'StockPulse', desc: 'Real-time stock market tracker powered by financial APIs.', category: 'API' },
];

export default function Projects() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    return (
        <section id="projects" style={{ background: 'var(--bg-card)', padding: '5rem 0' }}>
            <div className="container">
                <h2 className="section-title">Projects</h2>


                <ModernCarousel items={projectsList} onSelect={setSelectedImg} />
            </div>

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
                                transition: '0.3s',
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

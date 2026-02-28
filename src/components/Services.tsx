import { motion } from 'framer-motion';
import { Laptop, Database, Code } from 'lucide-react';

const servicesOptions = [
    {
        icon: <Laptop size={40} className="mb-4" color="var(--primary)" />,
        title: 'Web App Development',
        description: 'I build secure and scalable web applications using ASP.NET, C#, JavaScript, and React. From front-end interfaces to backend logic, I ensure seamless functionality and user experience.'
    },
    {
        icon: <Database size={40} className="mb-4" color="var(--secondary)" />,
        title: 'Database Management',
        description: 'Specializing in SQL Server, I design, manage, and optimize relational databases for performance, data integrity, and reliability. I write efficient queries for analytics.'
    },
    {
        icon: <Code size={40} className="mb-4" color="#fb7185" />,
        title: 'System Integration',
        description: 'I connect different systems and services together through APIs and data synchronization processes, ensuring seamless interoperability, and efficient data flow across platforms.'
    }
];

export default function Services() {
    return (
        <section id="services" style={{ position: 'relative' }}>
            <div className="container">
                <h2 className="section-title">My Services</h2>

                <div className="grid-3">
                    {servicesOptions.map((service, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            key={service.title}
                            className="glass"
                            style={{
                                padding: '2.5rem',
                                borderRadius: '20px',
                                textAlign: 'center',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>
                                {service.title}
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

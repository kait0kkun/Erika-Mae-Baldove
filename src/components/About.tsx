import { motion } from 'framer-motion';
import { Download, Cpu, Database, Server } from 'lucide-react';

export default function About() {
    return (
        <section id="about" style={{ position: 'relative' }}>
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="grid-2">
                    {/* Image Container with Glow Effect */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '-10px',
                            left: '-10px',
                            right: '10px',
                            bottom: '10px',
                            border: '2px solid var(--primary)',
                            borderRadius: '20px',
                            zIndex: 0
                        }} />
                        <img
                            src="/images/kai01.jpg"
                            alt="Erika Mae Baldove"
                            style={{
                                width: '100%',
                                borderRadius: '20px',
                                position: 'relative',
                                zIndex: 1,
                                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                objectFit: 'cover'
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                            I'm Erika and I'm a <span className="gradient-text">Software Engineer</span>
                        </h3>

                        <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                            Hello and welcome! I'm <strong>Erika Mae B. Baldove</strong>, a passionate and detail-oriented Software Engineer
                            with a solid background in SQL Server, Visual Studio, C#, ASP.NET, JavaScript, and jQuery.
                        </p>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                            With hands-on experience designing, developing, and maintaining systems across various platforms,
                            I bring a strong understanding of back-end logic and front-end performance. From optimizing databases
                            to crafting seamless user interfaces, I strive to deliver high-quality results.
                        </p>

                        {/* Micro Skill Badges */}
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                            <div className="glass" style={{ padding: '0.5rem 1rem', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem' }}>
                                <Server size={16} color="var(--primary)" /> Backend & Systems
                            </div>
                            <div className="glass" style={{ padding: '0.5rem 1rem', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem' }}>
                                <Database size={16} color="var(--secondary)" /> Database Optimization
                            </div>
                            <div className="glass" style={{ padding: '0.5rem 1rem', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem' }}>
                                <Cpu size={16} color="#fb7185" /> Problem Solving
                            </div>
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={`${import.meta.env.BASE_URL}ERIKA MAE BALDOVE - CV.pdf`}
                            download="ERIKA MAE BALDOVE - CV.pdf"
                            className="btn-primary"
                        >
                            <Download size={20} /> Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

import { motion } from 'framer-motion';
import { User, MapPin, Mail, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Mimic API logic like emailjs used to do
        setTimeout(() => {
            alert("Message sent successfully!");
            setIsSubmitting(false);
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <section id="contact" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <h2 className="section-title">Contact Me</h2>

                <div className="grid-2">
                    {/* Left Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 600 }}>Get in Touch</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            If you have any questions, collaboration ideas, or would like to discuss a project, feel free to reach out! I'm open to freelance opportunities, team roles, and consulting work involving system development and web technologies.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ padding: '1rem', background: 'rgba(255, 42, 133, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                                    <User size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Name</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Erika Mae Baldove</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ padding: '1rem', background: 'rgba(255, 42, 133, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Address</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Iloilo, Philippines</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ padding: '1rem', background: 'rgba(255, 42, 133, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Email</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>baldoverika@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass"
                        style={{ padding: '2.5rem', borderRadius: '20px' }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 600 }}>Message Me</h3>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'white', outline: 'none' }}
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'white', outline: 'none' }}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                required
                                style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'white', outline: 'none' }}
                            />
                            <textarea
                                rows={5}
                                placeholder="Your Message..."
                                required
                                style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'white', outline: 'none', resize: 'vertical' }}
                            ></textarea>

                            <button
                                type="submit"
                                className="btn-primary"
                                style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', padding: '1rem' }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : <><Send size={20} /> Send Message</>}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

import { motion } from 'framer-motion';
import { User, MapPin, Mail, Send, CheckCircle, XCircle } from 'lucide-react';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS credentials (stored safely in .env) ─────────────────────────
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ──────────────────────────────────────────────────────────────────────────

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        setIsSubmitting(true);
        setStatus('idle');

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus('success');
                formRef.current?.reset();
            })
            .catch(() => {
                setStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
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
                        <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder="Your Name"
                                    required
                                    style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'white', outline: 'none' }}
                                />
                                <input
                                    type="email"
                                    name="reply_to"
                                    placeholder="Your Email"
                                    required
                                    style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'white', outline: 'none' }}
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', color: 'white', outline: 'none' }}
                            />
                            <textarea
                                rows={5}
                                name="message"
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

                            {status === 'success' && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4ade80', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                                    <CheckCircle size={18} /> Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            {status === 'error' && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f87171', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                                    <XCircle size={18} /> Something went wrong. Please try again or email me directly.
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

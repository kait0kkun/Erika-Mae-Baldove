import { motion } from 'framer-motion';

const skillsData = [
    { name: 'SQL Server', level: 90 },
    { name: 'C# / ASP.NET', level: 85 },
    { name: 'JavaScript / React', level: 85 },
    { name: 'Git', level: 90 },
    { name: 'OAuth', level: 90 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'UI/UX Design', level: 85 },
];

export default function Skills() {
    return (
        <section id="skills" style={{ position: 'relative' }}>
            <div className="container">
                <h2 className="section-title">My Skills</h2>

                <div className="grid-2">
                    {/* Left Side: Text info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                            Technical Skills & <span className="gradient-text">Experiences</span>
                        </h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                            I specialize in full-stack development with a strong emphasis on backend technologies. I have hands-on experience
                            building and maintaining scalable web applications using <strong>ASP.NET</strong> and <strong>C#</strong>, supported by
                            optimized databases in <strong>SQL Server</strong>.
                        </p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                            I’m also skilled in <strong>JavaScript</strong> and <strong>React</strong>
                            for building interactive front-end features. I'm familiar with the complete development lifecycle, from design to deployment,
                            using Visual Studio and VS Code as my primary IDEs.
                        </p>
                    </motion.div>

                    {/* Right Side: Skill Progress */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {skillsData.map((skill, index) => (
                            <div key={skill.name}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: 500 }}>
                                    <span>{skill.name}</span>
                                    <span style={{ color: 'var(--primary)' }}>{skill.level}%</span>
                                </div>
                                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                        style={{
                                            height: '100%',
                                            background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                                            borderRadius: '10px'
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from 'react';

const About = () => {
    return (
        <section id="about" style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Our Philosophy</h2>
                <div style={styles.grid}>
                    <div style={styles.textColumn}>
                        <p style={styles.paragraph}>
                            At Let's Play (NW) Ltd, we believe that every child is an individual with unique needs and talents.
                            Based at Davyhulme Primary School, we provide a safe, nurturing environment where children can relax, play, and learn.
                        </p>
                        <p style={styles.paragraph}>
                            We are proud to be affiliated with <strong>'Aiming High'</strong> for disabled children, ensuring that our
                            services are inclusive and accessible to everyone.
                        </p>
                        <div style={styles.ageBadge}>
                            Catering for children aged <strong>3 – 12 years</strong>
                        </div>
                    </div>
                    <div style={styles.imageColumn}>
                        {/* Placeholder for image */}
                        <div style={styles.imagePlaceholder}>
                            Diverse group of children playing
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '5rem 20px',
        backgroundColor: '#fff',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '3rem',
        textAlign: 'center',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'center',
    },
    paragraph: {
        marginBottom: '1.5rem',
        fontSize: '1.1rem',
        color: '#555',
    },
    ageBadge: {
        display: 'inline-block',
        backgroundColor: 'var(--color-bg)',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        borderLeft: '5px solid var(--color-primary)',
        marginTop: '1rem',
        fontSize: '1.1rem',
    },
    imagePlaceholder: {
        width: '100%',
        height: '300px',
        background: 'linear-gradient(45deg, #f3f4f6 25%, #e5e7eb 25%, #e5e7eb 50%, #f3f4f6 50%, #f3f4f6 75%, #e5e7eb 75%, #e5e7eb 100%)',
        backgroundSize: '20px 20px',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#9ca3af',
        fontSize: '1.2rem',
        fontWeight: '500',
        border: '2px dashed #d1d5db',
    }
};

export default About;

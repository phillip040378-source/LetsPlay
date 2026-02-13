import React from 'react';

const Hero = () => {
    return (
        <section id="home" style={styles.hero}>
            <div style={styles.content}>
                <h1 style={styles.headline}>Where Every Child is Seen as Special</h1>
                <p style={styles.subheadline}>Professional, trustworthy, and fun - the perfect place for your child to grow.</p>
                <a href="#availability" style={styles.ctaBtn}>Check Availability</a>
            </div>
        </section>
    );
};

const styles = {
    hero: {
        background: 'linear-gradient(135deg, var(--color-primary) 0%, #003366 100%)',
        color: '#fff',
        padding: '6rem 20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        position: 'relative',
        overflow: 'hidden',
    },
    content: {
        maxWidth: '800px',
    },
    headline: {
        color: '#fff', // Overriding the default primary color for h1
        fontSize: '3rem',
        marginBottom: '1rem',
        lineHeight: '1.2',
    },
    subheadline: {
        fontSize: '1.25rem',
        marginBottom: '2rem',
        opacity: '0.9',
    },
    ctaBtn: {
        backgroundColor: 'var(--color-accent)',
        color: '#fff',
        padding: '1rem 2rem',
        borderRadius: '30px',
        fontSize: '1.1rem',
        fontWeight: '700',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'transform 0.2s ease',
        boxShadow: '0 4px 15px rgba(255, 65, 54, 0.4)',
    }
};

export default Hero;

import React from 'react';

const TrustSignals = () => {
    return (
        <section id="ofsted" style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Your Child's Safety is Our Priority</h2>
                <div style={styles.card}>
                    <div style={styles.ofstedBadge}>
                        <span style={styles.urnLabel}>Ofsted URN</span>
                        <span style={styles.urnValue}>502418</span>
                    </div>
                    <div style={styles.status}>
                        <h3 style={styles.statusTitle}>Inspection Status: Met</h3>
                        <p>We meet all requirements for the Early Years Register and the Childcare Register.</p>
                    </div>
                    <a href="https://reports.ofsted.gov.uk/provider/16/502418" target="_blank" rel="noopener noreferrer" style={styles.link}>
                        View Report →
                    </a>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '5rem 20px',
        backgroundColor: 'var(--color-primary)',
        color: '#fff',
        textAlign: 'center',
    },
    container: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    heading: {
        color: '#fff',
        marginBottom: '3rem',
        fontSize: '2.5rem',
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        padding: '3rem',
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
    },
    ofstedBadge: {
        backgroundColor: '#fff',
        color: 'var(--color-primary)',
        padding: '1rem 2rem',
        borderRadius: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    urnLabel: {
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: '0.2rem',
    },
    urnValue: {
        fontSize: '1.8rem',
        fontWeight: '700',
    },
    status: {
        color: '#fff',
    },
    statusTitle: {
        color: '#fff',
        fontSize: '1.5rem',
        marginBottom: '0.5rem',
    },
    link: {
        color: 'var(--color-accent)',
        fontWeight: '600',
        fontSize: '1.1rem',
        marginTop: '1rem',
        borderBottom: '2px solid transparent',
        transition: 'border-color 0.3s ease',
    }
};

export default TrustSignals;

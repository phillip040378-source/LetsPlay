import React from 'react';

const Inclusion = () => {
    return (
        <section id="inclusion" style={styles.section}>
            <div style={styles.container}>
                <div style={styles.content}>
                    <h2 style={styles.heading}>Inclusive for Everyone</h2>
                    <p style={styles.lead}>
                        We pride ourselves on being a welcoming space for all children, regardless of ability or background.
                    </p>
                    <div style={styles.features}>
                        <div style={styles.featureItem}>
                            <h3 style={styles.featureTitle}>Wheelchair Accessible</h3>
                            <p>Our facilities are fully equipped with ramps and accessible pathways.</p>
                        </div>
                        <div style={styles.featureItem}>
                            <h3 style={styles.featureTitle}>Signalong Trained</h3>
                            <p>Our staff are trained in Signalong to support children with communication needs.</p>
                        </div>
                        <div style={styles.featureItem}>
                            <h3 style={styles.featureTitle}>Cultural Diversity</h3>
                            <p>We celebrate all cultures and incorporate diverse planning into our daily activities.</p>
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
    content: {
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto',
    },
    heading: {
        marginBottom: '2rem',
        fontSize: '2.5rem',
    },
    lead: {
        marginBottom: '4rem',
        fontSize: '1.2rem',
        color: '#666',
    },
    features: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '3rem',
    },
    featureItem: {
        padding: '2rem',
        borderRadius: '16px',
        backgroundColor: 'var(--color-bg)',
        transition: 'transform 0.3s ease',
    },
    featureTitle: {
        marginBottom: '1rem',
        fontSize: '1.4rem',
    }
};

export default Inclusion;

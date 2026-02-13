import React from 'react';

const OperationalInfo = () => {
    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Opening Hours & Pricing</h2>
                <div style={styles.card}>
                    <table style={styles.table}>
                        <tbody>
                            <tr>
                                <td style={styles.label}>Opening Hours</td>
                                <td style={styles.value}>Mon – Fri, 15:15 – 18:00</td>
                            </tr>
                            <tr>
                                <td style={styles.label}>Location</td>
                                <td style={styles.value}>Davyhulme Primary School</td>
                            </tr>
                            <tr>
                                <td style={styles.label}>Sibling Discount</td>
                                <td style={styles.value}>Available (Contact us for details)</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={styles.note}>
                        * We operate during term time. Holiday clubs available separately.
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '5rem 20px',
        backgroundColor: 'var(--color-bg)',
    },
    container: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '3rem',
        fontSize: '2.5rem',
    },
    card: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    label: {
        padding: '1.5rem',
        fontWeight: '600',
        color: 'var(--color-primary)',
        borderBottom: '1px solid #eee',
        width: '40%',
    },
    value: {
        padding: '1.5rem',
        color: '#555',
        borderBottom: '1px solid #eee',
    },
    note: {
        marginTop: '1.5rem',
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#888',
        fontStyle: 'italic',
    }
};

export default OperationalInfo;

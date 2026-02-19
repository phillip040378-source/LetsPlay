import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="contact" style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.grid}>
                    <div style={styles.column}>
                        <h3 style={styles.title}>Let's Play (NW) Ltd</h3>
                        <p style={styles.address}>
                            Before & After School Club<br />
                            Davyhulme Primary School<br />
                            Canterbury Road<br />
                            Urmston<br />
                            M41 0RX
                        </p>
                    </div>
                    <div style={styles.column}>
                        <h3 style={styles.title}>Contact Us</h3>
                        <p style={styles.contactItem}>
                            <strong>Manager:</strong> Trish Hamadamian
                        </p>
                        <p style={styles.contactItem}>
                            <strong>Phone:</strong> <a href="tel:07973 819280" style={styles.link}>07973 819280</a>
                        </p>
                        <p style={styles.contactItem}>
                            <strong>Email:</strong> <a href="mailto:letsplaynw@gmail.com" style={styles.link}>letsplaynw@gmail.com</a>
                        </p>
                    </div>
                    <div style={styles.column}>
                        <h3 style={styles.title}>Quick Links</h3>
                        <div style={styles.links}>
                            <Link to="/" style={styles.link}>Home</Link>
                            <Link to="/blog" style={styles.link}>News & Activities</Link>
                            <Link to="/staff" style={styles.link}>Meet the Team</Link>
                            <a
                                href="https://letsplay.magicbooking.co.uk/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ ...styles.link, color: 'var(--color-accent)', fontWeight: 'bold' }}
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
                <div style={styles.copyright}>
                    &copy; {new Date().getFullYear()} Let's Play (NW) Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#001226', // Darker navy
        color: '#ccc',
        padding: '4rem 20px 2rem',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem',
        marginBottom: '4rem',
    },
    title: {
        color: '#fff',
        fontSize: '1.3rem',
        marginBottom: '1.5rem',
        fontFamily: 'var(--font-heading)',
    },
    address: {
        lineHeight: '1.8',
    },
    contactItem: {
        marginBottom: '1rem',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
    },
    link: {
        color: '#ccc',
        transition: 'color 0.3s ease',
        textDecoration: 'none',
    },
    copyright: {
        textAlign: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        fontSize: '0.9rem',
        color: '#888',
    }
};

export default Footer;

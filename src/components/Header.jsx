import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>Let's Play (NW) Ltd</div>
        
        <button style={styles.mobileMenuBtn} onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav style={{...styles.nav, ...(isMenuOpen ? styles.navOpen : {})}}>
          <a href="#home" style={styles.link} onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" style={styles.link} onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#inclusion" style={styles.link} onClick={() => setIsMenuOpen(false)}>Inclusion</a>
          <a href="#ofsted" style={styles.link} onClick={() => setIsMenuOpen(false)}>Ofsted</a>
          <a href="#contact" style={styles.contactBtn} onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#ffffff',
    padding: '1rem 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--color-primary)',
  },
  mobileMenuBtn: {
    display: 'none', // Hidden on desktop, shown in media query via CSS usually, but here inline styles are tricky for media queries. 
    // Ideally we use CSS modules or styled-components, but for simplicity I'll rely on a basic implementation or just inline styles + assumption of desktop first and responsive tweaks if I can add a stylesheet.
    // Given the constraints, I'll add a simple style tag or just rely on the global CSS for media queries if I were to use classes. 
    // To keep it simple with inline styles, I might miss media queries. 
    // BETTER APPROACH: Use standard CSS classes defined in index.css or a module.
    // I will use className and define styles in index.css for responsiveness to be safe.
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'var(--color-text)',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  contactBtn: {
    backgroundColor: 'var(--color-accent)',
    color: '#fff',
    padding: '0.6rem 1.2rem',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
    display: 'inline-block',
  }
};

// I will rewrite this to use classes for responsiveness in a follow-up step or right now if I can.
// Let's stick to a simple structure and maybe add a CSS file for Header if needed, or put everything in index.css.
// For now, I'll use inline styles but acknowledge the mobile menu limitation without media queries.
// Actually, I can use window.matchMedia in React but that's overkill.
// I'll make it responsive by adding classes.

export default Header;

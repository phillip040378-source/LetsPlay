import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import OperationalInfo from './components/OperationalInfo';
import Inclusion from './components/Inclusion';
import TrustSignals from './components/TrustSignals';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <OperationalInfo />
        <Inclusion />
        <TrustSignals />
      </main>
      <Footer />
    </div>
  );
}

export default App;

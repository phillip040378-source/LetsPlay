import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StickyHeader from '@/components/ui/StickyHeader';
import VibrantHero from '@/components/ui/VibrantHero';
import { BentoGrid } from '@/components/ui/BentoGrid';
import StatsSection from '@/components/ui/StatsSection';
import Footer from './components/Footer';

// Placeholder Pages for now
const Home = () => (
  <main className="min-h-screen bg-slate-50">
    <VibrantHero />
    <StatsSection />
    <BentoGrid />
  </main>
);

const Blog = () => <div className="pt-32 text-center text-4xl font-bold text-slate-800">News & Activities (Coming Soon)</div>;
const Staff = () => <div className="pt-32 text-center text-4xl font-bold text-slate-800">Meet the Team (Coming Soon)</div>;

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen bg-slate-50">
        <StickyHeader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

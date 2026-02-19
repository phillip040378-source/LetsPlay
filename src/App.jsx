import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StickyHeader from '@/components/ui/StickyHeader';
import BoldHero from '@/components/ui/BoldHero';
import { BentoGrid } from '@/components/ui/BentoGrid';
import PartnershipSection from '@/components/ui/PartnershipSection';
import Footer from './components/Footer';

// Placeholder Pages for now
const Home = () => (
  <main className="min-h-screen">
    <BoldHero />
    <BentoGrid />
    <PartnershipSection />
  </main>
);

const Blog = () => (
  <div className="min-h-screen bg-slate-50 pt-24 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-navy-900 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>News & Activities</h1>
      <p className="text-slate-500 text-lg">Coming soon — updates on our latest events and activities.</p>
    </div>
  </div>
);

const Staff = () => (
  <div className="min-h-screen bg-slate-50 pt-24 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-navy-900 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Meet the Team</h1>
      <p className="text-slate-500 text-lg">Coming soon — get to know the people behind Let's Play.</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <StickyHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Home } from './pages/Home';
import { Affiliates } from './pages/Affiliates';

// Scroll to top handler
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text-main font-sans selection:bg-primary selection:text-black overflow-x-hidden">
        <ScrollToTop />
        <BackgroundEffects />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/afiliados" element={<Affiliates />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

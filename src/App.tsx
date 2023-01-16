import { useState } from 'react';

import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import Portfolio from "./pages/Portfolio";
import ScrollToTop from './pages/ScrollToTop';
import Services from "./pages/Services";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <div className={darkMode ? "dark:" : ""}>
      <Navbar />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

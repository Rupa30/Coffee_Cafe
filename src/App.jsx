import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen"; // Import LoadingScreen

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <Menu />
            <About />
            <Testimonials />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;

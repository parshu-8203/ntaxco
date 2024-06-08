import { useState } from "react";
import "./App.css";
import ConstumNavbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Services from "./components/Services/Services";
import ScrollToTop from "./widgets/ScrollToTop";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      offset: 300,
      delay: 100,
      duration: 800,
      easing: "ease-in-out",
    });
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="spinner-border text-primary spinner" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <Router>
          <ScrollToTop />
          <ConstumNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactUs" element={<Contact />} />
            <Route
              path="/gst-registration"
              element={<Services serviceName="GST REGISTRATION" />}
            />
            <Route
              path="/gst-returns"
              element={<Services serviceName="GST RETURNS" />}
            />
            <Route
              path="/private-limited-company"
              element={<Services serviceName="PRIVATED LIMITED COMPANY" />}
            />
            <Route
              path="/limited-liability-partnership"
              element={<Services serviceName="LIMITED LIABILITY PARTNERSHIP" />}
            />
            <Route
              path="/one-person-company"
              element={<Services serviceName="ONE PERSON COMPANY" />}
            />
            <Route
              path="/partnership-firm"
              element={<Services serviceName="PARTNERSHIP FIRM" />}
            />
            <Route
              path="/employee-state-insurance"
              element={<Services serviceName="EMPLOYEE STATE INSURANCE" />}
            />
            <Route
              path="/import-export-code"
              element={<Services serviceName="IMPORT & EXPORT CODE" />}
            />
            <Route
              path="/msme"
              element={
                <Services serviceName="MICRO, SMALL & MEDIUM ENTERPRISES (MSME)" />
              }
            />
            <Route
              path="/food-license"
              element={<Services serviceName="FOOD LICENSE" />}
            />
            <Route
              path="/trade-license"
              element={<Services serviceName="TRADE LICENSE" />}
            />
            <Route
              path="/12A"
              element={<Services serviceName="12A LICENSE FOR TRUST" />}
            />
            <Route
              path="/80G"
              element={<Services serviceName="80G LICENSE FOR TRUST" />}
            />
            <Route
              path="/book-keeping-and-accounting"
              element={<Services serviceName="BOOK KEEPING & ACCOUNTING" />}
            />
            <Route
              path="/payroll"
              element={<Services serviceName="PAYROLL" />}
            />
            <Route
              path="/digital-signature"
              element={<Services serviceName="DIGITAL SIGNATURE" />}
            />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;

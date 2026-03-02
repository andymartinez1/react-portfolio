import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import ScrollToTopLink from "./components/ScrollToTopLink.jsx";
import About from "./pages/About.jsx";
import Education from "./pages/Education.jsx";
import Home from "./pages/Home.jsx";
import NoPage from "./pages/NoPage.jsx";
import Projects from "./pages/Projects.jsx";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="fixed-background" aria-hidden="true" />
      <ScrollToTopLink />
      <Navbar />
      <main className="main">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </main>
      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  );
}
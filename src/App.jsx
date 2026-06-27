import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Connect from "./pages/Connect";

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Marquee />
              <Projects />
              <Skills />
              <About />
              <Education />
              <Experience />
            </>
          }
        />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

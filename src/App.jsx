import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import IntroPage from "./sections/IntroPage/IntroPage";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
function App() {
  return (
    <>
      <IntroPage />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

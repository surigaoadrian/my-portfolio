import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import ShowCase from "./components/ShowCase";

function App() {
  return (
    <div>
      <NavBar />
      <ShowCase />
      <AboutMe id="about" />
      <Projects id="projects" />
      <ContactMe id="contact" />
      <Footer />
    </div>
  );
}

export default App;

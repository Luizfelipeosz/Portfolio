import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Workflow from "./components/WorkFlow/Workflow";
import Stack from "./components/Stack/Stack";
import Journey from "./components/Journey/Journey";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Workflow />
        <Stack />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
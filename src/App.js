import Header from "./components/Header";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Conctact from "./components/Conctact";
import Github from "./components/Github";
import Home from "./components/Home/Home";

function App() {
  return (
    <div >
      <Header />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Github />
      <Conctact />
      <Footer />
    </div>
  );
}

export default App;

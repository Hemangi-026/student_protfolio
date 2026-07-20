import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";

const skillList = [
  "JavaScript",
  "React",
  "HTML & CSS",
  "Node.js",
  "Git & GitHub",
  "SQL",
];

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header name="Hemangi Parmar" themeColor="#4ecca3" />
      <main>
        <About />
        <Skills skillList={skillList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
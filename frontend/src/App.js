import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
    </div>
  );
}


export default App;
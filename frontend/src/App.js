import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
    </div>
  );
}

export default App;
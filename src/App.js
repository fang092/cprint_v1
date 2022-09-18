import logo from './images/CprintLogo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';

function App() {
  return (
    <body className="w-screen h-auto bg-white font-fredoka">
      <Navbar/>
      <Welcome/>

    </body>
  );
}

export default App;

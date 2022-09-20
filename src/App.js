
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Features from './components/Features';


function App() {
  return (
    <body className="w-screen h-auto bg-white font-fredoka">
      <Navbar/>
      <Welcome/>
      <Features/>

    </body>
  );
}

export default App;

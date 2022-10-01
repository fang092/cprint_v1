
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Features from './components/Features';
import Reviews from './components/Reviews';

function App() {
  return (
    <body className="w-full h-full bg-white font-fredoka">
      <Navbar/>
      <Welcome/>
      <Features/>
      <Reviews/>

    </body>
  );
}

export default App;

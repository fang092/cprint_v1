
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <body className="w-full h-full bg-white font-fredoka">
     
      <Welcome/>
      <Features/>
      <Reviews/>
      <Footer/>

    </body>
  );
}

export default App;

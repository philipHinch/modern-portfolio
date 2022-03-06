//styles
import './App.css';
import AboutMe from './components/AboutMe';
import Email from './components/Email';
import Hero from './components/Hero';
//components
import Navbar from './components/Navbar';
import Social from './components/Social';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Social />
      <Email />
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;

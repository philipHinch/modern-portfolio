//styles
import './App.css';
import AboutMe from './components/AboutMe';
import Email from './components/Email';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MyProjects from './components/MyProjects';
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
      <MyProjects />
      <Footer />
    </div>
  );
}

export default App;

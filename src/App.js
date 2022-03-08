//styles
import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Email from './components/Email';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Intro from './components/Intro';
import MyProjects from './components/MyProjects';
//components
import Navbar from './components/Navbar';
import Social from './components/Social';

function App() {

  const [showIntro, setShowIntro] = useState(true)

  setTimeout(() => {
    setShowIntro(false)
  }, 2000)

  if (showIntro) {
    return <Intro />
  }

  return (
    <div className="App">
      <Navbar />
      <Social />
      <Email />
      <Hero />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;

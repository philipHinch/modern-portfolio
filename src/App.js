//styles
import { useEffect, useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Email from './components/Email';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Menu from './components/Menu';
import MyProjects from './components/MyProjects';
//components
import Navbar from './components/Navbar';
import Social from './components/Social';

function App() {

  const [showIntro, setShowIntro] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)


  useEffect(() => {

    console.log('                   __\r\n                 .\'  \'.\r\n                :      :\r\n                | _  _ |\r\n             .-.|(o)(o)|.-.        _._          _._\r\n            ( ( | .--. | ) )     .\',_ \'.      .\' _,\'.\r\n             \'-\/ (    ) \\-\'     \/ \/\' `\\ \\ __ \/ \/\' `\\ \\\r\n              \/   \'--\'   \\     \/ \/     \\.\'  \'.\/     \\ \\\r\n              \\ `\"====\"` \/     `-`     : _  _ :      `-`\r\n               `\\      \/\'              |(o)(o)|\r\n                 `\\  \/\'                |      |\r\n                 \/`-.-`\\_             \/        \\\r\n           _..:;\\._\/V\\_.\/:;.._       \/   .--.   \\\r\n         .\'\/;:;:;\\ \/^\\ \/:;:;:\\\'.     |  (    )  |\r\n        \/ \/;:;:;:;\\| |\/:;:;:;:\\ \\    _\\  \'--\'  \/__\r\n   jgs \/ \/;:;:;:;:;\\_\/:;:;:;:;:\\ \\ .\'  \'-.__.-\'   `-.\r\n\r\n------------------------------------------------\r\n\r\n');
    console.log('Hello curious fella! I hope you are enjoying what you are seeing so far. Have an awesome day!');

    //credit to: https://asciiart.website/

  }, [])

  setTimeout(() => {
    setShowIntro(false)
  }, 2000)

  //remove scrollbar when menu is open
  if (menuOpen) {
    document.querySelector('body').style.overflow = 'hidden'
  } else {
    document.querySelector('body').style.overflow = 'visible'
  }

  if (showIntro) {
    return <Intro />
  }

  return (
    <div className="App">
      {menuOpen && <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />}
      <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Social />
      <Email />
      <Hero menuOpen={menuOpen} />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;

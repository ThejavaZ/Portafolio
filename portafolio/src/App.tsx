import { Routes, Route } from 'react-router-dom';

import Home from './views/home/home';
import About from './views/about/about';
import Header from './components/header';
import Contact from './views/contact/contact';
import Projects from './views/projects/projects';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;

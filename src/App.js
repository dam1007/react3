import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './components/pages/Main';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Reference from './components/pages/Reference';
import Youtube from './components/pages/Youtube';
import Movie from './components/pages/Movie';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/reference" element={<Reference />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;
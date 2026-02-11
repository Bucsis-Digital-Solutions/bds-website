import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Navigation.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

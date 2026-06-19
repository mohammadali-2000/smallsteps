import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Community from './pages/Community';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Interview from './pages/Interview';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/interview" element={<Interview />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

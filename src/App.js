import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Studio from './components/Studio';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-blue-600 w-full h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/studio" element={<Studio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

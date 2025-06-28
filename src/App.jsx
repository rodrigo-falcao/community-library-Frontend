import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<h1>BOOKS Page</h1>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router> 
  )
}

export default App

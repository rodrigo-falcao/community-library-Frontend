import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<h1>LOGIN Page</h1>} />
          <Route path="/books" element={<h1>BOOKS Page</h1>} />
        </Routes>
      </Router> 
  )
}

export default App

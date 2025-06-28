import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/login" element={<h1>LOGIN Page</h1>} />
          <Route path="/books" element={<h1>BOOKS Page</h1>} />
        </Routes>
      </Router> 
  )
}

export default App

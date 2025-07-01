import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardUser from './pages/DashboardUser.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './utils/PrivateRoute.jsx';
import Register from './pages/Register';
import ScrollToTop from './utils/ScrollToTop';
import DashboardBooks from './pages/DashboardBooks.jsx';
import DashboardLoans from './pages/DashboardLoans.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';

function App() {
  return (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/books" element={
            <PrivateRoute>
              <DashboardBooks />
            </PrivateRoute>
          } />
          <Route path="/users" element={
            <PrivateRoute>
              <DashboardUser />
            </PrivateRoute>
          }/>
          <Route path="/loans" element={
            <PrivateRoute>
              <DashboardLoans />
            </PrivateRoute>
          }/>
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </Router> 
  )
}

export default App

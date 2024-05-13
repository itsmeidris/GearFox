import { Route, Routes} from 'react-router-dom';
import './App.css';
import LandingPage from './layouts/LandingPage';
import Register from './components/FormComponents/Register';
import Login from './components/FormComponents/Login';
import AdminDashboard from './components/AdminComponents/AdminDashboard';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={<AdminDashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
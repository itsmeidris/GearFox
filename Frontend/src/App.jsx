import {Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage';
import Register from './components/FormComponents/Register';
import Login from './components/FormComponents/Login';

function App() {
    return(
        <>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/signup' element={<Register/>}/>
            
        </Routes>
        </>

    );
}

export default App;

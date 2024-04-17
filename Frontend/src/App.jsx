import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import './App.css';
import Form from './pages/Form/Form';


const App = () => {
  return <Router>
    <Routes>
        <Route path='/' element={<Form/>} />
      </Routes>
    </Router>;
};

export default App

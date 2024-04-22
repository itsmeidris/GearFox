import {Route, Routes} from 'react-router-dom'
import './App.css';
import Form from './pages/Form.jsx';


const App = () => {
  return(
    <>
      <Routes>
        <Route path='*' element={<Form/>} />
      </Routes>
    </>
  );
};

export default App


import {Route, Routes} from 'react-router-dom'
import Register from '../../components/Registration/Register';
import Login from '../../components/Registration/Login';




const Form = () => {
  return <>
    <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
};

export default Form

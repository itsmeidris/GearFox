
import {Route, Routes} from 'react-router-dom'
import Register from '../components/FormComponents/Register'
import Login from '../components/FormComponents/Login';


const Form = () => {
  return(
    <>
     <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  
  )
};

export default Form

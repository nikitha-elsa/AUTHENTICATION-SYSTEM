
import './App.css'
import {Routes, Route} from 'react-router-dom';
import NavBar from '../src/components/NavBar'
import Home from '../src/pages/Home'
import Register from '../src/pages/Register'
import Login from './pages/Login'


function App() {
 

  return (
    <>
    <div>

    
      
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/Register' element={ <Register />} />
        <Route path='/Login' element={ <Login />} />
       
      </Routes>
      </div>
    </>
  )
}

export default App

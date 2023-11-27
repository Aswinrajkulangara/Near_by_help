
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (

   <>
    <Header/>
    <Routes>
        
        <Route path='/login'  element={<Login/>}/>
        <Route path='/register'  element={<Register/>}/>
       
      </Routes>
    <div>helloo</div>
   </>
  );
}

export default App;

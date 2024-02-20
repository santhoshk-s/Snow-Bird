import './App.scss';
import Home from './pages/home/Home';
 import Register from './pages/register/Register'; 
 import Watch from './pages/watch/Watch'; 
 import Login from './pages/login/Login'; 
 import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom'
import { useContext } from 'react';
import {AuthContext} from "./authContext/AuthContex"

function App() {
  const {user}= useContext(AuthContext)
  return ( 
    
    <Router>
    <Routes> 
     <Route   exact path="/"     element={user ?  <Home/> : <Navigate to ='/register'/> } />
     <Route   path="/login"      element={!user ?  <Login/> : <Navigate to ='/'/> }       />
     <Route   path="/register"   element={!user ?  <Register/> : <Navigate to ='/'/> }    />
     
    {user && (
      <>
      <Route   path="/watch"      element={<Watch />}                 />
      <Route   path="/movies"     element={<Home type="movie"/>}      />
      <Route   path="/series"     element={<Home type="series"/>}      />
      </>
      )}
     
    </Routes>
  </Router>
   
  )
  
}

export default App;

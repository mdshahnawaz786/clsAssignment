import { useContext } from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { myContext } from './Components/ContextApi';
import {Routes, Route, Navigate} from 'react-router-dom'
import Technologies from './Routing/Technologies';
import Html from './Routing/Html';
import Css from './Routing/Css';
import Js from './Routing/Js';
import ReactC from './Routing/ReactC';
import Support from './Components/Support';


function App() {
     const {isLoggedIn} = useContext(myContext)
    //  console.log(isLoggedIn);
  return (
    <div className="App">
      
      {isLoggedIn ? <Navbar/> : null}

        <Routes>
          <Route path='/' element={isLoggedIn ? <Home/> : <Login/>}/>

          <Route path='/tech' element={isLoggedIn ? <Technologies/> : <Navigate to='/' />}>
            <Route path="" element={<Navigate to="html"/>} />
            <Route path="html" element={<Html/>} />
            <Route path="css" element={<Css/>} />
            <Route path="js" element={<Js/>} />
            <Route path="react" element={<ReactC/>} />
          </Route>
          
          <Route path='support' element={isLoggedIn ? <Support/> : <Navigate to='/' /> }/>

        </Routes>


    </div>
  );
}

export default App;

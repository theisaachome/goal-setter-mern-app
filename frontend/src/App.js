import React from 'react';
import { BrowserRouter as Routers, Routes,Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import AddGoal from './pages/AddGoal';
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    < >
      <Routers>
        <div className="container">
          <Header/>
           <Routes>
             <Route path='/' element={<Dashboard/>} />
             <Route path='/login' element={<Login/>} />
             <Route path='/register' element={<Register/>}/>
             <Route path='/newgoal'element={<AddGoal/>}/>
           </Routes>
        </div>
      </Routers>
      <ToastContainer/>
    </>
  );
}

export default App;

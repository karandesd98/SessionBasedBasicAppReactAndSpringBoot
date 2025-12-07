import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import LoginCmp from './mycomponent/loginComp/LoginCmp';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './mycomponent/ProtectedRoute';
import HomeCmp from './mycomponent/HomeCmp';
import RegisterCmp from './mycomponent/RegisterCmp';
import AddTransaction from './mycomponent/AddTransaction';
import HomeLayout from './mycomponent/HomeLayout';
import AddImages from './mycomponent/AddImages';


function App() {

  return (
        <div>
          <Routes>
            <Route path='/' element={<LoginCmp/>} />
            <Route path='/login' element={<LoginCmp/>} />
            <Route path="/register" element={<RegisterCmp />} />
            <Route path="/home" element={<ProtectedRoute><HomeLayout /></ProtectedRoute>}>
              <Route index element={<ProtectedRoute><HomeCmp/></ProtectedRoute>} />
              <Route path="transactions" element={<ProtectedRoute><AddTransaction /></ProtectedRoute>} /> 
              <Route path="addImages" element={<ProtectedRoute><AddImages/></ProtectedRoute>} /> 
            </Route>

          </Routes>
       </div>
  );
}

export default App;

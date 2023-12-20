import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import H from './pages/Home';
import A from './pages/Add';
import U from './pages/Update';
import L from './pages/Layout';
import V from './pages/Veiw';

export default function T(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<L/>}>
      <Route index element={<H/>}/>
      <Route path="add" element={<A/>}/>
      <Route path='update/:id' element={<U/>}/>
      <Route path='veiw/:id' element={<V/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
    <T/>
 
);




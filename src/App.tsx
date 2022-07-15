import MainPage from './components/pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';
import React from 'react';

const Trash = React.lazy(() => import('./components/pages/Trash'))
const NotFound = React.lazy(() => import('./components/pages/NotFound'))

const App:React.FC = () => {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<MainPage/>} />
    <Route path='/trash' element={
      <React.Suspense fallback={<div>Идет загрузка</div>}>
        <Trash/>
      </React.Suspense>
    }/>
    <Route path='*' element={
     <React.Suspense fallback={<div>Идет загрузка</div>}>
      <NotFound/>
    </React.Suspense>
  }/>   
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

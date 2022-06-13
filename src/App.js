import MainPage from './components/pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<MainPage/>} />

    
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

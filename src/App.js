import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Underdev from './pages/Underdev';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/underdev' element={<Underdev />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

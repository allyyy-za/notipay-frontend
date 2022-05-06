import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing/Landing';
import Login from './pages/Landing/components/login/Login'
import Registration from './pages/Landing/components/registration/Registration';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/login" element={<Login /> } />
            <Route exact path="/register" element={<Registration />} />
            <Route exact path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

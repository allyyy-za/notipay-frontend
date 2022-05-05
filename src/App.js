import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing/Landing';
import Login from './components/login/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/login" element={<Login /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

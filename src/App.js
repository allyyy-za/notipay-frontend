import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import PrivateRoute from "./util/PrivateRoute";
import Subscriptions from "./pages/Home/components/subscriptions/Subscriptions";
import AddBill from "./pages/Home/components/modals/AddBill";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route exact path="/subscriptions" element={<Subscriptions />} />
          <Route exact path="/addBill" element={<AddBill />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

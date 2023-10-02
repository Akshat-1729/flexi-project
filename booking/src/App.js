import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Flight from "./pages/flight/Flight";
import Car from "./pages/car/Car";
import Attraction from "./pages/attraction/Attraction";
import Taxis from "./pages/taxis/Taxis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
       
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/flight" element={<Flight/>}/>
        <Route path="/car" element={<Car/>}/>
        <Route path="/attraction" element={<Attraction/>}/>
        <Route path="/taxis" element={<Taxis/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
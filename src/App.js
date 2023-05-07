//import logo from './logo.svg';
import "./Style.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Userlist from "./Component/Userlist";
import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";
import Adduser from "./Component/Adduser";
import Edituser from "./Component/Edituser";
import Addproduct from "./Component/AddProduct";
import Productlist from "./Component/Productlist";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/edituser/:std_id" element={<Edituser />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/productlist" element={<Productlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

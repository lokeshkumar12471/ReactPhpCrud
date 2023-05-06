//import logo from './logo.svg';
import "./Style.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Userlist from "./Component/Userlist";
import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";
import Adduser from "./Component/Adduser";
import Edituser from "./Component/Edituser";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/edituser/:std_id" element={<Edituser />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

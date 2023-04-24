//import logo from './logo.svg';
import "./Style.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Userlist from "./Component/Userlist";
import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlist" element={<Userlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

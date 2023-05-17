import "./App.css";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="container mx-auto ">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;

import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Menspage } from "./Pages/Menspage";
import { WomensPage } from "./Pages/Womenspage";
import { Aboutpage } from "./Pages/Aboutpage";
import { Errorpage } from "./Pages/Errorpage";
import { Cartpage } from "./Pages/Cartpage";
import { Footerpage } from "./Pages/Footerpage";
import SingleItempage from "./Pages/SingleItempage";
import { Checkout } from "./Components/Checkout";
import RegisterPage from "./Pages/RegisterPage";
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./Pages/LoginPage";
import ForgotPage from "./Pages/ForgotPage";
import Profile from "./Components/Profile";

function App() {
  return (
    <> 

      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/register" element={ <RegisterPage/>} />
        <Route path="/login" element={ <LoginPage/>} />
        <Route path="/forgot-password" element={ <ForgotPage/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/men" element={<Menspage />} />
        <Route path="/women" element={<WomensPage />} />
        <Route path="/cart" element={<Cartpage/>} />
        <Route path="/singleitem/:itemId" element={<SingleItempage/>} />
        <Route path="/*" element={<Errorpage />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Footerpage/>
    </>
  );
}

export default App;

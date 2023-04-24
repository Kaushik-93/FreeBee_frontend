import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Donorform from "../pages/Donorform";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<Login />} exact={true} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/donorform" element={<Donorform />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Project from "./pages/Project";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} as={"div"}/>
        <Route path="/about" element={<About />} as={"div"}/>
        <Route path="/sign-up" element={<SignUp />} as={"div"}/>
        <Route path="/sign-in" element={<SignIn />} as={"div"}/>
        <Route path="/projects" element={<Project />} as={"div"}/>
        <Route path="/dashboard" element={<Dashboard />} as={"div"}/>
      </Routes>
    </BrowserRouter>
  );
}

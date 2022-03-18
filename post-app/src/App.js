import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponet from "./Component/Navbar/NavbarComponent";
import Posts from "./Component/Post/Posts";
import Post from "./Component/Post";
import LandingPage from "./Component/LandingPage";
import About from "./Component/About";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";

function App() {
  return (
    <>
      <NavbarComponet />
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/Posts/:id" element={<Post />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/About" element={<About />} />
            <Route path="/Home" element={<LandingPage />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;

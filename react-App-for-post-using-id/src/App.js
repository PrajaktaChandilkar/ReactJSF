import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Posts from "./components/posts/Posts";
import SinglePost from "./components/posts/SinglePost";
import LandingPage from "./components/posts/LandingPage";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import SignUp from "./components/signUp/SignUp"
import Login from "./components/login/Login"
import Page404 from "./components/Page404";
import HOC from "./components/HOC"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Container className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/About" element={<HOC component={<About />}/>}/>
          <Route path="/SinglePost" element={<Posts />} />
          <Route path="/SinglePost/:id" element={<SinglePost />} />
         
          <Route path="/Contact" element={<HOC component={<Contact />} />}/>
          <Route path="/Login" element={ <Login />} />
          <Route path="/SignUp" element={ <SignUp />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

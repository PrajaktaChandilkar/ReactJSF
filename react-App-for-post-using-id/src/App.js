import { Container, Navbar } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SinglePost from "./components/posts/SinglePost";
import LandingPage from "./components/posts/LandingPage";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Page404 from './components/Page404'

import {
  BrowserRouter,
  Routes,
  Route
//   Link,
//   useRouteMatch,
//   useParams,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/About" element={ <About />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/SinglePost/:id" element={ <SinglePost />} />
          <Route path="/Contact" element={ <Contact />} />
          <Route path="/*" element={ <Page404 />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App
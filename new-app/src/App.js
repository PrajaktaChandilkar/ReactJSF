// import logo from './logo.svg';
import { Container, Navbar } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Posts from "./components/posts/Posts";
import ApiPosts from "./components/posts/ApiPosts";
import LandingPage from "./components/posts/LandingPage";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
// import Home from "./components/Home/Home"
import NavbarComponent from "./components/Navbar/NavbarComponent";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <NavbarComponent />{ ' '}
        <Link to ='/'>Home</Link>{' '}
        <Link to ='/About' >About </Link>{' '}
        <Link to='/Contact'>Contact</Link>{' '}
        <Link to='/ApiPosts'>Posts</Link> {' '}
        <Routes>
          <Route path="/About" element={ <About />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/APiPosts" element={<ApiPosts />} />
          <Route path="/Contact" element={ <Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <BrowserRouter>
//       <Container>
//         <Link to='/'>Home</Link>
//         <Link to='/ApiPosts'>Posts</Link>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/ApiPosts" element={<ApiPosts />} />
//         </Routes>
//       </Container>
//     </BrowserRouter>
//   );
// }

export default App;

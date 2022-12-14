import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/write" element={user ? <Write /> : <Login />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/settings" element={user ? <Settings /> : <Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

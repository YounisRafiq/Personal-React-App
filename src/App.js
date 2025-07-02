import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/ContactMe";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Slider from "./components/slider";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  // const router = createBrowserRouter([

  return (
    <div>
      <Navbar title="Younis Ali" />
      <Info/>
      <AboutMe about = "AboutMe"/>
      <Slider head = "My Work"/>
      <Contact detail = "Contact Me"/>
    </div>
  );
}

export default App;

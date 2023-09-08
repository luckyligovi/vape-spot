import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
// import { ThemeProvider } from "@mui/material/styles";
// import customTheme from "./customTheme"; // Import your custom theme

function App() {
  return (
    <Router>
      {/* <ThemeProvider theme={customTheme}> */}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      {/* </ThemeProvider> */}
    </Router>
  );
}

export default App;

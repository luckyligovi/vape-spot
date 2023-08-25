import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./customTheme"; // Import your custom theme

function App() {
  return (
    <Router>
      <ThemeProvider theme={customTheme}>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/sevices" component={Services} />
      </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;

import Nav from "./components/navbar";
import { GlobalStyle } from "./global/styles";
import { useContext, useState } from "react";
import { dark, light } from "./themes/themes";
import { ThemeProvider, ThemeContext } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import AboutMain from "./components/aboutMain";
import AboutHistory from "./components/aboutHistory";
import Leguages from "./components/aboutLenguages";
import Projects from "./pages/Pojects";
import NotFound from "./pages/NotFound";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme ? light : dark}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route index element={<AboutMain />} />
            <Route path="history" element={<AboutHistory />} />
            <Route path="langs" element={<Leguages />} />
          </Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

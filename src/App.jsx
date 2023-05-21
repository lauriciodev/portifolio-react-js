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
            <Route path="langs" element={<p>sub 2</p>} />
            <Route path="*" element={<p>Not found</p>} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

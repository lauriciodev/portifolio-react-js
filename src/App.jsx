import Nav from "./components/navbar";
import { GlobalStyle } from "./global/styles";
import { useContext, useState } from "react";
import { dark, light } from "./themes/themes";
import { ThemeProvider, ThemeContext } from "styled-components";
import { Profile } from "./components/profile";
import { Outlet } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme ? light : dark}>
        <Nav />
        <Outlet />
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

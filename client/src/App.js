import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import './App.css';
import Login from './components/pages/Login';
import UserRegister from './components/pages/UserRegister';
import Auth from './components/layout/Auth';
import { CssBaseline } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import Home from "./components/pages/Home";
import WebApp from "./components/layout/WebApp";



function App() {

  const theme = createTheme({
    palette: {
      primary: blueGrey
    },
  });

  return (

    <ThemeProvider theme={theme} >
      <CssBaseline />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<UserRegister />} />
          </Route>

          <Route path="/" element={<WebApp />}>
            <Route index element={<Home />} />
            <Route path="book" element={<Home />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;

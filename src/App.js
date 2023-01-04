
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";

import { lightTheme, darkTheme } from "./theme/theme";
import './App.scss';
import Login from "./pages/Login";
import { CssBaseline } from "@mui/material";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  );
}

export default App;

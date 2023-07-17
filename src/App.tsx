import { BrowserRouter } from "react-router-dom";

import "./App.css";
import SnackbarProvider from "./context/SnackbarProvider";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SnackbarProvider>
          <ThemeProvider></ThemeProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

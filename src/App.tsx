import { BrowserRouter } from "react-router-dom";

import "./App.css";
import SnackbarProvider from "./context/SnackbarProvider";
import ThemeProvider from "./context/ThemeProvider";
import UserProvider from "./users/providers/UserProvider";
import Layout from "./layout/Layout";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SnackbarProvider>
          <ThemeProvider>
            <UserProvider>
              <Layout>
                <Router />
              </Layout>
            </UserProvider>
          </ThemeProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

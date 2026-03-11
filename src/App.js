import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Underdev from "./pages/Underdev";
import { CursorFollowerProvider } from "./components/CursorFollowerProvider";

function App() {
  return (
    <div className="App">
      <CursorFollowerProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/underdev" element={<Underdev />} />
          </Routes>
        </BrowserRouter>
      </CursorFollowerProvider>
    </div>
  );
}

export default App;

import NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

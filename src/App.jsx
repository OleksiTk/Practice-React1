import { BrowserRouter, Routes, Route, Navigate } from "react-router"; // Використовуємо Navigate замість Redirect
import About from "./pages/about";
import PostsPages from "./pages/PostsPages";
import Navbar from "./components/UI/navbar/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<PostsPages />} />
        {/* Заміна Redirect на Navigate для перенаправлення */}
        <Route path="*" element={<Navigate to="/about" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

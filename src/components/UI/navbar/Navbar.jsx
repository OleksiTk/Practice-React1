import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/about">О сайте</Link>
        <Link to="/post">Пости</Link>
      </div>
    </div>
  );
}

export default Navbar;

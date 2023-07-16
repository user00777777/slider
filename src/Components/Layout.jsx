import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header><Link to='slider'>Slider</Link></header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

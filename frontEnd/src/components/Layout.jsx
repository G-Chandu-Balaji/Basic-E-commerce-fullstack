import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex flex-col  justify-between min-h-screen ">
      <Navbar />
      <main className="flex-1 ">
        <Outlet />
      </main>
      <footer className="bg-gray-950 text-gray-400 text-center py-4 text-sm">
        © {new Date().getFullYear()} Vibe Commerce. All rights reserved.
        <p>G Chandu Balaji </p>
      </footer>
    </div>
  );
}

export default Layout;

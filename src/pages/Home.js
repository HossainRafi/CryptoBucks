import React from "react";
import { Outlet } from "react-router";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <main className="w-full h-full flex flex-col first-letter:content-center items-center relative text-white font-nunito">
      <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
      <Logo />
      {/* Outlet component for rendering child components */}
      <Outlet />
    </main>
  );
};

export default Home;

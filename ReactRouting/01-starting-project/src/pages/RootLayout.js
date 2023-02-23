import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";


function RootLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default RootLayout;

import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";
import style from "./RootLayout.module.css";

function RootLayout() {
  return (
    <>
      <Navigation />
      <mian className={style.content}>
        <Outlet></Outlet>
      </mian>
    </>
  );
}

export default RootLayout;

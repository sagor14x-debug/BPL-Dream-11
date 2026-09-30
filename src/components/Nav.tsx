// import React from 'react';
import { FaSackDollar } from "react-icons/fa6";
import Logo from "../assets/logo.png";
// import { useState } from "react";

const Nav = ({coin}:{ coin: number}) => {


  return (
    <nav className=" bg-red-100">
      <div className="container mx-auto flex justify-between items-center ">
        <img src={Logo} alt="" />

        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
         
         <h2 className="font-bold text-3xl text-black-500 flex gap-1 items-center"><FaSackDollar />{coin}</h2>
      </div>
    </nav>
  );
};

export default Nav;

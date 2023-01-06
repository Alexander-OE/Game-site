import header from "../images/header.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <nav>
      <div className="flex md:justify-around items-center pt-5 w-full absolute">
      <div className="mb-8 mt-4 flex font-semibold text-[20px] text-white">
          <img src={header} alt="mini-house" />
          <h1>UIGaming</h1>
        </div>
        <ul className="hidden md:flex text-[20px] font-semibold">
          <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"home"} className="pl-10">Home</NavLink>
          <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"about"} className="pl-10">About</NavLink>
          <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"games"} className="pl-10">Games</NavLink>
          <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"contact"} className="pl-10">Contact</NavLink>
        </ul>
        <div className="hidden md:flex">
          <button className="bg-[#903CEF] text-[20px] font-semibold px-4 py-3 rounded-lg text-[#FFFFFF] ">
            Get Started
          </button>
        </div>

        <div className="pl-[7.5rem] md:hidden" onClick={()=>{setOpen(!open)}}>
            {!open ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
      </div>

      {/* ########################################## */}
      <div className={!open ? "hidden" : "absolute bg-[#A02279]  w-full px-4"}>
        <ul className="md:hidden">
        <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"home"} className="pl-10">Home</NavLink>
          <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"about"} className="pl-10">About</NavLink>
          <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"games"} className="pl-10">Games</NavLink>
          <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"contact"} className="pl-10">Contact</NavLink>
        </ul>
        <div className="mt-5 pl-5 pb-4 text-2xl font-medium ">
          <button className="bg-[#A02279] px-4 py-3 rounded-lg border-4 text-[#FFFFFF] md:hidden">
            Connect wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
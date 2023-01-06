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
          <img src={header} alt="mini-house" className="pl-2" />
          <h1>UIGaming</h1>
        </div>
        <ul className="hidden md:flex text-[20px] font-semibold ">
          <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"home"} className=" link ">Home</NavLink>
          <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"about"} className="link">About</NavLink>
          <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"games"} className="link">Games</NavLink>
          <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"contact"} className="link">Contact</NavLink>
        </ul>
        <div className="hidden md:flex">
          <button className="btn ">
            Get Started
          </button>
        </div>

        <div className="pl-44 text-[white] mb-2 md:hidden" onClick={()=>{setOpen(!open)}}>
            {!open ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
      </div>

      {/* ########################################## */}
      <div className={!open ? "hidden" : "absolute bg-[#1f0a36] mt-20 pb-10  w-full md:hidden "}>
        <ul className=" flex flex-col ">
        <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"home"} className="pl-8 pb-2 mt-4 font-semibold  text-[20px] hover:underline">Home</NavLink>
          <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"about"} className="pl-8 pb-2 mt-4 font-semibold   text-[20px] hover:underline">About</NavLink>
          <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"games"} className="pl-8 pb-2 mt-4 font-semibold   text-[20px] hover:underline">Games</NavLink>
          <NavLink style={({isActive})=> {return {color: isActive ? "red" : "white"}}} to={"contact"} className="pl-8 pb-2 mt-4 font-semibold   text-[20px] hover:underline">Contact</NavLink>
        </ul>
        <div className="mt-5 pl-5 pb-4 text-2xl font-medium ">
          <button className="btn">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
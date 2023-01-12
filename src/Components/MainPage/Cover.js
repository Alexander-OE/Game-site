import cover from "../images/main.png";
import man from "../images/man.png";
import {AiOutlineArrowRight} from "react-icons/ai"

// import { AiOutlineArrowRight } from "react-icons/ai";
const Cover = () => {
  return (
    <>
      <img src={cover} alt="img" className=" h-[101.6rem] md:h-[70rem]  md:w-full " />
      <div className="">
        <div>
          <div className="absolute top-[8rem] text-[white] md:top-[16rem]">
            <h1 className="text-[22px] font-semibold leading-8 pl-[3rem] md:text-[60px] md:leading-[4rem] md:w-[38rem] ">
              Join{" "}
              <span className="bg-[#903CEF]  px-[20px] py-[8px]  text-[22px] font-medium rounded-none md:py-[2px] md:text-[60px]">
                UIGaming
              </span>{" "}
              <br />
              the Best Experience Available in Gaming
            </h1>

            <h3 className="text-[18px] font-medium pl-[3rem]  md:text-[25px] ">
              Enjoy the unbelivable experience that <br /> UIGaming as to has to
              offer
            </h3>
          </div>
        </div>
        <div className="absolute top-[16rem] md:top-[6rem] md:left-[27rem]">
          <img src={man} alt="" />
        </div>
      </div>

       {/* ############ #####################################*/}
       
      
        
          <div className="absolute top-[40rem] left-[4rem] md:flex md:left-[0rem] md:top-[36.8rem]">
          <div className=" border-4 border-[#3D4093] rounded w-[16rem] mx-auto mb-[16px] md:mx-0 md:mb-0 md:ml-[90px] ">
            <h4 className="text-[20px] text-[white] font-medium pt-[18px] pb-[20px] pl-[10px]">
              Premium games <br /> laboratroy
            </h4>
            <p className="text-[#8b8585] pl-[10px] pr-[15px] pb-[8px]">
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
              sed <br /> do eiusmod tempor incididunt <br /> ut labore et dolore
              magna <br /> aliqua. Ut enim ad minim veniam, quis.
            </p>
            <div className="flex justify-around  bg-[#3D4093] text-[white] rounded pt-[9px] pb-[10px] pl-[9px]  mx-[13px] mb-[8px]">
              <button className="font-semibold cursor-pointer hover:bg-[white] hover:border-solid hover:text-[#3D4093]">Our Games</button>
              <AiOutlineArrowRight />
            </div>
          </div>
          {/* ######################## */}
          <div className="border-4 border-[#A3258E] rounded w-[16rem] mx-auto mb-5 md:mx-0 md:ml-[30px] md:mb-0 ">
            <h4 className="text-[20px] text-[white] font-medium pt-[18px] pb-[20px] pl-[10px]">
              What we do and <br /> how to use
            </h4>
            <p className="text-[#8b8585] pl-[10px] pr-[15px] pb-[8px]">
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
              sed <br /> do eiusmod tempor incididunt <br /> ut labore et dolore
              magna <br /> aliqua. Ut enim ad minim <br /> veniam, quis.
            </p>
            <div className="flex justify-around  bg-[#A3258E] text-[white] rounded pt-[9px] pb-[10px] pl-[9px]  mx-[13px] mb-[8px]">
              <button className="font-semibold cursor-pointer hover:bg-[white] hover:border-solid hover:text-[#A3258E]">About Us</button>
              <AiOutlineArrowRight />
            </div>
          </div>
        
          </div>
     {/* ############################### */}
     
     <div className="absolute  top-[83rem] bg-[#192B4266]  pt-6 pb-6  md:pl-[42rem] md:rounded-lg md:mx-[2rem] md:top-[42.8rem]  ">
              <div className="pb-3 ">
                <h1 className="text-[#FFFFFFA8] text-[24px] font-semibold  pl-8 md:w-[34rem]">
                  How we Provied the latest games for your Convenience
                </h1>
              </div>
              <div>
                <p className="text-[#FFFFFF3B]  px-4">
                  Lorem ipsum dolor sit amet,  consectetur adipiscing
                  elit, sed do  eiusmod tempor incididunt ut labore et{" "}
                   dolore magna aliqua. Ut enim ad minim  veniam,
                  quis nostrud exercitation  ullamco laboris nisi ut
                  aliquip ex ea  commodo consequat. Duis aute irure {" "}
                  dolor in reprehenderit in voluptate  velit esse cillum
                </p>
              </div>
            </div>
          
    </>
  );
};

export default Cover;

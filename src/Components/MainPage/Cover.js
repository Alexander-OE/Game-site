import cover from "../images/main.png";
import man from "../images/man.png";

import { AiOutlineArrowRight } from "react-icons/ai";
const Cover = () => {
  return (
    <>
      <img src={cover} alt="img" className=" h-[100rem] md:h-[58rem] " />

      <div className="grid grid-cols-1  md:grid-cols-2  ">
        <div className="relative bottom-[90rem] mx-auto text-[white] md:bottom-[45rem] md:pl-[90px]">
          <div className="w-[17rem]  mb-[20px] md:mx-0 md:w-[38rem]">
            <h1 className="text-[22px] font-semibold leading-8 md:text-[60px] md:leading-[4rem] ">
              Join{" "}
              <span className="bg-[#903CEF]  px-[20px] py-[8px]  text-[22px] font-medium rounded-none md:py-[2px] md:text-[60px]">
                UIGaming
              </span>{" "}
              <br />
              the Best Experience Available in Gaming
            </h1>
          </div>
          <div className="mx-auto">
            <h3 className="text-[18px] font-normal md:text-[25px]">
              Enjoy the unbelivable experience that <br /> UIGaming as to has to
              offer
            </h3>
          </div>
        </div>
        {/* ############ */}
        <div>
          <div className="relative bottom-[89rem] right-5 pr-7 w-[94%] md:w-[103%] md:bottom-[49rem] ">
            <img src={man} alt="man" className="relative  md:right-[8rem] " />
          </div>
        </div>
      </div>

      <div>
        <div className="  relative bottom-[89rem] md:flex md:mt-[10rem] md:bottom-[72rem]">
          <div className="border-4 border-[#3D4093] rounded w-[16rem] mx-auto mb-[16px] md:mx-0 md:mb-0 md:ml-[90px] cursor-pointer">
            <h4 className="text-[20px] text-[white] font-medium pt-[18px] pb-[20px] pl-[10px]">
              Premium games <br /> laboratroy
            </h4>
            <p className="text-[#8b8585] pl-[10px] pr-[15px] pb-[8px]">
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
              sed <br /> do eiusmod tempor incididunt <br /> ut labore et dolore
              magna <br /> aliqua. Ut enim ad minim veniam, quis.
            </p>
            <div className="flex justify-around  bg-[#3D4093] text-[white] rounded pt-[9px] pb-[10px] pl-[9px]  mx-[13px] mb-[8px]">
              <button className="font-semibold">Our Games</button>
              <AiOutlineArrowRight />
            </div>
          </div>
          {/* ######################## */}
          <div className="border-4 border-[#A3258E] rounded w-[16rem] mx-auto md:mx-0 md:ml-[30px] cursor-pointer">
            <h4 className="text-[20px] text-[white] font-medium pt-[18px] pb-[20px] pl-[10px]">
              What we do and <br /> how to use
            </h4>
            <p className="text-[#8b8585] pl-[10px] pr-[15px] pb-[8px]">
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
              sed <br /> do eiusmod tempor incididunt <br /> ut labore et dolore
              magna <br /> aliqua. Ut enim ad minim <br /> veniam, quis.
            </p>
            <div className="flex justify-around  bg-[#A3258E] text-[white] rounded pt-[9px] pb-[10px] pl-[9px]  mx-[13px] mb-[8px]">
              <button className="font-semibold">About Us</button>
              <AiOutlineArrowRight />
            </div>
          </div>
          {/* ######################## */}
          <div>
            <div className="bg-[#192B4266]">
<div>
  <h1>How we Provied the latest games for your Convenience</h1>
</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cover;

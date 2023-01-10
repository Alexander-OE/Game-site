import cover from "../images/main.png";
import man from "../images/man.png";

// import { AiOutlineArrowRight } from "react-icons/ai";
const Cover = () => {
  return (
    <>
              <img src={cover} alt="img" className=" h-[40rem]  md:w-full " />
      <div className="flex flex-col md:flex-row">
        <div>

          <div className="absolute top-[8rem]">
            <h1 className="text-[22px] font-semibold leading-8 md:text-[60px] md:leading-[4rem] ">
              Join{" "}
              <span className="bg-[#903CEF]  px-[20px] py-[8px]  text-[22px] font-medium rounded-none md:py-[2px] md:text-[60px]">
                UIGaming
              </span>{" "}
              <br />
              the Best Experience Available in Gaming
            </h1>

            <h3 className="text-[18px] font-normal md:text-[25px] ">
              Enjoy the unbelivable experience that <br /> UIGaming as to has to
              offer
            </h3>
          </div>
        </div>
        <div className="absolute top-[16rem] ">
          <img src={man} alt="" />
        </div>
      </div>
    </>
  );
};

export default Cover;

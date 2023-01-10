// import pad from "../images/gamepad.png";
// import play from "../images/Play.png";
// import record from "../images/Record.png";
// import share from "../images/Share.png";
// import rightcurve from "../images/bg-curve-right.png";
// import leftcurve from "../images/bg-curve-left.png";
import stream from "../images/streaming.png";
import youtube from "../images/youtube.png";
import Content from "./Content";
const Body = () => {
  return (
    <>
      <div className="bg-[#0B192E] pb-[12rem]  md:pt-36 md:pb-[25rem]">
        <div className="flex flex-col items-center">
          <div className="pb-[5rem] pl-8 pt-10 md:pl-0 md:pt-0">
            <img src={stream} alt="" className="w-[80%] md:w-full" />
          </div>
          <div className="pl-8  md:pt-14 md:mt-[10rem] ">
            <img src={youtube} alt="" className="w-[80%] md:w-full" />
          </div>
        </div>
        <div className=" pt-[6rem] pl-[2rem] md:pl-[45rem]  md:pt-[10rem] ">
          <h1 className=" w-[20rem]  text-[25px] md:text-[90px] font-semibold text-[white] md:w-[35rem] md:leading-[5.4rem] ">EXPERIENCE THE JOYOUS FEELING OF VIRTUAL REALITY</h1>
        </div>
      </div>
      <Content/>
    </>
  );
};

export default Body;

import gamer from "../images/gamer.png";
const Content = () => {
  return (
    <>
      <img src={gamer} alt="" className="w-full  h-[28rem] md:h-full" />
      <div className="absolute top-[162rem] md:top-[250rem] ">
        <h1 className=" uppercase   text-[white] text-center  text-[30px] md:text-[90px] md:w-[80rem] ">
          Join our community and experience the best gaming has to offer
        </h1>

        {/* <button className=" md:top-[45rem] btn ml-[35rem] md:text-[40px]">
          Get Started
        </button> */}
        <button className="btn ml-[8.5rem] mt-[3rem] md:text-[40px] md:ml-[35rem]">Get Started</button>
      </div>
    </>
  );
};

export default Content;

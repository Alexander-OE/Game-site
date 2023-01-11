import header from "../images/header.png";
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import linkedin from "../images/linkedin.png"
import instagram from "../images/instagram.png"
const Footer = () => {
  return (
    <div className="bg-[black] pt-[62px]  pb-[90px] pl-[35px] md:pl-[90px] text-[#F7F7F7] flex  grid grid-cols-2 gap-10  md:grid-cols-4  md:flex-wrap  ">
    <div>
      <div className="mb-8 mt-4 flex font-semibold text-[20px] text-white ">
        <img src={header} alt="" />
      <h1>  UIGaming</h1>
      </div>
      <div className="flex mb-[45px] md:mb-[55px]">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      </div>
      <div>
        <span>@UIGaming</span>
      </div>
    </div>

    {/* ############# */}

    <div>
      <ul className="md:w-[5rem] mt-5">
        <li className="font-bold text-[18px] pb-[23px] cursor-pointer">About us</li>
        <li className="pb-[16px] cursor-pointer">Zeux</li>
        <li className="pb-[16px] cursor-pointer">Portfolio</li>
        <li className="pb-[16px] cursor-pointer">Careers</li>
        <li >Contact us</li>
      </ul>
    </div>
    <div>
      <ul className="md:w-[5rem] cursor-pointer">
        <li className="font-bold text-[18px] pb-[23px]">Places</li>
        <li className="pb-[16px]">Castle</li>
        <li className="pb-[16px]">Farms </li>
        <li className="pb-[16px]">Beach</li>
        <li className="pb-[16px]">Learn more</li>
      </ul>{" "}
    </div>
    <div>
      <ul className="md:w-[5rem]">
        <li className="font-bold text-[18px] pb-[23px]">About us</li>
        <li className="pb-[16px]">Road map</li>
        <li className="pb-[16px]">Creators </li>
        <li className="pb-[16px]">Career</li>
        <li>Contact us</li>
      </ul>
    </div>

    <div>
        <ul className="flex">
            <li><img src={facebook} alt="" /></li>
            <li><img src={instagram} alt="" /></li>

            <li><img src={twitter} alt="" /></li>

            <li><img src={linkedin} alt="" /></li>

        </ul>
    </div>
  </div>
  );
};

export default Footer;

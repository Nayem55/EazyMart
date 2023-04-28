import banner from "../public/Images/banner.jpg";
import banner2 from "../public/Images/banner 2.jpg";
import banner3 from "../public/Images/banner3.jpg";
import banner4 from "../public/Images/b7.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[84vh]">
        <div id="item1" className="carousel-item w-full">
          <Image src={banner} className="w-full h-[80vh]"></Image>
        </div>
        <div id="item2" className="carousel-item w-full">
          <Image src={banner3}></Image>
        </div>
        <div id="item3" className="carousel-item w-full">
          <Image src={banner2}></Image>
        </div>
        <div id="item4" className="carousel-item w-full">
          <Image src={banner4}></Image>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;

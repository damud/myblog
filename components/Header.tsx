import Image from "next/image";
import Link from "next/link";
import logoDark from "../public/images/logoDark.png";
import picOfMe from "../public/images/picOfMe.jpg";

const HeaderSection = () => {
  return (
    <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image width={80} height={80} src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div>
          <ul className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold">
            <li className="header-link">Home</li>
            <li className="header-link">Posts</li>
            <li className="header-link">Pages</li>
            <li className="header-link">Features</li>
            <li className="header-link">Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <Image
              className="w-8 h-8 rounded-full"
              src={picOfMe}
              alt="Picture of me"
            />
            <p className="text-sm font-medium">Hello Stranger!</p>
          </div>

          <button className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;

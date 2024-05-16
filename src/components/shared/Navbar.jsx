import { FaGithub, FaTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5">
      <h1 className="font-bold tracking-widest text-2xl underline">BGCOLOR</h1>
      <div className="flex items-center justify-center gap-5">
        <FaTwitter className="text-3xl" />
        <FaGithub className="text-3xl" />
        {/* <button className="px-4 py-2 border-2 rounded-lg font-bold">
          Get Started
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;

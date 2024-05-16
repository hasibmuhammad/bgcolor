import { FaGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-7xl font-semibold leading-tight">
        Collection of modern, <br />
        background colors.
      </h1>
      <p className="text-xl">
        Ready-to-use, simply copy and paste into your next project. <br /> All
        snippets crafted with Tailwind CSS and for easy integration.
      </p>
      <div className="flex gap-3 justify-center">
        <button className="px-4 py-2 border-2 rounded-lg font-bold flex items-center gap-2 bg-white text-black">
          <FaGithub className="text-lg" />
          Github
        </button>
        <button className="px-4 py-2 border-2 rounded-lg font-bold">
          Reset Clipboard
        </button>
      </div>
    </div>
  );
};

export default Hero;

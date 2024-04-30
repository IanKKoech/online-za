import { useState } from "react";
import darkModeIcon from "../../public/assets/FIN Welcome Page Assets/dark-mode 1.png";
import logo from "../../public/assets/FIN Welcome Page Assets/Fin Logo (1).png";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="p-3 flex justify-between items-center bg-white text-[#000000c4] font-medium">
      <img src={logo.src} alt="Fin Logo" className="w-24 h-auto ml-8" />

      <nav className="flex items-center space-x-8">
        <a href="#" className="text-sm font-small">
          Our Products
        </a>
        <a href="#" className="text-sm font-small">
          Join Fin Pay
        </a>
        <a href="#" className="text-sm font-small">
          Fin Pay Portal
        </a>
        <a href="#" className="text-sm font-small">
          Contact Us
        </a>
        <button
          className="bg-[white] text-[#4bc74b] text-sm hover:bg-green-300 hover:text-white"
          style={{
            borderRadius: "9.5rem",
            height: "2.5rem",
            width: "8rem",
            border: "2px solid #4bc74b",
          }}
        >
          Register
        </button>

        <button
          className="bg-green-300 text-[#000000c4] text-sm hover:bg-[#3aa53a] hover:text-white"
          style={{
            borderRadius: "4.5rem",
            height: "2.5rem",
            width: "8rem",
          }}
        >
          Sign In
        </button>

        <button
          className="mr-4 text-sm"
          style={{ width: "38px", height: "30px" }}
          onClick={toggleDarkMode}
        >
          <img
            src={darkModeIcon.src}
            alt="Dark/Light Mode"
            className="w-2/3 h-2/3"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;

import { useState } from "react";
import darkModeIcon from "../../public/assets/FIN Welcome Page Assets/dark-mode 1.png";
import { Button } from "fin-ui";
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
        <Button
          className="bg-[white] text-[#4bc74b] border-[green] text-sm"
          style={{
            borderRadius: "4.5rem",
            height: "2.5rem",
            width: "8rem", 
          }}
        >
          Register
        </Button>

        <Button
          className="bg-[#4bc74b] text-[#000000c4] text-sm"
          style={{
            borderRadius: "4.5rem",
            height: "2.5rem",
            width: "8rem",
          }}
        >
          Sign In
        </Button>
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

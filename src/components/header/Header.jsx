import logo from "../../assets/images/logo.png";
import { useTheme } from "../../context/ThemeContext";
import SearchBar from "./SearchBar";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = ({ setCategory }) => {
  const { theme, toggleTheme } = useTheme();

  console.log(theme);

  return (
    <div className="header-container ">
      <div className="p-2 flex items-center justify-between w-[95%]  md:w-[80%] m-auto ">
        <div className="logo-container flex gap-1.5 items-center">
          <img src={logo} alt="logo-img" className="w-7 h-7 md:w-10 md:h-10" />
          <h3 className=" font-poppins font-semibold text-sm md:font-bold md:text-lg">
            TrendToday
          </h3>
        </div>
        <div className="searchBox-theme-container flex items-center gap-3 md:gap-8">
          <SearchBar setCategory={setCategory} />
          <button className=" w-7 h-7 p-1 rounded-full" onClick={toggleTheme}>
            {theme === "light" ? (
              <MdOutlineDarkMode className="w-full h-full rounded-full cursor-pointer" />
            ) : (
              <MdOutlineLightMode className="w-full h-full rounded-full cursor-pointer" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

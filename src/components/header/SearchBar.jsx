import { useState } from "react";
import { GrSearch } from "react-icons/gr";

const SearchBar = ({ setCategory }) => {
  const [showInputBox, setShowInputBox] = useState(false);
  const [input, setInput] = useState("");

  function toggleInput() {
    setShowInputBox((prev) => !prev);
  }

  console.log(input);

  function handleSearch(e) {
    if (e.key == "Enter") {
      setCategory(input);
    }
  }

  return (
    <div
      className={`flex items-center md:border border-gray-100   rounded-2xl p-1 md:px-2 transition-all duration-300 ease-in-out  ${
        showInputBox
          ? "w-52 outline-1 outline-gray-200 dark:outline-gray-700"
          : "w-fit p-1"
      }
        sm:w-64
        md:w-80 
        lg:w-96
      `}
    >
      <GrSearch
        className="w-[1.1rem] h-[1.1rem] rounded-full cursor-pointer md:cursor-default "
        onClick={toggleInput}
      />
      <input
        type="text"
        placeholder="Search news, topics here"
        className={`border-none outline-none p-1 rounded-full text-xs placeholder:text-gray-400 dark:placeholder:text-gray-500 font-poppins font-medium md:text-[13px] transition-all duration-300 ${
          showInputBox ? "block w-full" : "hidden"
        }
        sm:inline sm:w-full 
        md:block
        `}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default SearchBar;

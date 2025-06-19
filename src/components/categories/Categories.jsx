import React from "react";
import { categories } from "../../constants/categories";

const Categories = ({ setCategory, selectedCategory }) => {
  return (
    <div className=" flex items-center bg-white dark:bg-gray-900 p-1 dark:shadow-gray-600">
      <div className="flex gap-4 md:gap-14 justify-center items-center py-2 m-auto">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`relative group text-xs font-roboto md:text-sm py-0.5 md:px-2 cursor-pointer transition-all duration-300 ${
              selectedCategory === categories.slug
                ? "text-amber-500"
                : "text-gray-600 dark:text-gray-300"
            }`}
            onClick={() => setCategory(category.slug)}
          >
            {category.name}

            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-amber-500 transition-all duration-300  ${
                selectedCategory === category.slug
                  ? "w-full"
                  : "w-0 group-hover:w-full group-hover:left-0"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
// i want to make a hover effect in tailwindcss when i hover on a button then i want

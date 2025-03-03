import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Dropdown({ options, selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownsection = useState(0);

  return (
    <div className="relative w-[150px]">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-white bg-[#1e1e1e] border border-zinc-700 rounded-md shadow-md hover:bg-purple-700 transition-all duration-300"
      >
        {selected} <FaChevronDown className="ml-2" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-[#1e1e1e] border border-zinc-700 rounded-md shadow-md">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="px-4 py-2 text-white hover:bg-purple-700 cursor-pointer transition-all duration-300"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;

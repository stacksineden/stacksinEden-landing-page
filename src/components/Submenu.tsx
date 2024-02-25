import React from "react";
import { Link } from "react-router-dom";

interface SubmenuProps {
  onClose: () => void;
}

export const OurSolutionsSubmenu: React.FC<SubmenuProps> = ({ onClose }) => {
  return (
    <div className="absolute left-0 mt-2 w-40 bg-white border border-[#e5e5e5] p-4 shadow-lg z-50">
      <Link
        to="#"
        onClick={onClose}
        className="block text-[#071E22] cursor-pointer text-[13px] font-medium mb-2 hover:text-[#1D7874]"
      >
        Solution 1
      </Link>
      <Link
        to="#"
        onClick={onClose}
        className="block text-[#071E22] cursor-pointer text-[13px] font-medium mb-2 hover:text-[#1D7874]"
      >
        Solution 2
      </Link>
      {/* Add more solution links here */}
    </div>
  );
};

export const ProductsSubmenu: React.FC<SubmenuProps> = ({ onClose }) => {
  return (
    <div className="absolute left-0 mt-2 w-40 bg-white border border-[#e5e5e5] p-4 shadow-lg">
      <Link
        to="#"
        onClick={onClose}
        className="block text-[#071E22] cursor-pointer text-[13px] font-medium mb-2 hover:text-[#1D7874]"
      >
        Product 1
      </Link>
      <Link
        to="#"
        onClick={onClose}
        className="block text-[#071E22] cursor-pointer text-[13px] font-medium mb-2 hover:text-[#1D7874]"
      >
        Product 2
      </Link>
      {/* Add more product links here */}
    </div>
  );
};

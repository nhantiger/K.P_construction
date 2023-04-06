import React, { useState } from "react";
import {
  IoCartSharp,
  IoPerson,
  IoSearchSharp,
  IoMenuSharp,
} from "react-icons/io5";
import SearchModal from "./SearchModal";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="bg-about bg-cover">
      <nav className="flex items-center justify-between p-4 border border-black bg-black bg-opacity-80">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <button className="border border-solid border-orange-600 bg-black bg-opacity-80 p-4 text-white mr-2 md:mr-20 md:ml-11">
            K.P Construction
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-orange-500">
            <IoMenuSharp className="w-8 h-8" />
          </button>
        </div>
        <div
          className={`hidden md:flex items-center text-white ml-6 md:border-l-0 ${
            showMobileMenu ? "flex" : "hidden"
          }`}
        >
          <div className="border border-solid border-orange-600 border-r md:border-r-0 bg-black bg-opacity-80 p-4 text-white hover:bg-gray-300 hover:text-black active:bg-orange-600 active:bg-opacity-80 transition duration-150">
            <button>Giới thiệu</button>
          </div>
          <div className="border border-solid border-orange-600 border-r-0 md:border-l-0 bg-black bg-opacity-80 p-4 text-white hover:bg-gray-300 hover:text-black active:bg-orange-600 active:bg-opacity-80 transition duration-150">
            <button>Sản phẩm</button>
          </div>
          <div className="border border-solid border-orange-600 border-r-0 md:border-l-0 bg-black bg-opacity-80 p-4 text-white hover:bg-gray-300 hover:text-black active:bg-orange-600 active:bg-opacity-80 transition duration-150">
            <button>Chất lượng K.P</button>
          </div>
          <div className="border border-solid border-orange-600 bg-opacity-80 border-l-3 p-4 text-black hover:bg-gray-300 hover:text-black bg-orange-500 active:bg-orange-600 active:bg-opacity-80 transition duration-150">
            <button>Xem Ngay !</button>
          </div>
          <div className="flex items-center ml-auto">
            <a href="#" className="text-orange-500 m-4">
              <button onClick={handleOpenModal}>
                <IoSearchSharp className="w-8 h-8"></IoSearchSharp>
              </button>
            </a>
            <a href="#" className="text-orange-500 m-4">
              <IoPerson id="search-btn" className="w-8 h-8"></IoPerson>
            </a>
            <a href="#" className="text-orange-500 m-4">
              <IoCartSharp className="w-8 h-8"></IoCartSharp>
            </a>
          </div>
        </div>
      </nav>
      <div className={`md:hidden ${showMobileMenu ? "block" : "hidden"}`}>
        <div className="flex flex-col justify-center  bg-black bg-opacity-80">
          <div className="flex flex-row items-center justify-between border-b border-solid border-gray-400 p-4">
            <div className="flex ">
              <a href="#" className="text-orange-500 m-4">
                <button onClick={handleOpenModal}>
                  <IoSearchSharp className="w-8 h-8"></IoSearchSharp>
                </button>
              </a>
              <a href="#" className="text-orange-500 m-4">
                <IoPerson id="search-btn" className="w-8 h-8"></IoPerson>
              </a>
              <a href="#" className="text-orange-500 m-4">
                <IoCartSharp className="w-8 h-8"></IoCartSharp>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <div className="border border-solid border-orange-600 bg-black bg-opacity-80 p-4 text-white hover:bg-gray-300 hover:text-black active:bg-orange-600 active:bg-opacity-80 transition duration-150">
              <button>Giới thiệu</button>
            </div>
            <div className="border border-solid border-orange-600 bg-black bg-opacity-80 p-4 text-white hover:bg-gray-300 hover:text-black active:bg-orange-600 active:bg-opacity-80 transition duration-150">
              <button>Sản phẩm</button>
            </div>
            <div className="border border-solid border-orange-600 bg-black bg-opacity-80 p-4 text-white hover:bg-gray-300 hover:text-black active:bg-orange-600 active:bg-opacity-80 transition duration-150">
              <button>Chất lượng K.P</button>
            </div>
            <div className="border border-solid border-orange-600 bg-opacity-80 border-l-3 p-4 text-black hover:bg-gray-300 hover:text-black bg-orange-500 active:bg-orange-600 active:bg-opacity-80 transition duration-150">
              <button>Xem Ngay !</button>
            </div>
          </div>
        </div>
      </div>

      <SearchModal isOpen={isOpen} onRequestClose={handleCloseModal} />
    </div>
  );
}

export default Navbar;
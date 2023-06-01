import React, { useState } from "react";

const TabBar = () => {
  const [active, setActive] = useState("one");
  const [translation, setTranslation] = useState("translationOne");
  const [position, setPosition] = useState("");
  const toggleButton = (value) => {
    switch (value) {
      case "two":
        setActive("two");
        setTranslation("translationTwo");
        setPosition("translateX(4.5rem)");
        break;
      case "three":
        setActive("three");
        setTranslation("translationThree");
        setPosition("translateX(9rem)");
        break;
      case "four":
        setActive("four");
        setTranslation("translationFour");
        setPosition("translateX(13.5rem)");
        break;
      case "five":
        setActive("five");
        setTranslation("translationFive");
        setPosition("translateX(18rem)");
        break;
      default:
        setActive("one");
        setTranslation("translationOne");
        setPosition("translateX(0)");
    }
  };

  return (
    <div
      className={`h-screen w-full flex m-0 overflow-hidden items-center justify-center ${
        active === "one"
          ? "bg-purple-300"
          : active === "two"
          ? "bg-green-300"
          : active === "three"
          ? "bg-red-300"
          : active === "four"
          ? "bg-yellow-300"
          : "bg-blue-300"
      }`}
    >
      <div>
        <svg
          viewBox="0 0 202.9 45.5"
          className="relative w-28 ml-3 duration-1000"
          style={{ transform: position, top: "0.5px" }}
        >
          <path
            d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
            c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
            c9.2,3.6,17.6,4.2,23.3,4H6.7z"
            fill="#1F2937"
          />
        </svg>
        <menu className="menu flex gap-6 w-max px-11 py-2 my-0 relative items-center justify-center bg-gray-800">
          <button
            className={`menu__item active ${
              active === "one" &&
              "bg-purple-300 border border-white transform scale-125 duration-1000 -translate-y-3"
            } rounded-full w-12 h-12`}
            onClick={() => toggleButton()}
          >
            {/* Insert SVG */}
          </button>
          <button
            className={`menu__item active ${
              active === "two" &&
              "bg-green-300 border border-white transform scale-125 duration-1000 -translate-y-3"
            } rounded-full w-12 h-12`}
            onClick={() => toggleButton("two")}
          >
            {/* Insert SVG */}
          </button>
          <button
            className={`menu__item active ${
              active === "three" &&
              "bg-red-300 border border-white transform scale-125 duration-1000 -translate-y-3"
            } rounded-full w-12 h-12`}
            onClick={() => toggleButton("three")}
          >
            {/* Insert SVG */}
          </button>
          <button
            className={`menu__item active ${
              active === "four" &&
              "bg-yellow-300 border border-white transform scale-125 duration-1000 -translate-y-3"
            } rounded-full w-12 h-12`}
            onClick={() => toggleButton("four")}
          >
            {/* Insert SVG */}
          </button>
          <button
            className={`menu__item active ${
              active === "five" &&
              "bg-blue-300 border border-white transform scale-125 duration-1000 -translate-y-3"
            } rounded-full w-12 h-12`}
            onClick={() => toggleButton("five")}
          >
            {/* Insert SVG */}
          </button>
        </menu>
      </div>
    </div>
  );
};

export default TabBar;

import React from "react";

// Function to generate a random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function Tags({ tag }) {
  return (
    <>
      <ul className="list-none">
        <li>
          <span
            className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]`}
            style={{ backgroundColor: getRandomColor() }}
          >
            {tag}
          </span>
        </li>
      </ul>
    </>
  );
}

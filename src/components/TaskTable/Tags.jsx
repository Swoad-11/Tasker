import { useRef } from "react";

const tailwindColors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-red-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-indigo-500",
  "bg-cyan-500",
  "bg-lime-500",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-purple-500",
  "bg-fuchsia-500",
  "bg-rose-500",
  "bg-pink-500",
];

export default function Tags({ tag }) {
  const randomColorRef = useRef(
    tailwindColors[Math.floor(Math.random() * tailwindColors.length)]
  );
  const randomColor = randomColorRef.current;

  return (
    <>
      <ul className="list-none">
        <li>
          <span
            className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6] ${randomColor}`}
          >
            {tag}
          </span>
        </li>
      </ul>
    </>
  );
}

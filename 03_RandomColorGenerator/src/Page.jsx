import { useState } from "react";

const Page = () => {
  const hex_chars = "0123456789abcdefABCDEF";
  const [type, setType] = useState("hex");
  const [randomColor, setRandomColor] = useState(null);

  const generateRandomColor = () => {
    if (type === "hex") {
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += hex_chars.charAt(Math.floor(Math.random() * hex_chars.length));
      }
      setRandomColor(color);
    } else {
      const generateRandomNum = () => {
        return Math.floor(Math.random() * 256);
      };
      let r = generateRandomNum();
      let g = generateRandomNum();
      let b = generateRandomNum();

      const color = `rgb(${r}, ${g}, ${b})`;
      setRandomColor(color);
    }
  };

  return (
    <div
      className="pt-5 text-white w-full h-full flex flex-wrap shrink items-start justify-center gap-10"
      style={{ backgroundColor: randomColor }}
    >
      <button
        className="bg-gray-900 px-7 py-3 rounded-lg"
        onClick={() => setType("rgb")}
      >
        Create RGB Color
      </button>
      <button
        className="bg-gray-900 px-7 py-3 rounded-lg"
        onClick={() => setType("hex")}
      >
        Create HEX Color
      </button>
      <button
        className="bg-gray-900 px-7 py-3 rounded-lg"
        onClick={generateRandomColor}
      >
        Generate Random Color
      </button>
    </div>
  );
};

export default Page;

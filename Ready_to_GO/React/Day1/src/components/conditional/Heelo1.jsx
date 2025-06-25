import React, { useState } from "react";

const Heelo1 = () => {
  const [text, setText] = useState("");
  const [bgClass, setBgClass] = useState("bg-amber-300");

  const handleChange = (e) => setText(e.target.value);

  const handleColorChange = (e) => setBgClass(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    // ✅ Apply background color here to change entire block
    <div className={`min-h-screen p-6 text-black ${bgClass}`}>
      {/* ---------------- TEXT INPUT ---------------- */}
      <label htmlFor="userInput" className="block font-semibold mb-2">
        Enter text in the box
      </label>

      <form onSubmit={handleSubmit} className="space-x-2 mb-4">
        <input
          id="userInput"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type here…"
          className="p-2 rounded border"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Click Me
        </button>
      </form>

      <h2 className="text-lg font-medium mb-4">Live preview: {text}</h2>

      {/* ---------------- COLOR PICKER ---------------- */}
      <label htmlFor="bgSelect" className="block font-semibold mb-2">
        Select background color
      </label>
      <select
        id="bgSelect"
        value={bgClass}
        onChange={handleColorChange}
        className="p-2 border rounded"
      >
        <option value="bg-amber-300">Amber</option>
        <option value="bg-blue-300">Blue</option>
        <option value="bg-green-300">Green</option>
        <option value="bg-red-300">Red</option>
        <option value="bg-gray-300">Gray</option>
        <option value="bg-white">White</option>
      </select>
    </div>
  );
};

export default Heelo1;

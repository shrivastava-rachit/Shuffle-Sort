import React, { useState } from "react";
import "./App.css";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let color = [
  "#6F98A8",
  "#2B8EAD",
  "#2F454E",
  "#2B8EAD",
  "#2F454E",
  "#BFBFBF",
  "#BFBFBF",
  "#6F98A8",
  "#2F454E",
];

const App = () => {
  const [data, getData] = useState(arr);

  const shuffleHandle = () => {
    const shuffledArray = arr.sort(() => Math.random() - 0.5);
    const shuffledColors = color.sort(() => Math.random() - 0.5);

    getData([...shuffledArray]);
    console.log(shuffledArray);
  };

  const sortHandle = () => {
    const sortedArray = arr.sort();
    const sortedColors = color.sort();
    console.log(sortedArray);
    getData(sortedArray, sortedColors);
  };

  return (
    <div>
      <header className="header">Shuffle and Sort</header>

      <div className="wrapper">
        <div className="parent-box">
          <body></body>
          {data.map((a, i) => (
            <div style={{ backgroundColor: color[i] }} className="box">
              {a}
            </div>
          ))}
        </div>
        <div className="btn-container">
          <button className="btn" onClick={shuffleHandle}>
            Shuffle
          </button>
          <button className="btn" onClick={sortHandle}>
            Sort
          </button>
        </div>
      </div>
      <footerv className="footer">
        Shuffle and Sort by Rachit Shrivastava
      </footerv>
    </div>
  );
};

export default App;

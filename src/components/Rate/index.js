import React, { useState } from "react";

const Rate = ({ callback, message }) => {
  const [value, setValue] = useState(5);

  return (
    <div style={{ margin: "5px 0px 5px 20px" }}>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      {value}
      <p>
        <span
          style={{
            display: "block",
            color: "green",
            fontWeight: "bold",
            margin: "0 0 5px 0",
          }}
        >
          {message}
        </span>
        <button
          style={{
            border: "1px solid grey",
            background: "black",
            padding: "5px 7px",
            color: "white",
            outline: "none",
            cursor: "pointer",
          }}
          onClick={() => callback(value)}
        >
          Rate
        </button>
      </p>
    </div>
  );
};

export default Rate;

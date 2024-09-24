import React, { useEffect, useState } from "react";

const TLprblm = () => {
  const colors = [
    {
      color: "orange",
      duration: 500,
    },
    {
      color: "yellow",
      duration: 1000,
    },
    {
      color: "brown",
      duration: 6000,
    },
  ];
  const [activeColor, setActiveColor] = useState(0);
  function changeColors() {
    setActiveColor((preValue) => {
      if (preValue == 2) {
        return 0;
      } else {
        return preValue + 1;
      }
    });
  }
  useEffect(() => {
    let i = setInterval(() => {
      changeColors();
    }, colors[activeColor]["duration"]);
    return () => {
      clearInterval(i);
    };
  }, [activeColor]);

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        backgroundColor: "black",
        padding: "50px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          backgroundColor:
            activeColor === 0 ? colors[activeColor]["color"] : null,
        }}
      ></div>
      <div
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          backgroundColor:
            activeColor === 1 ? colors[activeColor]["color"] : null,
        }}
      ></div>
      <div
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          backgroundColor:
            activeColor === 2 ? colors[activeColor]["color"] : null,
        }}
      ></div>
    </div>
  );
};

export default TLprblm;

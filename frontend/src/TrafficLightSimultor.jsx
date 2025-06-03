
import React, { useState, useEffect } from "react";

export default function TrafficLightSimultor() {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(prevColor => {
        if (prevColor === "red") return "yellow";
        if (prevColor === "yellow") return "green";
        return "red";
      });
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <h1>Traffic Light Simulator</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "300px",
            border: "2px solid black",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "black"
          }}
        >
          <div style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: color === "red" ? "red" : "white",
          }}></div>
          <div style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: color === "yellow" ? "yellow" : "white",
          }}></div>
          <div style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: color === "green" ? "green" : "white",
          }}></div>
        </div>
      </div>
    </>
  );
}

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
 
      <><h1 style={{display : "inline-block"}}>Traffic Light Simulator</h1>
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
            backgroundColor: "rgb(76, 75, 81)"
          }}
        >
          <div style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: color === "red" ? "red" : "lightgray",
          }}></div>
          <div style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: color === "yellow" ? "yellow" : "lightgray",
          }}></div>
          <div style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: color === "green" ? "green" : "lightgray",
          }}></div>
        </div>
      </div>
    </> 
  );
}
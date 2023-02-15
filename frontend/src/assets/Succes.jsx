import React from "react";

function Succes() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[350px]"
      viewBox="0 0 50 50"
      xmlSpace="preserve"
    >
      <circle
        style={{
          fill: "#25ae88",
        }}
        cx={25}
        cy={25}
        r={25}
      />
      <path
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
        }}
        d="M38 15 22 33l-10-8"
      />
    </svg>
  );
}

export default Succes;

"use client";
import React from "react";
import GradientCursor from "../_components/GradientCursor";
import { useState } from "react";

export default function Scene1() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <h1
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className="text-[4.5vw] max-w-[90vw] text-center text-black z-50 p-20"
      >
        Porfo Erdison <br /> UI/UX Interaction Designer <br /> Based in Poland
      </h1>
      <GradientCursor isActive={isActive} />
    </div>
  );
}

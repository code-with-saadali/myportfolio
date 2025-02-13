"use client";

import Rive from "rive-react";


const Contact = () => {
  return (
    <div className="px-12 py-10">
      <Rive
        src="/aniamtion.riv"
        stateMachines="State Machine 1"
        className="h-[500px] w-full" 
      />
    </div>
  );
};

export default Contact;

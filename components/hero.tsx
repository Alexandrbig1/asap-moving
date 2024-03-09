import React from "react";

export default function Hero() {
  return (
    <div
      className="h-screen w-full relative"
      style={{
        background: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "top",
        height: "43.5rem",
      }}
    >
      <div className="absolute top-1/2 left-[20%] transform -translate-y-1/2 h-[20rem] w-[20rem] flex flex-col gap-2 items-center justify-center bg-white bg-opacity-10 rounded-[1.2rem] ">
        <h1>ASAP moving company</h1>
        <p>company description</p>
      </div>
    </div>
  );
}

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
      <div className="absolute top-1/2 left-[15%] transform -translate-y-1/2 h-[20rem] w-[34rem] flex flex-col gap-3 items-start justify-center bg-white bg-opacity-10 rounded-[1.2rem] p-4">
        <h1 className="text-zinc-100 text-2xl font-medium">
          ASAP moving company
        </h1>
        <p className="font-normal text-zinc-100">
          ASAP Moving: Your top choice for efficient and stress-free moving
          services in Chicago. Our dedicated team ensures a smooth transition to
          your new space, providing reliable and personalized service with every
          move
        </p>
      </div>
    </div>
  );
}

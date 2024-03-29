import React from "react";

export default function Services() {
  return (
    <section className="flex items-center justify-center gap-9 mt-9 w-full p-7">
      <ul className="flex items-center justify-center gap-9 mt-9 w-full">
        <li className="flex flex-col p-7 rounded-lg bg-slate-500">
          <span>icon</span>
          <span>2 movers and a truck</span>
          <span>price</span>
          <p>This could for studio appartment, or 1 bedroom appartment</p>
        </li>
        <li className="flex flex-col p-7 rounded-lg bg-slate-500">
          <span>icon</span>
          <span>3 movers and a truck</span>
          <span>price</span>
          <p>This could for studio appartment, or 1 bedroom appartment</p>
        </li>
        <li className="flex flex-col p-7 rounded-lg bg-slate-500">
          <span>icon</span>
          <span>4 movers and 2 truck's</span>
          <span>price</span>
          <p>This could for studio appartment, or 1 bedroom appartment</p>
        </li>
      </ul>
    </section>
  );
}

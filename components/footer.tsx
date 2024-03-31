import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div>Logo</div>
        <div>contact</div>
      </div>
      <div>
        Moving &copy; <span>{new Date().getFullYear()}</span>
      </div>
    </div>
  );
}

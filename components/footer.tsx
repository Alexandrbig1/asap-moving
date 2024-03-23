import React from "react";

export default function Footer() {
  return (
    <div>
      <div>Logo</div>
      <div>
        Moving &copy; <span>{new Date().getFullYear()}</span>
      </div>
    </div>
  );
}

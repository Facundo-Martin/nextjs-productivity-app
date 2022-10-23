import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1>Header</h1>
      <nav>
        <ul className="flex items-center gap-x-4">
          <li className="nav-item">Home</li>
          <li className="nav-item">Goals</li>
          <li className="nav-item">Tools</li>
          <li className="nav-item">Home</li>
        </ul>
      </nav>
      <h1>Header</h1>
    </header>
  );
}

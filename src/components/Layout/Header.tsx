import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between header">
      <h1>Header</h1>
      <nav>
        <ul className="flex items-center gap-x-4">
          <li>
            <Link href="/">
              <a className="nav-item">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/goals">
              <a className="nav-item">Goals</a>
            </Link>
          </li>
          <li>
            <Link href="/tools">
              <a className="nav-item">Tools</a>
            </Link>
          </li>
          <li>
            <Link href="/other">
              <a className="nav-item">Other</a>
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Header</h1>
    </header>
  );
}

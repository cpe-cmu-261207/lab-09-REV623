import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="border border-2 rounded-3 p-2 m-3 bg-white shadow">
      <div className="d-flex mx-auto justify-content-evenly align-items-center">
        <Link href="/">
          <a className="navbar-brand fw-bold fs-5" >Home</a>
        </Link>
        <Link href="/exp">
          <a className="navbar-brand fw-bold fs-5">Experience</a>
        </Link>
        <Link href="/contact">
          <a className="navbar-brand fw-bold fs-5">Contact</a>
        </Link>
        <Link href="/lab-07">
          <a className="navbar-brand fw-bold fs-5">Lab-07</a>
        </Link>
      </div>
    </div>
  )
}

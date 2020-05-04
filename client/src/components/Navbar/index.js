import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books Reading Reviewer
      </a>
      <ul>
        <li>
          <Link classname="nav-link" to= ".src/pages/search"></Link>
        </li>
        <li>
          <Link classname="nav-link" to= ".src/pages/books"></Link>
        </li>


      </ul>
    </nav>
  );
}

export default Navbar;

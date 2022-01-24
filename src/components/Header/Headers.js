import React from "react";
import { Link, Outlet } from "react-router-dom";

const Headers = () => {
  document.title = "Header";
  return (
    <div>
      <nav className="all-container">
        <Link className="child" to={`/header/header1`}>
          Header W/ Fixed Header
        </Link>
        <Link className="child" to="/header/header2">
          Header w/ Corner Header
        </Link>
        <Link className="child" to="/header/header3">
          Header w/ Prominent Header
        </Link>
      </nav>{" "}
      <Outlet />;
    </div>
  );
};

export default Headers;

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Snackbars = () => {
  document.title = "Snackbar";
  return (
    <div>
      <nav className="all-container">
        <Link className="child" to={`/snackbar/snackbar1`}>
          Baseline
        </Link>
        <Link className="child" to="/snackbar/snackbar2">
          Leading
        </Link>
        <Link className="child" to="/snackbar/snackbar3">
          Stacked
        </Link>
      </nav>{" "}
      <Outlet />;
    </div>
  );
};

export default Snackbars;

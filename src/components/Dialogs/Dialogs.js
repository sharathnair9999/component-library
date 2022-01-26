import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dialogs = () => {
  document.title = "Dialogs";
  return (
    <div>
      <nav className="all-container">
        <Link className="child" to={`/dialogs/dialog1`}>
          Simple Dialog
        </Link>
        <Link className="child" to="/dialogs/dialog2">
          Scrollable Dialog
        </Link>
       
      </nav>{" "}
      <Outlet />;
    </div>
  );
};

export default Dialogs;

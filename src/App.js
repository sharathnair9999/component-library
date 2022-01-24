import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  document.title = "Component Library"
  return (
    <div className="header_container">
      <Link to="/" className="main_header">
        Component Library
      </Link>{" "}
      <nav className="all-container">
        <Link className="child" to="/cards">
          Cards
        </Link>
        <Link className="child" to="/chips">
          Chips
        </Link>
        <Link className="child" to="/drawer">
          Drawer
        </Link>
        <Link className="child" to="/badges">
          Badges
        </Link>
        <Link className="child" to="/header">
          Header
        </Link>
        <Link className="child" to="/snackbar">
          Snackbar
        </Link>
        <Link className="child" to="/dialogs">
          Dialogs
        </Link>
        <Link className="child" to="/tabs">
          Tabs
        </Link>
      </nav>
      <hr className="main-hr" />
      <Outlet />
      {/* <span className="theme-icon">
            <input
              className="check"
              id="toggle"
              type="checkbox"
              onChange={() =>
                !document.body.classList.contains("dark-theme")
                  ? document.body.classList.toggle("dark-theme")
                  : document.body.classList.remove("dark-theme")
              }
            />
            <label for="toggle" className="button"></label>
          </span> */}
    </div>
  );
}

export default App;

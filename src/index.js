import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./components/Card/Cards";
import Chips from "./components/Chip/Chips";
import Card1 from "./components/Card/Card1";
import Card2 from "./components/Card/Card2";
import Card3 from "./components/Card/Card3";
import Card4 from "./components/Card/Card4";
import Card5 from "./components/Card/Card5";
import Card6 from "./components/Card/Card6";
import Drawers from "./components/Drawer/Drawers";
import Drawer1 from "./components/Drawer/Drawer1";
import Drawer2 from "./components/Drawer/Drawer2";
import Drawer3 from "./components/Drawer/Drawer3";
import Badge from "./components/Badge/Badge";
import Headers from "./components/Header/Headers";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Header3 from "./components/Header/Header3";
import Snackbars from "./components/Snackbar/Snackbars"
import Snackbar1 from "./components/Snackbar/Snackbar1"
import Snackbar2 from "./components/Snackbar/Snackbar2"
import Snackbar3 from "./components/Snackbar/Snackbar3"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="cards" element={<Cards />}>
          <Route path="card1" element={<Card1 />} />
          <Route path="card2" element={<Card2 />} />
          <Route path="card3" element={<Card3 />} />
          <Route path="card4" element={<Card4 />} />
          <Route path="card5" element={<Card5 />} />
          <Route path="card6" element={<Card6 />} />
          <Route
            path="*"
            element={
              <main className="output">
                <h2>There's nothing here buddy!</h2>
              </main>
            }
          />
        </Route>
        <Route path="chips" element={<Chips />} />
        <Route path="drawer" element={<Drawers />}>
          <Route path="drawer1" element={<Drawer1 />} />
          <Route path="drawer2" element={<Drawer2 />} />
          <Route path="drawer3" element={<Drawer3 />} />
          <Route
            path="*"
            element={
              <main className="output">
                <h2>There's nothing here buddy!</h2>
              </main>
            }
          />
        </Route>
        <Route path="badges" element={<Badge />} />
        <Route path="header" element={<Headers />}>
          <Route path="header1" element={<Header1 />} />
          <Route path="header2" element={<Header2 />} />
          <Route path="header3" element={<Header3 />} />
          <Route
            path="*"
            element={
              <main className="output">
                <h2>There's nothing here buddy!</h2>
              </main>
            }
          />
        </Route>
        <Route path="snackbar" element={<Snackbars/>}>
            <Route path = "snackbar1" element={<Snackbar1/>}></Route>
            <Route path = "snackbar2" element={<Snackbar2/>}></Route>
            <Route path = "snackbar3" element={<Snackbar3/>}></Route>
            <Route
            path="*"
            element={
              <main className="output">
                <h2>There's nothing here buddy!</h2>
              </main>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <main className="output">
              <h2>There's nothing here buddy!</h2>
            </main>
          }
        ></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();

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

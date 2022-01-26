import React, { useState } from "react";

const Tab1 = () => {
  const [active, setActive] = useState("tab1");
  return (
    <div className="output">
      <div className="tabs">
        <div className="fixed-tabs">
          <span
            className={`tab-name  ${active === "tab1" ? "active-tab" : null} `}
            onClick={() => {
              setActive("tab1");
            }}
          >
            Tab 1
          </span>
          <span
            className={`tab-name  ${active === "tab2" ? "active-tab" : null} `}
            onClick={() => {
              setActive("tab2");
            }}
          >
            Tab 2
          </span>
          <span
            className={`tab-name  ${active === "tab3" ? "active-tab" : null} `}
            onClick={() => {
              setActive("tab3");
            }}
          >
            Tab 3
          </span>
        </div>

        <div className="tab-contents">
          <div
            className={`tab-content ${
              active === "tab1" ? null : "inactive-content"
            }`}
          >
            <h1>This is tab 1 content</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptas perferendis dolor, dolorem ullam doloribus
              deserunt vitae rerum explicabo asperiores praesentium, rem animi
              molestiae labore aperiam. Corrupti ratione ea repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptas perferendis dolor, dolorem ullam doloribus
              deserunt vitae rerum explicabo asperiores praesentium, rem animi
              molestiae labore aperiam. Corrupti ratione ea repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptas perferendis dolor, dolorem ullam doloribus
              deserunt vitae rerum explicabo asperiores praesentium, rem animi
              molestiae labore aperiam. Corrupti ratione ea repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptas perferendis dolor, dolorem ullam doloribus
              deserunt vitae rerum explicabo asperiores praesentium, rem animi
              molestiae labore aperiam. Corrupti ratione ea repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptas perferendis dolor, dolorem ullam doloribus
              deserunt vitae rerum explicabo asperiores praesentium, rem animi
              molestiae labore aperiam. Corrupti ratione ea repellendus?
            </p>
          </div>
          <div
            className={`tab-content ${
              active === "tab2" ? null : "inactive-content"
            }`}
          >
            <h1>This is tab 2 content</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptas perferendis dolor, dolorem ullam doloribus
              deserunt vitae rerum explicabo asperiores praesentium, rem animi
              molestiae labore aperiam. Corrupti ratione ea repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptas perferendis dolor, dolorem ullam doloribus
              deserunt vitae rerum explicabo asperiores praesentium, rem animi
              molestiae labore aperiam. Corrupti ratione ea repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptas perferendis dolor, dolorem ullam doloribus
              deserunt vitae rerum explicabo asperiores praesentium, rem animi
              molestiae labore aperiam. Corrupti ratione ea repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptas perferendis dolor, dolorem ullam doloribus
              deserunt vitae rerum explicabo asperiores praesentium, rem animi
              molestiae labore aperiam. Corrupti ratione ea repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptas perferendis dolor, dolorem ullam doloribus
              deserunt vitae rerum explicabo asperiores praesentium, rem animi
              molestiae labore aperiam. Corrupti ratione ea repellendus?
            </p>
          </div>
          <div
            className={`tab-content ${
              active === "tab3" ? null : "inactive-content"
            }`}
          >
            {" "}
            <h1>This is tab 3 content</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptas perferendis dolor, dolorem ullam doloribus
              deserunt vitae rerum explicabo asperiores praesentium, rem animi
              molestiae labore aperiam. Corrupti ratione ea repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptas perferendis dolor, dolorem ullam doloribus
              deserunt vitae rerum explicabo asperiores praesentium, rem animi
              molestiae labore aperiam. Corrupti ratione ea repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptas perferendis dolor, dolorem ullam doloribus
              deserunt vitae rerum explicabo asperiores praesentium, rem animi
              molestiae labore aperiam. Corrupti ratione ea repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptas perferendis dolor, dolorem ullam doloribus
              deserunt vitae rerum explicabo asperiores praesentium, rem animi
              molestiae labore aperiam. Corrupti ratione ea repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptas perferendis dolor, dolorem ullam doloribus
              deserunt vitae rerum explicabo asperiores praesentium, rem animi
              molestiae labore aperiam. Corrupti ratione ea repellendus?
            </p>
            tab3 content
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab1;

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiDownload } from "react-icons/fi";
import { BsFillPrinterFill, BsFillBookmarkFill } from "react-icons/bs";

const Header3 = () => {
  return (
    <div className="output">
      <div className="header-3-container">
        <nav className="headers-3">
          <GiHamburgerMenu size={"3rem"} className="header1-ham" />
          <h2 className="header3-name">Hyderabad, Telangana</h2>
          <div className="header3-icons">
            <FiDownload size={"2.5rem"} className="icon-child"></FiDownload>
            <BsFillPrinterFill
              size={"2.5rem"}
              className="icon-child"
            ></BsFillPrinterFill>
            <BsFillBookmarkFill
              size={"2.5rem"}
              className="icon-child"
            ></BsFillBookmarkFill>
          </div>
        </nav>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
          ipsam ex quas optio vel similique, dolores reprehenderit consequuntur
          modi recusandae pariatur, corporis provident assumenda odit ratione
          voluptates esse eum iste.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
          ipsam ex quas optio vel similique, dolores reprehenderit consequuntur
          modi recusandae pariatur, corporis provident assumenda odit ratione
          voluptates esse eum iste.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
          ipsam ex quas optio vel similique, dolores reprehenderit consequuntur
          modi recusandae pariatur, corporis provident assumenda odit ratione
          voluptates esse eum iste.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
          ipsam ex quas optio vel similique, dolores reprehenderit consequuntur
          modi recusandae pariatur, corporis provident assumenda odit ratione
          voluptates esse eum iste.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
          ipsam ex quas optio vel similique, dolores reprehenderit consequuntur
          modi recusandae pariatur, corporis provident assumenda odit ratione
          voluptates esse eum iste.
        </p>
      </div>
    </div>
  );
};

export default Header3;

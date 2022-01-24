import React from 'react';
import {FaSearch, FaUser} from 'react-icons/fa';
import { BsGrid } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";


const Drawer3 = () => {
  return <div className='output'>
      <div className="sidebar">
    <div className="logo-details">
      <img className='bx bxl-c-plus-plus icon' src="./navbar-icon.png" alt="navbar icon"></img>
        <div className="logo_name">CodingLab</div>
       <FiMenu id="btn" size="1.3rem"/>
    </div>
    <ul className="nav-list">
      <li>
          <FaSearch size ="1.3rem"/>
         <input type="text" placeholder="Search..."/>
         <span className="tooltip">Search</span>
      </li>
      <li>
        <a>
          <BsGrid size={"1.3rem"}/>
          <span className="links_name">Dashboard</span>
        </a>
         <span className="tooltip">Dashboard</span>
      </li>
      <li>
       <a>
         <FaUser size="1.3rem"/>
         <span className="links_name">User</span>
       </a>
       <span className="tooltip">User</span>
     </li>
     <li>
       <a>
       <FaUser size="1.3rem"/>
         <span className="links_name">Messages</span>
       </a>
       <span className="tooltip">Messages</span>
     </li>
     <li>
       <a>
       <FaUser size="1.3rem"/>
         <span className="links_name">Analytics</span>
       </a>
       <span className="tooltip">Analytics</span>
     </li>
     <li>
       <a>
       <FaUser size="1.3rem"/>
         <span className="links_name">File Manager</span>
       </a>
       <span className="tooltip">Files</span>
     </li>
     <li>
       <a>
       <FaUser size="1.3rem"/>
         <span className="links_name">Order</span>
       </a>
       <span className="tooltip">Order</span>
     </li>
     <li>
       <a>
       <FaUser size="1.3rem"/>
         <span className="links_name">Saved</span>
       </a>
       <span className="tooltip">Saved</span>
     </li>
     <li>
       <a>
       <FaUser size="1.3rem"/>
         <span className="links_name">Setting</span>
       </a>
       <span className="tooltip">Setting</span>
     </li>
     <li className="profile">
         <div className="profile-details">
          <img src="./profile.jpg" alt="profileImg"/>
           <div className="name_job">
             <div className="name">Prem Shahi</div>
             <div className="job">Web designer</div>
           </div>
         </div>
         <FaUser size="1.3rem"/>
     </li>
    </ul>
  </div>
  <section className="home-section">
      <div className="text">Dashboard</div>
  </section>
  </div>;
};

export default Drawer3;

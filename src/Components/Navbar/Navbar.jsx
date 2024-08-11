import React, { useState, useRef } from "react";
import "./Navbar.css";
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"


const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  const [menu, setMenu] = useState("home")
  return (
    <div className="navbar">
      <h1>PORTFOLIO</h1>
      <img src={menu_open} alt="" className="nav-mob-open" onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu}/>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>{setMenu("home")}}>Home</p></AnchorLink> {menu==="home"?<img src={underline} alt="" />:<></> }</li>
        <li><AnchorLink className='anchor-link' href='#about' offset={50}><p onClick={()=>{setMenu("about")}}>About</p></AnchorLink>{menu==="about"?<img src={underline} alt="" />:<></>}</li>
        <li><AnchorLink className='anchor-link' href='#contact' offset={50}><p onClick={()=>{setMenu("contact")}}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt="" />:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' href='#contact' offset={50}><p onClick={()=>{setMenu("contact")}}>Connect With Me</p></AnchorLink> </div>
    </div>
  );
};

export default Navbar;

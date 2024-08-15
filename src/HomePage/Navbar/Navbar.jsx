import React, { useState } from 'react'
import style from './Navbar.module.css'
import compass from '/compas.png'
import Hamburger from 'hamburger-react'

const Navbar = () => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);

    const sidebar = document.querySelector(`${style.sidebar}`);
    sidebar.style.display = 'none';
  };


  return (
    <>
      <nav>
        <div className={style.NavContainer}>
        <div className={style.links}>
          <img src={compass} alt="" className={style.logo}/>
          <h1 className={style.title}>Navia's Woodworks</h1>
        </div>
        <div className={style.links}>
          <button className={style.getStarted}>Get Started</button>
          <Hamburger  toggled={isOpen} toggle={setIsOpen} onClick={toggleSidebar}/>
        </div>
        </div> 
      </nav>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
        </ul>
      </div>
         
      <div className={`overlay ${isOpen? 'open' : ''}`} onClick={toggleSidebar}></div>

      <style jsx>
        {`
        .sidebar {
            height: auto;
            width: 200px;
            position: fixed;
            top: 80;
    
            right: -350px;
            background-color: #111;
            overflow-x: hidden;
            overflow-y: hidden;
            transition: 0.3s;
            padding: 20px;
            backdrop-filter: blur(20px);
          }

          .sidebar.open {
            right: 0;
            postion: relative;
          }

          .sidebar ul {
            list-style-type: none;
            padding: 0;
          }

          .sidebar ul li {
            padding: 8px 8px 8px 32px;
            text-decoration: none;
            font-size: 25px;
            color: #818181;
            display: block;
            transition: 0.3s;
          }

          .sidebar ul li a {
            color: #818181;
            text-decoration: none;
            display: block;
          }

          .sidebar ul li a:hover {
            color: #f1f1f1;
          }

          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1;
            opacity: 0;
            transition: opacity 0.3s;
            visibility: hidden;
          }

          .overlay.active {
            opacity: 1;
            visibility: visible;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default Navbar

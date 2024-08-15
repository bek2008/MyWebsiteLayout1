import React from 'react'
import style from './HomePage.module.css'
import Navbar from './Navbar/Navbar.jsx'
import OurStory from './OurStory/OurStory.jsx'
import WhereToFindUs from './Where To Find Us/WhereToFindUs.jsx'
import Footer from './Footer/Footer.jsx'
const HomePage = () => {
  return (
    <>
      <Navbar/>
      <div className={style.intro}>
        <div className={style.introContainer}>
        <h1 className={style.slogan}>Quality in every work</h1>
        <p className={style.description}>We use high-quality materials like Birch, Oak, Maple, 
            and Cherry to create top-notch furniture and cabinetry, 
            always aiming to maximize customer satisfaction.
        </p>
        <button className={style.ShopNow}>Shop Now</button>
        </div>
      </div>
      <OurStory/>
      <WhereToFindUs/>
      <Footer/>
    </>
  )
}

export default HomePage

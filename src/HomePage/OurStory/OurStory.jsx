import React from 'react'
import style from './OurStory.module.css'
import kitchen1 from '/kitchen1.jpg'
import kitchen2 from '/kitchen2.jpg'
import hutch from '/Mandie Hutch.jpg'
const OurStory = () => {
  return (
    <>
      <div className={style.OurStory}>
        <div className={style.blocks}>
          <div className={style.block}>
            <h2>Our Story</h2>
            <p>
            At Navia’s Woodworks, we transform raw wood into exquisite furniture and cabinetry that blend modern aesthetics with timeless elegance. 
            Founded by Emily, a skilled carpenter inspired by her grandfather’s woodworking tales, 
            our workshop in the heart of a quaint town quickly became renowned for meticulous craftsmanship and personalized service. 
            Each piece is a unique work of art, infused with passion and precision, designed to reflect our clients’ visions and enhance their homes. 
            From custom kitchens to bespoke furniture, Navia’s Woodworks is where dreams take shape, ensuring quality and artistry in every creation.
            </p>
          </div>
          <div className={style.block}> 
            <img src={kitchen1} alt=""/>
          </div>
        </div>
        <div className={style.blocks}>
          <div className={style.block}>
            <img src={kitchen2}></img>
          </div>
          <div className={style.block}>
            <img src={hutch} alt="" />
          </div>
        </div>
        
      </div>
    </>
  )
}

export default OurStory

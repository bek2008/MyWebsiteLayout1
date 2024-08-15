import React from 'react'
import style from './whereToFindUs.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"; 
const whereToFindUs = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.paragraph}>
          <h2>Where to find us</h2>
          <p>
            Navia's Woodworks is a family-owned and operated woodworking shop located in the heart of downtown Brooklyn.
            We specialize in crafting custom wooden furniture and decorative pieces. 
            Feel free to explore our extensive collection of woodworking models and learn more 
            about our commitment to creating beautiful and functional furniture.
          </p>
        </div>
        <div className={style.location}>
          <div className={style.locationDesc}>
            <h3>Location:</h3>
            <p>63 Flushing Ave Building 5, <br/>Brooklyn, NY 11205, <br/> (123)-456-7890</p>
            <div className={style.icons}>
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
          <div><iframe className={style.map} width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=63%20Flushing%20Ave%20Building%205,%20Brooklyn,%20NY%2011205+(Navia's%20Woodworks)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.gps.ie/sport-gps/">hiking gps</a></iframe></div>
          </div>
        </div>
       
       
    </>
  )
}

export default whereToFindUs

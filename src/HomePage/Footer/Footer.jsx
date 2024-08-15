import React from 'react'
import style from './Footer.module.css'
const Footer = () => {
  return (
    <>
      <footer>
        <div className={style.footerContainer}>
          <div className={style.Hours}>
            <h3>Hours</h3>
            <p>Monday - Friday</p>
            <p>8am - 6pm</p>
          </div>
          <div className={style.social}>
            <h3>Social</h3>
                <a src="#">Facebook</a>
                <a src="#">Twitter</a>
                <a src="#">Instagram</a>
          </div>
          <div className={style.location}>
            <h3>Navia's Woodworks</h3>
            <p>63 Flushing Ave Building 5</p>
            <p>Brooklyn, NY 11205</p> 
            <p>Hello@gmail.com</p>
            <p>(123) 456-7890</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

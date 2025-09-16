import React from 'react'
import style from './Footer.module.css'
import { RiChatSmileAiFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
const Footer = () => {

  const Links = [
    {
      "text":"About US"
    },
    {
      "text":"How It Works"
    },
    {
      "text":"Trade Assurance"
    },
    {
      "text":"Success Stories"
    },
    {
      "text":"Press & media"
    },
    {
      "text":"Careers"
    },
  ]

  const Catogories = [
    {
      "text":"Textile & Apparel"
    },
    {
      "text":"Electronics"
    },
    {
      "text":"Machinery"
    },
    {
      "text":"Chemicals"
    },
    {
      "text":"Construction"
    },
  ]

  const contact = [
    {
      "text":"ghaziabad",
      "icons":<IoLocationOutline />
    },
    {
      "text":"+91 100-123-4547",
      "icons":<IoCallSharp />
    },
    {
      "text":"support@emojija.com",
      "icons":<MdMarkEmailRead />
    },
  ]
  
  return (
    <main className={style.mainFooter}>
      <section className={style.linkSection}>
        <div className={style.iconsTags}>
          <div className={style.smillIcons}>
          {/* <BsEmojiSmile className={style.SIcons}/> */}
          😊
          </div>
            <div className={style.imagelogo}>
              <img src="../../../assists/WhatsApp_Image_2025-09-16_at_17.10.43_d3e706c2_processed_by_imagy-removebg-preview.png" alt="" />
            <p>B2B MARKET PLACE</p>
            </div>
        </div>
        <div >
          <p>Empowering businesses with seamless B2B trade solutions, secure payments, and trusted partnerships. Connect with verified suppliers, streamline procurement, and grow globally with our reliable e-commerce platform.</p>
          <div className={style.linkIcons}>
              <FaFacebook className={style.icons}/>
              <FaLinkedin className={style.icons}/>
              <FaInstagram className={style.icons}/>
          </div>
        </div>
      </section>
      <section className={style.aboutSection}>
        <h2>Quick Links</h2>
          {Links.map((link) => (
            <p>{link.text}</p>
          ))}
      </section>
      <section className={style.catogoriesSection}>
        <h2>Popular Categories</h2>
        {Catogories.map((cat) => (
          <p>{cat.text}</p>
        ))}
      </section>
      <section className={style.contectSection}>
        <h2>Contact Us</h2>
        {contact.map((con) => (
         <div className={style.contact}> 
          <p>{con.icons}</p>
          <p>{con.text}</p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Footer
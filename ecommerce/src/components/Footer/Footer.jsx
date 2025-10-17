import React from "react";
import style from "./Footer.module.css";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  const Links = [
    {
      text: "About US",
    },
    {
      text: "How It Works",
    },
    {
      text: "Trade Assurance",
    },
    {
      text: "Success Stories",
    },
    {
      text: "Press & media",
    },
    {
      text: "Careers",
    },
  ];

  const Catogories = [
    {
      text: "Textile & Apparel",
    },
    {
      text: "Electronics",
    },
    {
      text: "Machinery",
    },
    {
      text: "Chemicals",
    },
    {
      text: "Construction",
    },
  ];

  const contact = [
    {
      text: "ghaziabad",
      icons: <IoLocationOutline />,
    },
    {
      text: "+91 100-123-4547",
      icons: <IoCallSharp />,
    },
    {
      text: "support@emojija.com",
      icons: <MdMarkEmailRead />,
    },
  ];

  const policy = [
    {
      text: "Privacy Policy",
    },
    {
      text: "Terms of Services",
    },
    {
      text: "Cookie Policy",
    },
  ];

  return (
    <main className={style.mainContainer}>
      <div className={style.mainFooter}>
        <section className={style.linkSection}>
          <div className={style.iconsTags}>
            <div className={style.imagelogo}>
              <img
                src="../../../assists/Gemini_Generated_Image_elyp5nelyp5nelyp__1_-removebg-preview.png"
                alt=""
              />
              <span>B2B MARKET PLACE</span>
            </div>
          </div>
          <div>
            <span>
              Empowering businesses with seamless B2B trade solutions, secure
              payments, and trusted partnerships. Connect with verified
              suppliers, streamline procurement, and grow globally with our
              reliable e-commerce platform.
            </span>
            <div className={style.linkIcons}>
              <SlSocialFacebook className={style.icons} />
              <SlSocialLinkedin className={style.icons} />
              <IoLogoInstagram className={style.icons} />
            </div>
          </div>
        </section>
        <section className={style.aboutSection}>
          <h2>Quick Links</h2>
          {Links.map((link,index) => (
            <p key={index}>{link.text}</p>
          ))}
        </section>
        <section className={style.catogoriesSection}>
          <h2>Popular Categories</h2>
          {Catogories.map((cat,index) => (
            <p key={index}>{cat.text}</p>
          ))}
        </section>
        <section className={style.contectSection}>
          <h2>Contact Us</h2>
          {contact.map((con,index) => (
            <div key={index} className={style.contact}>
              <p>{con.icons}</p>
              <p>{con.text}</p>
            </div>
          ))}
        </section>
      </div>
      <hr className={style.line}/>
      <section className={style.lastSection}>
        <span>@2025 emojija.com. All right reserved</span>
        <div className={style.policy}>
          {policy.map((policy,index) => (
            <p key={index}>{policy.text}</p>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Footer;

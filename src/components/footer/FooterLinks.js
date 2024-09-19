import React from 'react'
import "./FooterLinks.scss";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logoImg from "../../assets/bigdrop_logo.png";


const FooterLinks = () => {
  return (
    <>
    <section className='contact-section'>
        <div className='container contact'>
            <div className="contact-icon">
                <FaFacebookF className="i"/>
                <FaTwitter className="i"/>
                <FaInstagram className="i"/>


                <FaYoutube className="i"/>


            </div>
            <h2>Let's Talk?</h2>
            <a href="#home" className='btn btn-dark'> Make an enquiry!</a>

        </div>
    </section>

    <section className='footer-section'>
        <div className='container footer'>
            <div className='footer-logo'>
                <img src={logoImg} alt= "logo"/>

            </div>

            <div className='footer-menu'>
                <p className='link-heading'>
                   <h3>Features</h3> 

                </p>
                <ul className='nav-ul footer-links'>
                    <li>
                        <a href ="#home">Link Showcasing</a>
                    </li>
                    <li>
                        <a href ="#home"> Brand Name </a>
                    </li>
                    <li>
                        <a href ="#home"> Analytics</a>
                    </li>
                    <li>
                        <a href ="#home"> Blogs</a>
                    </li>

                </ul>

            </div>

            <div className='footer-menu'>
                <p className='link-heading'>
                   <h3>Resources</h3> 

                </p>
                <ul className='nav-ul footer-links'>
                    <li>
                        <a href ="#home">Link Showcasing</a>
                    </li>
                    <li>
                        <a href ="#home"> Brand Name </a>
                    </li>
                    <li>
                        <a href ="#home"> Analytics</a>
                    </li>
                    <li>
                        <a href ="#home"> Blogs</a>
                    </li>

                </ul>

            </div>

            <div className='footer-menu'>
                <p className='link-heading'>
                   <h3>Company</h3> 

                </p>
                <ul className='nav-ul footer-links'>
                    <li>
                        <a href ="#home">Link Showcasing</a>
                    </li>
                    <li>
                        <a href ="#home"> Brand Name </a>
                    </li>
                    <li>
                        <a href ="#home"> Analytics</a>
                    </li>
                    <li>
                        <a href ="#home"> Blogs</a>
                    </li>

                </ul>

            </div>

            




        </div>

    </section>
    </>
  )
}

export default FooterLinks
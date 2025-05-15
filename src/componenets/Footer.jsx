import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import  footerImg from '/images/more/24.jpg'

const Footer = () => {
    const footerStyle={
            backgroundImage: `url(${footerImg})`,
        
    }
  return (
    <>
    <footer className="  bg-base-200 ">
      <div className="w-11/12 mx-auto grid lg:grid-cols-2 gap-8 py-10">
        <div className="space-y-3">
          <img
            className="h-18 w-18 p-2"
            src="/images/more/logo1.png"
            alt=""
          />{" "}
          <h1 className="text-2xl font-bold text-[#331A15]">Espresso Emporium</h1>
          <p>
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className=" flex gap-3">
            <FaFacebook size={35}></FaFacebook>
            <FaInstagram size={35}></FaInstagram>
            <FaTwitter size={35}></FaTwitter>
            <FaLinkedin size={35}></FaLinkedin>
          </div>
          <h1 className="text-xl font-bold text-[#331A15]">Get in Touch</h1>
          <span className="flex  items-center gap-1">
            <IoIosMail />
            info@gmail.com
          </span>
          <span className="flex  items-center gap-1">
            <FaPhone></FaPhone>+88 01533 333 333
          </span>
          <span className="flex  items-center gap-1">
            <FaLocationDot />
            72, Wall street, King Road, Dhaka
          </span>
        </div>
        <div>
          <form>
            <h6 className="footer-title">Connect with Us</h6>
            <fieldset className="w-80 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered join-item"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  className="textarea textarea-bordered join-item w-full"
                  rows="4"
                ></textarea>
              </div>
            </fieldset>
            <button className="btn rounded-full border-[#331A15] my-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
    <footer style={footerStyle} className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
</>
  );
};

export default Footer;

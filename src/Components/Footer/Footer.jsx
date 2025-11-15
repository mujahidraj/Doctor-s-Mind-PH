import React from 'react';
import '../../Styles/styles.css'

const Footer = () => {
  return (
    <div>

      <footer className="footer jakarta sm:footer-horizontal bg-[#176AE5] text-white p-10">
        <aside>
          <h1 className="pacifico text-3xl">DOCTOS'S MIND</h1>
          <p>
            TechWisdom Industries Ltd.
            <br />
            Providing reliable Doctors since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal  footer-center bg-[#60a0ff] text-white p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by M.R Mujahid Raj</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <Container>
          <div className="footer-top-contain">
            <div className="footer-top">
              <div>
                <h1>Unlock a new chapter — make</h1>
                <h1>home ownership make sense</h1>
                <div className="footer-btn-div">
                  <Button className="footer-btn">Get demo</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-content">
            <div className="d-flex justify-content-between">
              <div className="footer-div1">
                <div className="footer-txt">
                  <h6>We’re Haven</h6>
                  <p>How It Works</p>
                  <p>For Servicers</p>
                  <p>For Subservicers</p>
                  <p>For Lenders</p>
                </div>
              </div>

              <div className="footer-div2">
                <div className="footer-div2-content">
                  <div className="footer-txt1">
                    <h6>Resources</h6>
                    <p>
                      Blog <span>Coming soon</span>
                    </p>
                  </div>
                </div>
                <div className="footer-txt2">
                  <h6>Support</h6>
                  <p>Security & Compliance</p>
                  <p>Why is Haven involved?</p>
                </div>
                <div className="footer-txt2">
                  <h6>Company</h6>
                  <p>About</p>
                  <p>Pressroom</p>
                  <p>Careers</p>
                  <p>Contact</p>
                </div>
              </div>

              <div className="footer-div3">
                <div>
                  <div className="footer-logo">
                    <img
                      src="./assets/logo.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="footer-input-div">
              <h2>Get the latest in customer retention</h2>
              <div className="d-flex gap-3 input-div">
                <div>
                  <input placeholder="Enter Your Email" className="inputs" />
                </div>
                <div>
                  <Button className="input-btn">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between footer-icon-contain">
            <div className="d-flex gap-3 footer-icon">
              <p>
                <FaFacebook />
              </p>
              <p>
                <FaTwitter />
              </p>
              <p>
                <FaLinkedin />
              </p>
            </div>
            <div className="d-flex gap-3 footer-icon-txt">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Coordinated Disclosure Policy</p>
            </div>
            <div className="footer-icon-txt1"> 
              <p>© 2025 Haven. All Rights Reserved.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;

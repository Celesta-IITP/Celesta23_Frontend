import React from "react";
import "./Footer.css";
import instagramLogo from "../../assets/footer/ic_instagram.png";
import facebookLogo from "../../assets/footer/ic_facebook.png";
import linkedInLogo from "../../assets/footer/ic_linkedin.png";
import twitterLogo from "../../assets/footer/ic_twitter.png";
import youtubeLogo from "../../assets/footer/ic_youtube.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <div className="footer-container fade-in">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/events">Events</Link>
          </div>
          <div className="footer-link-items">
            <a href="https://forms.gle/UZx9ejCQHnxX2wJbA" target={"_blank"}>
              Register
            </a>
          </div>
          <div className="footer-link-items">
            <HashLink to="#CA" smooth={true}>
              CA Programs
            </HashLink>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <a
              className="social-icon-link instagram"
              href="https://instagram.com/celestaiitp_official/"
              target="_blank"
              aria-label="Instagram"
            >
              <img src={instagramLogo} alt="instagram-logo"></img>
            </a>
            <a
              className="social-icon-link facebook"
              href="https://facebook.com/CelestaIITP"
              target="_blank"
              aria-label="Facebook"
            >
              <img src={facebookLogo} alt="facebook-logo"></img>
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://linkedin.com/company/celesta-iit-patna/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <img src={linkedInLogo} alt="linkedin-logo"></img>
            </a>
            <a
              className="social-icon-link twitter"
              href="https://twitter.com/celesta_iitp"
              target="_blank"
              aria-label="Twitter"
            >
              <img src={twitterLogo} alt="twitter-logo"></img>
            </a>
            <a
              className="social-icon-link youtube"
              href="https://youtube.com/@CelestaIITPatna"
              target="_blank"
              aria-label="Youtube"
            >
              <img src={youtubeLogo} alt="youtube-logo"></img>
            </a>
          </div>
          <a href="" className="website-rights">
            CELESTAEMAILID@IDK.COM
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;

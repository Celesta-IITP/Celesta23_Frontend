import React, { forwardRef } from "react";
import "./Footer.css";
import instagramLogo from "../../assets/footer/ic_instagram.png";
import facebookLogo from "../../assets/footer/ic_facebook.png";
import linkedInLogo from "../../assets/footer/ic_linkedin.png";
import twitterLogo from "../../assets/footer/ic_twitter.png";
import youtubeLogo from "../../assets/footer/ic_youtube.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = forwardRef((props, ref) => {
  function scrollToView() {
    console.log(ref.current);
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
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
            <a onClick={scrollToView}>CA Program</a>
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
              <LazyLoadImage src={instagramLogo} alt="instagram-logo" />
            </a>
            <a
              className="social-icon-link facebook"
              href="https://facebook.com/CelestaIITP"
              target="_blank"
              aria-label="Facebook"
            >
              <LazyLoadImage src={facebookLogo} alt="facebook-logo" />
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://linkedin.com/company/celesta-iit-patna/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LazyLoadImage src={linkedInLogo} alt="linkedin-logo" />
            </a>
            <a
              className="social-icon-link twitter"
              href="https://twitter.com/celesta_iitp"
              target="_blank"
              aria-label="Twitter"
            >
              <LazyLoadImage src={twitterLogo} alt="twitter-logo" />
            </a>
            <a
              className="social-icon-link youtube"
              href="https://youtube.com/@CelestaIITPatna"
              target="_blank"
              aria-label="Youtube"
            >
              <LazyLoadImage src={youtubeLogo} alt="youtube-logo" />
            </a>
          </div>
          <a href="mailto:celesta.iitp@gmail.com" className="website-rights">
            celesta.iitp@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
});

export default Footer;

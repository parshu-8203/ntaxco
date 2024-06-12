import { ChevronsUp } from "lucide-react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  NTAXCO<span></span>
                </h5>
                <p>
                  <i
                    style={{ backgroundColor: "transparent" }}
                    className="faStyle fa fa fa-map-marker"
                    aria-hidden="true"
                  ></i>
                  Prashanti Nagar, Tapovanam, Anantapur, Andhra Pradesh - 515004
                </p>
                <p>
                  <i
                    style={{ backgroundColor: "transparent" }}
                    className=" faStyle fa fa-phone"
                  ></i>
                  +91-7013881808
                </p>
                <p>
                  <i
                    style={{ backgroundColor: "transparent" }}
                    className="faStyle fa fa-envelope"
                  ></i>
                  <a className="text-white" href="mailto:info@ntaxco.com">
                    info@ntaxco.com
                  </a>
                </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Quick Links<span></span>
                </h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <Link to="/">&nbsp;Home</Link>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <Link to="/about">&nbsp;About Us</Link>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="/">&nbsp;Services</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Follow up<span></span>
                </h5>
                <a href="https://www.facebook.com/ShaikNizam8/" target="_blank">
                  {" "}
                  <i className="faStyle fa fa-facebook"> </i>{" "}
                </a>
                <a href="https://twitter.com/nizamonlyone" target="_blank">
                  {" "}
                  <i className="faStyle fa fa-twitter"> </i>{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="faStyle fa fa-youtube"> </i>{" "}
                </a>
                <a
                  href="https://www.instagram.com/ntaxco?igsh=bmpmb2kxNWh3aWJ6"
                  target="_blank"
                >
                  {" "}
                  <i className="faStyle fa fa-instagram"> </i>{" "}
                </a>
              </div>
            </div>
            <br />
            <br />

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div data-aos="zoom-in" className="widget no-box">
                <h5 className="widget-title">
                  Contact Us<span></span>
                </h5>
                <div className="emailfield">
                  <input type="text" name="email" value="Email" />
                  <input type="text" name="content" value="message" />
                  <input name="uri" type="hidden" value="arabiantheme" />
                  <input name="loc" type="hidden" value="en_US" />
                  <input
                    className="submitbutton ripplelink"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </div>
            <div className="scroll_up" onClick={() => window.scrollTo(0, 0)}>
              <ChevronsUp className="up_btn" color="black" size={30} />
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center p-2">
                <p>Copyright ©2024, by www.ntaxco.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

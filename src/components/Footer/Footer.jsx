import { ChevronsUp } from "lucide-react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" class="footer-1">
      <div class="main-footer widgets-dark typo-light">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget subscribe no-box">
                <h5 class="widget-title">
                  NTAXCO<span></span>
                </h5>
                <p>
                  <i
                    style={{ backgroundColor: "transparent" }}
                    class="faStyle fa fa fa-map-marker"
                    aria-hidden="true"
                  ></i>
                  Prashanti Nagar, Tapovanam, Anantapur, Andhra Pradesh - 515004
                </p>
                <p>
                  <i
                    style={{ backgroundColor: "transparent" }}
                    class=" faStyle fa fa-phone"
                  ></i>
                  +91-7013881808
                </p>
                <p>
                  <i
                    style={{ backgroundColor: "transparent" }}
                    class="faStyle fa fa-envelope"
                  ></i>
                  <a className="text-white" href="mailto:info@ntaxco.com">
                    info@ntaxco.com
                  </a>
                </p>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">
                  Quick Links<span></span>
                </h5>
                <ul class="thumbnail-widget">
                  <li>
                    <div class="thumb-content">
                      <Link to="/">&nbsp;Home</Link>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <Link to="/about">&nbsp;About Us</Link>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <a href="/">&nbsp;Services</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">
                  Follow up<span></span>
                </h5>
                <a href="https://www.facebook.com/ShaikNizam8/" target="_blank">
                  {" "}
                  <i class="faStyle fa fa-facebook"> </i>{" "}
                </a>
                <a href="https://twitter.com/nizamonlyone" target="_blank">
                  {" "}
                  <i class="faStyle fa fa-twitter"> </i>{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="faStyle fa fa-youtube"> </i>{" "}
                </a>
                <a
                  href="https://www.instagram.com/ntaxco?igsh=bmpmb2kxNWh3aWJ6"
                  target="_blank"
                >
                  {" "}
                  <i class="faStyle fa fa-instagram"> </i>{" "}
                </a>
              </div>
            </div>
            <br />
            <br />

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div data-aos="zoom-in" class="widget no-box">
                <h5 class="widget-title">
                  Contact Us<span></span>
                </h5>
                <div class="emailfield">
                  <input type="text" name="email" value="Email" />
                  <input type="text" name="content" value="message" />
                  <input name="uri" type="hidden" value="arabiantheme" />
                  <input name="loc" type="hidden" value="en_US" />
                  <input
                    class="submitbutton ripplelink"
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

        <div class="footer-copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center p-2">
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

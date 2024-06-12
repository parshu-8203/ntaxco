import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import "./Parallax.css";
import bg from "../../assets/ntaxco_bg2.jpg";

const IMG_PADDING = 12;

const ParallaxHeader = () => {
  return (
    <div className="main-header-parallax">
      <div className="main-header-content">
        <StickyImage imgUrl={"../../assets/ntaxco_bg2.jpg"} />
        <OverlayCopy />
      </div>
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [1, 30]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        height: "100vh",
        left: "50%",
        right: "50%",
        // top: IMG_PADDING,
        top: 0,
        borderRadius,
        scale,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      ref={targetRef}
      className="header-image"
    >
      <motion.div
        className="header-bg-overlay"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="header-overlay"
    >
      <div data-aos="fade-right" className="header-overlay-content">
        <h2>
          <span className="text-primary">We Help</span> Your{" "}
          <span className="text-primary">Business</span> to Grow Up Next Level
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <Link to="/contactUs">
          <button className="btn contact-button">Contact Us</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ParallaxHeader;

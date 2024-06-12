import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import "./Card3.css";

const Card = ({ imageUrl, title, description, path }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setIsHovered(false);
  //   }, 1800);

  //   return () => clearTimeout(timeoutId);
  // }, [isHovered]);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });

  return (
    // <div className="card-container">
    //   <a href="#" className="card-anchor">
    //     <div className="card-border">
    //       <div className="card-content">
    //         <img
    //           className="card-img"
    //           src={imageUrl}
    //           alt="Service providing image"
    //         />
    //         <h6 className="service-title">{title}</h6>
    //         <p>{description}</p>
    //         <div className="enroll">
    //           <Link className="button-24" to={path}>
    //             Enroll Service
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </a>
    // </div>

    // <div className={`card ${isHovered ? "hover" : ""}`}>
    //   <div
    //     className="card-img"
    //     style={{ backgroundImage: `url(${imageUrl})` }}
    // onMouseEnter={() => setIsHovered(true)}
    // onMouseLeave={() => setIsHovered(false)}
    //   >
    // <div className="overlay">
    //   <div className="overlay-content">
    //     <Link to={path}>Enroll Service</Link>
    //   </div>
    // </div>
    //   </div>

    //   <div className="card-content">
    //     <a href="#!">
    //       <h2>{title}</h2>
    //       <p>{description}</p>
    //     </a>
    //   </div>
    // </div>

    <motion.div
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6, delay: 0.5 }}
      ref={ref}
      className={`card-container card ${isHovered ? "hover" : ""}`}
    >
      <a
        className={`card1`}
        href="#!"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="card-img"
          src={imageUrl}
          alt="Service providing image"
        />
        <h3>{title}</h3>
        <p className="small">
          Card description with lots of great facts and interesting details.
        </p>
        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>
        <div className="overlay">
          <div className="overlay-content">
            <Link to={path}>Enroll Service</Link>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default Card;

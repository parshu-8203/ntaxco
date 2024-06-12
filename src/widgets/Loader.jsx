import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Loader = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 100,
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="spinner-border text-primary spinner" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;

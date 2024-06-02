import React from "react";
import "./Services.css";
import GSTRegistration from "./GSTRegistration";
import PrivateLimitedCompany from "./PrivateLimitedCompany";
import GSTReturns from "./GSTReturns";
import Partnership from "./Partnership";
import OPC from "./OPC";
import LLP from "./LLP";
import ESI from "./ESI";
import MSME from "./MSME";
import Book from "./Book";
import IEC from "./IEC";
import Food from "./Food";
import Trade from "./Trade";
import Trust12A from "./Trust12A";
import Trust80G from "./Trust80G";
import Payroll from "./Payroll";
import Digital from "./Digital";
import Dropdown from "../../widgets/Dropdown";
const Services = ({ serviceName }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const renderServiceComponent = () => {
    switch (serviceName) {
      case "GST REGISTRATION":
        return <GSTRegistration />;
      case "GST RETURNS":
        return <GSTReturns />;
      case "PRIVATED LIMITED COMPANY":
        return <PrivateLimitedCompany />;
      case "LIMITED LIABILITY PARTNERSHIP":
        return <LLP />;
      case "ONE PERSON COMPANY":
        return <OPC />;
      case "PARTNERSHIP FIRM":
        return <Partnership />;
      case "EMPLOYEE STATE INSURANCE":
        return <ESI />;
      case "IMPORT & EXPORT CODE":
        return <IEC />;
      case "MICRO, SMALL & MEDIUM ENTERPRISES (MSME)":
        return <MSME />;
      case "FOOD LICENSE":
        return <Food />;
      case "TRADE LICENSE":
        return <Trade />;
      case "12A LICENSE FOR TRUST":
        return <Trust12A />;
      case "80G LICENSE FOR TRUST":
        return <Trust80G />;
      case "BOOK KEEPING & ACCOUNTING":
        return <Book />;
      case "PAYROLL":
        return <Payroll />;
      case "DIGITAL SIGNATURE":
        return <Digital />;
      default:
        return null;
    }
  };

  return (
    <>
      <div style={{ marginTop: "50px" }} className="container">
        <h1
          style={{ color: "#0049B7", fontWeight: "700", fontSize: "xx-large" }}
          className="text-center mb-4"
        >
          {serviceName}
        </h1>

        <div className="row">
          <div className="col-md-8">{renderServiceComponent()}</div>
          <div className="col-md-4">
            <div
              // data-aos="zoom-in"
              className="card  small-card custom-card w-90"
            >
              <div className="card-body h-">
                <h5
                  style={{
                    fontWeight: "600",
                    fontSize: "small",
                    textAlign: "center",
                  }}
                  className="card-title text-primary mb-0"
                >
                  REGISTER TO SERVICE
                </h5>
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <label htmlFor="name" className="form-label text-black">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email" className="form-label text-black">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="message" className="form-label text-black">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="service" className="form-label text-black">
                      Service
                    </label>
                    <Dropdown key={serviceName} serviceName={serviceName} />
                  </div>
                  <button type="submit" className="button mt-4">
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

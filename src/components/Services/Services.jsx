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
const Services = ({ serviceName }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const renderServiceComponent = () => {
    switch (serviceName) {
      case "GST Registration":
        return <GSTRegistration />;
      case "GST Returns":
        return <GSTReturns />;
      case "Privated Limited Company":
        return <PrivateLimitedCompany />;
      case "Limited Liability Partnership":
        return <LLP />;
      case "One Person Company":
        return <OPC />;
      case "Partnership Firm":
        return <Partnership />;
      case "Employee State Insurance":
        return <ESI />;
      case "Import & Export Code":
        return <IEC />;
      case "Micro, Small & Medium Enterprises (MSME)":
        return <MSME />;
      case "Food License":
        return <Food />;
      case "Trade License":
        return <Trade />;
      case "12A License for Trust":
        return <Trust12A />;
      case "80G License for Trust":
        return <Trust80G />;
      case "Book Keeping & Accounting":
        return <Book />;
      case "Payroll":
        return <Payroll />;
      case "Digital Signature":
        return <Digital />;
      default:
        return null;
    }
  };

  return (
    <>
      <div style={{ marginTop: "100px" }} className="container">
        <h1 style={{ color: "#0049B7" }} className="text-center mb-4">
          {serviceName}
        </h1>

        <div className="row">
          <div className="col-md-8">{renderServiceComponent()}</div>
          <div className="col-md-4">
            <div className="card sticky small-card custom-card ">
              <div className="card-body">
                <h5 className="card-title text-black">Register to Service</h5>
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
                    <input
                      type="text"
                      className="form-control"
                      id="service"
                      value={serviceName}
                      readOnly
                    />
                  </div>
                  <button
                    type="submit"
                    className="shadow-lg btn btn-primary  btn-block"
                  >
                    Submit
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

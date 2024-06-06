import { useState } from "react";
import "./dropdown.css";
import { useNavigate } from "react-router-dom";

const Dropdown = (props) => {
  const navigate = useNavigate();
  const services = [
    { label: "GST REGISTRATION", path: "/gst-registration" },
    { label: "GST RETURNS", path: "/gst-returns" },
    { label: "PRIVATED LIMITED COMPANY", path: "/private-limited-company" },
    {
      label: "LIMITED LIABILITY PARTNERSHIP",
      path: "/limited-liability-partnership",
    },
    { label: "ONE PERSON COMPANY", path: "/one-person-company" },
    { label: "PARTNERSHIP FIRM", path: "/partnership-firm" },
    { label: "EMPLOYEE STATE INSURANCE", path: "/employee-state-insurance" },
    { label: "IMPORT & EXPORT CODE", path: "/import-export-code" },
    { label: "MICRO, SMALL & MEDIUM ENTERPRISES (MSME)", path: "/msme" },
    { label: "FOOD LICENSE", path: "/food-license" },
    { label: "TRADE LICENSE", path: "/trade-license" },
    { label: "12A LICENSE FOR TRUST", path: "/12A" },
    { label: "80G LICENSE FOR TRUST", path: "/80G" },
    {
      label: "BOOK KEEPING & ACCOUNTING",
      path: "/book-keeping-and-accounting",
    },
    { label: "PAYROLL", path: "/payroll" },
    { label: "DIGITAL SIGNATURE", path: "/digital-signature" },
  ];

  const [selectedState, setSelectedState] = useState(props.serviceName);
  const handleSelect = (event) => {
    const value = event.target.value;

    const service = services.find((service) => service.label === value);

    setSelectedState(value);

    navigate(service.path);
  };

  return (
    <div className="dropdown-container">
      <select
        className="state-dropdown"
        value={selectedState}
        onChange={handleSelect}
      >
        {services.map((service, index) => (
          <option key={index} value={service.label}>
            {service.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

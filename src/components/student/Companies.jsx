// src/components/student/Companies.jsx
import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <div className="companies">
      <p className="companies__title">Trusted by learners from</p>

      <div className="companies__marquee">
        <div className="companies__track">
          <img src={assets.microsoftLogo} alt="Microsoft" />
          <img src={assets.walmartLogo} alt="Walmart" />
          <img src={assets.accentureLogo} alt="Accenture" />
          <img src={assets.adobeLogo} alt="Adobe" />
          <img src={assets.paypalLogo} alt="PayPal" />

          {/* duplicate for smooth marquee */}
          <img src={assets.microsoftLogo} alt="Microsoft" />
          <img src={assets.walmartLogo} alt="Walmart" />
          <img src={assets.accentureLogo} alt="Accenture" />
          <img src={assets.adobeLogo} alt="Adobe" />
          <img src={assets.paypalLogo} alt="PayPal" />
        </div>
      </div>
    </div>
  );
};

export default Companies;

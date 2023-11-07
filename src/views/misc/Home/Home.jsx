import "./Home.css";

import { ContactInfo } from "../../../components/ContactInfo/ContactInfo";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="imgs">
          <img
            className="glasses"
            src="images/glasses.png"
            href="Turistearte Logo"
          />
          <img
            className="turistearte"
            src="images/turistearte.png"
            href="Turistearte Name"
          />
          <h3>Web en construcción...</h3>
        </div>
        <div className="contact-info fixed-bottom text-center p-4">
          <ContactInfo />
        </div>
      </div>
    </>
  );
};

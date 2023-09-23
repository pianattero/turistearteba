import "./Home.css";

import { ContactInfo } from "../../../components/ContactInfo/ContactInfo";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="imgs">
          <img
            className="glasses"
            src="../../../../public/images/glasses.png"
          />
          <img
            className="turistearte"
            src="../../../../public/images/turistearte.png"
          />
          <h3>Web en construcción...</h3>
        </div>
        <div className="fixed-bottom text-center p-4 bg-light">
          <ContactInfo />
        </div>
      </div>
    </>
  );
};

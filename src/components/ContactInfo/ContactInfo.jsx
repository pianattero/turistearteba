import "./ContactInfo.css";

export const ContactInfo = () => {
  return (
    <>
      <div className="contact">
        <a
          href="https://www.instagram.com/turistearteba/?hl=es"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="logo"
            src="../../../public/images/ig.png"
            href="Instagram Logo"
          />
        </a>

        <a
          href="http://chatwith.io/s/5f271bc5ca354"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="logo"
            src="../../../public/images/wpp.png"
            href="Whatsapp Logo"
          />
        </a>

        <a href="" rel="noreferrer" target="_blank">
          <img
            className="logo"
            src="../../../public/images/mail.png"
            href="Mail Logo"
          />
        </a>
      </div>
    </>
  );
};

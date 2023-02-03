import Mail from "../components/Mail";
import Sphere from "../components/Sphere";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-page">
        <div className="sphere">
          <Sphere />
        </div>

        <Mail />
        <p className="adress">
          64-66 rue du Colonel de Rochebrune – 92380 Garches – 06 16 47 92 89
        </p>
      </div>
    </div>
  );
};

export default Contact;

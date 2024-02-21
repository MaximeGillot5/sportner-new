import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText, title }) => (
  <div className="info-box">
    <h2>{title}</h2>
    <p>{text}</p>
    <Link to={link}>{btnText}</Link>
  </div>
);

const renderContent = {
  1: (
    <InfoBox
      title="Proximité"
      text="Des évenements sportifs proches de vous et vos envies."
      link="/about"
      btnText="Découvrir"
    />
  ),
  2: (
    <InfoBox
      title="Communauté"
      text="Des sportifs partageant les mêmes goûts que les votres !"
      link="/contact"
      btnText="Choix du sport"
    />
  ),
  3: (
    <InfoBox
      title="Ouvert"
      text="Créez vos évenements, peu importe votre niveau."
      link="/contact"
      btnText="Créer un évenement"
    />
  ),
  4: (
    <InfoBox
      title="Nouveau"
      text="Sportner est en développement, aidez-nous à apporter de nouvelles fonctionnalités!"
      link="/contact"
      btnText="Contact"
    />
  ),
};

const HomeInfo = () => {
  return (
    <div className="info-container">
      {Object.values(renderContent).map((info, index) => (
        <div key={index} className="info-item">
          {info}
        </div>
      ))}
    </div>
  );
};

export default HomeInfo;

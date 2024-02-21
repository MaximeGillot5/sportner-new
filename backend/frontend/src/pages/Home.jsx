import { useEffect } from "react";
import { sportnerlanding } from "../assets/images";
import Lenis from "@studio-freight/lenis";
import Parallax from "../components/Parallax";
import HomeInfo from "../components/HomeInfo";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="home-page">
      <div className="landing-parent">
        <div className="landing-container">
          <div className="container">
            <img src={sportnerlanding} alt="Landing" className="img-landing" />
            <div className="text-block">
              <h1 className="title-block">
                Connectez vous à d'autres sportifs, au plus proche de vous.
              </h1>
            </div>
            <div className="text-block3">
              <p>
                Rejoignez une communauté grandissante partageant les mêmes
                envies que vous et grandissez, ensemble.
              </p>
            </div>
            <div className="button-container">
              <button className="login-button">Connexion</button>
              <button className="signup-button">Inscription</button>
            </div>
          </div>
        </div>
      </div>
      <div className="parallax-home">
        <Parallax baseVelocity={-5}>
          SPORT<span className="orange">NER </span>
        </Parallax>
        <Parallax baseVelocity={5}>
          SPORT<span className="orange">NER </span>
        </Parallax>
      </div>
      <div className="max-container">
        <div className="title-description">
          Pourquoi Sport<span className="orange">ner</span> ?
        </div>
        <div className="text-description">
          Nous proposons une approche différente de l'évenement sportif, plus
          accessible et plus proche de vous.
        </div>
        <div>
          <HomeInfo />
        </div>
        <div className="sport-discover">
          <h2>Découvrez dès maintenant les différents sports proposés !</h2>
          <Link to="/sports">
            <button className="button-discover">
              Plus de 20 sports déjà disponibles
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

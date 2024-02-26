import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // Vérifier s'il y a un token dans le localStorage
  const token = localStorage.getItem("token");

  return (
    <header className="header-nav">
      <NavLink to="/" className="navbar-left">
        <p className="">
          Sport<span className="orange">ner</span>
        </p>
      </NavLink>
      <nav className="navbar-right">
        <NavLink to="/events" className="nav-explore">
          Explore
        </NavLink>
        {/* Afficher "Profil" si un token existe, sinon afficher "Créer un compte/connexion" */}
        {token ? (
          <NavLink to="/profile" className="nav-event">
            Profil
          </NavLink>
        ) : (
          <NavLink to="/login" className="nav-event">
            Créer un compte/connexion
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

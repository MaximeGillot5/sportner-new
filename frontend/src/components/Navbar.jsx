import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        <NavLink to="/" className="nav-event">
          Create Event
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

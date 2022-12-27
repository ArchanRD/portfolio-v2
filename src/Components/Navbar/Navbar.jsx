import "./navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = (props) => {
  const [active, setActive] = useState(false);

  function showMenu(event) {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  }
  return (
    <div className="navbar">
      <nav>
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <h1 className="brand-name">
              Archan<span className="hlgt">RD</span>
            </h1>
          </Link>

          <div className="menu" onClick={showMenu}>
            <i className="bi bi-list"></i>
          </div>
        </div>
        <div className="nav-items">
          <ul className={active ? "active" : ""}>
            <Link to="/myskills" className="nav-fff">
              <li className={`nav-link ${props.myskills}`}>
                MySkills
              </li>
            </Link>

            <Link to="/about" className="nav-fff">
              <li className={`nav-link ${props.about}`}>About</li>
            </Link>

            <Link to="/projects" className="nav-fff">
              <li className={`nav-link ${props.projects}`}>Projects</li>
            </Link>

            <Link to="/" className="nav-fff">
              <li className={`nav-link ${props.archives}`}>Archives</li>
            </Link>
            <Link to="/contact" className="nav-fff">
              <li className={`nav-link ${props.contact}`}>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

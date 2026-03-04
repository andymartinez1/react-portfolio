import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AboutIcon from '../../assets/img/icons/About.svg';
import EducationIcon from '../../assets/img/icons/Education.svg';
import HomeIcon from '../../assets/img/icons/Home.svg';
import ProjectsIcon from '../../assets/img/icons/Projects.svg';
import Logo from '../../assets/img/logos/Logo-White-T.webp';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // To open and close the hamburger menu with "X" or link click
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // To close the navbar upon clicking outside of it
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="navbar-logo-icon" />
          <p className="navbar-logo-text">&nbsp;&nbsp;Andrew Martinez</p>
        </div>

        <ul className="desktop-links">
          <li className="navbar-list-item">
            <NavLink to="/">
              <img src={HomeIcon} alt="home" />
              <p> &nbsp; Home</p>
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/about">
              <img src={AboutIcon} alt="about" /> <p> &nbsp; About</p>
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/education">
              <img src={EducationIcon} alt="education" /> <p> &nbsp; Education</p>
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/projects">
              <img src={ProjectsIcon} alt="projects" /> <p> &nbsp; Projects</p>
            </NavLink>
          </li>
        </ul>

        <div>
          <button className="toggle-menu" onClick={toggleNavbar}>
            {isOpen ? <X size={48} /> : <Menu size={48} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="mobile-links" ref={ref}>
          <li className="navbar-list-item">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              <img src={HomeIcon} alt="home" /> <p> &nbsp; Home</p>
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              <img src={AboutIcon} alt="about" /> <p> &nbsp; About</p>
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/education" onClick={() => setIsOpen(false)}>
              <img src={EducationIcon} alt="education" /> <p> &nbsp; Education</p>
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/projects" onClick={() => setIsOpen(false)}>
              <img src={ProjectsIcon} alt="projects" /> <p> &nbsp; Projects</p>
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
}

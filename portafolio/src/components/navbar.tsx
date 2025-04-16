import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link className="nav-item" to="/">
          Home
        </Link>
        <Link className="nav-item" to="/about">
          About
        </Link>
        <Link className="nav-item" to="/contact">
          Contact
        </Link>
        <Link className="nav-item" to="/projects">
          Projects
        </Link>
      </nav>
    </>
  );
};

export default Navbar;

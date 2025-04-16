import { Link } from 'react-router-dom';

import Navbar from './navbar';
const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="logo" width={85} />
        </Link>
        <Navbar />
      </header>
    </>
  );
};

export default Header;

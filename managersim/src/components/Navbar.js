import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '15px', color: '#fff' }}>
        Home
      </Link>
      <Link to="/about" style={{ color: '#fff' }}>
        About
      </Link>
    </nav>
  );
}

export default Navbar;

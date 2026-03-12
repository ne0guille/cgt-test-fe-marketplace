import { Link } from 'react-router';

function Header() {
  return (
    <header>
      90s shop
      <nav>
        <ul style={{listStyleType: 'none', display: 'flex'}}>
          <li><Link to="/">Home</Link></li>
          |
          <li><Link to="/cart">Cart (0)</Link></li>
        </ul>
      </nav>
      <hr/>
    </header>
  );
}

export default Header;

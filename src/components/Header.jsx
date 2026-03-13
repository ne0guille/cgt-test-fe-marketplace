import { NavLink } from 'react-router';
import { useCartData } from '../context/CartContext';

function Header() {
  const { cartCount } = useCartData();
  const linkClass = ({ isActive }) =>
    `transition-colors ${isActive ? 'text-primary font-semibold' : 'text-secondary hover:text-primary'}`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200 px-md py-sm">
      <div className="max-w-content mx-auto flex items-center justify-between">
        <span className="text-lg font-bold">90s shop</span>
        <nav>
          <ul className="flex gap-md list-none">
            <li><NavLink to="/" end className={linkClass}>Home</NavLink></li>
            <li><NavLink to="/cart" className={linkClass}>Cart ({cartCount})</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import { NavMenu, NavStyledLink } from './Navbar.styled';

function Navbar() {
  return (
    <nav>
      <NavMenu>
        <li>
          <NavStyledLink to="/">Home</NavStyledLink>
        </li>
        <li>
          <NavStyledLink to="news">News</NavStyledLink>
        </li>
        <li>
          <NavStyledLink to="dashboard">CineMansion</NavStyledLink>
        </li>
      </NavMenu>
    </nav>
  );
}

export default Navbar;

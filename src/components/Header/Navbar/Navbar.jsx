import { NavMenu, StyledNavLink } from './Navbar.styled';
import { navbarPublicLinks } from 'services/sources/navbarPublicLinkSource';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';

function Navbar() {
  const isUserAuth = useSelector(selectUser);

  const handleNavLinkClick = () => {
    sessionStorage.removeItem('isFirstDashboard');
  };

  return (
    <nav>
      <NavMenu>
        {navbarPublicLinks.map(({ id, link, content }) => (
          <li key={id}>
            <StyledNavLink to={link} onClick={handleNavLinkClick}>
              {content}
            </StyledNavLink>
          </li>
        ))}
        {isUserAuth && (
          <li>
            <StyledNavLink to="dashboard" onClick={handleNavLinkClick}>
              CineMansion
            </StyledNavLink>
          </li>
        )}
      </NavMenu>
    </nav>
  );
}

export default Navbar;

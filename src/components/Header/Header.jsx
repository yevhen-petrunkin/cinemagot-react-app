import { HeaderBox, LogoBox, ImgBox } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import Navbar from './Navbar';
import SearchForm from './SearchForm';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu/UserMenu';
import logo from '../../images/logo.jpg';

function Header() {
  const isUserAuth = useSelector(selectUser);

  return (
    <HeaderBox>
      <LogoBox>
        <ImgBox>
          <img src={logo} alt="logo" width="100%" />
        </ImgBox>
        <span>CINEMAGOT</span>
      </LogoBox>
      <Navbar />
      <SearchForm />
      {isUserAuth ? <UserMenu /> : <AuthNav />}
    </HeaderBox>
  );
}

export default Header;

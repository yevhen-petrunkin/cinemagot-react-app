import { HeaderBox } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import Navbar from './Navbar';
import SearchForm from './SearchForm';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu/UserMenu';

function Header() {
  const isUserAuth = useSelector(selectUser);
  console.log(isUserAuth);

  return (
    <HeaderBox>
      <span>Logo</span>
      <Navbar />
      <SearchForm />
      {isUserAuth ? <UserMenu /> : <AuthNav />}
    </HeaderBox>
  );
}

export default Header;

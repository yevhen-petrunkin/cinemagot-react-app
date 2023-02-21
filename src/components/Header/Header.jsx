import { HeaderBox } from './Header.styled';
import Navbar from './Navbar';
import SearchForm from './SearchForm';
import AuthNav from './AuthNav';

function Header() {
  return (
    <HeaderBox>
      <span>Logo</span>
      <Navbar />
      <SearchForm />
      <AuthNav />
    </HeaderBox>
  );
}

export default Header;

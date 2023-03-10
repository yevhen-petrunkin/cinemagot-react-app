import { LogoBox, ImgBox, LogoText } from './Logo.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { useMedia } from 'services/media/useMedia';
import logo from '../../images/logo.jpg';

function Logo() {
  const isUserAuth = useSelector(selectUser);

  const { isTiny } = useMedia();

  return (
    <LogoBox>
      <ImgBox>
        <img src={logo} alt="logo" width="100%" />
      </ImgBox>
      {(!isUserAuth || isTiny) && <LogoText>Cinemagot</LogoText>}
    </LogoBox>
  );
}

export default Logo;

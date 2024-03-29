import { LogoBox, ImgBox, Img, LogoText } from './Logo.styled';
import { useSelector } from 'react-redux';
import { selectUser, selectLoading } from 'redux/selectors';
import { useMedia } from 'services/media/useMedia';
import logo from '../../images/logo.jpg';

function Logo() {
  const isUserAuth = useSelector(selectUser);
  const isLoading = useSelector(selectLoading);

  const { isTiny } = useMedia();

  return (
    <LogoBox>
      <ImgBox>
        <Img src={logo} alt="logo" />
      </ImgBox>
      {!isLoading && (!isUserAuth || isTiny) && <LogoText>Cinemagot</LogoText>}
    </LogoBox>
  );
}

export default Logo;

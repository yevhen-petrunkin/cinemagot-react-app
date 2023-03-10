import { HeaderSection, HeaderBg, HeaderBox } from './Header.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectBurger } from 'redux/selectors';
import { toggleBurger } from 'redux/redux-slices/modalSlice';
import { useMedia } from 'services/media/useMedia';
import { FreeContainer } from 'components/Container';
import Logo from 'components/Logo';
import Navbar from './Navbar';
import SearchForm from './SearchForm';
import UserMenu from './UserMenu/UserMenu';
import IconButton from 'components/IconButton';
import Burger from 'components/Burger';

import { SlMenu } from 'react-icons/sl';

function Header() {
  const dispatch = useDispatch();

  const isUserAuth = useSelector(selectUser);
  const isBurgerOpen = useSelector(selectBurger);

  const { isTiny, isLowerSmall } = useMedia();

  useEffect(() => {
    const body = document.querySelector('body');

    if (isBurgerOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }, [isBurgerOpen]);

  return (
    <>
      <HeaderSection>
        <HeaderBg>
          <FreeContainer>
            <HeaderBox>
              {isTiny && (
                <IconButton
                  type="button"
                  width={36}
                  height={36}
                  bgcolor="#4d4352"
                  onClick={() => dispatch(toggleBurger())}
                >
                  <SlMenu style={{ width: '100%', height: '100%' }} />
                </IconButton>
              )}
              {!isTiny && (
                <>
                  {!isLowerSmall ? <Logo /> : !isUserAuth && <Logo />}
                  <Navbar />
                </>
              )}
              <SearchForm />
              {isUserAuth && !isTiny && <UserMenu />}
            </HeaderBox>
          </FreeContainer>
        </HeaderBg>
      </HeaderSection>
      {isTiny && <Burger active={isBurgerOpen} />}
    </>
  );
}

export default Header;

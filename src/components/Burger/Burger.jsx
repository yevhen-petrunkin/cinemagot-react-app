import { BurgerBox, BurgerBackdrop } from './Burger.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectBurger } from 'redux/selectors';
import { toggleBurger } from 'redux/redux-slices/modalSlice';
import Logo from 'components/Logo';
import Navbar from 'components/Header/Navbar';
import UserMenu from 'components/Header/UserMenu/UserMenu';

function Burger() {
  const dispatch = useDispatch();
  const isBurgerOpen = useSelector(selectBurger);

  return (
    <BurgerBackdrop
      active={isBurgerOpen}
      onClick={() => dispatch(toggleBurger())}
    >
      <BurgerBox>
        <Logo />
        <Navbar />
        <UserMenu />
      </BurgerBox>
    </BurgerBackdrop>
  );
}

export default Burger;

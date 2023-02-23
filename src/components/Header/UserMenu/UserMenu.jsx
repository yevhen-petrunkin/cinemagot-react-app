import { MenuBox, LogOutBtn } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';
import { logOut } from 'redux/firebaseOperations';

const UserMenu = () => {
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  return (
    <div>
      <MenuBox>
        <span>Username</span>
        <LogOutBtn onClick={() => dispatch(logOut())} type="button">
          Log Out
        </LogOutBtn>
      </MenuBox>
      {isError && <span>Could not log out</span>}
    </div>
  );
};

export default UserMenu;

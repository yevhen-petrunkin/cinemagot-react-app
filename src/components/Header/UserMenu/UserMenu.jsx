import { MenuBox, LogOutBtn } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectError } from 'redux/selectors';
import { logOut } from 'redux/redux-operations/firebaseOperations';

const UserMenu = () => {
  const { userName } = useSelector(selectUser);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  return (
    <div>
      <MenuBox>
        <span>{userName}</span>
        <LogOutBtn onClick={() => dispatch(logOut())} type="button">
          Log Out
        </LogOutBtn>
      </MenuBox>
      {isError && <span>Could not log out</span>}
    </div>
  );
};

export default UserMenu;

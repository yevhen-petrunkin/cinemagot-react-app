import { MenuBox } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectError } from 'redux/selectors';
import { logOut } from 'redux/redux-operations/firebaseOperations';
import { clearUserLists } from 'redux/redux-slices/userListSlice';
import Button from 'components/Button';

const UserMenu = () => {
  const { userName } = useSelector(selectUser);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(clearUserLists());
    sessionStorage.removeItem('isFirstDashboard');
    sessionStorage.removeItem('isUserIn');
  };

  return (
    <div>
      <MenuBox>
        <span>{userName}</span>
        <Button
          id="logout"
          type="button"
          text="Log Out"
          fontSize="18"
          onClick={handleLogOut}
        />
      </MenuBox>
      {isError && <span>Could not log out</span>}
    </div>
  );
};

export default UserMenu;

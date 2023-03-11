import { MenuBox, UserBox } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectError } from 'redux/selectors';
import { logOut } from 'redux/redux-operations/firebaseOperations';
import { clearUserLists } from 'redux/redux-slices/userListSlice';
import { useMedia } from 'services/media/useMedia';
import Button from 'components/Button';
import IconButton from 'components/IconButton';

import { SlUser, SlLogout } from 'react-icons/sl';

const UserMenu = () => {
  const isUserAuth = useSelector(selectUser);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  const {
    isTiny,
    isSmall,
    isLowerSmall,
    isHigher,
    isHigherMedium,
    isExtraLarge,
    isHuge,
  } = useMedia();

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(clearUserLists());
    sessionStorage.removeItem('isFirstDashboard');
    sessionStorage.removeItem('isUserIn');
    sessionStorage.removeItem('mute');
  };

  return (
    <>
      <MenuBox>
        <UserBox>
          {!isLowerSmall && isUserAuth && (
            <SlUser style={{ width: '100%', height: '100%' }} />
          )}
          {(isHigher || isTiny) && isUserAuth && (
            <span>{isUserAuth.userName}</span>
          )}
        </UserBox>

        {(isHuge || isExtraLarge || isTiny) && (
          <Button
            id="logout"
            type="button"
            text="Log Out"
            fontSize={16}
            onClick={handleLogOut}
          />
        )}
        {(isHigherMedium || isSmall) && (
          <IconButton
            type="button"
            width={36}
            height={36}
            bgcolor="#4d4352"
            onClick={handleLogOut}
          >
            <SlLogout style={{ width: '100%', height: '100%' }} />
          </IconButton>
        )}
      </MenuBox>
      {isError && <span>Oops... Something went wrong!</span>}
    </>
  );
};

export default UserMenu;

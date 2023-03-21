import { MenuBox, UserBox, Avatar } from './UserMenu.styled';
import { useTheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectError } from 'redux/selectors';
import { logOut } from 'redux/redux-operations/firebaseOperations';
import { clearUserLists } from 'redux/redux-slices/userListSlice';
import { useMedia } from 'services/media/useMedia';
import Button from 'components/Button';
import IconButton from 'components/IconButton';

import { RiLogoutBoxRLine } from 'react-icons/ri';

const UserMenu = () => {
  const { colors } = useTheme();

  const isUserAuth = useSelector(selectUser);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();

  const { isTiny, isSmall, isHigher, isHigherMedium, isExtraLarge, isHuge } =
    useMedia();

  const handleLogOut = () => {
    sessionStorage.removeItem('isFirstDashboard');
    sessionStorage.removeItem('isUserIn');
    sessionStorage.removeItem('mute');
    dispatch(logOut());
    dispatch(clearUserLists());
  };

  return (
    <>
      <MenuBox>
        <UserBox>
          {isUserAuth && <Avatar src={isUserAuth.userPhoto} alt="avatar" />}
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
            bgcolor={colors.secondaryStrong}
            onClick={handleLogOut}
          >
            <RiLogoutBoxRLine style={{ width: '100%', height: '100%' }} />
          </IconButton>
        )}
      </MenuBox>
      {isError && <span>Oops... Something went wrong!</span>}
    </>
  );
};

export default UserMenu;

import {
  DashContainer,
  DashBox,
  UserBox,
  UserCaption,
  UserImg,
  Img,
  UserList,
  UserItem,
  UserBtnSet,
} from './Dashboard.styled';
import { useTheme } from 'styled-components';
import { useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUser,
  selectExtraUser,
  selectPhotopicker,
  selectTheme,
} from 'redux/selectors';
import { openPhotopicker } from 'redux/redux-slices/modalSlice';
import { toggleTheme } from 'redux/redux-slices/themeSlice';
import { useMedia } from 'services/media/useMedia';
import { FreeContainer } from 'components/Container';
import DashMenu from 'components/DashMenu';
import Button from 'components/Button';
import IconButton from 'components/IconButton';
import LoaderComp from 'components/Loader';
import Photopicker from 'components/Photopicker';
import placeholder from 'images/logo.jpg';

import { RxAvatar, RxHalf2 } from 'react-icons/rx';

function Dashboard() {
  const { colors } = useTheme();
  const { isTiny, isLowerSmall } = useMedia();
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const userExtraData = useSelector(selectExtraUser);
  const isPhotopickerOpen = useSelector(selectPhotopicker);
  const isDefaultTheme = useSelector(selectTheme);

  useEffect(() => {
    const body = document.querySelector('body');

    if (isPhotopickerOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }, [isPhotopickerOpen]);

  const handleToggleTheme = () => {
    localStorage.setItem('defaultTheme', !isDefaultTheme);
    dispatch(toggleTheme(!isDefaultTheme));
  };

  return (
    <section>
      <FreeContainer>
        <DashContainer>
          <DashBox>
            <UserBox>
              <UserCaption>My CineMansion</UserCaption>
              <UserImg>
                <Img src={userData.userPhoto || placeholder} alt="magot" />
              </UserImg>
              <UserList>
                {userData && <UserItem>{userData.userName}</UserItem>}
                {userExtraData && (
                  <UserItem>
                    from <span>{userExtraData.country}</span>
                  </UserItem>
                )}
              </UserList>
              <UserBtnSet>
                {isTiny || isLowerSmall ? (
                  <>
                    <IconButton
                      type="button"
                      title="Change avatar"
                      width={36}
                      height={36}
                      bgcolor={colors.secondaryStrong}
                      onClick={() => dispatch(openPhotopicker())}
                    >
                      <RxAvatar style={{ width: '100%', height: '100%' }} />
                    </IconButton>
                    <IconButton
                      type="button"
                      title="Change theme"
                      width={36}
                      height={36}
                      bgcolor={colors.secondaryStrong}
                      onClick={handleToggleTheme}
                    >
                      <RxHalf2 style={{ width: '100%', height: '100%' }} />
                    </IconButton>
                  </>
                ) : (
                  <>
                    <Button
                      id="avatar"
                      title="Change avatar"
                      type="button"
                      text="Avatar"
                      fontSize="16"
                      onClick={() => dispatch(openPhotopicker())}
                    />
                    <Button
                      id="theme"
                      title="Change theme"
                      type="button"
                      text="Theme"
                      fontSize="16"
                      onClick={handleToggleTheme}
                    />
                  </>
                )}
              </UserBtnSet>
              {isPhotopickerOpen && <Photopicker />}
            </UserBox>
            <DashMenu />
          </DashBox>
          <Suspense fallback={<LoaderComp />}>
            <Outlet />
          </Suspense>
        </DashContainer>
      </FreeContainer>
    </section>
  );
}

export default Dashboard;

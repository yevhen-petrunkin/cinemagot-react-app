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
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser, selectExtraUser } from 'redux/selectors';
import { useMedia } from 'services/media/useMedia';
import { FreeContainer } from 'components/Container';
import DashMenu from 'components/DashMenu';
import Button from 'components/Button';
import IconButton from 'components/IconButton';
import LoaderComp from 'components/Loader';
import magot from '../../images/logo.jpg';

import { RxAvatar, RxHalf2 } from 'react-icons/rx';

function Dashboard() {
  const { isTiny, isLowerSmall } = useMedia();
  const userData = useSelector(selectUser);
  const userExtraData = useSelector(selectExtraUser);

  return (
    <section>
      <FreeContainer>
        <DashContainer>
          <DashBox>
            <UserBox>
              <UserCaption>My CineMansion</UserCaption>
              <UserImg>
                <Img src={magot} alt="magot" />
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
                      bgcolor="#4d4352"
                      onClick={() => {
                        return;
                      }}
                    >
                      <RxAvatar style={{ width: '100%', height: '100%' }} />
                    </IconButton>
                    <IconButton
                      type="button"
                      title="Change theme"
                      width={36}
                      height={36}
                      bgcolor="#4d4352"
                      onClick={() => {
                        return;
                      }}
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
                      onClick={() => {
                        return;
                      }}
                    />
                    <Button
                      id="theme"
                      title="Change theme"
                      type="button"
                      text="Theme"
                      fontSize="16"
                      onClick={() => {
                        return;
                      }}
                    />
                  </>
                )}
              </UserBtnSet>
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

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
import { FreeContainer } from 'components/Container';
import DashMenu from 'components/DashMenu';
import Button from 'components/Button';
import LoaderComp from 'components/Loader';
import magot from '../../images/logo.jpg';

function Dashboard() {
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
                <Button
                  id="avatar"
                  type="button"
                  text="Avatar"
                  fontSize="16"
                  onClick={() => {
                    return;
                  }}
                />
                <Button
                  id="theme"
                  type="button"
                  text="Theme"
                  fontSize="16"
                  onClick={() => {
                    return;
                  }}
                />
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

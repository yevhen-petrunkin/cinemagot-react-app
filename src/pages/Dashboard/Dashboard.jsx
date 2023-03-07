import {
  DashContainer,
  DashBox,
  UserBox,
  UserCaption,
  UserImg,
  UserList,
  UserItem,
  UserBtnSet,
} from './Dashboard.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser, selectExtraUser } from 'redux/selectors';
import DashMenu from 'components/DashMenu';
import Button from 'components/Button';
import LoaderComp from 'components/Loader';
import magot from '../../images/logo.jpg';

function Dashboard() {
  const userData = useSelector(selectUser);
  const userExtraData = useSelector(selectExtraUser);

  return (
    <section>
      <DashContainer>
        <DashBox>
          <UserBox>
            <UserCaption>My CineMansion</UserCaption>
            <UserImg>
              <img src={magot} alt="magot" width="100%" />
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

        <div>
          <Suspense fallback={<LoaderComp />}>
            <Outlet />
          </Suspense>
        </div>
      </DashContainer>
    </section>
  );
}

export default Dashboard;

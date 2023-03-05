import {
  DashContainer,
  DashBox,
  UserBox,
  UserCaption,
  UserImg,
  UserList,
  UserItem,
  UserBtnSet,
  UserBtn,
} from './Dashboard.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import DashMenu from 'components/DashMenu';
import LoaderComp from 'components/Loader';
import magot from '../../images/logo.jpg';

function Dashboard() {
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
              <UserItem>Username</UserItem>
              <UserItem>
                from <span>Country</span>
              </UserItem>
            </UserList>
            <UserBtnSet>
              <UserBtn>Avatar</UserBtn>
              <UserBtn>Theme</UserBtn>
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

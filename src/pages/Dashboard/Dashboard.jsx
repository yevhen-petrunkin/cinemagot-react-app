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
import { useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserLists } from 'redux/redux-operations/firebaseOperations';
import { selectUser } from 'redux/selectors';
import DashMenu from 'components/DashMenu';
import LoaderComp from 'components/Loader';
import magot from '../../images/logo.jpg';

function Dashboard() {
  const isUserAuth = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUserAuth) {
      const userId = isUserAuth.userId;
      dispatch(fetchUserLists(userId));
    }
  }, [dispatch, isUserAuth]);

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

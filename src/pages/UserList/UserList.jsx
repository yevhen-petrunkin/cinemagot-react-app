import {
  ListBox,
  List,
  StyledLink,
  MovieImg,
  MovieBox,
  MovieName,
} from './UserList.styled';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectUserListObj,
  selectUser,
  selectListError,
  selectListLoading,
} from 'redux/selectors';
import { dashMenuSource } from 'services/sources/dashMenuSource';
import { GalleryPlaceholder } from 'components/Placeholder';
import UserGalleryBtnSet from 'components/UserGalleryBtnSet/UserGalleryBtnSet';

function UserList() {
  const location = useLocation();
  const { listId } = useParams();
  const userListObj = useSelector(selectUserListObj);
  const isLoading = useSelector(selectListLoading);
  const isError = useSelector(selectListError);
  const user = useSelector(selectUser);
  const [userId, setUserId] = useState('');
  const [list, setList] = useState({});
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);

  useEffect(() => {
    switch (listId) {
      case 'favorites':
        setList(prev => ({
          ...prev,
          userList: dashMenuSource[1].listRef,
          caption: dashMenuSource[1].caption,
          content: dashMenuSource[1].content,
        }));
        break;
      case 'watchlist':
        setList(prev => ({
          ...prev,
          userList: dashMenuSource[2].listRef,
          content: dashMenuSource[2].content,
        }));
        break;
      case 'seenlist':
        setList(prev => ({
          ...prev,
          userList: dashMenuSource[3].listRef,
          content: dashMenuSource[3].content,
        }));
        break;
      default:
        return;
    }
  }, [listId]);

  useEffect(() => {
    if (user) {
      setUserId(user.userId);
    }
  }, [user]);

  return (
    <section>
      <ListBox>
        {isLoading || !userListObj || !list.userList ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>{list.caption}</h2>
            <List>
              {userListObj[list.userList].map(movie => {
                const { id, title, poster } = movie;
                let movieId = '/movies/' + id.toString();
                return (
                  <li key={id}>
                    <StyledLink to={movieId} state={{ from: location }}>
                      <MovieBox>
                        <MovieName>{title}</MovieName>
                        {!isPosterLoaded && <GalleryPlaceholder />}
                        {poster && (
                          <MovieImg
                            src={poster}
                            alt="movieName"
                            onLoad={() => setIsPosterLoaded(true)}
                          />
                        )}
                      </MovieBox>
                    </StyledLink>
                    <UserGalleryBtnSet movieData={{ list, movie, userId }} />
                  </li>
                );
              })}
            </List>
          </>
        )}
        {isError && <p>Oops... Something went wrong!</p>}
      </ListBox>
    </section>
  );
}

export default UserList;

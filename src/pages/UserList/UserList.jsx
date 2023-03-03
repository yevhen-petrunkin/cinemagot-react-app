import {
  ListBox,
  List,
  StyledLink,
  MovieImg,
  MovieBox,
  MovieName,
} from './UserList.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectUserListObj,
  selectListError,
  selectListLoading,
} from 'redux/selectors';
import { dashMenuSource } from 'services/sources/dashMenuSource';
import { GalleryPlaceholder } from 'components/Placeholder';

function UserList() {
  const { listId } = useParams();
  const userListObj = useSelector(selectUserListObj);
  const isLoading = useSelector(selectListLoading);
  const isError = useSelector(selectListError);
  const [list, setList] = useState({});
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);

  useEffect(() => {
    switch (listId) {
      case 'favorites':
        setList(prev => ({
          ...prev,
          userList: dashMenuSource[1].listRef,
          caption: dashMenuSource[1].caption,
        }));
        break;
      case 'watchlist':
        setList(prev => ({
          ...prev,
          userList: dashMenuSource[2].listRef,
          caption: dashMenuSource[2].caption,
        }));
        break;
      case 'seenlist':
        setList(prev => ({
          ...prev,
          userList: dashMenuSource[3].listRef,
          caption: dashMenuSource[3].caption,
        }));
        break;
      default:
        return;
    }
  }, [listId]);

  return (
    <section>
      <ListBox>
        {isLoading || !userListObj || !list.userList ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>{list.caption}</h2>
            <List>
              {userListObj[list.userList].map(({ id, title, poster }) => {
                let movieId = '/movies/' + id.toString();
                return (
                  <li key={id}>
                    <StyledLink to={movieId}>
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

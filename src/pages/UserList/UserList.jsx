import {
  Section,
  Caption,
  List,
  ListItem,
  StyledLink,
  PosterBox,
  MovieBox,
  MovieName,
  InfoBox,
  RateBox,
  Date,
  Info,
  UpButton,
} from './UserList.styled';
import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectUserListObj,
  selectUser,
  // selectListError,
  selectListLoading,
} from 'redux/selectors';
import { db } from '../../firebase';
import { doc } from '@firebase/firestore';
import { useMutation } from '@tanstack/react-query';
import { deleteFromUserList } from 'services/services';
import { dashMenuSource } from 'services/sources/dashMenuSource';
import { messageData } from 'services/sources/messageDataSource';
import UserGalleryBtnSet from 'components/UserGalleryBtnSet';
import CloseButton from 'components/CloseButton';
import { StarWidg, HeartWidg } from 'components/Widgets';
import { TfiAngleUp } from 'react-icons/tfi';

const { movieRemovedFromListMessage, errorRemovingMovieFromListMessage } =
  messageData;

function UserList() {
  const location = useLocation();

  const { listId } = useParams();

  const listRef = useRef(null);

  const userListObj = useSelector(selectUserListObj);
  const isLoading = useSelector(selectListLoading);
  // const isError = useSelector(selectListError);
  const user = useSelector(selectUser);

  const [userId, setUserId] = useState('');
  const [list, setList] = useState({});

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
          caption: dashMenuSource[2].caption,
          content: dashMenuSource[2].content,
        }));
        break;
      case 'seenlist':
        setList(prev => ({
          ...prev,
          userList: dashMenuSource[3].listRef,
          caption: dashMenuSource[3].caption,
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

  const deleteFromListMutation = useMutation(
    ({ list, movie }) => {
      const userListRef = doc(db, 'userLists', userId);
      return deleteFromUserList(userListRef, list, movie);
    },
    {
      onSuccess: () => {
        console.log(movieRemovedFromListMessage);
      },
      onError: () => {
        console.log(errorRemovingMovieFromListMessage);
      },
    }
  );

  const handleDeleteFromUserListBtnClick = movieObj => {
    deleteFromListMutation.mutate(movieObj);
  };

  const scrollToBeginning = () => {
    listRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section>
      {isLoading || !userListObj || !list.userList ? (
        <p>Loading...</p>
      ) : (
        <>
          <Caption>{list.caption}</Caption>
          <List ref={listRef}>
            {userListObj[list.userList].map(movie => {
              const { id, title, poster, overview, popularity, score, date } =
                movie;
              let movieId = '/movies/' + id.toString();
              return (
                <ListItem key={id}>
                  <MovieBox>
                    <PosterBox bgImg={poster} />
                    <InfoBox>
                      <MovieName>{title}</MovieName>
                      <Info>{overview}</Info>

                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <RateBox>
                          <StarWidg number={popularity} />
                          <HeartWidg number={score} />
                        </RateBox>
                        <Date>{date}</Date>
                      </div>
                      <StyledLink to={movieId} state={{ from: location }}>
                        See More
                      </StyledLink>
                    </InfoBox>
                    <CloseButton
                      title="Delete from list"
                      top={8}
                      right={8}
                      onClick={() =>
                        handleDeleteFromUserListBtnClick({
                          list: list.userList,
                          movie,
                        })
                      }
                    />
                  </MovieBox>
                  <UserGalleryBtnSet movieData={{ list, movie, userId }} />
                </ListItem>
              );
            })}
          </List>
          {userListObj[list.userList].length > 4 && (
            <UpButton
              type="button"
              width={36}
              height={36}
              bgcolor="#d24717"
              onClick={scrollToBeginning}
            >
              <TfiAngleUp style={{ width: '100%', height: '100%' }} />
            </UpButton>
          )}
        </>
      )}
    </Section>
  );
}

export default UserList;

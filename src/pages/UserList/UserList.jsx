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
import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectUserListObj,
  selectUser,
  selectListError,
  selectListLoading,
} from 'redux/selectors';
import { db } from '../../firebase';
import { doc } from '@firebase/firestore';
import { useMutation } from '@tanstack/react-query';
import { deleteFromUserList } from 'services';
import { dashMenuSource } from 'services/sources/dashMenuSource';
import { messageData } from 'services/sources/messageDataSource';
import UserGalleryBtnSet from 'components/UserGalleryBtnSet';
import CloseButton from 'components/CloseButton';
import { StarWidg, HeartWidg } from 'components/Widgets';
import { ErrorLoaderAdjust } from 'components/Loader';
import { TfiAngleUp } from 'react-icons/tfi';
import { toast } from 'react-toastify';

const {
  movieRemovedFromListMessage,
  errorRemovingMovieFromListMessage,
  errorMessage,
} = messageData;

const notifyOnRemovedFromList = () =>
  toast.success(movieRemovedFromListMessage);
const notifyOnErrorRemovingFromList = () =>
  toast.error(errorRemovingMovieFromListMessage);

function UserList() {
  const { colors } = useTheme();

  const location = useLocation();

  const { listId } = useParams();

  const listRef = useRef(null);

  const userListObj = useSelector(selectUserListObj);
  const isLoading = useSelector(selectListLoading);
  const isError = useSelector(selectListError);
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
      onSuccess: notifyOnRemovedFromList,
      onError: notifyOnErrorRemovingFromList,
    }
  );

  const handleDeleteFromUserListBtnClick = movieObj => {
    deleteFromListMutation.mutate(movieObj);
  };

  const scrollToBeginning = () => {
    listRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (isError) {
    return <ErrorLoaderAdjust size={100} height={40} text={errorMessage} />;
  }

  return (
    <Section>
      {!isLoading && userListObj && list.userList && (
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
                  <UserGalleryBtnSet movieData={movie} />
                </ListItem>
              );
            })}
          </List>
          {userListObj[list.userList].length > 4 && (
            <UpButton
              type="button"
              width={36}
              height={36}
              bgcolor={colors.accent}
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

UserGalleryBtnSet.propTypes = {
  movieData: PropTypes.shape({
    id: PropTypes.number,
    specificId: PropTypes.string,
    title: PropTypes.string,
    origTitle: PropTypes.string,
    slogan: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
    adult: PropTypes.bool,
    poster: PropTypes.string,
    video: PropTypes.bool,
    date: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    companies: PropTypes.array,
    popularity: PropTypes.number,
    score: PropTypes.number,
    voteCount: PropTypes.number,
  }).isRequired,
};

CloseButton.propTypes = {
  title: PropTypes.string,
  top: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

ErrorLoaderAdjust.propTypes = {
  size: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

StarWidg.propTypes = {
  number: PropTypes.number.isRequired,
};

HeartWidg.propTypes = {
  number: PropTypes.number.isRequired,
};

import { List, VideoBtn } from './VideoList.styled';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPicBoard } from 'redux/selectors';
import { openPicBoard } from 'redux/redux-slices/modalSlice';
import { useQuery } from '@tanstack/react-query';
import { fetchVideosById } from 'services';
import { normalizeVideos } from 'services/normalize';
import PicBoard from 'components/PicBoard';
import Footage from 'components/Footage/Footage';

function VideoList({ movieId }) {
  const [videoUrl, setVideoUrl] = useState('');
  const dispatch = useDispatch();
  const isPicBoardOpen = useSelector(selectPicBoard);

  useEffect(() => {
    const body = document.querySelector('body');

    if (isPicBoardOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }, [isPicBoardOpen]);

  const {
    data: videos,
    isLoading,
    isError,
  } = useQuery(['videos', movieId], () =>
    fetchVideosById(movieId).then(normalizeVideos)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Oops... Something went wrong!</p>;
  }

  const handleVideoBtnClick = address => {
    setVideoUrl(address);
    dispatch(openPicBoard());
  };

  return (
    <>
      <List>
        {videos &&
          videos.map(({ id, videoName, type, date, url }) => (
            <li key={id}>
              <VideoBtn type="button" onClick={() => handleVideoBtnClick(url)}>
                {type}: {videoName} - {date}
              </VideoBtn>
            </li>
          ))}
      </List>
      {isPicBoardOpen && (
        <PicBoard>
          <Footage url={videoUrl} />
        </PicBoard>
      )}
    </>
  );
}

export default VideoList;

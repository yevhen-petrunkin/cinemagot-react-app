import { List, VideoBtn, VideoBox, Video } from './VideoList.styled';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPicBoard } from 'redux/selectors';
import { openPicBoard } from 'redux/redux-slices/modalSlice';
import { useQuery } from '@tanstack/react-query';
import { fetchVideosById, getStartingVideo } from 'services';
import { normalizeVideos } from 'services/normalize';
import PicBoard from 'components/PicBoard';
import Footage from 'components/Footage/Footage';

function VideoList({ movieId }) {
  const [videoUrl, setVideoUrl] = useState('');
  const [autoplayNum, setAutoplayNum] = useState(0);
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
  } = useQuery(['videos', { movieId, autoplayNum }], () =>
    fetchVideosById(movieId).then(data => normalizeVideos(data, autoplayNum))
  );

  useEffect(() => {
    const startingVideo = getStartingVideo(videos);
    if (startingVideo) {
      setVideoUrl(startingVideo.url);
    }
  }, [videos]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Oops... Something went wrong!</p>;
  }

  const handleVideoBtnClick = address => {
    setVideoUrl(address);
    setAutoplayNum(1);
    dispatch(openPicBoard());
  };

  const handleVideoChange = address => {
    setVideoUrl(address);
    setAutoplayNum(0);
  };

  return (
    <div>
      <VideoBox>
        {videoUrl && !isPicBoardOpen && (
          <Video
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></Video>
        )}
      </VideoBox>
      <List>
        {videos &&
          videos.map(({ id, videoName, type, date, url }) => (
            <li key={id}>
              <label>
                <input
                  type="radio"
                  name="footageChoice"
                  value={videoName}
                  onChange={() => handleVideoChange(url)}
                />
                {type}: {videoName} - {date}
              </label>
              <VideoBtn type="button" onClick={() => handleVideoBtnClick(url)}>
                Open Wide
              </VideoBtn>
            </li>
          ))}
      </List>
      {isPicBoardOpen && (
        <PicBoard>
          <Footage url={videoUrl} />
        </PicBoard>
      )}
    </div>
  );
}

export default VideoList;

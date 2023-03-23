import {
  List,
  VideoBtn,
  VideoBox,
  Video,
  VidItem,
  Label,
  Input,
  DateSet,
  Date,
} from './VideoList.styled';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPicBoard } from 'redux/selectors';
import { openPicBoard } from 'redux/redux-slices/modalSlice';
import { useQuery } from '@tanstack/react-query';
import { fetchVideosById, getStartingVideo, normalizeVideos } from 'services';
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
          />
        )}
      </VideoBox>
      <List>
        {videos &&
          videos.map(({ id, videoName, type, date, url }) => (
            <VidItem key={id}>
              <Label>
                <Input
                  type="radio"
                  name="footageChoice"
                  value={videoName}
                  onChange={() => handleVideoChange(url)}
                />
                {type}: {videoName}
              </Label>
              <DateSet>
                <Date>{date}</Date>
                <VideoBtn
                  type="button"
                  onClick={() => handleVideoBtnClick(url)}
                >
                  Open Wide
                </VideoBtn>
              </DateSet>
            </VidItem>
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

VideoList.propTypes = {
  movieId: PropTypes.string.isRequired,
};

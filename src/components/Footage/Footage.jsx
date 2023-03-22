import { VideoBox, Video } from './Footage.styled';
import PropTypes from 'prop-types';

function Footage({ url }) {
  return (
    <VideoBox>
      {url && (
        <Video
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </VideoBox>
  );
}

export default Footage;

Footage.propTypes = {
  url: PropTypes.string.isRequired,
};

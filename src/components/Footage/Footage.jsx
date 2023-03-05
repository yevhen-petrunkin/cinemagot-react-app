import { VideoBox, Video } from './Footage.styled';

function Footage({ url }) {
  return (
    <VideoBox>
      {url && (
        <Video
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Video>
      )}
    </VideoBox>
  );
}

export default Footage;

import { Box, Gallery, Picture, Img } from './PictureGallery.styled';
import { useSelector } from 'react-redux';
import {
  selectPictures,
  selectPicturesLoading,
  selectPicturesError,
} from 'redux/selectors';
import { messageData } from 'services/sources/messageDataSource';

import { LoaderAdjust } from 'components/Loader';
import { ErrorLoaderAdjust } from 'components/Loader';

function PictureGallery() {
  const isLoading = useSelector(selectPicturesLoading);
  const isError = useSelector(selectPicturesError);
  const gallery = useSelector(selectPictures);

  if (isLoading) {
    return <LoaderAdjust size={100} height={90} />;
  }

  if (isError) {
    return (
      <ErrorLoaderAdjust
        size={100}
        height={90}
        text={messageData.errorMessage}
      />
    );
  }

  return (
    <Box>
      {gallery && (
        <Gallery>
          {gallery.map(({ number, url }) => (
            <Picture key={number}>
              <Img src={url} alt={`Picture ${number}`} />
            </Picture>
          ))}
        </Gallery>
      )}
    </Box>
  );
}

export default PictureGallery;

import { Gallery, Picture, Img } from './PictureGallery.styled';
import { useSelector } from 'react-redux';
import {
  selectPictures,
  selectPicturesLoading,
  selectPicturesError,
} from 'redux/selectors';

function PictureGallery() {
  const isLoading = useSelector(selectPicturesLoading);
  const isError = useSelector(selectPicturesError);
  const gallery = useSelector(selectPictures);
  console.log(gallery);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Oops... Something went wrong!</div>;
  }

  return (
    <>
      {gallery && (
        <Gallery>
          {gallery.map(({ number, url }) => (
            <Picture key={number}>
              <Img src={url} alt={`Picture ${number}`} />
            </Picture>
          ))}
        </Gallery>
      )}
    </>
  );
}

export default PictureGallery;

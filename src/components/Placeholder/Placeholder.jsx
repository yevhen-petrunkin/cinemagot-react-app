import {
  GalleryHolder,
  PosterHolder,
  PhotoHolder,
  HolderImg,
} from './Placeholder.styled';
import photoholder from '../../images/photoholder.jpg';
import placeholder from '../../images/placeholder.jpg';

export function GalleryPlaceholder() {
  return (
    <GalleryHolder>
      <HolderImg src={placeholder} alt="placeholder" />
    </GalleryHolder>
  );
}

export function PosterPlaceholder() {
  return (
    <PosterHolder>
      <HolderImg src={placeholder} alt="placeholder" />
    </PosterHolder>
  );
}

export function PhotoPlaceholder() {
  return (
    <PhotoHolder>
      <HolderImg src={photoholder} alt="placeholder" />
    </PhotoHolder>
  );
}

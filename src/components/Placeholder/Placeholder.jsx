import {
  GalleryHolder,
  PosterHolder,
  PhotoHolder,
  HolderImg,
} from './Placeholder.styled';
import placeholder from '../../images/photoholder.jpg';

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
      <HolderImg src={placeholder} alt="placeholder" />
    </PhotoHolder>
  );
}

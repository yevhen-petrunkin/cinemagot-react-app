import { useMediaQuery } from 'react-responsive';
import { MediaContext } from './MediaContext';

const Media = ({ children }) => {
  const isTiny = useMediaQuery({ maxWidth: 479 });
  const isSmall = useMediaQuery({ minWidth: 480, maxWidth: 767 });
  const isLowerSmall = useMediaQuery({ minWidth: 480, maxWidth: 639 });
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isLarge = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
  const isExtraLarge = useMediaQuery({ minWidth: 1200, maxWidth: 1439 });
  const isHuge = useMediaQuery({ minWidth: 1440 });

  const isLower = useMediaQuery({ maxWidth: 767 });
  const isHigherMedium = useMediaQuery({ minWidth: 767, maxWidth: 1199 });
  const isHigher = useMediaQuery({ minWidth: 992 });

  return (
    <MediaContext.Provider
      value={{
        isTiny,
        isSmall,
        isLowerSmall,
        isMedium,
        isLarge,
        isExtraLarge,
        isHuge,
        isLower,
        isHigher,
        isHigherMedium,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export default Media;

// import { useMedia } from 'services/media/useMedia';

// const { isTiny, isSmall, isMedium, isLarge, isExtraLarge, isHuge } =
//   useMedia();

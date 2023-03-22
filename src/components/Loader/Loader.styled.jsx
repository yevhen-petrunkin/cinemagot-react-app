import styled from 'styled-components';

export const BoxAdjust = styled.div`
  ${({
    theme: {
      space,
      colors,
      fontSizes,
      fontWeights,
      lineHeights,
      letterSpacings,
      sizes,
      borders,
      radii,
      zIndices,
      shadows,
      mediaQueries,
    },
    height,
  }) => `
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${height}vh;
  
  `}
`;

export const Box = styled.div`
  ${({
    theme: {
      space,
      colors,
      fontSizes,
      fontWeights,
      lineHeights,
      letterSpacings,
      sizes,
      borders,
      radii,
      zIndices,
      shadows,
      mediaQueries,
    },
  }) => `
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  
  `}
`;

export const ErrorBox = styled.div`
  ${({
    theme: {
      space,
      colors,
      fontSizes,
      fontWeights,
      lineHeights,
      letterSpacings,
      sizes,
      borders,
      radii,
      zIndices,
      shadows,
      mediaQueries,
    },
  }) => `
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: ${space[5]}px;
  `}
`;

export const ErrorBoxAdjust = styled.div`
  ${({
    theme: {
      space,
      colors,
      fontSizes,
      fontWeights,
      lineHeights,
      letterSpacings,
      sizes,
      borders,
      radii,
      zIndices,
      shadows,
      mediaQueries,
    },
    height,
  }) => `
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${height}vh;
  gap: ${space[5]}px;
  `}
`;

export const Wrapper = styled.div`
  ${({
    theme: {
      space,
      colors,
      fontSizes,
      fontWeights,
      lineHeights,
      letterSpacings,
      sizes,
      borders,
      radii,
      zIndices,
      shadows,
      mediaQueries,
    },
    size,
  }) => `
  width: ${size}px;
  height: ${size}px;
  
  `}
`;

export const Circle = styled.div`
  ${({
    theme: {
      space,
      colors,
      fontSizes,
      fontWeights,
      lineHeights,
      letterSpacings,
      sizes,
      borders,
      radii,
      zIndices,
      shadows,
      mediaQueries,
    },
  }) => `
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top-color: ${colors.success};
  border-radius: 50%;
  
  -webkit-animation: spin 2s linear infinite;
  -moz-animation: spin 2s linear infinite;
  -o-animation: spin 2s linear infinite;
  -ms-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    border: 3px solid transparent;
    border-top-color: ${colors.accent};
    border-radius: 50%;
        
    -webkit-animation: spin 3s linear infinite;
    -moz-animation: spin 3s linear infinite;
    -o-animation: spin 3s linear infinite;
    -ms-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite;
  }
  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    bottom: 15px;
    right: 15px;
    border: 3px solid transparent;
    border-top-color: ${colors.star};
    border-radius: 50%;
    
    -webkit-animation: spin 1.5s linear infinite;
    -moz-animation: spin 1.5s linear infinite;
    -o-animation: spin 1.5s linear infinite;
    -ms-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
  }
 
  `}

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-moz-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-o-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-ms-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const ErrorText = styled.span`
  font-size: ${p => p.theme.fontSizes[3]}px;
  text-shadow: ${p => p.theme.shadows.textOrdinary};
  color: ${p => p.theme.colors.defaultWeak};
`;

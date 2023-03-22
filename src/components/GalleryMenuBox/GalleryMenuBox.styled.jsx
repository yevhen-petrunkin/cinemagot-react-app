import styled from 'styled-components';

export const MenuBox = styled.div`
  ${({
    theme: { space, colors, fontSizes, sizes, zIndices, shadows, mediaQueries },
    isActive,
  }) => `
  position: absolute;
  z-index: ${zIndices[2]};
  padding: ${space[1] * 8}px ${space[1] * 8}px;
  padding-right: ${space[1] * 13}px;
  margin-bottom: ${space[5]}px;
  width: ${sizes[1] * 95}px;
  height: ${sizes[1] * 184}px;
  font-size: ${fontSizes[2]}px;
  color: ${colors.defaultWeak};
  text-shadow: ${shadows.textOrdinary};
  background-color: ${colors.primary};
  box-shadow: ${shadows.ordinary};
  transform: translateX(${isActive ? -380 : 0}px);
  opacity: ${isActive ? 0 : 1};
  transition: opacity 700ms ease, transform 700ms ease; 
  
  ${mediaQueries.huge} {
    width: ${sizes[1] * 132}px;
    height: ${sizes[1] * 255}px;
    transform: translateX(${isActive ? -528 : 0}px);
    font-size: ${fontSizes[5]}px;
  }

  ${mediaQueries.extraLarge} {
    width: ${sizes[1] * 95}px;
    height: ${sizes[1] * 192}px;
    transform: translateX(${isActive ? -380 : 0}px);
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.large} {
    width: ${sizes[1] * 95}px;
    height: ${sizes[1] * 192}px;
    transform: translateX(${isActive ? -380 : 0}px);
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.medium} {
    padding: ${space[5]}px ${space[1] * 7}px;
    width: ${sizes[1] * 86}px;
    height: ${sizes[1] * 167}px;
    transform: translateX(${isActive ? -344 : 0}px);
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.small} {
    padding: ${space[5]}px ${space[1] * 7}px;
    width: ${sizes[1] * 86}px;
    height: ${sizes[1] * 167}px;
    transform: translateX(${isActive ? -344 : 0}px);
    font-size: ${fontSizes[2]}px;     
  }

  ${mediaQueries.tiny} {
    padding: ${space[5]}px ${space[1] * 7}px;
    width: ${sizes[1] * 80}px;
    height: ${sizes[1] * 167}px;
    transform: translateX(${isActive ? -320 : 0}px);
    font-size: ${fontSizes[2]}px;     
  }
  `}
`;

export const HomeCaption = styled.h2`
  ${({ theme: { space, colors, fontSizes, shadows, mediaQueries } }) => `
  margin: ${space[0]}px;
  margin-bottom: ${space[2]}px;
  padding: ${space[0]}px;
  font-size: ${fontSizes[5]}px;
  color: ${colors.accentWeak};
  text-transform: uppercase;
  text-shadow: ${shadows.textOrdinary}; 
  
  ${mediaQueries.huge} {
    margin-bottom: ${space[4]}px;
    font-size: ${fontSizes[0] * 5}px;

  }

  ${mediaQueries.extraLarge} {
    margin-bottom: ${space[2]}px;
    font-size: ${fontSizes[5]}px;
  }

  ${mediaQueries.medium} {
    margin-bottom: ${space[3]}px;
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.small} {
    margin-bottom: ${space[3]}px;
    font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
    margin-bottom: ${space[3]}px;
    font-size: ${fontSizes[2]}px;
  }
  `}
`;

export const MenuCtrlSet = styled.div`
  ${({ theme: { space, mediaQueries } }) => `
  position: absolute;
  top: ${space[1] * 10}px;
  right: ${space[2]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${space[2]}px; 
  
  ${mediaQueries.huge} {
    top: ${space[1] * 10}px;
  }

  ${mediaQueries.extraLarge} {
    top: ${space[1] * 9}px;
  }

  ${mediaQueries.medium} {
    top: ${space[1] * 14}px;
    right: ${space[1] * 6}px;
  }

  ${mediaQueries.small} {
    top: ${space[1] * 14}px;
    right: ${space[1] * 6}px;
  }

  ${mediaQueries.tiny} {
    top: ${space[1] * 14}px;
    right: ${space[1] * 6}px;
  }
  `}
`;

export const Menu = styled.ul`
  ${({ theme: { space, mediaQueries } }) => `
  padding: ${space[0]}px;
  margin: ${space[0]}px;
  list-style: none; 
    
  `}
`;

export const MenuItem = styled.li`
  ${({ theme: { space, colors, mediaQueries } }) => `
  padding-top: ${space[1] * 6}px;

  &:hover,
  &:focus {
    color: ${colors.accentWeak};
  } 
    
  `}
`;

export const Label = styled.label`
  width: 100%;
  cursor: pointer;
`;

export const Input = styled.input`
  ${({ theme: { space, colors, fontSizes, sizes, radii, mediaQueries } }) => `
  margin-top: ${space[2]}px;
  margin-left: ${space[3]}px;
  display: inline-block;
  width: 47%;
  height: ${sizes[1] * 10}px;
  font-size: ${fontSizes[2]}px;
  color: ${colors.secondaryStrong};
  border: none;
  border-radius: ${radii[1]}px;
  outline: none;

  &:hover,
  &focus {
    outline: none;
  } 
  
  ${mediaQueries.huge} {
    margin-top: ${space[1] * 6}px;
    width: 40.2%;
  }

  ${mediaQueries.extraLarge} {
    width: 47%;
  }

  ${mediaQueries.large} {
    width: 47%;
  }

  ${mediaQueries.medium} {
    margin-top: ${space[2]}px;
    width: 45.5%;
    font-size: ${fontSizes[1]}px;
  }

  ${mediaQueries.small} {
    margin-top: ${space[2]}px;
    width: 45.5%;
    font-size: ${fontSizes[1]}px;
    
  }

  ${mediaQueries.tiny} {
    margin-top: ${space[2]}px;
    width: 40.5%;
    font-size: ${fontSizes[1]}px;
    
  }
  `}
`;

export const OpenSection = styled.div`
  position: relative;
`;

export const UpButton = styled.button`
  ${({
    theme: { space, colors, borders, radii, shadows },
    width,
    height,
    bgcolor,
  }) => `
  margin: ${space[1] * 10}px auto;
  padding: ${space[2]}px;
  display: block;
  width: ${width}px;
  height: ${height}px;
  color: ${colors.defaultWeak};
  background-color: ${bgcolor};
  border: ${borders.btn};
  border-radius: ${radii[1]}px;
  box-shadow: ${shadows.ordinary};
  overflow: hidden;
  cursor: pointer;
  transition: color 300ms ease, border 300ms ease;

  &:hover,
  &:focus {
    border: ${borders.btnHover};
  }

  &:active {
    color: ${colors.accentWeak};
  } `}
`;

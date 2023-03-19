import styled from 'styled-components';
import placeholder from 'images/videoholder.jpg';

export const VideoBox = styled.div`
  ${({ theme: { space, borders, radii, mediaQueries } }) => `
  margin-bottom: ${space[3]}px;
  width: 100%;
  height: 36vw;
  background-image: url(${placeholder});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border: ${borders.video};
  border-radius: ${radii[3]}px;
  overflow: hidden;

  ${mediaQueries.large} {
    height: 52vw; 
  }

  ${mediaQueries.tiny} {
    border-radius: ${radii[2]}px; 
  }
  `}
`;

export const Video = styled.iframe`
  ${({ theme: { mediaQueries } }) => `
  width: 101%;
  height: 101%;
  transform: translate(-2px, -2px);

  ${mediaQueries.tiny} {
    width: 102%;
    height: 102%; 
  }
  `}
`;

export const List = styled.ul`
  ${({ theme: { space, fontSizes, shadows, mediaQueries } }) => `
  margin: ${space[0]};
  padding: ${space[0]};
  list-style: none;
  font-size: ${fontSizes[3]}px;
  text-shadow: ${shadows.textOrdinary};

  ${mediaQueries.small} {
   font-size: ${fontSizes[2]}px;
  }

  ${mediaQueries.tiny} {
    font-size: ${fontSizes[1]}px;
  }
  `}
`;

export const Label = styled.label`
  display: block;
  cursor: pointer;
`;

export const DateSet = styled.div`
  ${({ theme: { space } }) => `
  margin-bottom: ${space[2]}px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  `}
`;

export const Date = styled.p`
  ${({ theme: { space, fontSizes, mediaQueries } }) => `
  margin: ${space[0]};
  font-size: ${fontSizes[2]}px;
  text-align: right;

  ${mediaQueries.small} {
   font-size: ${fontSizes[1]}px;
  }
  
  `}
`;

export const VidItem = styled.li`
  ${({ theme: { space, colors } }) => `
  cursor: pointer;
  transition: color 300ms ease;

  &:hover,
  &:focus {
    color: ${colors.accentWeak};
  }

  &:last-child > ${DateSet} {
    margin-bottom: ${space[0]};
  }
  `}
`;

export const VideoBtn = styled.button`
  ${({ theme: { space, colors, fontSizes, mediaQueries } }) => `
  margin: ${space[0]};
  padding-top: ${space[2]}px;
  padding-bottom: ${space[2]}px;
  color: ${colors.accentWeak};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 300ms ease, text-decoration 300ms ease;

  &:hover,
  &:focus {
    color: ${colors.accent};
    text-decoration: underline;
  }

  ${mediaQueries.tiny} {
    font-size: ${fontSizes[1]}px;
  }
  `}
`;

//------Visually Hidden------

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + label {
    color: ${p => p.theme.colors.accentWeak};
  }
`;

// ------------------------------

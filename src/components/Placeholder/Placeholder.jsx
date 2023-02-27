import { Placeholder } from 'semantic-ui-react';

export function PosterPlaceholder() {
  return (
    <Placeholder
      style={{
        height: 300,
        width: 200,
        borderRadius: '10px',
      }}
    >
      <Placeholder.Image />
    </Placeholder>
  );
}

export function PhotoPlaceholder() {
  return (
    <Placeholder
      style={{
        height: 240,
        width: 160,
        borderRadius: '10px',
      }}
    >
      <Placeholder.Image />
    </Placeholder>
  );
}

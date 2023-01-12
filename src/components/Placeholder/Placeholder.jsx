import { Placeholder } from 'semantic-ui-react';

export function PosterPlaceholder() {
  return (
    <Placeholder style={{ height: 300, width: 200 }}>
      <Placeholder.Image />
    </Placeholder>
  );
}

export function PhotoPlaceholder() {
  return (
    <Placeholder style={{ height: 160, width: 100 }}>
      <Placeholder.Image />
    </Placeholder>
  );
}

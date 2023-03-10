import { Menu, MenuItem, Label, Input } from './GalleryMenu.styled';
import { homePageMenuSource } from 'services/sources/homePageMenuSource';

function GalleryMenu({ onChange }) {
  return (
    <Menu>
      {homePageMenuSource.map(({ id, label, value }) => (
        <MenuItem key={id}>
          <Label>
            <Input
              type="radio"
              name="galleryChoice"
              value={value}
              onChange={onChange}
            />
            {label}
          </Label>
        </MenuItem>
      ))}
    </Menu>
  );
}

export default GalleryMenu;

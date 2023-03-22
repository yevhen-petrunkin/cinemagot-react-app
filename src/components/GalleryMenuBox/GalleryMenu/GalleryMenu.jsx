import { Menu, MenuItem, Label, Input } from './GalleryMenu.styled';
import PropTypes from 'prop-types';
import { homePageMenuSource } from 'services/sources/homePageMenuSource';
import { FaBahai } from 'react-icons/fa';

function GalleryMenu({ onChange }) {
  return (
    <Menu>
      {homePageMenuSource.map(({ id, label, value }) => (
        <MenuItem key={id}>
          <FaBahai
            style={{
              position: 'absolute',
            }}
          />
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

GalleryMenu.propTypes = {
  onChange: PropTypes.func.isRequired,
};

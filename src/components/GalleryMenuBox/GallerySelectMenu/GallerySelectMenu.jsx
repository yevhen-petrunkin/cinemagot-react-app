import { Menu, MenuItem, Label, Input } from './GallerySelectMenu.styled';
import PropTypes from 'prop-types';
import { selectNonMultiFields } from 'services/sources/homePageNonMultiSelectFieldSource';
import { tmdbGenres } from 'services/sources/tmdbGenresSource';

function GallerySelectMenu({ onGenreChange, onOtherChange, object }) {
  return (
    <Menu>
      <MenuItem>
        <Label>
          Select genres:
          <Input
            options={tmdbGenres}
            value={object.genres}
            isMulti={true}
            backspaceRemovesValue={true}
            hideSelectedOptions={true}
            isSearchable={true}
            onChange={onGenreChange}
          />
        </Label>
      </MenuItem>
      <li>
        <Menu>
          {selectNonMultiFields.map(
            ({
              id,
              label,
              optionsSource,
              objValue,
              isBackspaceRemovable,
              hideSelected,
              isSearcheable,
            }) => (
              <MenuItem key={id}>
                <Label>
                  {label}
                  <Input
                    options={optionsSource}
                    value={object[objValue]}
                    backspaceRemovesValue={isBackspaceRemovable}
                    hideSelectedOptions={hideSelected}
                    isSearchable={isSearcheable}
                    onChange={e => onOtherChange(e, objValue)}
                  />
                </Label>
              </MenuItem>
            )
          )}
        </Menu>
      </li>
    </Menu>
  );
}

export default GallerySelectMenu;

GallerySelectMenu.propTypes = {
  onGenreChange: PropTypes.func.isRequired,
  onOtherChange: PropTypes.func.isRequired,
  object: PropTypes.shape({
    genres: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    language: PropTypes.object.isRequired,
    year: PropTypes.object.isRequired,
  }).isRequired,
};

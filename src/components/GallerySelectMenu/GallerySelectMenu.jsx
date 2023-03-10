import { Menu, MenuItem, Label, Input } from './GallerySelectMenu.styled';
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

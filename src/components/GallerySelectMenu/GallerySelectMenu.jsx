import { selectNonMultiFields } from 'services/sources/homePageNonMultiSelectFieldSource';
import { tmdbGenres } from 'services/sources/tmdbGenresSource';
import Select from 'react-select';

function GallerySelectMenu({ onGenreChange, onOtherChange, object }) {
  return (
    <ul>
      <li>
        <label>
          Select genres:
          <Select
            options={tmdbGenres}
            value={object.genres}
            isMulti={true}
            backspaceRemovesValue={true}
            hideSelectedOptions={true}
            isSearchable={true}
            onChange={onGenreChange}
          />
        </label>
      </li>
      <li>
        <ul>
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
              <li key={id}>
                <label>
                  {label}
                  <Select
                    options={optionsSource}
                    value={object[objValue]}
                    backspaceRemovesValue={isBackspaceRemovable}
                    hideSelectedOptions={hideSelected}
                    isSearchable={isSearcheable}
                    onChange={e => onOtherChange(e, objValue)}
                  />
                </label>
              </li>
            )
          )}
        </ul>
      </li>
    </ul>
  );
}

export default GallerySelectMenu;

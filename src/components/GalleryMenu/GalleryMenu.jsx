import { homePageMenuSource } from 'services/sources/homePageMenuSource';

function GalleryMenu({ onChange }) {
  return (
    <ul>
      {homePageMenuSource.map(({ id, label, value }) => (
        <li key={id}>
          <label style={{ display: 'block' }}>
            <input
              type="radio"
              name="galleryChoice"
              value={value}
              onChange={onChange}
            />
            {label}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default GalleryMenu;

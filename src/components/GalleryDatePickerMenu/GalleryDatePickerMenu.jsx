import DatePicker from 'react-datepicker';

function GalleryDatePickerMenu({
  onLowerChange,
  onGreaterChange,
  lowerDate,
  greaterDate,
}) {
  return (
    <ul>
      <li>
        <label>
          Movies not later than:
          <DatePicker selected={lowerDate} onChange={onLowerChange} />
        </label>
      </li>
      <li>
        <label>
          Movies not earlier than:
          <DatePicker selected={greaterDate} onChange={onGreaterChange} />
        </label>
      </li>
    </ul>
  );
}

export default GalleryDatePickerMenu;

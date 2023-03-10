import { Menu, MenuItem, Label, Input } from './GalleryDatePickerMenu.styled';

function GalleryDatePickerMenu({
  onLowerChange,
  onGreaterChange,
  lowerDate,
  greaterDate,
}) {
  return (
    <Menu>
      <MenuItem>
        <Label>
          Movies not later than:
          <Input selected={lowerDate} onChange={onLowerChange} />
        </Label>
      </MenuItem>
      <MenuItem>
        <Label>
          Movies not earlier than:
          <Input selected={greaterDate} onChange={onGreaterChange} />
        </Label>
      </MenuItem>
    </Menu>
  );
}

export default GalleryDatePickerMenu;

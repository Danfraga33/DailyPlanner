import React, { FC, ReactElement } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {
  SelectChangeEvent,
} from '@mui/material/Select'; //   SelectChangeEvent,
import { ISelectField } from './interfaces/ISelectField';

export const TaskSelectField: FC<ISelectField> = (
  props,
): ReactElement => {
  const {
    value = '',
    label = 'selectBox',
    name = 'selectBox',
    items = [{ value: '', label: 'Add Items' }],
    disabled = false,
    onChange = (e: SelectChangeEvent) => console.log(e),
  } = props;
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item, index) => (
          <MenuItem key={item.value + index} value={10}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

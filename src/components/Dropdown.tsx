import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface DropdownProps {
  onChange: (value: string | number) => void;
  label: string;
  currentValue: string | number;
  values: (string | number)[];
}

export const Dropdown: React.FC<DropdownProps> = ({
  onChange,
  label,
  currentValue,
  values
}) => {
  const handleChange = (event: SelectChangeEvent<string | number>) => {
    onChange(event.target.value);
  };
  return (
    <Box sx={{ paddingBlockEnd: 2 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={currentValue} label={label} onChange={handleChange}>
          {values.map((value) => (
            <MenuItem key={String(value)} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

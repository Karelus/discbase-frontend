import { FC, useEffect, useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  TextField,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  SelectChangeEvent,
  Typography,
  Button,
  useTheme,
  Stack,
} from "@mui/material";

import { Disc, DiscType, Manufacturer } from "../../Util/types";
import constants from "../../Util/constants";

const initialDisc: Disc = {
  name: "",
  manufacturer: "Discraft",
  type: "putter",
  speed: 2,
  glide: 0,
  turn: 0,
  fade: 0,
};

const AddDisc: FC<{
  addDisc: (data: Disc) => Promise<void>;
  loading: boolean;
  onCancel: () => void;
}> = ({ addDisc, onCancel, loading }) => {
  const theme = useTheme();
  const manufacturers = constants.manufacturers;
  const discTypes = constants.discTypes;

  const [discValues, setDiscValues] = useState<Disc>(initialDisc);

  const handleTextFieldOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDiscValues({
      ...discValues,
      name: event.target.value,
    });
  };

  const handleManufacturerChange = (event: SelectChangeEvent<Manufacturer>) => {
    setDiscValues({
      ...discValues,
      manufacturer: event.target.value as Manufacturer,
    });
  };

  const handleDiscTypeChange = (event: SelectChangeEvent<DiscType>) => {
    setDiscValues({
      ...discValues,
      type: event.target.value as DiscType,
    });
  };

  const handleFlightStatChange = (
    event: ChangeEvent<HTMLInputElement>,
    key: keyof Disc
  ) => {
    setDiscValues({
      ...discValues,
      [key]: event.target.value as unknown as number,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addDisc(discValues);
  };

  useEffect(() => {
    return setDiscValues(initialDisc);
  }, []);

  return (
    <Box sx={{ maxWidth: 500, p: 1 }}>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            backgroundColor: theme.palette.secondary.dark,
            color: "white",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle1">Enter disc details</Typography>
        </Box>
        <FormControl fullWidth variant="filled" sx={{ my: 1 }}>
          <TextField
            required
            color="secondary"
            label="Disc name"
            variant="filled"
            value={discValues.name}
            placeholder="Enter name..."
            onChange={handleTextFieldOnChange}
          />
        </FormControl>
        <FormControl fullWidth variant="filled" sx={{ my: 2 }}>
          <InputLabel id="select-manufacturer-label">
            Select manufacturer
          </InputLabel>
          <Select
            color="secondary"
            id="select-manufacturer"
            labelId="select-manufacturer-label"
            required
            value={discValues.manufacturer}
            onChange={handleManufacturerChange}
          >
            {manufacturers.map((manufacturer) => (
              <MenuItem key={manufacturer} value={manufacturer}>
                {manufacturer}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth variant="filled" sx={{ my: 1 }}>
          <InputLabel id="select-disc-type-label">
            Select type of disc
          </InputLabel>
          <Select
            color="secondary"
            id="select-disc-type"
            labelId="select-disc-type-label"
            required
            value={discValues.type}
            onChange={handleDiscTypeChange}
          >
            {discTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth variant="filled" sx={{ my: 1 }}>
          <Stack direction="row" spacing={1}>
            <TextField
              label="Speed (2-14)"
              type="number"
              variant="filled"
              sx={{ width: "25%" }}
              value={discValues.speed}
              inputProps={{ min: 2, max: 14 }}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleFlightStatChange(event, "speed")
              }
            />
            <TextField
              label="Glide (0-6)"
              type="number"
              variant="filled"
              sx={{ width: "25%" }}
              value={discValues.glide}
              inputProps={{ min: 0, max: 6 }}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleFlightStatChange(event, "glide")
              }
            />
            <TextField
              label="Turn (-5-5)"
              type="number"
              variant="filled"
              sx={{ width: "25%" }}
              value={discValues.turn}
              inputProps={{ min: -5, max: 5 }}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleFlightStatChange(event, "turn")
              }
            />
            <TextField
              label="Fade (0-6)"
              type="number"
              variant="filled"
              sx={{ width: "25%" }}
              value={discValues.fade}
              inputProps={{ min: 0, max: 6 }}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleFlightStatChange(event, "fade")
              }
            />
          </Stack>
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button color="primary" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            disabled={loading}
          >
            Add
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddDisc;

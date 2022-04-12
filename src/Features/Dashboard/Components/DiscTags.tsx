import { FC } from "react";
import { Box, Chip } from "@mui/material";
import { Disc, DiscType } from "Util/types";
import constants from "Util/constants";

const DiscTags: FC<{
  discs: Disc[];
  filters: DiscType[];
  onFilterClick: (type: DiscType) => void;
}> = ({ filters, onFilterClick }) => {
  const discTypes = constants.discTypes;

  return (
    <Box sx={{ width: "100%", mb: 1 }}>
      {discTypes.map((type: DiscType) => (
        <Chip
          key={type}
          sx={{
            m: 0.5,
            background: filters.includes(type)
              ? "rgba(0, 0, 0, 0.29)"
              : "rgba(0, 0, 0, 0.08)",
          }}
          onClick={() => onFilterClick(type)}
          label={type as string}
        />
      ))}
    </Box>
  );
};

export default DiscTags;

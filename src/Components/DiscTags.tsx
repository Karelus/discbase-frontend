import { FC } from "react";
import { Box, Chip } from "@mui/material";
import { Disc, DiscType } from "../Util/types";

const DiscTags: FC<{ discsInBag: Disc[] }> = ({ discsInBag }) => {
  const getDiscCountAsLabel = (type: DiscType, discs: Disc[]): string => {
    let count = 0;
    let discType = type as string;

    // iterate through discs to find the amount
    discs.forEach((disc) => {
      if (disc.type === type) {
        count += 1;
      }
    });

    if (count > 1) {
      discType += "s";
    }

    return `${count} ${discType}`;
  };

  return (
    <Box sx={{ width: "100%", mb: 1 }}>
      <Chip sx={{ m: 0.5 }} label={getDiscCountAsLabel("putter", discsInBag)} />
      <Chip
        sx={{ m: 0.5 }}
        label={getDiscCountAsLabel("midrange", discsInBag)}
      />
      <Chip
        sx={{ m: 0.5 }}
        label={getDiscCountAsLabel("fairway driver", discsInBag)}
      />
      <Chip
        sx={{ m: 0.5 }}
        label={getDiscCountAsLabel("distance driver", discsInBag)}
      />
    </Box>
  );
};

export default DiscTags;

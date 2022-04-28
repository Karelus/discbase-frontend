import { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import constants from "Util/constants";

const MainContainer: FC = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      id="main-container"
      sx={{ margin: 4, background: theme.palette.background.default }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;

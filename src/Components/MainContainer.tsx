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
      <Box
        id="welcome-text-container"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <Typography
          sx={{ width: "100%", mb: 2, fontWeight: 500 }}
          textAlign="center"
          variant="h3"
        >
          {constants.welcoleText}
        </Typography>
        <Typography
          sx={{ width: "100%", fontWeight: 500 }}
          textAlign="center"
          variant="h4"
        >
          {constants.welcomeSubText}
        </Typography>
      </Box>
      {children}
    </Box>
  );
};

export default MainContainer;

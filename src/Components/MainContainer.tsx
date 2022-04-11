import { FC } from "react";
import { Box, Typography } from "@mui/material";
import constants from "../Util/constants";

const MainContainer: FC = ({ children }) => {
  return (
    <Box id="main-container" sx={{ margin: 4 }}>
      <Box
        id="welcome-text-container"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <Typography
          sx={{ width: "100%", mb: 2 }}
          textAlign="center"
          variant="h3"
        >
          {constants.welcoleText}
        </Typography>
        <Typography sx={{ width: "100%" }} textAlign="center" variant="h4">
          {constants.welcomeSubText}
        </Typography>
      </Box>
      {children}
    </Box>
  );
};

export default MainContainer;

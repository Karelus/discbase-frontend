import { FC } from "react"
import { Box, useTheme } from "@mui/material"

const MainContainer: FC = ({ children }) => {
  const theme = useTheme()

  return (
    <Box
      id="main-container"
      sx={{ margin: 4, background: theme.palette.background.default }}
    >
      {children}
    </Box>
  )
}

export default MainContainer

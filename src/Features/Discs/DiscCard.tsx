import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  useTheme,
  Typography,
} from "@mui/material";

import { Disc } from "../../Util/types";

const DiscCard: FC<{
  disc: Disc;
  handleDelete: (id: number | undefined) => void;
}> = ({ disc, handleDelete }) => {
  const theme = useTheme();

  return (
    <Grid item key={disc.id}>
      <Card sx={{ width: 200, heigth: 200, mt: 1, mr: 1 }}>
        <CardActionArea
          component={RouterLink}
          to={`/discs/${disc.id}`}
          sx={{
            background: theme.palette.secondary.main,
            textDecoration: "none",
            color: "white",
          }}
        >
          <CardHeader
            subheaderTypographyProps={{ color: "white" }}
            title={disc.name}
            subheader={disc.type?.toUpperCase()}
          ></CardHeader>
          <CardContent>
            <Typography variant="body1">By {disc.manufacturer}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            background: theme.palette.primary.main,
            textDecoration: "none",
            color: "white",
          }}
        >
          <Button
            sx={{ color: "white" }}
            size="small"
            variant="contained"
            color="error"
            onClick={() => handleDelete(disc.id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default DiscCard;

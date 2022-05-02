import { FC, useState } from "react"
import { Link as RouterLink } from "react-router-dom"

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
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material"

import { Disc } from "Util/types"

const DiscCard: FC<{
  disc: Disc
  handleDelete: (id: string | undefined) => void
}> = ({ disc, handleDelete }) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDeleteClick = () => {
    console.log("here")
    handleOpen()
  }

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
            onClick={handleDeleteClick}
          >
            Delete
          </Button>
        </CardActions>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Delete disc</DialogTitle>
          <DialogContent>
            <Typography>Are you sure you want to delete this disc?</Typography>
          </DialogContent>
          <DialogActions>
            <Button size="small" variant="contained" color="error">
              Yes
            </Button>
            <Button size="small" variant="contained" color="secondary">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </Grid>
  )
}

export default DiscCard

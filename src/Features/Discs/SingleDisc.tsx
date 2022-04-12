import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Typography, Button, Chip, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { client } from "Util/ApiClient";
import MainContainer from "Components/MainContainer";
import StyledLink from "Components/StyledLink";
import SingleDiscSkeleton from "./Components/SingleDiscSkeleton";
import { Disc } from "Util/types";
import constants from "Util/constants";

const SingleDisc: FC = () => {
  let { id } = useParams<{ id: string }>();
  const theme = useTheme();
  const [disc, setDisc] = useState<Disc | null>(null);
  const [discLoading, setDiscLoading] = useState<boolean>(true);

  const getSingleDisc = async (id: string) => {
    try {
      setDiscLoading(true);
      let response = await client.get(`/discs/${id}`);
      setDisc(response.data);
    } catch (error) {
      console.error(error);
      setDiscLoading(false);
    } finally {
      setDiscLoading(false);
    }
  };

  useEffect(() => {
    getSingleDisc(id);
  }, [id]);

  return (
    <MainContainer>
      <StyledLink to="/">
        <Button
          startIcon={<ArrowBackIcon />}
          variant="contained"
          color="secondary"
        >
          Back
        </Button>
      </StyledLink>
      <Box sx={{ maxWidth: constants.contentMaxWidth }}>
        {discLoading ? (
          <SingleDiscSkeleton />
        ) : (
          <>
            <Typography variant="overline" sx={{ fontSize: "1.3rem" }}>
              {disc?.manufacturer}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: 300,
              }}
            >
              <Typography variant="h4" sx={{ mb: 1 }}>
                {disc?.name}
              </Typography>
              <Typography variant="overline">
                {disc
                  ? disc.type.charAt(0).toUpperCase() + disc.type.slice(1)
                  : null}
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Chip
                sx={{ m: 0.5, backgroundColor: theme.palette.warning.main }}
                label={`Speed ${disc?.speed}`}
              />
              <Chip
                sx={{ m: 0.5, backgroundColor: theme.palette.primary.main }}
                label={`Glide ${disc?.glide}`}
              />
              <Chip
                sx={{ m: 0.5, backgroundColor: theme.palette.error.main }}
                label={`Turn ${disc?.turn}`}
              />
              <Chip
                sx={{
                  m: 0.5,
                  backgroundColor: theme.palette.secondary.main,
                  color: "white",
                }}
                label={`Fade ${disc?.fade}`}
              />
            </Box>
            <Box
              sx={{
                height: 300,
                width: 300,
                backgroundColor: "#5cdb95",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></Box>
          </>
        )}
      </Box>
    </MainContainer>
  );
};

export default SingleDisc;

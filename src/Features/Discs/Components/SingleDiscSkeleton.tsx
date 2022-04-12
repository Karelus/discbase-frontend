import { FC } from "react";
import { Stack, Skeleton } from "@mui/material";

const SingleDiscSkeleton: FC = () => {
  return (
    <Stack spacing={1} sx={{ mt: 2 }}>
      <Skeleton
        animation="wave"
        variant="text"
        width={210}
        height={20}
        sx={{ mb: 1 }}
      />
      <Skeleton animation="wave" variant="text" width={300} height={30} />
      <Skeleton animation="wave" variant="text" width={300} height={30} />
      <Skeleton animation="wave" variant="circular" width={300} height={300} />
    </Stack>
  );
};

export default SingleDiscSkeleton;

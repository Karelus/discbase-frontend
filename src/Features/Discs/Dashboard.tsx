import { FC, useEffect, useState } from "react";
import { Box, Typography, Button, Skeleton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { client } from "../../Util/ApiClient";

import MainContainer from "../../Components/MainContainer";
import AddDisc from "./AddDisc";
import DiscCard from "./DiscCard";
import DiscTags from "../../Components/DiscTags";

import { Disc } from "../../Util/types";
import constants from "../../Util/constants";

const Dashboard: FC = () => {
  const [addFormVisible, setAddFormVisible] = useState<boolean>(false);
  const [allDiscs, setAllDiscs] = useState<Disc[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getAllDiscs = async () => {
    try {
      setLoading(true);
      let response = await client.get("/discs");
      setAllDiscs(response.data);
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const addDisc = async (data: Disc) => {
    try {
      setLoading(true);
      let response = await client.post("/discs", data);
      console.log(response.status);
    } catch (error) {
      console.error(error);
    } finally {
      setAddFormVisible(false);
      getAllDiscs();
    }
  };

  const deleteDisc = async (id: number | undefined) => {
    try {
      setLoading(true);
      let response = await client.delete(`/discs/${id}`);
      console.log(response.status);
    } catch (error) {
      console.error(error);
    } finally {
      getAllDiscs();
    }
  };

  const onAddNewDiscClick = () => {
    setAddFormVisible(true);
  };

  const onCancelClick = () => {
    setAddFormVisible(false);
  };

  useEffect(() => {
    getAllDiscs();
  }, []);

  return (
    <MainContainer>
      <Box
        id="disc-panel-container"
        sx={{
          maxWidth: constants.contentMaxWidth,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" sx={{ m: 0.5 }}>
            Your bag
          </Typography>
          <DiscTags discsInBag={allDiscs} />
          {addFormVisible ? (
            <AddDisc
              addDisc={addDisc}
              onCancel={onCancelClick}
              loading={loading}
            />
          ) : (
            <>
              <Button
                color="secondary"
                variant="contained"
                onClick={onAddNewDiscClick}
                sx={{ borderRadius: 10 }}
                endIcon={<AddIcon />}
              >
                Add a new disc
              </Button>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {loading ? (
                  <>
                    {Array.from({ length: constants.maxSkeletonItems }, () => (
                      <Box sx={{ mt: 1, mr: 1 }}>
                        <Skeleton
                          variant="rectangular"
                          animation="wave"
                          width={200}
                          height={200}
                        />
                      </Box>
                    ))}
                  </>
                ) : (
                  <>
                    {allDiscs.map((disc) => (
                      <DiscCard
                        key={disc.id}
                        disc={disc}
                        handleDelete={deleteDisc}
                      />
                    ))}
                  </>
                )}
              </Box>
            </>
          )}
        </Box>
      </Box>
    </MainContainer>
  );
};

export default Dashboard;

import { FC, useEffect, useState } from "react";
import { Box, Typography, Button, Skeleton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { client } from "Util/ApiClient";

import MainContainer from "Components/MainContainer";
import AddDisc from "./Components/AddDisc";
import DiscCard from "./Components/DiscCard";
import DiscTags from "./Components/DiscTags";

import { Disc, DiscType } from "Util/types";
import constants from "Util/constants";

const Dashboard: FC = () => {
  const [addFormVisible, setAddFormVisible] = useState<boolean>(false);
  const [allDiscs, setAllDiscs] = useState<Disc[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<DiscType[]>([]);

  const getAllDiscs = async () => {
    try {
      setLoading(true);
      let url = "/discs";
      if (filters) {
        filters.forEach((filter, i) => {
          if (i === 0) {
            url += `?type=${filter}`;
          } else {
            url += `&type=${filter}`;
          }
        });
      }
      let response = await client.get(url);
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

  const deleteDisc = async (id: string | undefined) => {
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

  const onFilterClick = (type: DiscType) => {
    if (filters.includes(type)) {
      setFilters((prevState) => prevState.filter((t) => t !== type));
    } else {
      setFilters((prevState) => prevState.concat(type));
    }
  };

  useEffect(() => {
    getAllDiscs();
  }, [filters]);

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
          <Typography variant="h5" sx={{ m: 0.5, fontWeight: 500 }}>
            Your bag
          </Typography>
          <DiscTags
            discs={allDiscs}
            filters={filters}
            onFilterClick={onFilterClick}
          />
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
                    {Array.from(
                      { length: constants.maxSkeletonItems },
                      (x, i) => (
                        <Box key={`skeleton ${i}`} sx={{ mt: 1, mr: 1 }}>
                          <Skeleton
                            variant="rectangular"
                            animation="wave"
                            width={200}
                            height={200}
                          />
                        </Box>
                      )
                    )}
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

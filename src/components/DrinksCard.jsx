import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";

export const DrinksCard = () => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 2,
          height: "auto",
        }}
      >
        <CardContent>
          <Typography component="h2" sx={{ fontWeight: "bold" }}>
            Water 1l
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon />}>
              5$
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 2,
          height: "auto",
        }}
      >
        <CardContent>
          <Typography component="h2" sx={{ fontWeight: "bold" }}>
            Wine 750ml
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon />}>
              15$
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 2,
          height: "auto",
        }}
      >
        <CardContent>
          <Typography component="h2" sx={{ fontWeight: "bold" }}>
            Ouzo 500ml
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon />}>
              7$
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 2,
          height: "auto",
        }}
      >
        <CardContent>
          <Typography component="h2" sx={{ fontWeight: "bold" }}>
            Coffee
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon />} color="warning">
              3$
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

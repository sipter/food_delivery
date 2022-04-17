import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as React from "react";
import AddIcon from '@mui/icons-material/Add';
export const DessertCard = () => {
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
            Loukoumades
          </Typography>
          <Typography component="p">
            Ingredients: <br></br>
            Deep-fried sweet doughnut balls are served with honey, cinnamon and
            roasted seseam seeds on top.
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon />}>15$</Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image="/assets/Loukoumades.jpg"
          alt="food img"
        />
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
            Revani
          </Typography>
          <Typography component="p">
            Ingredients: <br></br>
            Syrup-soaked cake made with semolina, yoghurt and lemon zest. Served
            with or without ice cream.
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon />}>15$</Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image="/assets/Revani.jpg"
          alt="food img"
        />
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
            Sokolatopita(Sea bream)
          </Typography>
          <Typography component="p">
            Ingredients: <br></br>
            Syrup drenched chocolate cake, it's topped with a chocolate ganache
            and served with or without ice cream.
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon />}>15$</Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image="/assets/Sokolatopita.jpg"
          alt="food img"
        />
      </Card>
    </>
  );
};

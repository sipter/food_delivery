import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import * as React from "react";

export const StarterCard = () => {
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
            Feta cheese with olives
          </Typography>
          <Typography component="p">
            Ingredients: <br></br>
            Feta cheese with olives. Served with olive oil and oregano.
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon />}>15$</Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image="/assets/FetaOlives.jpg"
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
            Tzatziki
          </Typography>
          <Typography component="p">
            Ingredients: <br></br>
            Yoghurt with cucumber, dill, garlic, olive oil and vinegar. Served with pita bread.  
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon/>}>15$</Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image="/assets/Tzatziki.jpg"
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
            Grilled oyster mushrooms
          </Typography>
          <Typography component="p">
            Ingredients: <br></br>
            Grilled oyster mushrooms served with olive oil, lemon juice, parsley and oregano.
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon/>}>15$</Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image="/assets/Oyster.jpg"
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
            Saganaki
          </Typography>
          <Typography component="p">
            Ingredients: <br></br>
            Fried graviera cheese served with fresh lemon juice.
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon/>} color="warning">15$</Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image="/assets/Saganaki.jpg"
          alt="food img"
        />
      </Card>
    </>
  );
};

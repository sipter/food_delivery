import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as React from "react";

export const SaladsCard = () => {
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
            Greek traditional salad
          </Typography>
          <Typography component="p">
            Ingredients: <br></br>
            Tomatoes, cucumber, onions, green bell pepper, olives, feta cheese.
          </Typography>
          <CardActions>
            <Button variant="contained">15$</Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image="/assets/GreekSalad.jpg"
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
            Patzaria(Beetroot)
          </Typography>
          <Typography component="p">
            Ingredients: <br></br>
            Beetroots, with garlic and walnuts
          </Typography>
          <CardActions>
            <Button variant="contained">15$</Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image="/assets/BeetRoot.jpeg"
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
            Politiki
          </Typography>
          <Typography component="p">
            Ingredients: <br></br>
            White cabbage with carrots, red bell pepper, celery, parsley and lemon juice.
          </Typography>
          <CardActions>
            <Button variant="contained">15$</Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image="/assets/PolitikiSalad.jpg"
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
            Lettuce and arugula  
          </Typography>
          <Typography component="p">
            Ingredients: <br></br>
            Lettuce, arugula, tomatoes, parmesan cheese. Served with olive oil and balsamic vinegar.
          </Typography>
          <CardActions>
            <Button variant="contained">15$</Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image="/assets/Lettuce.jpg"
          alt="food img"
        />
      </Card>
    </>
  );
};

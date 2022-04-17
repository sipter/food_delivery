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
export const DishCard = () => {
  return (
    <>
      <Card sx={{ display: "flex", flexDirection:"row", justifyContent: 'space-between', marginBottom: 2, height: "auto"}}>
        <CardContent>
          <Typography component="h2" sx={{fontWeight: "bold"}} >Souvlakia</Typography>
          <Typography component="p">
            Ingredients: <br></br>
            Pork meat skewer served with potato fries, tzatziki, onions and pita bread.
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon />}>15$</Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image="/assets/Souvlakia.jpg"
          alt="food img"
        />
      </Card>
      <Card sx={{ display: "flex", flexDirection:"row", justifyContent: 'space-between', marginBottom: 2, height: "auto"}}>
        <CardContent>
          <Typography component="h2" sx={{fontWeight: "bold"}} >Pastitsio</Typography>
          <Typography component="p">
            Ingredients: <br></br>
            Pasta with bolognese sauce ,cheese and bechamel on top baked in the oven.
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon />}>15$</Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height:"auto" }}
          component="img"
          image="/assets/Pastitsio.jpg"
          alt="food img"
        />
      </Card>
      <Card sx={{ display: "flex", flexDirection:"row", justifyContent: 'space-between', marginBottom: 2, height: "auto"}}>
        <CardContent>
          <Typography component="h2" sx={{fontWeight: "bold"}} >Tsipoura(Sea bream)</Typography>
          <Typography component="p">
            Ingredients: <br></br>
            Tsipoura (Sea bream) baked in the oven, served with roasted veggies: potatoes, tomatoes, onions, bell peppers
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon />}>15$</Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height:"auto" }}
          component="img"
          image="/assets/Tsipoura.jpg"
          alt="food img"
        />
      </Card>
      <Card sx={{ display: "flex", flexDirection:"row", justifyContent: 'space-between', marginBottom: 2, height: "auto"}}>
        <CardContent>
          <Typography component="h2" sx={{fontWeight: "bold"}} >Spanakorizo(vegan)</Typography>
          <Typography component="p">
            Ingredients: <br></br>
            Spinach and rice with herbs: dill, parsley, oregano served with fresh lemon juice.
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon />}>15$</Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto"}}
          component="img"
          image="/assets/Spanakorizo.jpg"
          alt="food img"
        />
      </Card>
    </>
  );
};

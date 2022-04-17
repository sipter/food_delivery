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
import ShoppingCartCompo from "./ShoppingCart";

export const StarterCard = ({ addItemToCart, starter }) => {
  return (
    // <>
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
          {starter.name}
        </Typography>
        <Typography component="p">
          Ingredients: <br></br>
          {starter.ingredients}
        </Typography>
        <CardActions>
          <Button
            variant="outlined"
            endIcon={<AddIcon />}
            onClick={() => addItemToCart(starter)}
          >
            {starter.price}
          </Button>
        </CardActions>
      </CardContent>
      <CardMedia
        sx={{ width: 151, height: "auto" }}
        component="img"
        image={starter.image}
        alt="food img"
      />
    </Card>
    /* <Card
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
            Yoghurt with cucumber, dill, garlic, olive oil and vinegar. Served
            with pita bread.
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon />} onClick={click}>
              15
            </Button>
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
            Grilled oyster mushrooms served with olive oil, lemon juice, parsley
            and oregano.
          </Typography>
          <CardActions>
            <Button variant="outlined" endIcon={<AddIcon />} onClick={click}>
              15
            </Button>
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
            <Button
              variant="outlined"
              endIcon={<AddIcon />}
              color="warning"
              onClick={click}
            >
              15
            </Button>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: 151, height: "auto" }}
          component="img"
          image="/assets/Saganaki.jpg"
          alt="food img"
        />
      </Card>
      <ShoppingCartCompo data={product} />
    </> */
  );
};

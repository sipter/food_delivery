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

export const DrinksCard = ({ addItemToCart, drink }) => {
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
            {drink.name}
          </Typography>
          <CardActions>
            <Button
              variant="outlined"
              endIcon={<AddIcon />}
              onClick={() => addItemToCart(drink)}
            >
              {drink.price}
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Badge, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ShoppingCart({ isCartOpen, toggleCart, products }) {
  const finalPrice = products.reduce((acc, product) => acc + product.price, 0);
  const groupedProducts = products.groupBy((products) => products.name);
  return (
    <Drawer anchor={"right"} open={isCartOpen} onClose={toggleCart}>
      <Box sx={{ width: 300 }}>
        <List>
          {Object.keys(groupedProducts).map((group, index) => (
            <ListItemText key={index}>
              {group} - {groupedProducts[group].length}
            </ListItemText>
          ))}
        </List>
        <Divider />
        <Typography>Sum: {finalPrice}</Typography>
      </Box>
    </Drawer>
  );
}
// open={state["right"]}
// onClose={toggleDrawer("right", false)}

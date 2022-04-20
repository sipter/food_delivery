import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { Button, Typography } from "@mui/material";
import _ from "lodash";

export default function ShoppingCart({ isCartOpen, toggleCart, products, reset }) {
  const finalPrice = products.reduce((acc, product) => acc + product.price, 0);
  const groupedProducts = _.groupBy(products, (item) => item.name); // products.map((item)=>{item.name}) //{"banana":[{}], "tomato":["tomato"]} 

  return (
    <Drawer anchor={"right"} open={isCartOpen} onClose={toggleCart}>
      <Box sx={{ width: 300 }}>
        <List>
          {Object.keys(groupedProducts).map((group, index) => {    //allaxe to me card
            const count = groupedProducts[group].length;
            return (
              <ListItemText key={index}>
                {group} {count} &nbsp;
                {groupedProducts[group].reduce((acc, item) => acc + item.price, 0)} 
              </ListItemText>
            );
          })}
        </List>
        <Divider />
        <Typography>Sum: {finalPrice}</Typography>
        <Button onClick={reset}>Clear</Button>
      </Box>
    </Drawer>
  );
}
// open={state["right"]}
// onClose={toggleDrawer("right", false)}

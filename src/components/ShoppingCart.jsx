import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  ButtonGroup,
} from "@mui/material";
import _ from "lodash";

export default function ShoppingCart({
  isCartOpen,
  toggleCart,
  products,
  reset,
}) {
  const finalPrice = products.reduce((acc, product) => acc + product.price, 0);
  const groupedProducts = _.groupBy(products, (item) => item.name); // products.map((item)=>{item.name}) //{"banana":[{}], "tomato":["tomato"]}
  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
    borderColor: "text.primary",
    width: "5rem",
    height: "5rem",
  };
  return (
    <Drawer anchor={"right"} open={isCartOpen} onClose={toggleCart}>
      <Box sx={{ ...commonStyles, borderBottom: 1, width: 400 }}>
        {Object.keys(groupedProducts).map((group, index) => {
          let count = groupedProducts[group].length;
          // const addOne = () => {
          //   return count = count + 1
          // }
          // const [count, setCount] = React.setCount(groupedProducts[group].length)

          const addOne = (event) => {
            console.log(event.target);
          };

          return (
            <Card
              variant="none"
              sx={{
                marginBottom: 1,
                height: "90px",
              }}
              key={index}
            >
              <CardContent>
                <Typography component="p">
                  {`${count}x`} {group} &nbsp;
                  {groupedProducts[group].reduce(
                    (acc, item) => acc + item.price,
                    0
                  )}
                </Typography>

                <CardActions>
                  <ButtonGroup disableElevation variant="contained">
                    <Button>-</Button>
                    <Button onClick={addOne}>+</Button>
                  </ButtonGroup>
                </CardActions>
              </CardContent>
            </Card>

            // <ListItemText key={index}>
            //   {group} {count} &nbsp;
            //   {groupedProducts[group].reduce((acc, item) => acc + item.price, 0)}
            // </ListItemText>
          );
        })}

        <Divider />

        <Card
          variant="none"
          sx={{
            marginBottom: 1,
            height: "100px",
          }}
        >
          <CardContent>
            <Typography component="p">
              Total: <br></br> {finalPrice}
            </Typography>
            <CardActions>
              <Button onClick={reset}>Clear</Button>
              <Button>Order now!</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </Drawer>
  );
}
// open={state["right"]}
// onClose={toggleDrawer("right", false)}

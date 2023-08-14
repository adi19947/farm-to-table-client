import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { Product } from "../products/type/Product";

interface CartProps {
  cartItems: Product[];
  onRemoveFromCart: (productId: string) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemoveFromCart }) => {
  return (
    <Box>
      <Typography variant="h5">Shopping Cart</Typography>
      <Divider />
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        <>
          {cartItems.map((item) => (
            <Box key={item.id}>
              <Typography>{item.name}</Typography>
              <Typography>Price: ${item.price}</Typography>
              <Button
                variant="outlined"
                onClick={() => onRemoveFromCart(item.id)}
              >
                Remove
              </Button>
              <Divider />
            </Box>
          ))}
          <Typography>Total: ${calculateTotal(cartItems)}</Typography>
          <Button variant="contained" color="primary">
            Checkout
          </Button>
        </>
      )}
    </Box>
  );
};

export default Cart;

// Function to calculate the total price of items in the cart
function calculateTotal(cartItems: Product[]): number {
  return cartItems.reduce((total, item) => total + item.price, 0);
}

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

export default function CartIcon() {
  return (
    <Stack direction="row" spacing={1}>
      <NavBarLink to={ROUTES.MY_CART}>
        <IconButton aria-label="add to shopping cart" sx={{ color: "white" }}>
          <ShoppingCartIcon />
        </IconButton>
      </NavBarLink>
    </Stack>
  );
}

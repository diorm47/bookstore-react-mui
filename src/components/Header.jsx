import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";

function Header({ handleCart, orderLen }) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
         Bookstore
        </Typography>
        <IconButton color="inherit" onClick={handleCart}>
          <Badge color="secondary" badgeContent={orderLen}>
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

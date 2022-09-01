import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
// import { Switch } from '@mui/material';
import { Store } from "../utils/store";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "../utils/classes";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSnackbar } from "notistack";
import { getError } from "../utils/error";
import axios from "axios";

const Navbar = ({ darkMode, darkModeChangeHandler }) => {
  // console.log("Navbar", darkMode);
  const [cartNum, setCartNum] = useState(0);
  const {
    state: {
      cart: { cartItems },
      userInfo,
    },
  } = useContext(Store);
  useEffect(() => {
    setCartNum(cartItems.length);
  }, [cartItems]);

  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };


    const { enqueueSnackbar } = useSnackbar();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const { data } = await axios.get(`/api/products/categories`);
          setCategories(data);
        } catch (err) {
          enqueueSnackbar(getError(err), { variant: "error" });
        }
      };
      fetchCategories();
    }, [enqueueSnackbar]);
  const res = categories.map(x=>x.name)
  return (
    <div className="navbar flex">
      <div className="navbar_logo">
        <IconButton
          edge="start"
          aria-label="open drawer"
          onClick={sidebarOpenHandler}
          sx={classes.menuButton}
        >
          <MenuIcon sx={classes.navbarButton} />
        </IconButton>
        <Link href="/">Sanity+Next</Link>
      </div>

      <Drawer anchor="left" open={sidbarVisible} onClose={sidebarCloseHandler}>
        <List>
          <ListItem>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography>Shopping by category</Typography>
              <IconButton aria-label="close" onClick={sidebarCloseHandler}>
                <CancelIcon />
              </IconButton>
            </Box>
          </ListItem>
          <Divider light />
          {res.map((category) => (
            <Link
              key={category}
              href={`/search?category=${category}`}
              passHref
            >
              <ListItem button component="a" onClick={sidebarCloseHandler}>
                <ListItemText primary={category}></ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>

      <div className="search">
        <Link href="/search">Search</Link>
      </div>
      {userInfo ? (
        <div>
          User: <strong>{userInfo.name}</strong>
        </div>
      ) : (
        ""
      )}
      <div className="navbar_items flex">
        {/* <Switch  checked={darkMode} onChange={darkModeChangeHandler}></Switch> */}
        <button onClick={darkModeChangeHandler}>
          {darkMode ? "Darck" : "White"}
        </button>
        <div className="cart_item">{cartNum}</div>
        <Link href="/cart">Cart</Link>
        {userInfo ? (
          <Link href="/profile">Profile</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

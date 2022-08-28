import React, { useContext, useEffect, useState } from 'react'
import { EmptyCart, Layout, TypographyEl } from "../componets";
import { Store } from '../utils/store';
import axios from "axios";
import {
  Button,
  Card,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import Link from 'next/link';
import { urlFor } from '../utils/client';
const Cart = () => {
        const {
          state: {
            cart: { cartItems },
          },
          dispatch,
        } = useContext(Store);
  const [cartData,setCartData] = useState([])
  const { enqueueSnackbar } = useSnackbar();

    const updateCartHandler = async (item, quantity) => {
      const { data } = await axios.get(`/api/products/${item._id}`);
      if (data.countInStock < quantity) {
        enqueueSnackbar("Sorry. Product is out of stock", { variant: "error" });
        return;
      }
      dispatch({
        type: "CART_ADD_ITEM",
        payload: {
          _key: item._key,
          name: item.name,
          countInStok: item.countInStok,
          slug: item.slug,
          price: item.price,
          image: item.image,
          quantity,
        },
      });
      enqueueSnackbar(`${item.name} updated in the cart`, {
        variant: "success",
      });
    };

      const removeItemHandler = (item) => {
        dispatch({ type: "CART_REMOVE_ITEM", payload: item });
        enqueueSnackbar(`${item.name} remove in the cart`, {
          variant: "success",
        });
      };
     
      useEffect(() => {
        setCartData(cartItems);
      }, [dispatch, cartItems]);

// здесь в картинке не надо прописывать  import urlFor потому что бул передан  через кнопку

console.log("cartData", cartData);
  return (
    <Layout title="Shoping cart" description="описание Cart">
      <TypographyEl teg="h1" classN="span">
        {cartData.length === 0 ? "Корзина пуста" : "Корзина"}
      </TypographyEl>
      {cartData.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="cart_wrap">
          <div className="cart_prod">
            {cartData.map((x) => (
              <div key={x._key} className="cart_item_wrap">
                <div className="cart_item_wrap_foto">
                  <Link href={`/product/${x.slug}`}>
                    <img className="card_image" src={urlFor(x.image)} alt="" />
                  </Link>
                </div>
                <div className="cart_item_wrap_text">{x.name}</div>
                <div className="cart_item_wrap_text">
                  <Select
                    value={x.quantity}
                    onChange={(e) => updateCartHandler(x, e.target.value)}
                  >
                    {[...Array(x.countInStok).keys()].map((y) => (
                      <MenuItem key={y + 1} value={y + 1}>
                        {y + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <div className="cart_item_wrap_text">{x.price}$</div>
                <div
                  className="cart_item_wrap_text remove_btn"
                  onClick={() => removeItemHandler(x)}
                >
                  X
                </div>
              </div>
            ))}
          </div>
          <div className="cart_check">
            <Grid item md={3} xs={12}>
              <Card>
                <List>
                  <ListItem>
                    <Typography variant="h2">
                      Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                      items) : ${" "}
                      {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Button
                      onClick={() => {
                        router.push("/shipping");
                      }}
                      fullWidth
                      color="primary"
                      variant="contained"
                    >
                      Checkout
                    </Button>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Cart
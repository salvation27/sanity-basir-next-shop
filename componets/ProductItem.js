import React, { useContext } from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from 'next/link'
import { urlFor } from '../utils/client';
import { Rating } from '@mui/material';
import { Store } from '../utils/store';
import { useSnackbar } from 'notistack';
import axios from "axios";

const ProductItem = ({item}) => {

    const {
      state: { cart },
      dispatch,
    } = useContext(Store);
    const { enqueueSnackbar } = useSnackbar();

  const addToCartHandler = async ( product ) => {
    const existItem = cart.cartItems.find((x) => x._key === product._id);
    if (existItem) {
      enqueueSnackbar("Sorry. Product already in cart", { variant: "error" });
      return;
    }
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStok < quantity) {
      enqueueSnackbar("Sorry. Product is out of stock", { variant: "error" });
      return;
    }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: {
        _key: product._id,
        name: product.name,
        countInStok: product.countInStok,
        slug: product.slug.current,
        price: product.price,
        image: product.image,
        quantity,
      },
    });
    enqueueSnackbar(`${product.name} added to the cart`, {
      variant: "success",
    });
    // router.push("/cart");
  };
// console.log("item", item);
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <Link href={`/product/${item.slug.current}`}>
          <CardContent>
            {/* <CardMedia
            component="img"
            height="194"
            image={item.image && urlFor(item.image)}
            alt="Paella dish"
          /> */}
            <img
              className="card_image"
              src={item.image && urlFor(item.image)}
              alt=""
            />
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              {item.name}
            </Typography>
            <Typography variant="body2">{item.price} $</Typography>
            <div className="rating">
              <Rating value={item.rating} readOnly></Rating>
              <div>({item.numReviews} reviews)</div>
            </div>
          </CardContent>
        </Link>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            onClick={() => addToCartHandler(item)}
          >
            Add Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductItem
import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from 'next/link'
import { urlFor } from '../utils/client';
import { Rating } from '@mui/material';

const ProductItem = ({item}) => {

 

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
          <Button size="small" variant="contained"
          // onClick={addTooCartHandel}
          >
            Add Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductItem
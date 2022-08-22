import React from "react";
import Link from "next/link";
import { urlFor } from "../utils/client";
import TypographyEl from "./elem/TypographyEl";
import { Button, Rating } from "@mui/material";

const DetailPage = ({ product }) => {
  console.log("DetailPage", product);
  return (
    <div className="detail_wrap">
      <TypographyEl teg="h2" classN="span">
        <Link href="/"> 👈Back</Link>
      </TypographyEl>
      <div className="detail_item">
        <div className="detail_item_img">
          <img
            className="card_image_detail"
            src={product.image && urlFor(product.image)}
            alt=""
          />
        </div>
        <div className="detail_item_text">
          <div className="detail_item_text_decr">
            <TypographyEl teg="h1" classN="span">
              {product.name}
            </TypographyEl>
            <TypographyEl teg="h4" classN="h6">
              Category: {product.category}
            </TypographyEl>
            <TypographyEl teg="h4" classN="h6">
              Brand: {product.brend}
            </TypographyEl>
            <Rating value={product.rating} readOnly></Rating>
          </div>
          <div className="detail_item_text_num">
            <TypographyEl teg="h4" classN="h5">
              Price {product.price}$
            </TypographyEl>
            <TypographyEl teg="h6" classN="h6">
              Status -
              {product.countInStok > 0 ? (
                <span className="green_text">in stock</span>
              ) : (
                <span className="red_text">out stock</span>
              )}
            </TypographyEl>
            <br />
            <Button size="large" fullWidth variant="contained">
              Add Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

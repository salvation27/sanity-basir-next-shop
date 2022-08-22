import { ProductItem, TypographyEl } from "../componets";
import Layout from "../componets/Layout";
import { useEffect, useState } from "react";
import {client} from "../utils/client";
import { Alert, CircularProgress } from "@mui/material";

export default function Home() {
  const [state, setState] = useState({
    products: [],
    error: "",
    loading: true,
  });
  const { products, error, loading } = state;
  const query = `*[_type == "product"]`;
  const fetchData = async () => {
    try {
      const productsData = await client.fetch(query);
      setState({
        products: productsData,
        loading: false,
      });
    } catch (error) {
      console.log("Ошибка при получении данніх в компоненте Home");
      setState({
        error: error.message,
        loading: false,
      });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Layout title="главная" description="описание Home">
      <TypographyEl teg="h1" classN="span">
        Список товаров
      </TypographyEl>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <div className="product_wrap">
          {products.map((item) => (
            <ProductItem key={item._id} item={item} />
          ))}
        </div>
      )}
    </Layout>
  );
}

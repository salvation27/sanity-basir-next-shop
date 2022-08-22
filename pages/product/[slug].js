import { Alert, CircularProgress } from "@mui/material";
import React, { useEffect,useState } from "react";
import { DetailPage, Layout, TypographyEl } from "../../componets";
import { client } from "../../utils/client";

const Detail = ({ slug }) => {
  const [state, setState] = useState({
    product: null,
    loading: true,
    error: "",
  });
  const { product, loading, error } = state;

  const query = `*[_type == "product" && slug.current == $slug][0]`;

  const fetchData = async () => {
    try {
      const product = await client.fetch(query, { slug });
      setState({
        ...state,
        product,
        loading: false,
      });
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        product,
        loading: false,
        error: error.message,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Layout title={product?.title} description="описание Home">
      {
      loading ?
      (<CircularProgress />):
       error ? (<Alert variant = 'error'>{error}999</Alert>) : <DetailPage product={product} />
    }
    </Layout>
  );
};

export default Detail;

export function getServerSideProps(context) {
  return {
    props: {
      slug: context.params.slug,
    },
  };
}

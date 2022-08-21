import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// import config from "./config";

export const client = sanityClient({
  //   projectId: process.env.PROJECT_ID,
  projectId: "76m17hv5",
  dataset: "production",
  apiVersion: "2022-08-21",
  ignoreBrowserTokenWarning: true,
  useCdn: true,
  token:"skF6ROT8qCwShn1nHUgtpcStNdO4knCEv303Cx5YeldkVvqzNIK2PsqD1f3T2XayRrq20TIFwW3PE11k4UcckBIY18Yyb7Mt2lZrkJ0cmabMBdFEnQeHboX9dUzJcLu7PXnM1obX8qKpNbcMonk2iBp8saZwrDzsnYrDmNIZ4HM0uvn8gDMj",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);



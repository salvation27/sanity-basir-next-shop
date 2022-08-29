import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// import config from "./config";

export const client = sanityClient({
    // projectId: process.env.PROJECT_ID,
  projectId: "eq2s5m51",
  dataset: "production",
  apiVersion: "2022-08-21",
  ignoreBrowserTokenWarning: true,
  useCdn: true,
  token:
    "skQvWDZtDdFyFnR147QTtjJPhYULONpv5sEcospjwk2T4SFnhYHezZ9Wz9k0brclpT3C4MVyaJMRtkLwI3ysx14KJgeHNrnzOm7IPUJ5UrQ7AkGSbfrnzW6HPx7mJhL0lVSC4e1Cx9goyQvi5bmgGPZ6NTxFm6tQEeuDgnHyMPDvdj9Ak8y5",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);



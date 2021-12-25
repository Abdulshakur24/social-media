import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const writeClient = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: false,
  apiVersion: "2021-08-31",
  ignoreBrowserTokenWarning: true,
});

export const readClient = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-31",
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(writeClient);

export const urlFor = (source) => builder.image(source);

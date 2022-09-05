import contentful from "contentful";

const CONTENTFUL_ACCESS_TOKEN = import.meta.env
  .CONTENTFUL_DELIVERY_ACCESS_TOKEN;

const CONTENTFUL_SPACE_ID = import.meta.env.CONTENTFUL_SPACE_ID;

export const client = contentful.createClient({
  space: CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

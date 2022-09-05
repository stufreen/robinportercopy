import { client } from "./contentful";

export const getProjects = () =>
  client
    .getEntries({
      content_type: "project",
    })
    .catch(console.error);

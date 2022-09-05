import { client } from "./contentful";

export const getPage = (pageId) => client.getEntry(pageId);

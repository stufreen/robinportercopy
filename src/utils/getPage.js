import contentful from "contentful";

const CONTENTFUL_ACCESS_TOKEN = import.meta.env
  .CONTENTFUL_DELIVERY_ACCESS_TOKEN;

const CONTENTFUL_SPACE_ID = import.meta.env.CONTENTFUL_SPACE_ID;

const client = contentful.createClient({
  space: CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

export const getPage = async (pageId) => {
  return client.getEntry(pageId);

  // const response = await fetch(CONTENTFUL_URL, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
  //   },
  //   body: JSON.stringify({
  //     query: `
  //       {
  //         pageCollection {
  //           total
  //           items {
  //             title
  //             body {
  //               json
  //             }
  //           }
  //         }
  //       }
  //     `,
  //   }),
  // });
  // const json = await response.json();

  // if (!json.data?.projectCollection) {
  //   console.error("No projectCollection", JSON.stringify(json));
  //   return {
  //     items: [],
  //   };
  // }

  // return json.data.projectCollection;
};

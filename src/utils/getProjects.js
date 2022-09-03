const CONTENTFUL_ACCESS_TOKEN = import.meta.env
  .CONTENTFUL_DELIVERY_ACCESS_TOKEN;

const CONTENTFUL_SPACE_ID = import.meta.env.CONTENTFUL_SPACE_ID;

const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;

console.log(CONTENTFUL_URL);

export const getProjects = async () => {
  const response = await fetch(CONTENTFUL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        {
          projectCollection {
            total
            items {
              title
              shortDescription {
                json
              }
              longDescription {
                json
              }
              coverImage {
                title
                url
              }
            }
          }
        }
      `,
    }),
  });
  const json = await response.json();

  if (!json.data?.projectCollection) {
    console.error("No projectCollection", JSON.stringify(json));
    return {
      items: [],
    };
  }

  return json.data.projectCollection;
};

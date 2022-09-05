import { client } from "./contentful";

// export const getProjects = async () => {
//   const response = await fetch(CONTENTFUL_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
//     },
//     body: JSON.stringify({
//       query: `
//         {
//           projectCollection {
//             total
//             items {
//               title
//               slug
//               shortDescription {
//                 json
//               }
//               longDescription {
//                 json
//               }
//               coverImage {
//                 title
//                 url
//               }
//             }
//           }
//         }
//       `,
//     }),
//   });
//   const json = await response.json();

//   if (!json.data?.projectCollection) {
//     console.error("No projectCollection", JSON.stringify(json));
//     return {
//       items: [],
//     };
//   }

//   return json.data.projectCollection;
// };

export const getProjects = () =>
  client
    .getEntries({
      content_type: "project",
    })
    .catch(console.error);

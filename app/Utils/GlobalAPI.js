// import { gql, request } from "graphql-request";

// const MASTRER_URL = 'https://ap-south-1.cdn.hygraph.com/content/cm1y0h5c2048y08w5fibm9r08/master';

// const getCategory = async () => {
//     const query = gql`
//         query GetCategories {
//             categoties {
//                 id
//                 name
//                 icons {
//                 url
//                 }
//                 slug
//             }
//         }
//     `

//     const result = await request(MASTRER_URL, query);
//     return result;
// };

// export default {
//     getCategory
// };

export  const data = {
    "categoties": [
      {
        "id": "cm1ynh5qs1qtz07o1n085ijph",
        "name": "React.js",
        "icons": {
          "url": "https://ap-south-1.graphassets.com/cm1y0h5s10qbj07o69rgketu2/cm1z0sld121jg07o14s9p0irj"
        },
        "slug": "reactjs"
      },
      {
        "id": "cm1z0u9v0228807pq24lqwc7e",
        "name": "Next js",
        "icons": {
          "url": "https://ap-south-1.graphassets.com/cm1y0h5s10qbj07o69rgketu2/cm1z0u33u21lo07o1j5hi0ky7"
        },
        "slug": "nextjs"
      },
      {
        "id": "cm1z0vdk122aj07pqhwpuwc51",
        "name": "Flutter",
        "icons": {
          "url": "https://ap-south-1.graphassets.com/cm1y0h5s10qbj07o69rgketu2/cm1z0v8pr22a907pqkvkcffhs"
        },
        "slug": "flutter"
      },
      {
        "id": "cm1z0w7g721pr07o132igrwrw",
        "name": "JavaScript",
        "icons": {
          "url": "https://ap-south-1.graphassets.com/cm1y0h5s10qbj07o69rgketu2/cm1z0w1fj22b607pqvrjnwub6"
        },
        "slug": "javascript"
      },
      {
        "id": "cm1z0xnqe21si07o1nxmmgfr1",
        "name": "Nest js",
        "icons": {
          "url": "https://ap-south-1.graphassets.com/cm1y0h5s10qbj07o69rgketu2/cm1z0x7cd22dw07pqux50raow"
        },
        "slug": "nestjs"
      },
      {
        "id": "cm1z12amw21vt07o1yy4pvztx",
        "name": "Docker",
        "icons": {
          "url": "https://ap-south-1.graphassets.com/cm1y0h5s10qbj07o69rgketu2/cm1z125mx22gy07pq8tuqnitf"
        },
        "slug": "docker"
      }
    ]
}
  

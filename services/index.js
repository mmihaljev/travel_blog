import { graphql } from 'graphql';
import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
        query MyQuery {
            postsConnection {
                  edges {
                    node {
                      createdAt
                      slug
                      title
                      excerpt
                      categories {
                        name
                        slug
                      }
                      featuredImage {
                        url
                      }
                    }
                }
            }
        }
    `

  const results = await request(graphqlAPI, query);

  return results.postsConnection.edges;
};

export const GetPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        createdAt
        slug
        title
        excerpt
        categories {
          name
          slug
        }
        featuredImage {
          url
        }
        content {
          raw
        }
      }
    }
  `

  const results = await request(graphqlAPI, query, { slug });

  return results.post;
};

export const getRecentPosts = async () => {
  const query = gql`
  query GetPostDetails() {
    posts(
      orderBy: createdAt_ASC
      last: 3
    ) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
  }
  `
  const results = await request(graphqlAPI, query);

  return results.posts;
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts (
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const results = await request(graphqlAPI, query, { categories, slug });

  return results.posts;
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `

  const results = await request(graphqlAPI, query);

  return results.categories;
}

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        featuredImage {
          url
        }
        title
        slug
        createdAt
        excerpt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};


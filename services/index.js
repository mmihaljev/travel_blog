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
      categories {
        name
        slug
      }
      createdAt
      slug
    }
  }
  `
  const results = await request(graphqlAPI, query);

  return results.posts;
}

export const getSimilarPosts = async (category, slug) => {
  const query = gql`
    query GetSimilarPosts($slug: String!, $category: String!) {
      posts (
        where: {slug_not: $slug, categories_some: {slug: $category}}
        last: 5
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const results = await request(graphqlAPI, query, { slug, category });

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
        categories {
          name
          slug
        }
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};


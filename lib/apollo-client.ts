// lib/apollo-client.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Get WordPress GraphQL endpoint from environment variable
const WORDPRESS_GRAPHQL_URL = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL || 
  process.env.WORDPRESS_GRAPHQL_URL || 
  "http://localhost/PHPproject/wp_headless/graphql";

// Create HTTP link
const httpLink = new HttpLink({
  uri: WORDPRESS_GRAPHQL_URL,
  fetch: typeof window === "undefined" ? fetch : undefined, // Use native fetch in Node.js
});

// Create auth link if needed (for authenticated requests)
const authLink = setContext((_, { headers }) => {
  // Add any authentication headers here if needed
  // const token = process.env.WORDPRESS_AUTH_TOKEN;
  return {
    headers: {
      ...headers,
      // ...(token && { authorization: `Bearer ${token}` }),
    },
  };
});

// Create Apollo Client instance
function createApolloClient() {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            posts: {
              merge(existing = [], incoming) {
                return incoming;
              },
            },
          },
        },
      },
    }),
    ssrMode: typeof window === "undefined",
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
      query: {
        fetchPolicy: "network-only",
      },
    },
  });
}

// For client-side usage
let apolloClient: ReturnType<typeof createApolloClient> | null = null;

export function getApolloClient() {
  if (typeof window === "undefined") {
    // Server-side: create new client for each request
    return createApolloClient();
  }
  
  // Client-side: reuse client
  if (!apolloClient) {
    apolloClient = createApolloClient();
  }
  
  return apolloClient;
}

// Export default for backward compatibility
export default getApolloClient();

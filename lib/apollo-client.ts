// lib/apollo-client.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const uri = "http://localhost/PHPproject/wp_headless/graphql"; // <-- change if different

const client = new ApolloClient({
  link: new HttpLink({
    uri,
    // fetch is available in Node >= 18, Next may provide it; include node-fetch if needed
    // fetch,
  }),
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
});

export default client;

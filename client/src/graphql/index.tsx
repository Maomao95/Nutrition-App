import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://shrouded-bayou-24550.herokuapp.com/graphql',
    cache: new InMemoryCache()
});
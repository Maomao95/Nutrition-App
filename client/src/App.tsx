import React from 'react'

import { ApolloProvider } from '@apollo/client';

import {client} from './graphql'

import Context from './components/Context';

import Home from './components/Home';


function App() {

  return (
    <ApolloProvider client={client}>
      <Context>
        <Home/>
      </Context>
      </ApolloProvider>
  );
}

export default App;

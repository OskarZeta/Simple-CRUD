import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "isomorphic-unfetch";

const client = new ApolloClient({
  //uri: "http://localhost:3000/graphql"
  uri: `https://oskarzeta-crud.herokuapp.com/graphql`
});

export default ClientComponent => () =>
  <ApolloProvider client={client}>
    <ClientComponent />
  </ApolloProvider>

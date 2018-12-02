import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head'
import {withRouter} from 'next/router'
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { App } from '../frontend/components/index';
import style from '../frontend/styles/main';
import "isomorphic-unfetch";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

export default withRouter(() => {
  return(
    <div>
      <Head>
        <title>Simple CRUD</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ApolloProvider client={client}>
        <App/>
      </ApolloProvider>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
})

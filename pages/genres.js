import React, { Component } from 'react';
import Header from "../frontend/components/Header/Header";
import WithData from "../frontend/components/WithData/WithData";
import GenresTable from "../frontend/components/GenresTable/GenresTable";
import Layout from "../frontend/components/Layout/Layout";

export default WithData(() => {
  return(
    <Layout title="Genres table">
      <Header id="4"/>
      <GenresTable/>
    </Layout>
  );
});

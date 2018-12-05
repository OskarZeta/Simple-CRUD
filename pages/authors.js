import React, { Component } from 'react';
import Header from "../frontend/components/Header/Header";
import AuthorsTable from "../frontend/components/AuthorsTable/AuthorsTable";
import WithData from "../frontend/components/WithData/WithData";
import Layout from "../frontend/components/Layout/Layout";

export default WithData(() => {
  return(
    <Layout title="Authors table">
      <Header id="3"/>
      <AuthorsTable/>
    </Layout>
  );
});

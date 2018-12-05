import React, { Component } from 'react';
import Header from "../frontend/components/Header/Header";
import WithData from "../frontend/components/WithData/WithData";
import BooksTable from "../frontend/components/BooksTable/BooksTable";
import Layout from "../frontend/components/Layout/Layout";

export default WithData(() => {
  return(
    <Layout title="Books table">
      <Header id="2"/>
      <BooksTable/>
    </Layout>
  );
});

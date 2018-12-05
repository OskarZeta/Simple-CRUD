import React, { Component } from 'react';
import Layout from "../frontend/components/Layout/Layout";
import Header from "../frontend/components/Header/Header";
import WithData from "../frontend/components/WithData/WithData";

export default WithData(() => {
  return(
    <Layout title="Simple CRUD">
      <Header id="1"/>
      <div style={{marginLeft: "40px"}}>
        <span style={{fontSize: "40px", opacity: "0.5"}}>Please select a table to view...</span>
      </div>
    </Layout>
  );
});

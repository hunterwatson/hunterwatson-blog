// @flow
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`404`}>
      <Sidebar />
      <Page title="404 - NOT FOUND">
        <p>Unfortunately you've stumbled across something that doesn't exist.</p>
        <p>Maybe it existed at one point, but it&#39;s not here anymore. Hopefully it just moved somewhere and didn't get deleted. If you really want whatever used to be on this page, shoot me an email and I&#39;ll try make it available ASAP.</p>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;

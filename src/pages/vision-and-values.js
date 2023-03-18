import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { DisplayList, ValueList } from '@site/src/components/List';

export default function Main() {
  return (
    <Layout title="Vision x Values" description="Samuel JOSET: Back-End Software Engineer">
    <main className="container container--fluid margin-vert--lg centered_container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <div className="row col col--9 margin--lg">
        <h1>Vision</h1>

      </div>
      <div className="row col col--9">
        <p>
          Approach technology in a way that empowers, brings knowledge to people and makes them grow while taking the least from them.
        </p>
      </div>

        <div className="row col col--9 margin--lg">
          <h2>Values</h2>
        </div>

          <DisplayList list={ ValueList } />
      </main>
    </Layout>
  );
}

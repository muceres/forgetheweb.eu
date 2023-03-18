import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { DisplayList, WorkList } from '@site/src/components/List';

export default function Main() {
  return (
    <Layout title="Projects" description="Samuel JOSET: Back-End Software Engineer">
    <main className="container container--fluid margin-vert--lg centered_container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>

    <div className="row col col--9 margin--lg">
      <h1>Projets</h1>
    </div>

    <div className="row col col--9">
    <p>
      Here you can have a look on some of my company projects that weren't under non-disclosure agreement.
    </p>
    </div>


    <DisplayList list={ WorkList } />

      </main>
    </Layout>
  );
}

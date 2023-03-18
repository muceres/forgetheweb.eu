import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { DisplayListSM, BookList } from '@site/src/components/List';

export default function Main() {
  return (
    <Layout title="Recommanded books" description="Samuel JOSET: Back-End Software Engineer">
    <main className="container container--fluid margin-vert--lg centered_container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>

    <div className="row col col--9 margin--lg">
      <h1>Recommanded books</h1>
    </div>

    <div className="row col col--9">
    <p>
      Here I left some of the books that have made a deep impression on me. Their topics are not the same at all. But I think what they have in common is that they have helped me to understand the world better and change the way I live in it.
    </p>
    </div>


    <DisplayListSM list={ BookList } />

      </main>
    </Layout>
  );
}

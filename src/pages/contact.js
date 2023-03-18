import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';



export default function Main() {
  return (
    <Layout title="Contact" description="Samuel JOSET: Back-End Software Engineer">
    <main className="container container--fluid margin-vert--lg centered_container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>

    <div className="row col col--9 margin--lg ">
      <h1>Contact</h1>
    </div>

    <div className="row col col--9">
    <p>
      Got something you want to talk about? Just email me and I get back to you as soon as I can.
    </p>

    </div>

    <div className="row col col--9 margin--lg centered_container">
      <Link to="mailto:samuel@forgetheweb.eu">
        samuel@forgetheweb.eu
      </Link>
    </div>

      </main>
    </Layout>
  );
}

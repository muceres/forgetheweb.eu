import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function Content() {
  return (
    <div className="row col col--9 margin-horiz--lg "
    style={{
      display: 'flex',
      alignItems: 'flex-start',

    }}>

    <div className="col col--12">
    <h3><Link to="https://video.altertek.org/videos/watch/c5e3df6c-2fb8-4b16-8406-1c4a5378b166">
      Our digital uses in the face of climate challenges (FR)
    </Link></h3>
      <p>The health crisis has intensified our use of digital technology at a time when the ecological footprint of this sector represents the equivalent - already - of a 7th continent. Digital technology is also disrupting the climate, but how? And above all, what can we do about it?</p>
    </div>
    </div>
  );
}


export default function Main() {
  return (
    <Layout title="Talks" description="Samuel JOSET: Back-End Software Engineer">
    <main className="container container--fluid margin-vert--lg centered_container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>

    <div className="row col col--9 margin--lg">
      <h1>Talks</h1>
    </div>

          <Content />
      </main>
    </Layout>
  );
}

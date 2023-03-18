import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { DisplayList, RoleList } from '@site/src/components/List';

import { DisplayImgList, StackList, ReferenceList } from '@site/src/components/ImgList';
import { DisplayQuoteList, TestimonialList } from '@site/src/components/QuoteList';

function Content() {
  return (
    <div className="row col col--9 margin-horiz--lg "
    style={{
      display: 'flex',
      alignItems: 'flex-start',

    }}>


      <div className="col col--3 margin-vert--md">
        <img class="card-img-top" src="https://forgetheweb.eu/img/me.webp" alt="A picture of myself" />
      </div>

      <div className="col col--9 margin-vert--md">
        <p>I'm a Back-End Software Engineer remotely working at <a class="explicit-link blue" href="https://www.rushour.io/">Rushour</a>. I occasionally teach and do Freelance.
                 I graduated from <a href="https://www.epitech.eu/en/">Epitech - European Institute of Information Technology</a> in Paris where I was born and raised.
        </p>

        <p>I have worked in <a href="https://drive.infomaniak.com/app/share/346565/65efd31a-bc2a-4e1f-bbb6-dae642a12691">various industries</a>. Learning about them as I build things that can help them is always a pleasure for me. In my work, I give a lot of importance to
                  what projects I work on and <a href="/docs/intro">how they are made</a>.

                  </p>

        <p>When away from the computer, I enjoy traveling, martial arts, cooking and <a class="explicit-link blue" href="/recommanded-books">reading</a>.</p>

      </div>




    </div>
  );
}

export default function Main() {
  return (
    <Layout title="Me" description="Samuel JOSET: Back-End Software Engineer">
      <main className="container container--fluid margin-vert--lg centered_container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>

      <div className="row col col--9 margin--lg">
        <h1>About me</h1>
      </div>

      <Content />

      <div className="row col col--9 margin--lg centered_container">
      <Link to="https://drive.infomaniak.com/app/share/346565/65efd31a-bc2a-4e1f-bbb6-dae642a12691">
        Download my resume
      </Link>
    </div>


        <DisplayList list={ RoleList } />


      <div className="row col col--9 margin--lg">
        <h2>References</h2>
      </div>

      <div className="row col col--9 margin--lg">
        <DisplayImgList list={ ReferenceList } />
      </div>

      <div className="row col col--9">
        <h2>Testimonials</h2>
      </div>

      <div className="row col col--9 margin--lg">
        <DisplayQuoteList list={ TestimonialList } />
      </div>

      <div className="row col col--9">
        <h2>Tech Stack</h2>
      </div>

      <div className="row col col--9 margin--lg">
        <DisplayImgList list={ StackList } />
      </div>

      </main>
    </Layout>
  );
}

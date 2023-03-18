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


    <div className="col col--6">
    <h3><Link to="https://github.com/muceres/memoize-with">
      memoize-with
    </Link></h3>
      <p>Memoize a function using a custom cache and a key formatter</p>
    </div>

    <div className="col col--6">
    <h3><Link to="https://github.com/muceres/group-values-by-key">
      group-values-by-key
    </Link></h3>
      <p>Group values of two objects by their keys</p>
    </div>

    <div className="col col--6">
    <h3><Link to="https://github.com/muceres/chain-fns">
      chain-fns
    </Link></h3>

      <p>Create a chain of responsability by chaining a list of handlers</p>
    </div>

    <div className="col col--6">
    <h3><Link to="https://github.com/muceres/deep-map-with-key">
      deep-map-with-key
    </Link></h3>

      <p>Creates a new functor with the results of calling a provided function on every element in the calling functor and its key</p>
    </div>


    <div className="col col--6">
    <h3><Link to="https://github.com/muceres/koa-handler">
      koa-handler
    </Link></h3>
      <p>Easily configure your koa server</p>
    </div>

    <div className="col col--6">
    <h3><Link to="https://github.com/muceres/sum-of">
      sum-of
    </Link></h3>

      <p>Returns the sum of the values of the same named property off all objects in the list supplied</p>
    </div>

    </div>
  );
}

export default function Main() {
  return (
    <Layout title="Open Source" description="Samuel JOSET: Back-End Software Engineer">
      <main className="container container--fluid margin-vert--lg centered_container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>

      <div className="row col col--9 margin--lg">
        <h1>Latest OSS repos</h1>
      </div>

      <Content />

      <div className="row col col--9 margin--lg centered_container">
        <Link to="https://github.com/muceres">
          Check my other repositories
        </Link>
      </div>

      </main>
    </Layout>
  );
}

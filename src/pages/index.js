import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />">
      <main className="container container--fluid margin-vert--lg centered_container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>

      <div className="row row--9 margin-top--xl">
      <span className="hero__title logo">사</span>
      </div>
      <div className="row row--9 ">
      <h1 className="hero__title"><span>Samuel</span> JOSET</h1>
      </div>
      <div className="row row--9">
      <h2 className="hero__title"
      style={{
        textAlign: 'center'
      }}>{siteConfig.tagline}</h2>
      </div>

      </main>
    </Layout>
  );
}

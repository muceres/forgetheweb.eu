import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import logo from '@site/static/img/stack/nodejs-logo.webp';

const StackList = [
  {
    image: "/img/stack/nodejs-logo.webp",
    description: "Node.js",
  },
  {
    image: "/img/stack/ts-logo.webp",
    description: "typescript",
  },
  {
    image: "/img/stack/reactjs-logo.webp",
    description: "React.js",
  },
  {
    image: "/img/stack/docker-logo.webp",
    description: "Docker",
  },
  {
    image: "/img/stack/mysql-logo.webp",
    description: "MySQL",
  },
  {
    image: "/img/stack/mongodb-logo.webp",
    description: "Mongo DB",
  },
  {
    image: "/img/stack/aws-logo2.png",
    description: "AWS",
  },
];

const ReferenceList = [
  {
    image: "/img/corporations/tf1-logo.webp",
    description: "TF1",
  },
  {
    image: "/img/corporations/canal-plus-logo.webp",
    description: "Canal+",
  },
  {
    image: "/img/corporations/bouygues-logo.svg",
    description: "Bouygues",
  },
  {
    image: "/img/corporations/veepee-logo.webp",
    description: "Veepee",
  },
  {
    image: "/img/corporations/mektoube-logo.webp",
    description: "mektoube.fr",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Epitech.png/1920px-Epitech.png",
    description: "Epitech",
  },
  {
    image: "/img/corporations/webacademie-logo.webp",
    description: "web@cademie",
  },
  {
    image: "/img/corporations/trusk-logo.webp",
    description: "Trusk",
  },
  {
    image: "/img/corporations/open-classrooms-logo.webp",
    description: "Open Classrooms",
  },
  {
    image: "/img/corporations/rushour-logo.svg",
    description: "Rushour.io",
  },
];

function Item({ image, description}) {
  return (
    <div className={clsx('col col--3 text--center margin-vert--md')}>
    <img src={image} alt={description} />

    </div>
  );
}

function DisplayImgList({ list }) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row centered_container" style={{
          alignContent: 'space-between'
        }}>
          {list.map((props, idx) => (
            <Item key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export {
  DisplayImgList,
  StackList,
  ReferenceList
}

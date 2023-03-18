import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const RoleList = [
  {
    title: 'Software Engineer',
    description: (
      <>
        Fond of Javascript/Node JS and sometimes also use Python. I prefer minimalist approaches rather than over-engineered solutions. I like testing and functional programing.
      </>
    ),
  },
  {
    title: 'Mentor',
    description: (
      <>
        Training the next generation of developers. Prepare common people to the digital revolution. Masterclasses or IT courses in colleges, universities and night schools of all domains.
      </>
    ),
  },
  {
    title: 'Community Actor',
    description: (
      <>
        Co-founder of Altertek, IT manager at World Cleanup Day France. I try to add my contribution to open-source and open-knowledge.
      </>
    ),
  },
  {
    title: 'Speaker',
    description: (
      <>
        On themes such as green computing, privacy and open source.
      </>
    ),
  }
];

const ValueList = [
  {
    title: 'Communication',
    description: (
      <>
        I always try to reach a mutual understanding. I ask for feedbacks and take time to listen to others.
      </>
    ),
  },
  {
    title: 'Transparence',
    description: (
      <>
        I go straight to the point, speak the truth and I’m open about my intentions. I open source my work whenever I can.
      </>
    ),
  },
  {
    title: 'Care',
    description: (
      <>
        I want good for people and act for it. I share with my teammates and create things are genuinely good for users and customers.
      </>
    ),
  },
  {
    title: 'Ownership',
    description: (
      <>
        I own my work and the means to do it. The trust and freedom to make the best decisions for my projects and my life. The responsibility and self discipline to be accountable for the outcomes.
      </>
    ),
  },
  {
    title: 'Quality',
    description: (
      <>
        I care for the things I do. I want my work to be durable and made with long term thinking.
      </>
    ),
  },
  {
    title: 'Simplicity',
    description: (
      <>
        I strongly believe that less is more. I avoid unnecessary complexity for me, my teammates and users. Whatever I do I always ask myself “Can it be simpler ?”.
      </>
    ),
  },
  {
    title: 'Curiosity',
    description: (
      <>
        I'm passionate about my work. I constantly research the ways to understand things better. The why, what and how will always be asked.
      </>
    ),
  },
];

const BookList = [
  {
    title: 'Sapiens: A Brief History of Humankind',
    subTitle: 'Yuval Noah Harari',
    image: "/img/books/sapiens.webp",
    tags: ['History', 'Economy', 'Social']
  },
  {
    title: 'Meditations',
    subTitle: 'Marcus Aurelius',
    image: "/img/books/pensees-pour-moi-meme.webp",
    tags: ['Lifestyle']
  },
  {
    title: 'The Art Of War',
    subTitle: 'Sun Tzu',
    image: "/img/books/the-art-of-war.webp",
    tags: ['History', 'Education']
  },
  {
    title: 'The Book of Five Rings',
    subTitle: 'Miyamoto Musashi',
    image: "/img/books/the-book-of-five-rings.webp",
    tags: ['History', 'Education']
  },
  {
    title: 'On the origin of species',
    subTitle: 'Charles Darwin',
    image: "/img/books/on-the-origin-of-species.webp",
    tags: ['History']
  },
  {
    title: 'Animal Farm',
    subTitle: 'George Orwell',
    image: "/img/books/la-ferme-des-animaux.webp",
    tags: ['Politics']
  },
  {
    title: '1984',
    subTitle: 'George Orwell',
    image: "/img/books/1984.webp",
    tags: ['Politics', 'Dystopian']
  },
  {
    title: 'Black Skin, White Masks',
    subTitle: 'Frantz Fanon',
    image: "/img/books/peau-noires.webp",
    tags: ['Colonialism']
  },
  {
    title: 'The prince',
    subTitle: 'Nicolas Machiavel',
    image: "/img/books/le-prince.webp",
    tags: ['Politics']
  },
  {
    title: 'Tao Te Ching',
    subTitle: 'Lao Tzu',
    image: "/img/books/tao-te-ching.webp",
    tags: ['Philosophy', 'Education']
  },
  {
    title: '12 Rules for Life: An Antidote to Chaos',
    subTitle: 'Jordan B. Peterson',
    image: "/img/books/the-life-changing-magic-of-tidying-up.webp",
    tags: ['Education']
  },
  {
    title: 'The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing',
    subTitle: 'Marie Kondō',
    image: "/img/books/the-miracle-morning.webp",
    tags: ['Minimalism']
  },
  {
    title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    subTitle: 'James Clear',
    image: "/img/books/atomic-habits.webp",
    tags: ['Productivity']
  },
  {
    title: 'Goodbye, Things: The New Japanese Minimalism',
    subTitle: 'Fumio Sasaki',
    image: "/img/books/goodbye-things.webp",
    tags: ['Minimalism', 'Lifestyle']
  },
  {
    title: 'Capital in the Twenty First Century',
    subTitle: 'Thomas Piketty',
    image: "/img/books/capital-twenty-century.webp",
    tags: ['Economy']
  },
  {
    title: "Vous êtes fous d'avaler ça ! Un industriel de l'agroalimentaire dénonce: Un industriel de l'agro-alimentaire dénonce",
    subTitle: 'Christophe Brusset',
    image: "/img/books/vous-etes-fous.webp",
    tags: ['Food']
  },
];


const WorkList = [
  {
    title: 'Quard de lait',
    subTitle: 'Web development',
    image: "/img/works/qdl.webp",
    tags: ['Wordpress']
  },
  {
    title: 'Mainbase.io',
    subTitle: 'Implementing cryptocurrency exchanges API and various metrics',
    image: "/img/works/mainbase.webp",
    tags: ['Django', 'Python']
  },
  {
    title: 'This card is empty !',
    subTitle: 'Want to work together ?',
    image: "/img/works/empty.webp",
  },
  {
    title: 'Bouygues - NFC wristbands on site',
    subTitle: 'Data centralization and interfacing with devices using NFC wristbands',
    image: "/img/works/bouygues.webp",
    tags: ['NodeJS', 'IOT']
  },
  {
    title: 'TF1 - Koh-Lanta VR',
    subTitle: 'VR game development',
    image: "/img/works/koh-lanta-vr.webp",
    tags: ['VR', 'HTC Vive']
  },
  {
    title: 'Mektoube',
    subTitle: 'Mobile web app development',
    image: "/img/works/mektoube.webp",
    tags: ['React']
  },
  {
    title: 'Altertek',
    subTitle: 'Web development',
    image: "/img/works/altertek.webp",
    tags: ['JAMstack']
  },
  {
    title: 'Tesakura',
    subTitle: 'Web development',
    image: "/img/works/tesakura.webp",
    tags: ['Shopify']
  },
  {
    title: 'Ameublements discount',
    subTitle: 'Web development',
    image: "/img/works/ameublementsdiscount.webp",
    tags: ['Wix']
  },
];

function Img({ url }) {
  if (!url) {
    return null
  }

  return (
    <div className="text--center ">
    <img src={ url }  />
    </div>
  );
}


function Tags({ tags = [] }) {
  if (tags.length === 0) return null

  return (
    <p>
    {tags.map((tag) => (
      <span class="badge badge--primary rounded">{tag}</span>
    ))}
    </p>
  );
}


function Item({Svg = '', title = '', subTitle = '', tags = [], description, image}) {


  return (
    <div className='col col--4'>

    <Img url={ image } />

      <div className="text--center padding-horiz--md">
          <Tags tags={ tags } />
        <h3>  {title}</h3>
        <p class="subTitle">{subTitle}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ItemSM({Svg = '', title = '', subTitle = '', tags = [], description, image}) {


  return (
    <div className='col col--3'>

    <Img url={ image } />

      <div className="text--center padding-horiz--md">
          <Tags tags={ tags } />
        <h3>  {title}</h3>
        <p class="subTitle">{subTitle}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}



function DisplayList({ list }) {
  return (
        <div className="row col col--9 margin--lg"       style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
          {list.map((props, idx) => (
            <Item key={idx} {...props} />
          ))}
        </div>

  );
}

function DisplayListSM({ list }) {
  return (
        <div className="row col col--9 margin--lg"       style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
          {list.map((props, idx) => (
            <ItemSM key={idx} {...props} />
          ))}
        </div>

  );
}

export {
  DisplayList,
  DisplayListSM,
  ValueList,
  RoleList,
  BookList,
  WorkList
}

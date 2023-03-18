import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const TestimonialList = [
  {

    author: 'Quentin Forand',
    position: 'Tech Lead at Trusk',
    quote: "Samuel is autonomous, professional, and has undeniable technical skills. His relentless search for patterns and best practices has sparked some enlightening debates that continuously improved our stack. He does not hesitate to ask for feedback and is always willing to help his coworkers. As his Techlead at Trusk, it was a pleasure having Samuel with us.",
  },
  {
    quote: "Samuel supported me in supervising the Software Development module for 3rd year students at Epitech Paris. His help was very precious thanks to his seriousness, knowledge and his pedagogy. I had only positive feedback from students concerning him, he was able to guide and advise them in a very relevant way on issues regarding sofware architecture, work methodology and development. I would work with him again in the future with great pleasure! Thank you Samuel.",
    author: "Amine Mohamadi",
    position: "Pedagogical manager at Epitech"
  },
  {
    quote: "Samuel is very profesionnal. He was able to quickly understand our needs and find the right solutions for us. We are very satisfied of his work and will work with him again.",
    author: "Ouassini Benheddi",
    position: "Production manager at Quart de lait"
  },
  {
    quote: "Samuel loves teaching ! it is also focused on knowledge sharing. I remember long discussions around SEO, on the meteorJS framework and JS bots. He can be trusted as a teacher!",
    author: "Benjamin Sansy",
    position: "Student at web@cadémie"
  }

];



function Item({  author, position, quote, id}) {

  return (
    <div className='col col--10 css-t29qzu margin--lg'>
        <p className="citation"><span class="quote-left">
        <svg role="img"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="quote-left"
        class="svg-inline--fa fa-quote-left fa-w-14"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512">


<path fill="currentColor" d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z">
</path>

        </svg></span>
        &nbsp;   {quote}</p>
        <p style={{
          textAlign: 'right',
        }}><strong>{author}</strong> <br /> {position}</p>

    </div>
  );
}

function DisplayQuoteList({ list }) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row centered_container" style={{
          alignContent: 'space-between'
        }}>
          {list.map((props, idx) => (
            <Item key={idx} {...props} id={idx} />
          ))}
        </div>
      </div>
    </section>


  );
}

export {
  DisplayQuoteList,
  TestimonialList
}

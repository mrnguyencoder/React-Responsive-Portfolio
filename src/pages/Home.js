import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import '../styles/Home.css';

function Home() {
const [text] = useTypewriter({
  words: [
    'Hello World!',
    "I'm Nguyen Coder",
    "Let's coding makes fun"
  ],
  loop: true,
  delaySpeed: 1600,
})
  return (
    <div className='hero'>
      <div className='bgcircle'>
        <div className='circle'></div>
      </div>
      <span className='text'>{text}</span>
      <Cursor />
    </div>
  )
}

export default Home;
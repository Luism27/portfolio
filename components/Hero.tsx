import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, My name is Luis Marquez", "Electronic engineer who love <Code />", "I love u"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img src="" alt="" />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#ffffff"/>
      </h1>
    </div>
  )
}

export default Hero

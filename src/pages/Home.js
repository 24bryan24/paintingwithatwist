import React from 'react'
import Hero from '../components/Hero'
import Grid from '../components/Grid'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div>
        <Hero />
        <Grid />
        <Carousel />
        <div className='w-full h-screen bg-slate-200 text-center'>Hello</div>
    </div>
  )
}

export default Home
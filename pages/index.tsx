import Head from 'next/head';
import type { NextPage } from 'next';

import Hero from '../components/hero/hero';
import Nav from '../components/nav/nav';
import Tech from '../components/tech/tech';
import Portfolio from '../components/portfolio/portfolio';
import Script from 'next/script';
import Contact from '../components/contact/contact';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nathan Nicholson | Dev Portfolio</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Script
        src='https://kit.fontawesome.com/c4aa491b21.js'
        crossOrigin='anonymous'
      ></Script>

      <Nav />

      <div className='min-w-screen min-h-screen bg-gradient-radial from-black to-blue flex justify-center'>
        <div className='min-w-screen min-h-screen max-w-7xl w-full flex flex-col items-center justify-center text-white'>
          <header
            id='hero'
            className='relative flex top-16 justify-start h-[50em] w-full'
          >
            <Hero />
          </header>

          <section
            id='tech'
            className='relative h-[55em] w-full flex justify-end'
          >
            <Tech />
          </section>

          <section id='portfolio' className='w-full px-16'>
            <Portfolio />
          </section>

          <section
            id='contact'
            className='relative w-full flex flex-col items-center'
          >
            <Contact />
          </section>
        </div>
      </div>

      <footer className='bg-black w-full text-white text-lg  h-56 flex justify-center items-center'>
        Designed and Programmed by Nathan Nicholson
      </footer>
    </div>
  );
};

export default Home;

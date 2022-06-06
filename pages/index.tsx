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

      <div className='overflow-hidden min-w-screen min-h-screen bg-gradient-radial from-black to-blue flex justify-center'>
        <div className='min-w-screen min-h-screen max-w-7xl w-full flex flex-col items-center justify-center text-white'>
          <header
            id='hero'
            className='relative flex justify-start w-full h-[47em] lg:top-16 lg:h-[55em]'
          >
            <Hero />
          </header>

          <section
            id='tech'
            className='relative w-full justify-center flex h-[50em] md:justify-end lg:h-[55em]'
          >
            <Tech />
          </section>

          <section
            id='portfolio'
            className='w-full flex flex-col items-center px-12 md:block lg:px-16'
          >
            <Portfolio />
          </section>

          <section
            id='contact'
            className='relative w-full flex flex-col items-center md:mt-8'
          >
            <Contact />
          </section>
        </div>
      </div>

      <footer className='bg-black w-full text-white flex justify-center items-center h-56 text-base md:text-lg'>
        Designed and Programmed by Nathan Nicholson
      </footer>
    </div>
  );
};

export default Home;

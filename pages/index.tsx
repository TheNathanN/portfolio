import Head from 'next/head';
import type { NextPage } from 'next';

import Hero from '../components/hero/hero';
import Nav from '../components/nav/nav';
import Tech from '../components/tech/tech';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nathan Nicholson | Dev Portfolio</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Nav />

      <div className='min-w-screen min-h-screen bg-gradient-radial from-black to-blue flex justify-center '>
        <div className='min-w-screen min-h-screen max-w-7xl w-full flex flex-col items-center justify-center font-sans text-white '>
          <header
            id='hero'
            className='relative flex top-16 px-16 justify-center h-[55em] w-full '
          >
            <Hero />
          </header>

          <section id='tech' className='relative h-[55em] w-full'>
            <Tech />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;

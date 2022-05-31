import Head from 'next/head';
import type { NextPage } from 'next';

import Hero from '../components/hero/hero';
import Nav from '../components/nav/nav';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nathan Nicholson | Dev Portfolio</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <body className='w-full h-full min-h-screen bg-gradient-radial from-black to-blue font-sans text-white '>
        <Nav />
        <Hero />
      </body>
    </div>
  );
};

export default Home;

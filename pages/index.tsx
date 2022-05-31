import type { NextPage } from 'next';
import Head from 'next/head';

import Nav from '../components/nav/nav';

const Home: NextPage = () => {
  return (
    <div className='min-h-screen min-w-screen bg-gradient-radial from-black to-blue font-sans text-white'>
      <Head>
        <title>Nathan Nicholson | Dev Portfolio</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Nav />

      <main className=''></main>

      <footer className=''></footer>
    </div>
  );
};

export default Home;

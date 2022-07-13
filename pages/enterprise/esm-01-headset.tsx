import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/Enterprise/ESM-01/HeroSection/HeroSection';
import Features from '../../components/Enterprise/ESM-01/Features/Features';
import WorkFromHome from '../../components/Enterprise/ESM-01/WorkFromHome/WorkFromHome';
import CallCenter from '../../components/Enterprise/ESM-01/CallCenter/CallCenter';
import ESM01Overview from '../../components/Enterprise/ESM-01/ESM-01-Overview/ESM01Overview';
import Testimonials from '../../components/Enterprise/ESM-01/Testimonials/Testimonials';
import ESM01Features from '../../components/Enterprise/ESM-01/ESM-01-Features/ESM01Features';
import Footer from '../../components/Footer/Footer';

const Esm01 = () => {
  return (
    <div data-theme="smartaudiotheme">
      <Head>
        <title>ESM-01 Wireless Headphones | Smart Audio Technologies</title>
        <meta name="description" content="ESM-01 Wireless Headphones | Clear Voice Without The Noise®️" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection />
      <Features /> 
      <WorkFromHome />
      <CallCenter />
      <ESM01Overview />
      <Testimonials />
      <ESM01Features />
      <Footer />
      </div>
  )
}

export default Esm01
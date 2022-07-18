import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/Contact/Contact'
import Features from '../components/Features/Features'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'
import InAction from '../components/InAction/InAction'
import LogoCloud from '../components/LogoCloud/LogoCloud'
import Motivation from '../components/Motivation/Motivation'
import Team from '../components/Team/Team'
import ValuedPartners from '../components/ValuedPartners/ValuedPartners'
import Footer from '../components/Footer/Footer'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div data-theme="smartaudiotheme"  >
      <Head>
        <title>Smart Audio Technologies</title>
        <meta name="description" content="Smart Audio Technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Header />
      <HeroSection />  
      <LogoCloud />
      <Motivation />
      <Features />
      <InAction />
      <ValuedPartners />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home

import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Process from '../sections/Process';
import Technologies from '../sections/Technologies';
import Features from '../sections/Features';
import Projects from '../sections/Projects';
import Testimonials from '../sections/Testimonials';
import ContactUs from '../sections/ContactUs';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <>
      <ScrollReveal variant="drift"><Hero /></ScrollReveal>
      <ScrollReveal variant="lift"><About /></ScrollReveal>
      <ScrollReveal variant="slide"><Services /></ScrollReveal>
      <ScrollReveal variant="rotate"><Process /></ScrollReveal>
      <ScrollReveal variant="blur"><Technologies /></ScrollReveal>
      <ScrollReveal variant="drift"><Features /></ScrollReveal>
      <ScrollReveal variant="slide"><Projects /></ScrollReveal>
      <ScrollReveal variant="rotate"><Testimonials /></ScrollReveal>
      <ScrollReveal variant="lift"><ContactUs /></ScrollReveal>
    </>
  );
};

export default Home;

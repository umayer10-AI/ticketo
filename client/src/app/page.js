import Banner from '@/component/Banner';
import HeroBanner from '@/component/HeroBanner';
import HeroUISection from '@/component/HeroUISection';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <HeroBanner></HeroBanner>
      <HeroUISection></HeroUISection>
    </div>
  );
};

export default page;
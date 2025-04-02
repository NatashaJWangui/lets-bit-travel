import React from 'react'
import Carousel from 'react-multi-carousel';
import FeaturedCard from './FeaturedCard';
import { Feature } from '@/constants';

function FeaturedSlider() {

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4, slidesToSlide: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };
    
  return (
    <div className="relative z-10">
      <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite responsive={responsive}>
        {Feature.map((featured, index) => (
          <FeaturedCard key={index} {...featured} />
        ))}
      </Carousel>
    </div>
  )
}

export default FeaturedSlider
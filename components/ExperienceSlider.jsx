import React from 'react'
import ExperienceCard from './ExperienceCard';
import Carousel from 'react-multi-carousel';
import { Experiences } from '@/constants';


function ExperienceSlider() {

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1, slidesToSlide: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <div className="relative z-10">
      <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite responsive={responsive}>
        {Experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </Carousel>
    </div>
  )
}

export default ExperienceSlider
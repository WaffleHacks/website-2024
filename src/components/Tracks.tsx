import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const Tracks = () => {
  return (
    <div className="font-mplus p-8" id="tracks">
        <h1 className="text-4xl font-extrabold mb-4">Tracks</h1>

        <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='track-photo bg-gray-300'></div>
            <div className='track-desc'>
                <h1>Wellness</h1>
                <p>
                Mental and physical health is a huge aspect of student life. This award will be given to the hack that best supports student wellness. This category is very broad and open to hacks of all different forms, including software, hardware, and design. Teams can choose to create solutions for areas such as healthcare, accessibility, stress and productivity, awareness for different causes, and more! Projects will be evaluated on impact, innovation, and usability.
                </p>
                <h2>Prize(s)</h2>
                <p>???</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='track-photo bg-gray-300'></div>
            <div className="track-desc">
                <h1>Diversity & Inclusion</h1>
                <p>
                Innovate for inclusivity! This track honors projects that champion diversity, whether through software, hardware, or design. Judges seek impactful, innovative solutions promoting inclusivity in tangible, real-world ways.
                </p>
                <h2>Prize(s)</h2>
                <p>???</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='track-photo bg-gray-300'></div>
            <div className="track-desc">
                <h1>Community</h1>
                <p>
                In this track, we're looking for the most creative and impactful hacks that bring communities together. Whether it's a virtual platform for neighbors to connect, an app that promotes local business, or an initiative that 
                </p>
                <h2>Prize(s)</h2>
                <p>???</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='track-photo bg-gray-300'></div>
            <div className="track-desc">
                <h1>Food Insecurity</h1>
                <p>
                Innovative solutions are needed to end student food insecurity! By utilizing technology to connect students with resources, we can revamp campus dining and create sustainable food assistance programs. There are endless possibilities, and we're ready to help college and university students find affordable, nutritious meals.
                </p>
                <h2>Prize(s)</h2>
                <p>???</p>
            </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Tracks
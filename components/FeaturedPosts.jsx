import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FeaturedPostCard, Header, Loading } from '.';
import { getFeaturedPosts } from '../services';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setLoaded(true);
    });
  }, []);

  if (!Loaded) {
    Loading();
  } else {
    return (
      <div>
        <Carousel infinite showDots={true} responsive={responsive} autoPlay={true} autoPlaySpeed={3000}>
          {featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
            ))
          }
        </Carousel>
      </div>
    );
  }
};

export default FeaturedPosts;
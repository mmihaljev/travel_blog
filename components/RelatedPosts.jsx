import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { PostCard } from '.';
import { getSimilarPosts } from '../services';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const RelatedPosts = ( {categories, slug} ) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getSimilarPosts(categories, slug).then((result) => {
      console.log(result);
      setRelatedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div className="w-full">
      <Carousel infinite showDots={true} responsive={responsive}>
        {relatedPosts.map((post) => (
          <PostCard post={post}/>
          ))
        }
      </Carousel>
    </div>
  );
};

export default RelatedPosts;
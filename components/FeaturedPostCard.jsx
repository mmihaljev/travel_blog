import React from 'react';

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-screen lg:w-screen">
    <div className="absolute rounded-lg lg:bg-center lg:bg-no-repeat lg:bg-cover lg:inline-block lg:w-full h-screen">
      <video className="h-screen w-full object-cover videoTag" autoPlay loop muted>
        <source src={post.video.url} type='video/mp4'/>
      </video>
    </div>
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-70 from-gray-700 to-black w-full h-full" />
    <div className="flex flex-col rounded-lg p-4 lg:ml-96 items-start justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow text-7xl text-left">{post.title}</p>
      <p className="text-white opacity-60 mb-4 text-shadow lg:text-7xl text-4xl text-left max-w-4xl leading-snug">{post.excerpt}</p>
      <p className="text-white mb-4 text-shadow text-4xl text-left max-w-4xl leading-snug flex group-hover:max-w-full transition-all duration-500 group">
        <a href={`/post/${post.slug}`} class="group text-white transition duration-300 group-hover:text-pink-500">
          Pročitaj sada
        </a> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-4 mt-4 group-hover:w-10 duration-300 group-hover:text-pink-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </p>
    </div>
  </div>
);

export default FeaturedPostCard;
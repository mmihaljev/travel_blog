import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-screen w-screen">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover inline-block w-full h-full" style={{ backgroundImage: `url('${post.featuredImage.url}')` }}/>
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-70 from-gray-700 to-black w-full h-full" />
    <div className="flex flex-col rounded-lg p-4 ml-96 items-start justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow text-7xl text-left">{post.title}</p>
      <p className="text-white opacity-60 mb-4 text-shadow text-7xl text-left max-w-4xl leading-snug">{post.excerpt}</p>
      <p className="text-white mb-4 text-shadow text-4xl text-left max-w-4xl leading-snug flex group-hover:max-w-full transition-all duration-500">
        <a href={`/post/${post.slug}`} class="group text-white transition duration-300 hover:text-pink-500">
          Pročitaj sada
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-pink-500"></span>
        </a> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-4 mt-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </p>
    </div>
  </div>
);

export default FeaturedPostCard;
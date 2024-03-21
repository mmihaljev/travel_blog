import React from 'react';
import calculateDays from '../functions/CalculateDays';
import Link from 'next/link';

const PostListCard = ({ post }) => {

  return (
    <Link rel="stylesheet" href={`/post/${post.slug}`}>
      <div className= "lg:grid grid-cols-12 p-4 hover:shadow-pink-400 duration-300 shadow-lg rounded-lg mb-8">
        <div className="col-span-4">
          <img src={post.featuredImage.url} alt="postImage" className="rounded-lg"/>
        </div>
        <div className="col-span-8 relative lg:ml-20 mt-4 lg:mt-0 items-center grid text-center lg:text-left">
          <h3 className="text-black text-2xl">{post.excerpt}</h3>
          <div className="flex lg:mt-16 mt-8 items-center text-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 opacity-80 text-pink-500 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
            </svg>
            <h3 className="text-black text-xl opacity-70">{post.lokacije}</h3>
          </div>
          <div className="flex mt-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 opacity-80 text-pink-500 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h3 className="text-black text-xl opacity-70">{calculateDays(new Date(post.pocetakPutovanja), new Date(post.zavrsetakPutovanja))} dana</h3>
          </div>
          <div className="flex mt-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 opacity-80 text-pink-500 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h3 className="text-black text-xl opacity-70">{post.cijena}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostListCard;

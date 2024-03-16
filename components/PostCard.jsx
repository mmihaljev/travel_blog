import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {

  return (
    <div className= "shadow-lg mr-2 relative rounded-t-lg">
      <div className="relative overflow-hidden shadow-md pb-80 w-full">
        <Link href={`/post/${post.slug}`}>
            <img 
              src={post.featuredImage.url}
              alt={post.title}
              className="object-top absolute h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center text-3xl font-semibold p-4 rounded-lg">{post.title}</div>
            </div>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;

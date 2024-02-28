import React, {useContext, useState, useEffect} from 'react';
import Link from 'next/link';

import { getCategories } from '@/services';
import { FeaturedPosts } from '@/sections';
import { SearchBar } from '.';

const Header = ({textColor}) => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        getCategories()
          .then((newCategories) => setCategories(newCategories))
      }, []);

      
    return (
    <div className={"header fixed container justify-between w-screen pt-8 pb-8 min-w-max " + (textColor == "text-white" ? "bg-transparent" : "bg-white")}>
        <div className="flex justify-between w-screen mr-40px px-10">
            <div className="">
                <Link href="/">
                    <span className={"mt-2 cursor-pointer font-bold text-4xl " + (textColor)}>
                        TravelBlog
                    </span>
                </Link>
            </div>
            <div className="flex items-center">
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className={"ml-4 mr-4 font-normal cursor-pointer text-lg hover:text-pink-500 duration-300 " + (textColor)}>
                            {category.name}
                        </span>
                    </Link>
                ))}
                <div className="ml-4">
                    <SearchBar color={textColor=="text-white" ? "white" : "black"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
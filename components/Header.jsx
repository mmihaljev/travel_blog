import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '@/services';
import { HamburgerMenu, SearchBar } from '.';
import { IoIosAirplane } from "react-icons/io";
import { LiaMountainSolid } from "react-icons/lia";
import { GiLion } from "react-icons/gi";

const Header = ({ textColor }) => {

  const categories = [
    {
      name: "Putovanja",
      slug: "putovanja",
      Icon: IoIosAirplane,
    },
    {
      name: "Izleti",
      slug: "izleti",
      Icon: LiaMountainSolid,
    },
    {
      name: "Zoološki vrtovi",
      slug: "zoo",
      Icon: GiLion,
    },
  ];

  return (
    <div
      className={
        'header fixed container justify-between w-screen pt-8 pb-8 min-w-max ' +
        (textColor == 'text-white' ? 'bg-transparent' : 'bg-transparent backdrop-blur-sm')
      }
    >
      <div className="flex justify-between w-screen mr-40px px-10 items-center">
        <div className="">
          <Link href="/">
            <div className="flex items-center">
              <img
                src={'/mimlogo.png'}
                alt="Logo"
                className="h-16 w-auto mr-2"
              />
              <span
                className={
                  'cursor-pointer font-normal text-2xl ' + textColor
                }>
                MIMTravel
              </span>
            </div>
          </Link>
        </div>
        <div className="md:flex items-center hidden">
          {categories.map((category) => {
            const {Icon, slug, name} = category; 
            return (
              <Link key={slug} href={`/category/${slug}`}>
                <span
                  className={
                    'ml-8 mr-8 font-normal cursor-pointer text-lg hover:text-pink-500 duration-300 flex items-center ' +
                    textColor
                  }
                >
                  <Icon className="mr-2"/>
                  {name}
                </span>
              </Link>
          )})}
          <div className="ml-4">
            <SearchBar
              color={textColor == 'text-white' ? 'white' : 'black'}
            />
          </div>
        </div>
        <div className="ml-4 lg:hidden">
          <HamburgerMenu categories={categories}/>
        </div>
      </div>
    </div>
  );
};

export default Header;

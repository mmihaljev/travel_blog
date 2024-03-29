import React from 'react';
import moment from 'moment';
import Categories from './Categories';
import { TableOfContents } from '.';
import RelatedPosts from './RelatedPosts';
import Link from 'next/link';

const PostDetail = ({ post }) => {

  const headingsList = post.content.raw.children
    .filter((typeObj) => typeObj.type === 'heading-three')
    .map((typeObj) => ({
      id: `${typeObj.children[0].text.replace(/\s+/g, '-').toLowerCase()}`,
      text: typeObj.children[0].text,
    }));

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        const uniqueClassId = `${text[0].replace(/\s+/g, '-').toLowerCase()}`;
        return <h3 key={index} id={uniqueClassId} className="text-xl font-semibold mb-4 scroll-mt-32">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="bg-white pb-12 mb-8 items-center object-center lg:px-56 pt-4 w-screen lg:w-auto">
        <h1 className="mb-8 text-4xl font-normal text-center mt-16 lg:px-80 px-10">{post.excerpt}</h1>
        <div className="flex text-neutral-600 font-normal text-l text-center lg:px-56 mb-16 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
          </svg>
          <div className="mr-4">
            {post.title}
          </div>
          |
          <div className="ml-4">
            {moment(post.createdAt).format('DD.MM.YYYY')}
          </div>
        </div>
        <div className="relative overflow-hidden shadow-md mb-16 mx-10 lg:mx-0">
          <img src={post.featuredImage.url} alt="" className="object-middle lg:w-full h- full lg:object-cover shadow-lg rounded-lg lg:h-100"/>
        </div>
        <div className="grid-cols-10 grid-flow-col gap-16 lg:grid">
          <div className="lg:col-span-3 mx-10 lg:mx-0">
            <TableOfContents headings={headingsList}/>
          </div>
          <div className="px-10 lg:px-0 lg:col-span-7 mt-16 lg:mt-0 text-justify">
            {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </div>
        </div>
        <div className="grid-cols-10 grid-flow-col gap-16 lg:grid lg:my-40 my-20 mx-10">
          <div className="col-span-3 text-left justify-start">
            <h1 className="mb-6 text-4xl font-bold text-left">Tražiš još ideja za putovanje?</h1>
            <h3 className="lg:mb-32 mb-12 text-2xl font-normal text-left text-gray-600">Pogledaj ove slične blogove</h3>
            <Link  href={`/category/${post.categories[0].slug}`} className="mb-16 text-xl font-normal text-left text-gray-600 flex">
              <span className="flex group hover:text-pink-500 duration-300">
                Pogledaj sve iz {post.categories[0].slug}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-4 mt-1 group-hover:w-12 duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </Link>
          </div>
          <div className="h-40 w-full col-span-7">
            <RelatedPosts categories={post.categories[0].slug} slug={post.slug}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
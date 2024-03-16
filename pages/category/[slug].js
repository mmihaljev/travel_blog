import React from 'react'

import {getCategories, GetPostDetails} from '../../services';

import {PostDetail, Categories, PostWidget, Author, Header} from '../../components';

const PostDetails = ({ post }) => {
  return (
    <div className="container absolute w-screen max-w-none">
        <Header textColor={"text-black"}/>
        <div className="mt-28 mx-32">
            <div>
                <PostDetail post={post}/>
            </div>
        </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({params}) {
    const data = await GetPostDetails(params.slug);
  
    return {
      props: { post: data }
    }
}

export async function getStaticPaths() {
    const categories = await getCategories();

    return {
        paths: categories.map(({ node: { slug }}) => ({ params: { slug }})),
        fallback: false,
    }
}
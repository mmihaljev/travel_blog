import Head from 'next/head'
import { PostCard, Categories, PostWidget, Header } from '../components';
import { getPosts } from '../services';
import { FeaturedPosts } from '../components';

export default function Home({posts}) {
  return (
    <div className="relative">
      <Header textColor={"text-white"}/>
      <FeaturedPosts/>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {posts}
  }
}

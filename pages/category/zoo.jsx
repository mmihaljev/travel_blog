import { useState, useEffect} from 'react';
import { Header, Loading, PostListCard } from '../../components';
import { getCategoryPosts } from '@/services';

const Zoo = () => {

  const [categoryPosts, setCategoryPosts] = useState([]);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    getCategoryPosts("zoo").then((result) => {
      setCategoryPosts(result);
      setLoaded(true);
    });
  }, []);

  if (!Loaded) {
    return Loading();
  } else {
    return (
      <div className="relative">
        <Header />
        <div className="relative top-0 left-0 w-screen h-screen flex justify-center items-center">
          <div className="relative w-5/6 h-5/6 justify-center items-center container">
            <img
              src="/lion.png"
              alt="WorldMap"
              className="opacity-60 object-center lg:h-4/6 mt-28 mb-20 mx-auto"
            />
            <div className="absolute inset-0 flex justify-center items-center mb-32 lg:mb-0">
              <div className="text-center">
                <h1 className="lg:text-8xl font-bold text-6xl">ZOOLOŠKI VRTOVI</h1>
                <h3 className="lg:text-5xl font-normal mt-8 text-2xl">Iskustva, recenzije i još mnogo toga <br className="hidden lg:flex"/>iz zooloških vrtova diljem Europe</h3>
              </div>
            </div>
            <div className="container mx-auto">
              {categoryPosts.map((post, index) => (
                  <PostListCard key={index} post={post} />
                  ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Zoo;

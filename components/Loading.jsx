import React from 'react';

const Loading = () => {

  return (
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover inline-block w-full h-full">
      <video className='videoTag' autoPlay loop muted>
        <source src="/LoadingScreen.mp4" type='video/mp4' />
      </video>
    </div>
  );
}

export default Loading;

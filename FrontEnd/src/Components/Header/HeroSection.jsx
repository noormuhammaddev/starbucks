import React from 'react';
import mainImage from "../../../src/assets/starbucks.jpg" 

const HeroSection = () => {
  const data = [mainImage]; // Image in an array

  return (
    <div className="relative flex w-full h-[600px] bg-[#FAF9F6] mb-10">
      <div className="w-[65%] bg-white p-10 flex flex-col justify-center items-start h-full">
        <h4 className="text-sm uppercase tracking-wider text-gray-700 mb-2">Welcome<span><hr className='text-black' /></span></h4>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">I'm Dianna Adams</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Food Critic / Influencer / Blogger</h2>
        <p className="text-lg text-gray-600 mb-8 w-[80%]">
          Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi
          aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.
        </p>
      </div>
      
      <div className="w-[35%] bg-[#1a6d1e] h-full flex items-center justify-center relative">
        <img
          src={data[0]} // Access the first element of the array
          alt="Profile"
          className="object-cover h-[80%] w-[80%] shadow-lg relative right-[200px] border-8 border-[#FAF0E6]-400"
        />
      </div>
    </div>
  );
};

export default HeroSection;

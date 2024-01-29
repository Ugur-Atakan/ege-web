import { React } from 'react';
import Image from 'next/image';
import heroImg from './hero-img.jpg';

const Hero = ({ lang }) => {
  return (
    <div className="mt-[8%]">
      <div className="flex flex-col border-b border-gray-200 lg:border-0">
        <div className="relative">
          <div aria-hidden="true" className="rounded-l-3xl absolute hidden h-full w-1/2 shadow-lg bg-gradient-to-r from-[#1649FF] to-[#3E79F4] lg:block" />
          <div className="relative lg:bg-transparent">
            <div className="max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
              <div className="mx-auto max-w-3xl py-20 lg:max-w-none lg:py-40"> {/* Adjusted padding here */}
                <div className="lg:pr-16">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
                    Registate Products
                  </h1>
                  <p className="mt-4 text-xl text-white">
                    All the products listed for you in one place to optimize your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
            <Image
              src={heroImg}
              alt="hero-img"
              className="rounded-r-3xl h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

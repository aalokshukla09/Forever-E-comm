import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';
// import Stats from './Stats.jsx';

const About = () => {
  return (
    <div className='about-page'>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 items-center animate-fadeIn'>
        <img className='w-full md:max-w-112.5 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105' src={assets.about_img} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className='animate-fadeUp'>
            Welcome to our store! We pride ourselves on offering an unmatched shopping experience that combines top-quality products with unbeatable prices. From the latest fashion trends to cutting-edge electronics, we make sure our collection suits every style and need.
          </p>
          <p className='animate-fadeUp'>
            Every item is handpicked with care, ensuring you receive nothing but the best. With an intuitive, easy-to-use interface, we make shopping not only simple but enjoyable.
          </p>
          <b className='text-gray-800 animate-fadeUp'>Our Mission</b>
          <p className='animate-fadeUp'>
            To redefine the online shopping experience by offering a vast selection of high-quality products, unparalleled convenience, and exceptional customer service.
          </p>
        </div>
      </div>

      <div className='text-2xl text-center mt-20 mb-10 border-t pt-8'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='px-10 md:px-12 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>
            We take quality seriously. Every product in our store undergoes a rigorous quality check, ensuring that you receive only the best.
          </p>
        </div>
        <div className='px-10 md:px-12 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>
            With our easy-to-navigate website and fast checkout process, shopping with us is a breeze.
          </p>
        </div>
        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>
            We believe in putting customers first. Our support team ensures your shopping journey is stress-free and enjoyable.
          </p>
        </div>
      </div>

      {/* <Stats /> */}

      <NewsLetterBox className="animate-fadeIn" />
    </div>
  );
};

export default About;
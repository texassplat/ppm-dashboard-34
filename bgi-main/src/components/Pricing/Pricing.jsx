'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import CountUp from 'react-countup';
import { useEffect } from 'react';

const Pricing = () => {
  useEffect(() => {
    const handleMouseEnter = (event) => {
      event.target.classList.add('active');
      const parent = event.target.parentElement;
      if (parent) {
        const siblings = parent.querySelectorAll('.pricing-box');
        siblings.forEach((sibling) => {
          if (sibling !== event.target) {
            sibling.classList.remove('active');
          }
        });
      }
    };
    const elements = document.querySelectorAll('.pricing-box');
    elements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
    });
    return () => {
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
      });
    };
  }, []);

  return (
    <section className='relative overflow-hidden pt-[120px] pb-[120px] bg-BodyBg2'>
      <div className='Container'>
        <div className='grid grid-cols-6 gap-10 lg:gap-0 lg:grid-cols-12'>
          <div className='col-span-6 lg:col-span-5 w-full mx-auto mr-10'>
            <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor uppercase mb-3'>
              PRICING PLANS
            </h5>
            <h1 className='font-FiraSans font-semibold text-white text-[16px] leading-[26px] sm:text-4xl sm:leading-[46px] md:text-[42px] md:leading-[52px] lg:text-[32px] lg:leading-[42px] xl:text-[42px] xl:leading-[52px]'>
              Pricing Plans for your
              <br />
              SEO needs
            </h1>
            <p className='font-FiraSans text-TextColor mt-6 mb-9'>
              Whether you're just getting started or scaling your online presence, our SEO pricing plans are designed to meet your unique business goals. 
            </p>
            <Link href={'/service'}>
              <button className='size-20 rounded-full text-white text-2xl transition-all duration-500 -rotate-45 hover:text-PrimaryColor bg-PrimaryColor flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 hover:before:scale-100'>
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
          <div className='col-span-6 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:items-start gap-7'>
            <div className='pricing-box group text-center bg-white rounded-lg px-5 sm:px-8 lg:px-4 xl:px-8 pt-5 sm:pt-9 pb-6 sm:pb-10 relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-full before:h-0 before:bg-BodyBg before:rounded-md before:transition-all before:duration-500 hover:before:h-full'>
              <div className='flex items-center gap-4'>
                <div className='pricing-icon size-[76px] bg-BodyBg relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100 rounded-full flex justify-center items-center'>
                  <Image
                    src={'/images/price_icon_01.png'}
                    alt='Starter Plan Icon'
                    width={48}
                    height={48}
                    draggable='false'
                  />
                </div>
                <div className='text-left'>
                  <h6 className='pricing-title text-xl sm:text-2xl lg:text-xl xl:text-[22px] rounded font-FiraSans text-HeadingColor font-semibold transition-all duration-500 mt-4 mb-1'>
                    Starter Plan
                  </h6>
                  <p className='pricing-desc font-FiraSans text-TextColor2 transition-all duration-500 mb-4'>
                    Business
                  </p>
                </div>
              </div>
              <ul className='flex flex-col gap-3 mt-6 mb-9'>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2 transition-all duration-500 border-b border-dashed border-[#1717173d] pb-3'>
                  <Image src={'/images/icon.png'} alt='Audit Icon' width={20} height={20} draggable='false' />
                  Complimentary Audit
                </li>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2 transition-all duration-500 border-b border-dashed border-[#1717173d] pb-3'>
                  <Image src={'/images/icon.png'} alt='Keyword Icon' width={20} height={20} draggable='false' />
                  Keyword & Backlink Profile Review
                </li>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2 transition-all duration-500 border-b border-dashed border-[#1717173d] pb-3'>
                  <Image src={'/images/icon.png'} alt='On-Page Icon' width={20} height={20} draggable='false' />
                  On-Page Optimization for 30 Pages
                </li>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2 transition-all duration-500 border-b border-dashed border-[#1717173d] pb-3'>
                  <Image src={'/images/icon.png'} alt='Technical Icon' width={20} height={20} draggable='false' />
                  Technical Site Fixes
                </li>
              </ul>
              <div className='flex items-end gap-1 pb-5'>
                <div className='flex gap-1'>
                  <h6 className='pricing-price transition-all duration-500 font-FiraSans font-semibold text-2xl text-PrimaryColor'>
                    $
                  </h6>
                  <CountUp
                    start={-9}
                    end={500}
                    prefix=''
                    suffix=''
                    className='pricing-price text-[46px] leading-[45px] font-FiraSans font-semibold text-PrimaryColor transition-all duration-500'
                  />
                </div>
                <h6 className='pricing-price font-FiraSans text-TextColor2 text-lg transition-all duration-500'>
                  / Month
                </h6>
              </div>
              <Link href={'/pricing'} className='flex justify-start'>
                <button className='pricing-btn text-left font-FiraSans border rounded-full text-PrimaryColor px-8 py-[10px] transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100'>
                  Purchase Now
                </button>
              </Link>
            </div>
            <div className='lg:-mt-10 pricing-box active group text-center bg-white rounded-lg px-5 sm:px-8 lg:px-4 xl:px-8 pt-5 sm:pt-9 pb-6 sm:pb-10 relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-full before:h-0 before:bg-BodyBg before:rounded-md before:transition-all before:duration-500 hover:before:h-full'>
              <div className='flex items-center gap-4'>
                <div className='pricing-icon size-[76px] bg-BodyBg relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100 rounded-full flex justify-center items-center'>
                  <Image
                    src={'/images/price_icon_02.png'}
                    alt='Premium Plan Icon'
                    width={48}
                    height={48}
                    draggable='false'
                  />
                </div>
                <div className='text-left'>
                  <h6 className='pricing-title text-xl sm:text-2xl lg:text-xl xl:text-[22px] rounded font-FiraSans text-HeadingColor font-semibold transition-all duration-500 mt-4 mb-1'>
                    Premium Plan
                  </h6>
                  <p className='pricing-desc font-FiraSans text-TextColor2 transition-all duration-500 mb-4'>
                    Business
                  </p>
                </div>
              </div>
              <ul className='flex flex-col gap-3 mt-6 mb-9'>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2 transition-all duration-500 border-b border-dashed border-[#1717173d] pb-3'>
                  <Image src={'/images/icon.png'} alt='Audit Icon' width={20} height={20} draggable='false' />
                  Same as Starter Plan
                </li>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2 transition-all duration-500 border-b border-dashed border-[#1717173d] pb-3'>
                  <Image src={'/images/icon.png'} alt='Dashboard Icon' width={20} height={20} draggable='false' />
                  Executive Dashboard
                </li>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2 transition-all duration-500 border-b border-dashed border-[#1717173d] pb-3'>
                  <Image src={'/images/icon.png'} alt='Blog Icon' width={20} height={20} draggable='false' />
                  2 Blogs a Month
                </li>
                <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2 transition-all duration-500 border-b border-dashed border-[#1717173d] pb-3'>
                  <Image src={'/images/icon.png'} alt='On-Page Icon' width={20} height={20} draggable='false' />
                  On-Page Optimization for 100 Pages
                </li>
              </ul>
              <div className='flex items-end gap-1 pb-5'>
                <div className='flex gap-1'>
                  <h6 className='pricing-price transition-all duration-500 font-FiraSans font-semibold text-2xl text-PrimaryColor'>
                    $
                  </h6>
                  <CountUp
                    start={-9}
                    end={1000}
                    prefix=''
                    suffix=''
                    className='pricing-price text-[46px] leading-[45px] font-FiraSans font-semibold text-PrimaryColor transition-all duration-500'
                  />
                </div>
                <h6 className='pricing-price font-FiraSans text-TextColor2 text-lg transition-all duration-500'>
                  / Month
                </h6>
              </div>
              <Link href={'/pricing'} className='flex justify-start'>
                <button className='pricing-btn text-left font-FiraSans border rounded-full text-PrimaryColor px-8 py-[10px] transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100'>
                  Purchase Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

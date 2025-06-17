"use client";
import Link from 'next/link';
import Image from 'next/image';
import {
  FaAnglesRight,
  FaCircle,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaXTwitter,
} from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { IoIosSend } from "react-icons/io";
import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

const Footer2 = () => {
  return (
    <footer className='bg-BodyBg2 relative z-10 overflow-hidden'>
      <div className='bg-PrimaryColor py-9 mb-[88px]'>
        <div className='Container'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-0 lg:grid-cols-3 lg:items-center'>
            <div className='flex items-center gap-5'>
              <div className='size-[60px] bg-BorderColor2 rounded-full flex items-center justify-center text-white'>
                <FaRegEnvelope size={'22'} />
              </div>
              <div>
                <h6 className='font-FiraSans text-[15px] text-white'>
                  Say Hello
                </h6>
                <Link href={'/contact'}>
                  <button className='font-FiraSans text-xl text-white font-medium'>
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
            <div className='flex lg:justify-center md:border-l lg:border-l-0 xl:border-x-2 border-BorderColor2 py-2 px-5'>
              <Link href={'/'}>
                <Image
                  src={'/images/logo-white.png'}
                  alt='Footer Logo'
                  width={120}
                  height={40}
                  draggable='false'
                />
              </Link>
            </div>
            <div className='flex lg:justify-end'>
              <ul className='flex gap-3 items-center'>
                <li>
                  <Link href={'/'} className='size-[48px] flex justify-center items-center rounded-full bg-BorderColor2 transition-all duration-500 text-white hover:text-PrimaryColor relative z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-white after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100'>
                    <ImFacebook2 size={'15'} />
                  </Link>
                </li>
                <li>
                  <Link href={'/'} className='size-[48px] flex justify-center items-center rounded-full bg-BorderColor2 transition-all duration-500 text-white hover:text-PrimaryColor relative z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-white after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100'>
                    <FaXTwitter />
                  </Link>
                </li>
                <li>
                  <Link href={'/'} className='size-[48px] flex justify-center items-center rounded-full bg-BorderColor2 transition-all duration-500 text-white hover:text-PrimaryColor relative z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-white after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100'>
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link href={'/'} className='size-[48px] flex justify-center items-center rounded-full bg-BorderColor2 transition-all duration-500 text-white hover:text-PrimaryColor relative z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-white after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100'>
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='Container'>
        <div className='grid gap-y-7 grid-cols-12'>
          <div className='col-span-12 md:col-span-6 lg:col-span-4'>
            <h4 className='font-FiraSans text-[22px] text-white font-medium mb-[33px]'>
              About Us
            </h4>
            <p className='font-FiraSans text-[15px] text-TextColor opacity-80 mt-7 mb-6'>
              Continually grow organic leads{' '}
              <br className='hidden lg:block xl:hidden' /> by{' '}
              <br className='hidden xl:block' /> using best practices
            </p>
            <form
              action='#'
              method='post'
              className='relative w-10/12'
            >
              <label
                htmlFor='email'
                className='relative'
              >
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Your E-Mail*'
                  required
                  className='w-full h-[56px] outline-none font-FiraSans border-b border-BorderColor2 bg-transparent py-4 text-white placeholder:text-white mb-4'
                />
              </label>
              <div className='absolute top-3 right-0'>
                <button
                  type='submit'
                  className='rounded-full border border-PrimaryColor bg-PrimaryColor size-9 text-white font-FiraSans flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-HeadingColor before:-z-10 before:scale-0 before:transition-all before:duration-500 hover:before:scale-100'
                >
                  <IoIosSend size={'20'} />
                </button>
              </div>
            </form>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-2'>
            <h4 className='font-FiraSans text-[22px] text-white font-medium mb-[33px]'>
              Company
            </h4>
            <ul className='overflow-hidden'>
              <li>
                <Link href={'/'} className='inline-block'>
                  <button className='flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor transition-all duration-500 hover:text-white hover:gap-1 mb-4'>
                    <FaAnglesRight className='text-xs text-white' />
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link href={'/'} className='inline-block'>
                  <button className='flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor transition-all duration-500 hover:text-white hover:gap-1 mb-4'>
                    <FaAnglesRight className='text-xs text-white' />
                    Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link href={'/'} className='inline-block'>
                  <button className='flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor transition-all duration-500 hover:text-white hover:gap-1 mb-4'>
                    <FaAnglesRight className='text-xs text-white' />
                    Pricing Plan
                  </button>
                </Link>
              </li>
              <li className='block'>
                <Link href={'/'}>
                  <button className='flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor transition-all duration-500 hover:text-white hover:gap-1 mb-4'>
                    <FaAnglesRight className='text-xs text-white' />
                    Latest Blog
                  </button>
                </Link>
              </li>
              <li className='block'>
                <Link href={'/'}>
                  <button className='flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor transition-all duration-500 hover:text-white hover:gap-1'>
                    <FaAnglesRight className='text-xs text-white' />
                    Careers
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <h4 className='font-FiraSans text-[22px] text-white font-medium mb-[33px]'>
              Services
            </h4>
            <ul className='overflow-hidden'>
              <li>
                <Link href={'/'} className='inline-block'>
                  <button className='flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor transition-all duration-500 hover:text-white hover:gap-1 mb-4'>
                    <FaAnglesRight className='text-xs text-white' />
                    IT Solutions
                  </button>
                </Link>
              </li>
              <li>
                <Link href={'/'} className='inline-block'>
                  <button className='flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor transition-all duration-500 hover:text-white hover:gap-1 mb-4'>
                    <FaAnglesRight className='text-xs text-white' />
                    Cyber Security
                  </button>
                </Link>
              </li>
              <li>
                <Link href={'/'} className='inline-block'>
                  <button className='flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor transition-all duration-500 hover:text-white hover:gap-1 mb-4'>
                    <FaAnglesRight className='text-xs text-white' />
                    Digital Marketing
                  </button>
                </Link>
              </li>
              <li>
                <Link href={'/'} className='inline-block'>
                  <button className='flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor transition-all duration-500 hover:text-white hover:gap-1 mb-4'>
                    <FaAnglesRight className='text-xs text-white' />
                    Brand Identity
                  </button>
                </Link>
              </li>
              <li>
                <Link href={'/'} className='inline-block'>
                  <button className='flex items-center justify-start gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor transition-all duration-500 hover:text-white hover:gap-1'>
                    <FaAnglesRight className='text-xs text-white' />
                    SEO Marketing
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <h4 className='font-FiraSans text-[22px] text-white font-medium mb-[33px]'>
              Latest Articles
            </h4>
            {(() => {
              const [articles, setArticles] = useState([]);
              const [loading, setLoading] = useState(true);
              useEffect(() => {
                const fetchArticles = async () => {
                  setLoading(true);
                  const { data, error } = await supabase
                    .from('articles')
                    .select('id, title, featured_image_url, slug, created_at, enabled')
                    .eq('enabled', true)
                    .order('created_at', { ascending: false })
                    .limit(2);
                  if (!error) setArticles(data || []);
                  setLoading(false);
                };
                fetchArticles();
              }, []);
              if (loading) return <div className='text-white'>Loading...</div>;
              if (!articles.length) return <div className='text-white'>No articles found.</div>;
              return articles.map((article, idx) => (
                <div className={`flex gap-5 lg:gap-3 xl:gap-5 pt-1${idx === 0 ? ' mb-6' : ''}`} key={article.id}>
                  <Link href={`/article/${article.slug}`} className=''>
                    <Image
                      src={article.featured_image_url}
                      alt={article.title}
                      width={72}
                      height={72}
                      className='rounded w-[72px] h-[72px] object-cover'
                      draggable='false'
                    />
                  </Link>
                  <div className='flex-1 -mt-1'>
                    <Link href={`/article/${article.slug}`}>
                      <button className='font-FiraSans text-left lg:text-sm xl:text-base text-white transition-all duration-500 hover:text-PrimaryColor'>
                        {article.title}
                      </button>
                    </Link>
                    <p className='font-FiraSans text-sm text-TextColor flex items-center gap-2 mt-2'>
                      <FaCircle size={'8'} className='text-PrimaryColor' />
                      {new Date(article.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center py-8 mt-[94px] border-t border-BorderColor2'>
          <div>
            <p className='font-FiraSans text-[15px] flex items-center text-white'>
              Copyright &copy; {new Date().getFullYear()} Blue Glass Insights.
            </p>
          </div>
          <div>
            <ul className='flex gap-3 sm:gap-6'>
              <li>
              <Link href={'/'}>
                  <button className='font-FiraSans text-left lg:text-sm xl:text-base text-white transition-all duration-500 hover:text-PrimaryColor'>
                    Privacy Policy
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;

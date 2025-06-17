import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="bg-[url('/images/home2-banner.jpg')] bg-cover bg-center bg-no-repeat h-[600px] sm:h-[700px] md:h-[740px] lg:h-[600px] lg:pt-10 xl:h-[548px] 2xl:h-[750px] flex items-center relative z-10 overflow-hidden">
      <div className='Container'>
        <div className='grid lg:grid-cols-2 items-center gap-16 lg:gap-0'>
          <div className='relative text-center sm:text-left'>
            <h1 className='font-FiraSans font-semibold text-white text-[30px] leading-[36px] sm:text-[46px] sm:leading-[52px] md:text-[68x] lg:text-[50px] xl:text-[44px] xl:leading-[50px] 2xl:text-[56px] 2xl:leading-[70px]'>
            Driving Organic Growth
              <br />
              to Elevate Your 
              <br />
              <span className='relative before:absolute before:bottom-3 before:left-0 before:w-full before:h-[10px] before:bg-PrimaryColor before:-z-10'>
              Online Presence
              </span>
            </h1>
            <p className='font-FiraSans text-left  text-TextColor mb-[38px] mt-[22px]'>
            We help businesses grow online by improving their search engine visibility, increasing organic website traffic,and optimizing site content for long-term results. From keyword research and technical SEO to on-page optimization and backlink strategies, our team delivers proven methods to boost rankings and drive qualified leads.
          </p>
            <div className='flex flex-row items-center gap-8 justify-center md:justify-start'>
              <Link href={'/contact'}>
                <button className='primary-btn'>{`Get Started With A Complimentary Audit`}</button>
              </Link>
            </div>
          </div>
          {/* Banner Image flush with bottom */}
          <div className="absolute bottom-0 right-0 md:flex justify-end hidden w-1/2 h-auto">
            <Image
              src="/images/banner2-image.png"
              alt="Banner Thumb"
              width={500}
              height={500}
              draggable="false"
              className="w-full h-auto object-contain max-h-[220px] md:max-h-[300px] lg:max-h-[450px] xl:max-h-[450px] 2xl:max-h-[650px]"
              style={{ maxWidth: 'unset' }}
            />
          </div>
        </div>
      </div>
      <Image
        src="/images/hero_shape.png"
        alt="Banner Shape"
        width={50}
        height={50}
        draggable={false}
        loading="lazy"
        decoding="async"
        style={{ color: 'transparent' }}
        className="absolute top-60 md:top-40 lg:top-[75px] xl:top-[70px] 2xl:top-[144px] left-[75%] md:left-3/4 lg:left-[50%] -translate-x-1/2 animate-rotational hidden sm:block"
        priority={false}
      />
    </section>
  );
};

export default Banner;

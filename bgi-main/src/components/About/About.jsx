import Image from 'next/image';
import Link from 'next/link';
import { FaCheck } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-[120px] bg-BodyBg relative">
      <div className="Container">
        <h1 className="font-FiraSans font-semibold text-center text-HeadingColor text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px] mb-[58px]">
          Perform Website Research to boost <br /> Leads and Organic Growth
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-10 2xl:gap-28 items-center">
          <div className="relative z-10">
            <Image src="/images/about2-image.jpg" alt="About" width={600} height={400} draggable="false" className="w-full 2xl:w-[inherit]" />
            <div className="absolute top-6 right-0 2xl:right-[36px] size-[74px] sm:size-[142px] lg:size-[120px] xl:size-[142px] bg-PrimaryColor rounded-full flex items-center justify-center">
              <div className="text-inner size-14 sm:size-24 lg:size-20 xl:size-24 animate-rotational relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:size-[15px] before:rounded-full before:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 250.5 250.5"
                  className="overflow-visible"
                >
                  <path
                    d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                    id="e-path-35ee1b2"
                    className="fill-transparent"
                  ></path>
                  <text className="font-FiraSans text-[38px]">
                    <textPath
                      id="e-text-path-35ee1b2"
                      href="#e-path-35ee1b2"
                      startOffset="0%"
                      className="fill-white"
                    >
                      * Local SEO * Better Visibility * Higher Growth
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative">
            <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor uppercase mb-3">
              ABOUT COMPANY
            </h5>
            <h1 className="font-FiraSans font-medium text-HeadingColor text-[20px] leading-[30px] sm:text-[22px] sm:leading-[32px] md:text-[28px] lg:text-[22px] lg:leading-[32px] xl:text-[26px] xl:leading-[36px] 2xl:text-[28px] 2xl:leading-[38px]">
              Since 2006, We've been growing organic users
              <br className="hidden sm:block" />
              which leads to increased leads
              <br className="hidden sm:block" />
              to grow your business
            </h1>
            <p className="font-FiraSans text-TextColor2 mt-6">
              At Blue Glass Insights, we specialize in helping businesses attract more organic traffic through proven search engine strategies. From technical SEO to content optimization, our team focuses on driving real, measurable growth—so you get more leads, more visibility, and long-term success in the search results.
            </p>
            <ul className="mt-5">
              <li className="flex items-center gap-4 font-FiraSans font-medium text-lg text-HeadingColor">
                <FaCheck size={"22"} className="text-PrimaryColor" />
                Professional Customer Support
              </li>
              <li className="flex items-center gap-4 font-FiraSans font-medium text-lg text-HeadingColor mt-3">
                <FaCheck size={"22"} className="text-PrimaryColor" />
                Excellent Problem Solving
              </li>
              <li className="flex items-center gap-4 font-FiraSans font-medium text-lg text-HeadingColor mt-3">
                <FaCheck size={"22"} className="text-PrimaryColor" />
                Data-Driven Results
              </li>
            </ul>
            <div className="flex flex-col md:flex-row lg:flex-col 2xl:flex-row md:items-center lg:items-start 2xl:items-center gap-7 mt-9">
              <Link href="/about">
                <button className="primary-btn">{`Discover More`}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

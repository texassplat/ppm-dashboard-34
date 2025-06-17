/* eslint-disable no-unused-vars */
import WorkCard from './WorkCard';
import { LuMoveRight } from 'react-icons/lu';
import Link from 'next/link';

const WorkData = [
  {
    id: 1,
    workNumber: '01',
    workIcon: '/images/steps_1.png',
    workTitle: 'Strategic SEO Planning',
    workDesc:
      'We begin with a full website audit, keyword analysis, and competitor research to create a custom roadmap for organic growth.',
    workUrl: '/service_details',
    workBtn: <LuMoveRight />,
  },
  {
    id: 2,
    workNumber: '02',
    workIcon: '/images/steps_2.png',
    workTitle: 'Ongoing Monitoring & Optimization',
    workDesc:
      'We continuously track performance, fix technical issues, improve rankings, and adapt strategies to search engine updates.',
    workUrl: '/service_details',
    workBtn: <LuMoveRight />,
  },
  {
    id: 3,
    workNumber: '03',
    workIcon: '/images/steps_3.png',
    workTitle: 'Content & Growth Expansion',
    workDesc:
      'We publish keyword-rich blog content, build backlinks, and expand your site\'s visibility to drive more organic traffic over time.',
    workUrl: '/service_details',
    workBtn: <LuMoveRight />,
  },
];

const Work = () => {
  return (
    <section className='pt-28 pb-[120px] bg-BodyBg relative z-10'>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor uppercase flex items-center justify-center gap-2 mb-3'>
            OUR WORKING STEPS
          </h5>
          <h1 className='font-FiraSans font-semibold text-HeadingColor text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]'>
            Lead Generation and Organic Growth
            <br />
            Involves a series of Steps
          </h1>
          <p className='font-FiraSans text-TextColor2 pt-4'>
            Generating leads and growing your website's organic traffic doesn't happen overnight—it requires a strategic, step-by-step approach. 
            <br className='hidden md:block' />
            Our proven process ensures your site attracts the right audience, ranks higher, and converts traffic into leads.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-[54px]'>
          {WorkData.map(
            ({
              id,
              workNumber,
              workIcon,
              workTitle,
              workDesc,
              workUrl,
              workBtn,
            }) => {
              return (
                <div key={id}>
                  <WorkCard
                    workNumber={workNumber}
                    workIcon={workIcon}
                    workTitle={workTitle}
                    workDesc={workDesc}
                    workUrl={workUrl}
                    workBtn={workBtn}
                  />
                </div>
              );
            }
          )}
        </div>
        <div className='text-center mt-9 px-7 mx-auto'>
          <p className='font-FiraSans text-HeadingColor font-medium text-sm'>
            Feel free to reach out to our consulting{' '}
            <Link href={'/service'} className='text-PrimaryColor underline-offset-4 underline'>
              Services
            </Link>{' '}
            for inquiries and assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;

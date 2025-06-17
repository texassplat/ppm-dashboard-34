import Image from 'next/image';
import FeatureCard from "./FeatureCard";
import { LuMoveRight } from "react-icons/lu";

const featureData = [
  {
    id: 1,
    featureIcon: '/images/feature_icon01.png',
    featureTitle: 'Keyword Analysis',
    featureDesc:
      'Discover high-performing keywords your customers are searching for. We analyze search volume, competition, and trends to target the terms that drive traffic and conversions.',
    featureUrl: '/',
    featureBtn: 'Read More',
    featureBtnIcon: <LuMoveRight />,
  },
  {
    id: 2,
    featureIcon: '/images/feature_icon02.png',
    featureTitle: 'Free SEO Audit',
    featureDesc:
      'Identify issues holding your site back. Our comprehensive audit checks site speed, mobile-friendliness, broken links, crawl errors, and more — so we can create a roadmap to improve rankings.',
    featureUrl: '/',
    featureBtn: 'Read More',
    featureBtnIcon: <LuMoveRight />,
  },
  {
    id: 3,
    featureIcon: '/images/feature_icon03.png',
    featureTitle: 'On-Page Optimization',
    featureDesc:
      'From meta titles to internal linking, we fine-tune your website\'s structure and content to align with search engine algorithms and improve page relevance.',
    featureUrl: '/',
    featureBtn: 'Read More',
    featureBtnIcon: <LuMoveRight />,
  },
  {
    id: 4,
    featureIcon: '/images/feature_icon04.png',
    featureTitle: 'Content Strategy & Optimization',
    featureDesc:
      'We optimize existing content and create new, keyword-rich pages designed to rank. This builds authority and keeps users engaged longer.',
    featureUrl: '/',
    featureBtn: 'Read More',
    featureBtnIcon: <LuMoveRight />,
  },
];

const Feature = () => {
  return (
    <section className="pt-28 pb-[120px] bg-BodyBg relative z-10">
      <div className="Container relative">
        <Image
          src="/images/arrow.png"
          alt="Feature Shape"
          width={120}
          height={120}
          className="absolute top-0 right-16 animate-swing hidden xl:block"
        />
        <div className="text-center">
          <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor uppercase flex items-center justify-center gap-2 mb-3">
            Featured Services
          </h5>
          <h1 className="font-FiraSans font-semibold text-HeadingColor text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]">
          Unleash Your {`Business's`} Growth
            <br className="hidden sm:block" />
            with a free SEO audit.
            <br className="hidden sm:block" />
             Increase your organic traffic and leads
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
          {featureData.map((props) => (
            <div key={props.id}>
              <FeatureCard {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;

/* eslint-disable react/prop-types */
import Link from 'next/link';
import Image from 'next/image';

const FeatureCard = ({
  featureUrl,
  featureIcon,
  featureTitle,
  featureDesc,
  featureBtn,
  featureBtnIcon,
}) => {
  return (
    <div className='group rounded-lg pt-8 px-6 lg:px-3 xl:px-6 bg-white transition-all duration-500 border border-transparent hover:border-PrimaryColor relative z-10 pb-7'>
      <div className='relative pt-[6px] z-10'>
        <Image
          src={featureIcon}
          alt={featureTitle}
          width={64}
          height={64}
          draggable='false'
        />
      </div>
      <Link href={featureUrl}>
        <button className='font-FiraSans text-left font-medium text-xl lg:text-lg xl:text-xl pb-[10px] text-HeadingColor mt-6'>
          {featureTitle}
        </button>
      </Link>
      <p className='font-FiraSans text-TextColor2 pb-5 mt-3'>{featureDesc}</p>
      <Link href={featureUrl}>
        <button className='inline-block relative flex items-center gap-2 font-FiraSans uppercase overflow-hidden font-medium text-sm'>
          <span className='-ml-[76px] text-PrimaryColor transition-all duration-500 group-hover:ml-0'>
            {featureBtn}
          </span>
          <span className='text-[22px] text-PrimaryColor'>
            {featureBtnIcon}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default FeatureCard;

/* eslint-disable react/prop-types */
import Link from 'next/link';

const ServiceCard = ({
  serviceThumb,
  serviceTitle,
  serviceDesc,
  serviceUrl,
  serviceBtn,
  btnIcon,
}) => {
  return (
    <div className='relative z-10 flex justify-end group overflow-hidden rounded-t-lg before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-Secondarycolor before:rounded-lg before:-z-20 after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:bg-PrimaryColor after:rounded-lg after:-z-10 after:transition-all after:duration-500 hover:after:h-full'>
      <div className='m-[10px] sm:m-5 lg:m-[10px] md:m-[10px] xl:m-5 overflow-hidden rounded-md'>
        <div className='relative z-10 rounded-t-md overflow-hidden w-[150px] mx-auto'>
          <img
            src={serviceThumb}
            draggable='false'
            className='w-full transition-all duration-500 group-hover:scale-110'
          />
        </div>
        <div className='bg-BodyBg2 px-[10px] sm:px-5 md:px-[10px] xl:px-5 relative z-10 before:absolute before:bottom-0 before:left-0 before:bg-BodyBg before:w-full before:h-0 before:transition-all before:duration-500 before:-z-10 group-hover:before:h-full pb-[10px] sm:pb-7'>
          <h4 className='font-FiraSans font-medium text-lg sm:text-xl 2xl:text-2xl text-white transition-all duration-500 group-hover:text-HeadingColor pt-8 mb-4'>
            {serviceTitle}
          </h4>
          <p className='font-FiraSans text-TextColor transition-all duration-500 group-hover:text-HeadingColor group-hover:text-opacity-75 mb-4'>{serviceDesc}</p>
          <Link
            href={serviceUrl}
            className='inline-block relative'
          >
            <button className='flex items-center gap-2 font-FiraSans overflow-hidden font-medium'>
              <span className='-ml-[84px] text-HeadingColor transition-all duration-500 group-hover:ml-0'>
                {serviceBtn}
              </span>
              <span className='text-xl text-white transition-all duration-500 group-hover:text-HeadingColor'>
                {btnIcon}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

import ServiceCard from './ServiceCard';
import { services } from './serviceData';

const Service = () => {
  return (
    <section className='bg-HeadingColor bg-cover bg-bottom bg-no-repeat pt-28 pb-[120px] relative'>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-FiraSans font-medium text-sm sm:text-base text-white text-opacity-90 uppercase flex items-center justify-center gap-2 mb-3'>
            SOLUTION APPROACH
          </h5>
          <h1 className='font-FiraSans font-semibold text-white text-sm leading-[24px] sm:text-2xl sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]'>
            Our Core SEO Services for Business Growth
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10 mt-14'>
          {services.map((service) => (
            <div key={service.slug}>
              <ServiceCard
                serviceThumb={service.image}
                serviceTitle={service.title}
                serviceDesc={service.shortDesc}
                serviceUrl={`/service/${service.slug}`}
                serviceBtn={'Read More'}
                btnIcon={null}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

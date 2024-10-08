import React from 'react';

const services = [
  {
    icon: 'i',
    title: 'Custom Website Development',
    description: 'Fully tailored websites built from scratch to match your brand and objectives.',
  },
  {
    icon: 'ii',
    title: 'E-commerce Solutions',
    description: 'Seamless online stores designed to drive sales and enhance the customer experience.',
  },
  {
    icon: 'iii',
    title: 'Content Management Systems',
    description: 'Easy-to-manage websites built on popular CMS platforms like WordPress.',
  },
  {
    icon: 'iv',
    title: 'Custom Website Development',
    description: 'Fully tailored websites built from scratch to match your brand and objectives.',
  },
  {
    icon: 'v',
    title: 'E-commerce Solutions',
    description: 'Fully tailored websites built from scratch to match your brand and objectives.',
  },
  {
    icon: 'vi',
    title: 'Custom Website Development',
    description: 'Fully tailored websites built from scratch to match your brand and objectives.',
  },
];

const ServicesRendered = () => {
  return (
    <div className='mx-5 sm:mx-10 lg:mx-20'>
      <div className='relative h-10 border-b border-b-custom-text-color sm:w-[450px]'>
        <h1 className='absolute bottom-0 text-[30px] font-poppins font-bold h-[100%] mb-[-2px] w-[65%] border-b-[3px] border-b-custom-text-color'>Services rendered</h1>
      </div>

      {/* Responsive grid layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
        {services.map((service, index) => (
          <div
            key={index}
            className='w-[300px] sm:w-auto border-b-2 border-b-neutral-900 border-opacity-50 p-4 h-[150px] flex flex-col justify-between'
          >
            <div className='flex items-center'>
              <i className='mr-5 text-lg'>{service.icon}</i>
              <h1 className='font-poppins font-bold'>{service.title}</h1>
            </div>
            <p className='text-[13px] text-custom-text-color mt-2'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesRendered;

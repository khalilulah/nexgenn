import React from 'react';

const services = [
  {
    icon: 'i',
    title: 'Custom Website Development',
    description: 'Fully tailored websites built from scratch to match your brand and objectives.',
  },
  {
    icon: 'ii',
    title: ' E-commerce Solutions',
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
    description: 'Fully tailored websites built from scratch to match your brand and objectives',
  },
  {
    icon: 'v',
    title: 'E-commerce Solutions',
    description: 'Fully tailored websites built from scratch to match your brand and objectives',
  },
  {
    icon: 'vi',
    title: 'Custom Website Development',
    description: 'Fully tailored websites built from scratch to match your brand and objectives',
  },
];

const ServicesRendered = () => {
  return (
    <div className='mx-20 mb-[60px]'>
      <div className='border-b-[1px] w-[450px]'>
        <h1 className='text-[30px] font-poppins font-bold border-b-[1px] w-80'>Services rendered</h1>
      </div>
      <div className='services flex flex-wrap justify-between'>
        {services.map((service, index) => (
          <div
            key={index}
            className='border-b-2 border-b-neutral-900 border-opacity-50 w-[370px] mt-16 h-[103px]'
          >
            <div className='flex mb-5'>
              <i className='mr-5'>{service.icon}</i>
              <h1 className='font-poppins'>{service.title}</h1>
            </div>
            <p className='text-[13px] text-custom-text-color'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesRendered;

import React from 'react';
// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';

// services data
const services =[
    {
      name:'UI/UX Design',
      description: ` Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry\'s standard dummy text
      ever since the 1500s.`,
      link:'Learn more',
    },
    {
      name:'Development',
      description: ` Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.`,
      link:'Learn more',
    },
     {
      name:'Digital Marketing',
      description: ` Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.`,
      link:'Learn more',
    },
    {
      name:'Product Branding',
      description: ` Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.`,
      link:'Learn more',
    },
];

const Services = () => {
  return <section className='section' id='services'>
          <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row'>
              {/* text */}
              <motion.div 
              variants={fadeIn('right',0.3)}
              initial="hidden"
              whileInView={"show"}
              viewports={{ once:false, amount:0.3 }}
              className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
              <h2 className='h2 text-accent mb-6'>What I do</h2>
              <h3 className='h3 max-w-[455px] mb-16'>I am a Freelance Front-end Developer with over 3 years of experience
              </h3>
              <button className='btn btn-sm'>See my work</button>
              </motion.div>
              {/* services */}
              <motion.div 
               variants={fadeIn('left',0.5)}
               initial="hidden"
               whileInView={"show"}
               viewports={{ once:false, amount:0.3 }}
              className='flex-1'>
                {/* serviece list */}
                {
                services.map((service,index)=>{
                  // destructive service
                  const {name,description,link} = service;
                    return(
                      <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}> 
                        <div className='max-2-[476px]'>
                         <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                         <p className='font-secondary leading-tight'>{description}</p>
                          </div>
                          <div className='flex flex-col flex-1 items-end'>
                            <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center' href='$' >
                              <BsArrowUpRight />
                            </a>
                            <a className='text-gradient text-sm' href='#'>
                              {link}
                              </a>
                            </div>
                      </div>
                      )
                })
                }
              </motion.div>
             
            </div>
          </div>
          </section>;
};

export default Services;

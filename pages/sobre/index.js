'use client'

import React, { useState } from 'react';
import CountUp from 'react-countup';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import { FaHtml5, FaCss3, FaReact, FaFigma } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { BiLogoTypescript, BiLogoJavascript } from 'react-icons/bi';


import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Desenvolvimento Web',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <BiLogoJavascript />,
          <BiLogoTypescript />,
          <FaReact />,
          <SiNextdotjs />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />],
      },
    ],
  },
  {
    title: 'conquistas',
    info: [
      {
        title: 'Freelancer 5 estrelas - 99Freela',
        stage: '2022 - 2023',
      }
    ],
  },
  {
    title: 'experiência',
    info: [
      {
        title: 'UX/UI Designer - Freelancer',
        stage: '2022 - 2023',
      },
      {
        title: 'Desenvolvimento Web - Freelancer',
        stage: '2022 - 2023',
      }
    ],
  },
  {
    title: 'formação',
    info: [
      {
        title: 'UI/UX ProFigma - Udemy',
        stage: '2023',
      },
      {
        title: 'Introdução a Criptomoedas - UFPI',
        stage: '2022',
      },
      {
        title: 'Bacharel SI - UFPI CSHNB',
        stage: '2018 - Presente',
      }
    ],
  },
];

const About = () => {
  const [active, setActive] = useState(0);
  console.log(active);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left '>
      <Circles />

      <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className='hidden xl:flex absolute bottom-0 -left-[370px]'>
        <Avatar />
      </motion.div>

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>

        {/* text */}
        <div className='flex flex-1 flex-col justify-center '>
          <motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className='h2'>Criando <span className='text-accent'>Histórias</span> e transformando em experiências.</motion.h2>
          <motion.p variants={fadeIn('right', 0.4)} initial="hidden" animate="show" exit="hidden" className='max-w-[500px] mx-auto xl:mb-12 mb-6 px-2 xl:px-0 '>
            Veja alguns marcos importantes da minha carreira e como eu posso te ajudar a mudar a sua.
          </motion.p>

          <motion.div variants={fadeIn('right', 0.6)} initial="hidden" animate="show" exit="hidden" className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:absolute after:bg-white/10 first-letter: after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Anos de experiência</div>
              </div>

              {/* clientes */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:absolute after:bg-white/10 first-letter: after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Clientes Satisfeitos</div>
              </div>

              {/* Projects */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Projetos Finalizados</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeIn('left', 0.4)} initial="hidden" animate="show" exit="hidden" className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${active === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:bg-white after:-bottom-1 after:left-0`}
                  onClick={() => setActive(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>

          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[active].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className='flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {
                      item.icons?.map((icon, iconIndex) => {
                        return (
                          <div key={iconIndex} className='text-2xl text-white'>{icon}</div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })}
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;

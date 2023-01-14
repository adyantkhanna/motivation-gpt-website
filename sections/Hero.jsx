'use client';

import styles from '@/styles/index';

const Hero = () => (
  <section className={`sm:pl-16 pl-6 pr-6 sm:pr-16`}>
    <div className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}>
        <div className="flex flex-col justify-center items-center relative z-10">
            <h1 className={`${styles.heroHeading}`}>GPT</h1>
            <h1 className={`${styles.heroHeading}`}>Motivate</h1>
        </div>
    </div>
    {/* <div className="relative w-full md:-mt-[20px] -mt-[12px] z-1">
        <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]'>
            <img src="/cover.png" alt="cover" className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"/>
        </div>
    </div> */}
    
  </section>
);

export default Hero;

// sm:py-8 xs:py-4 py-4 
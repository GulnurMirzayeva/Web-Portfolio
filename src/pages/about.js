import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])


    return <span ref={ref}></span>
}


const about = () => {
    return (
        <>
            <Head>
                <title>Gulnur Mirzayeva | About </title>
                <meta name='description' content='My Web Portfolio' />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Driven by Passion, Guided by Purpose." className='mb-16 text-5xl lg:!text-5xl sm:!text-3xl xs:!text-3xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium text-sm'>
                                Hi, I’m Gulnur, a full-stack developer with a passion for building innovative and user-centered web applications. With extensive experience in both backend and frontend development, I specialize in crafting robust solutions that not only meet but exceed user expectations.
                            </p>
                            <p className='my-2 font-medium text-sm'>
                                Throughout my career, I’ve honed my skills in various technologies such as HTML, CSS, JavaScript, PHP, and Laravel. I am also proficient in using tools like Git and GitHub for version control, ensuring that my code is always optimized and collaborative.

                            </p>
                            <p className='my-2 font-medium text-sm'>
                                Currently, I’m working on large-scale projects and constantly pushing my boundaries to learn new technologies and improve my expertise. I thrive on transforming ideas into functional, seamless web applications that deliver value and usability.
                            </p>
                            <p className='font-medium text-sm'>
                                As a developer, I am committed to excellence, always striving to bring innovative ideas to life through efficient coding and cutting-edge design principles. I look forward to collaborating on your next digital project and helping turn your vision into reality.
                            </p>
                        </div>

                        <div className='col-span-3 mt-7 xl:!lg-10 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 flex flex-col items-center'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image
                                src={profilePic}
                                alt="Gulnur Mirzayeva"
                                className='w-full h-[400px] rounded-2xl'
                                priority
                                sizes="
        (max-width: 768px) 100vw, 
        (max-width: 1200px) 50vw, 
        (min-width: 1201px) 33vw"
                            />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied clients</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects completed</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={1} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of experience</h2>
                            </div>
                        </div>
                    </div>

                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about
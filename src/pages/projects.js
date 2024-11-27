import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/cover-image-1.png";
import project1_2 from "../../public/images/projects/cover-image-2.png";
import project1_3 from "../../public/images/projects/cover-image-3.png";
import project2 from "../../public/images/projects/dental-cover-1.png";
import project2_2 from "../../public/images/projects/dental-cover-2.png";
import project2_3 from "../../public/images/projects/dental-cover-3.png";
import project3 from "../../public/images/projects/football-cover-image-1.png";
import project3_2 from "../../public/images/projects/football-cover-image-2.png";
import project3_3 from "../../public/images/projects/football-cover-image-3.png";
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);


const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full relative rounded-br-2xl flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />


            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
  (max-width: 1200px) 50vw,
  50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'>
                        {" "}
                        <GithubIcon /> {" "}
                    </Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                        Visit Project
                    </Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {

    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />

            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank" className='text-lg font-semibold underline md:text-base'>
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}



const projects = () => {
    return (
        <>
            <Head>
                <title>Gulnur Mirzayeva | Projects </title>
                <meta name='description' content='My Web Portfolio' />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Ideas Ignite the World, Knowledge Builds It!"
                        className='mb-16 !text-7xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProjects
                                title="Dental Website"
                                img={project2}
                                summary="DentalWebsite is a Laravel-based web application for managing dental services, appointments, and customer details. It allows users to book and manage appointments, view services, and securely log in. Admins can manage appointments, users, and services through an admin panel. The application is built with Laravel, MySQL, Bootstrap, and optionally Vue.js, with responsive design for all devices."
                                link="https://dental.cybersecuritylab.az/"
                                github="https://github.com/GulnurMirzayeva/DentalWebsite"
                                type="Dental Website Project"
                            />

                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Dental Website"
                                img={project2_2}
                                summary="DentalWebsite is a Laravel-based web application for managing dental services, appointments, and customer details. It allows users to book and manage appointments, view services, and securely log in. Admins can manage appointments, users, and services through an admin panel. The application is built with Laravel, MySQL, Bootstrap, and optionally Vue.js, with responsive design for all devices."
                                link="https://dental.cybersecuritylab.az/"
                                github="https://github.com/GulnurMirzayeva/DentalWebsite"
                                type="Dental Website Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Dental Website"
                                img={project2_3}
                                summary="DentalWebsite is a Laravel-based web application for managing dental services, appointments, and customer details. It allows users to book and manage appointments, view services, and securely log in. Admins can manage appointments, users, and services through an admin panel. The application is built with Laravel, MySQL, Bootstrap, and optionally Vue.js, with responsive design for all devices."
                                link="https://dental.cybersecuritylab.az/"
                                github="https://github.com/GulnurMirzayeva/DentalWebsite"
                                type="Dental Website Project"

                            />
                        </div>


                        <div className='col-span-12'>
                            <FeaturedProjects
                                title="Football Stadium Website"
                                img={project3}
                                summary="FootballStadium is a platform for booking and managing football fields in Azerbaijan. It allows users to search and rent fields across various cities, while field owners can register and manage their fields. The project is built with Laravel, MySQL, Blade, Bootstrap, JavaScript, and jQuery. It is still under development, with new features and improvements planned for the future."
                                link="https://github.com/GulnurMirzayeva/FootballStadium"
                                github="https://github.com/GulnurMirzayeva/FootballStadium"
                                type="Football Stadium Website Project"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Footbal Stadium Website"
                                img={project3_2}
                                summary="FootballStadium is a platform for booking and managing football fields in Azerbaijan. It allows users to search and rent fields across various cities, while field owners can register and manage their fields. The project is built with Laravel, MySQL, Blade, Bootstrap, JavaScript, and jQuery. It is still under development, with new features and improvements planned for the future."
                                link="https://github.com/GulnurMirzayeva/FootballStadium"
                                github="https://github.com/GulnurMirzayeva/FootballStadium"
                                type="Footbal Stadium Website Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Footbal Stadium Website"
                                img={project3_3}
                                summary="FootballStadium is a platform for booking and managing football fields in Azerbaijan. It allows users to search and rent fields across various cities, while field owners can register and manage their fields. The project is built with Laravel, MySQL, Blade, Bootstrap, JavaScript, and jQuery. It is still under development, with new features and improvements planned for the future."
                                link="https://github.com/GulnurMirzayeva/FootballStadium"
                                github="https://github.com/GulnurMirzayeva/FootballStadium"
                                type="Football Stadium Website Project"

                            />
                        </div>




                        <div className='col-span-12'>
                            <FeaturedProjects
                                title="Design Website"
                                img={project1}
                                summary="A multilingual Designer Website built using Laravel, HTML, CSS, JavaScript, and Bootstrap. 
    The website supports three languages (Azerbaijani, Russian, and English) and features a modern, responsive design."
                                link="https://github.com/GulnurMirzayeva/KabiDesign"
                                github="https://github.com/GulnurMirzayeva/KabiDesign"
                                type="Design Website Project"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Design Website"
                                img={project1_2}
                                summary="A multilingual Designer Website built using Laravel, HTML, CSS, JavaScript, and Bootstrap. 
    The website supports three languages (Azerbaijani, Russian, and English) and features a modern, responsive design."
                                link="https://github.com/GulnurMirzayeva/KabiDesign"
                                github="https://github.com/GulnurMirzayeva/KabiDesign"
                                type="Design Website Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Design Website"
                                img={project1_3}
                                summary="A multilingual Designer Website built using Laravel, HTML, CSS, JavaScript, and Bootstrap. 
    The website supports three languages (Azerbaijani, Russian, and English) and features a modern, responsive design."
                                link="https://github.com/GulnurMirzayeva/KabiDesign"
                                github="https://github.com/GulnurMirzayeva/KabiDesign"
                                type="Design Website Project"

                            />
                        </div>


                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
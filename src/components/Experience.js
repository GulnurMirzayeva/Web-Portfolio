import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
                    target="_blank"
                    className='text-primary capitalize dark:text-primaryDark'
                >@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}





const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />

                <ul className='w-full flex flex-col justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Full Stack Developer" company="Code Marketing"
                        companyLink="https://www.codemarketing.com"
                        time="Feb 2024 - Oct 2024" address="Baku, Azerbaijan"
                        work="As a Full Stack Developer at Code Marketing, I played a pivotal role in building and optimizing dynamic marketing platforms for clients across various industries. I spearheaded the development of interactive web applications, focusing on seamless user experiences and performance optimization. Leveraging cutting-edge technologies like React, PHP, Laravel and others, I contributed to the success of several campaigns by improving frontend aesthetics and backend performance. This role honed my ability to work in high-pressure environments, collaborate with designers and marketers, and deliver robust, scalable solutions within tight deadlines."
                    />

                    <Details
                        position="Full Stack Developer" company="Saythub.az"
                        companyLink="https://www.saythub.az"
                        time="Aug 2024 - Present" address="Remote"
                        work="At Saythub.az, an innovative online company, I work as a Full Stack Developer, crafting robust web applications that fuel the digital transformation of businesses. My responsibilities include developing user-friendly interfaces and maintaining scalable backend systems, ensuring seamless interaction between the two. Working with a talented team of developers, we collaborate in real-time using GitHub as our primary platform, implementing Agile workflows and contributing to the ongoing success of various projects. This dynamic role requires me to be adaptive, problem-solving, and proactive in meeting the needs of clients."
                    />

                    <Details
                        position="Freelance Full Stack Developer" company="Freelancer"
                        companyLink="https://www.freelancer.com"
                        time="Sep 2024 - Present" address="Remote"
                        work="As a Freelance Full Stack Developer, I collaborate with clients from across the globe, delivering high-quality web solutions tailored to their unique business needs. From creating intuitive user interfaces with HTML and CSS, to implementing responsive layouts using Tailwind CSS and Bootstrap, I ensure the front-end is both functional and visually appealing. On the back-end, I leverage my expertise in PHP and Laravel to build scalable applications, while integrating APIs and ensuring secure data exchange. With React and Next.js, I craft dynamic, high-performance web applications, focusing on seamless user experiences. My experience extends to version control with GitHub, and I also manage the complete development lifecycle to ensure timely delivery of high-quality, secure, and scalable solutions."
                    />

                </ul>
            </div>
        </div>
    )
}

export default Experience
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from "./LiIcon";


const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}





const Education = () => {
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
                Education
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />

                <ul className='w-full flex flex-col justify-between ml-4 xs:ml-2'>
                    <Details
                        type="Bachelor's Degree in Primary Education (English Department)"
                        time="September 2018 – June 2022"
                        place="Azerbaijan State Pedagogical University"
                        info="Graduated from the Faculty of Primary Education, specializing in English. I was part of the Experimental Group, where I gained a deep understanding of pedagogy and English language teaching methods."
                    />
                    <Details
                        type="Training in International Math and Methodology"
                        time="September 2022 – June 2023"
                        place="Landau Academy"
                        info="Received specialized training in International Mathematics and Methodology. The curriculum focused on advanced mathematical concepts and teaching methods, equipping me with the skills to teach mathematics at an international level using modern educational techniques."
                    />

                    <Details
                        type="Code Marketing Training"
                        time="February 2024 – August 2024"
                        place="Code Marketing"
                        info="Gained foundational knowledge in both front-end and back-end development, learning how to develop complete web applications. This training helped me build strong skills in various web technologies, making me proficient in both client-side and server-side development."
                    />

                    <Details
                        type="Private Lessons in Full-Stack Development"
                        time="2024 - Present"
                        place="Self-Learning"
                        info="Took private lessons to deepen my understanding of Full-Stack Development. Through these lessons, I gained advanced skills in handling both front-end and back-end development, learning modern frameworks and programming languages, which enabled me to develop sophisticated web applications."
                    />


                </ul>
            </div>
        </div>
    )
}

export default Education
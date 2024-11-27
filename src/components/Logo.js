import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href="/"
                className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light'
                whileHover={{
                    backgroundColor: ["#000111", "#A3A7D2", "#151C62", "#CED0E8", "#282E78", "#080E4B"],
                    transition: { duration: 1, repeat: Infinity }
                }}
            >GM</MotionLink>
        </div>
    )
}

export default Logo

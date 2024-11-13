import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import TransitionEffect from '@/components/TransitionEffect';

const contact = () => {
    return (
        <>
            <Head>
                <title>Gulnur Mirzayeva | Contact</title>
                <meta name="description" content="Get in touch with me" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Let's Connect!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
                    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-6">
                        {/* Contact Information */}
                        <div className="flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-xl font-bold text-center mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-lg hover:text-yellow-300">
                                    <FaLinkedin size={30} />
                                    <span>LinkedIn</span>
                                </a>
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-lg hover:text-yellow-300">
                                    <FaGithub size={30} />
                                    <span>GitHub</span>
                                </a>
                                <p className="flex items-center space-x-3 text-lg">
                                    <FaPhoneAlt size={30} />
                                    <span>+1234567890</span>
                                </p>
                                <p className="flex items-center space-x-3 text-lg">
                                    <FaEnvelope size={30} />
                                    <span>yourname@example.com</span>
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="flex-1 bg-light dark:bg-dark p-8 rounded-2xl shadow-lg">
                            <h2 className="text-lg font-bold text-center mb-6 text-dark/75 dark:text-light/75">Send a Message</h2>
                            <form className="flex flex-col space-y-6">
                                <label className="flex flex-col">
                                    <span className="text-dark dark:text-light font-medium">Name</span>
                                    <input type="text" className="border-2 border-dark p-3 rounded-lg dark:bg-dark dark:text-light focus:ring-2 focus:ring-indigo-300" required />
                                </label>
                                <label className="flex flex-col">
                                    <span className="text-dark dark:text-light font-medium">Email</span>
                                    <input type="email" className="border-2 border-dark p-3 rounded-lg dark:bg-dark dark:text-light focus:ring-2 focus:ring-indigo-300" required />
                                </label>
                                <label className="flex flex-col">
                                    <span className="text-dark dark:text-light font-medium">Message</span>
                                    <textarea className="border-2 border-dark p-3 rounded-lg dark:bg-dark dark:text-light focus:ring-2 focus:ring-indigo-300" rows="5" required></textarea>
                                </label>
                                <button type="submit" className="py-3 px-6 bg-dark text-light rounded-lg dark:bg-light dark:text-dark font-semibold hover:bg-dark/75 dark:hover:bg-light/75 transition-transform transform hover:scale-105">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}

export default contact;

import React from 'react';

const Contact = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center dark:bg-dark dark:text-light py-16 px-4">
            <div className="w-full max-w-6xl mx-auto">
                <h1 className="text-center text-6xl font-bold mb-16 lg:text-3xl md:text-2xl sm:text-xl sm:mb-8">
                    Stay Connected!
                </h1>
                <div className="flex flex-col md:flex-col space-y-8 md:space-y-8 sm:space-y-6">
                    <div className="flex md:flex-col space-x-8 md:space-x-0 md:space-y-8">
                        <div className="w-1/2 md:w-full bg-light dark:bg-primaryDark text-dark dark:text-light p-8 rounded-3xl shadow-2xl">
                            <h2 className="text-2xl font-bold text-center mb-12">Get in Touch</h2>
                            <div className="space-y-6">
                                <a href="https://www.linkedin.com/in/g%C3%BClnur-mirz%C9%99yeva-b89a52282/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-4 hover:text-primary transition text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-primary dark:text-light">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    <span>LinkedIn</span>
                                </a>

                                <a href="https://github.com/GulnurMirzayeva" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-4 hover:text-primary transition text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-primary dark:text-light">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span>GitHub</span>
                                </a>

                                <a href="https://www.upwork.com/freelancers/~01b040407319614377" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-4 hover:text-primary transition text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 641 512" fill="currentColor" className="text-primary dark:text-light">
                                        <path d="M494.7 295.6c-50.3 0-83.5-38.9-92.8-53.9c11.9-95.3 46.8-125.4 92.8-125.4c45.5 0 80.9 36.4 80.9 89.7s-35.4 89.7-80.9 89.7zm0-237.8c-81.9 0-127.8 53.4-141 108.4c-14.9-28-25.9-65.5-34.5-100.3H206v141c0 51.1-23.3 89-68.8 89s-71.6-37.8-71.6-89l.5-141H.8v141c0 41.1 13.3 78.4 37.6 105.1c25 27.5 59.2 41.8 98.8 41.8c78.8 0 133.8-60.4 133.8-146.9V112.1c8.2 31.2 27.8 91.1 65.3 143.6l-35 199.4h66.4l23.1-141.3c7.6 6.3 15.7 12 24.2 17c22.2 14 47.7 21.9 73.9 22.8c0 0 4 .2 6.1 .2c81.2 0 145.9-62.9 145.9-147.8s-64.8-148.1-146-148.1z" />
                                    </svg>
                                    <span>Upwork</span>
                                </a>

                                <a href="https://www.facebook.com/profile.php?id=100089509058824" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-4 hover:text-primary transition text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 320 512" fill="currentColor" className="text-primary dark:text-light">
                                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                    </svg>
                                    <span>Facebook</span>
                                </a>

                                <a href="https://wa.me/994993051511" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-4 hover:text-primary transition text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 448 512" fill="currentColor" className="text-primary dark:text-light">
                                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                    </svg>
                                    <span>WhatsApp</span>
                                </a>

                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gmirzyeva1@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-4 hover:text-primary transition text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-primary dark:text-light">
                                        <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.425 1.178l-4 3.241-4-3.241-8.714 7.091h23.428l-8.714-7.091z" />
                                    </svg>
                                    <span>gmirzyeva1@gmail.com</span>
                                </a>
                            </div>
                        </div>

                        <div className="w-1/2 md:w-full bg-light dark:bg-dark border border-primary dark:border-primaryDark p-8 rounded-3xl shadow-2xl">
                            <h2 className="text-2xl font-bold text-center mb-8 text-dark dark:text-light">Drop a Message</h2>
                            <form className="flex flex-col space-y-6" action="https://formspree.io/f/mrbgyypw" method="POST">
                                <label className="flex flex-col">
                                    <span className="text-dark dark:text-light font-medium">Name</span>
                                    <input
                                        type="text"
                                        name="name"
                                        className="border border-primary dark:border-primaryDark text-dark dark:text-light bg-white dark:bg-dark p-4 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark"
                                        required
                                    />
                                </label>
                                <label className="flex flex-col">
                                    <span className="text-dark dark:text-light font-medium">Email</span>
                                    <input
                                        type="email"
                                        name="email"
                                        className="border border-primary dark:border-primaryDark text-dark dark:text-light bg-white dark:bg-dark p-4 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark"
                                        required
                                    />
                                </label>
                                <label className="flex flex-col">
                                    <span className="text-dark dark:text-light font-medium">Message</span>
                                    <textarea
                                        name="message"
                                        className="border border-primary dark:border-primaryDark text-dark dark:text-light bg-white dark:bg-dark p-4 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark"
                                        rows="5"
                                        required
                                    ></textarea>
                                </label>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-primary dark:bg-primaryDark text-light rounded-lg font-semibold hover:bg-primaryDark dark:hover:bg-primary transition-transform transform hover:scale-105"
                                >
                                    Send
                                </button>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
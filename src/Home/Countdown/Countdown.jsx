import React from 'react';

const Countdown = () => {
    return (
        <div>            <div
            className="hero relative overflow-hidden"
        >
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/vvXVccv7/time-Banner.png)",
                    filter: "blur(8px)",
                    transform: "scale(1.1)",
                }}
            ></div>
            <div className="hero-overlay bg-opacity-60 absolute inset-0"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Next Event Countdown</h1>
                    <div className='flex justify-center items-center mb-3'>
                        <div className="grid grid-flow-col gap-5 text-center  auto-cols-max text-[#f7a320] font-extrabold">
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-5xl ">
                                    <span
                                        style={{ "--value": 15 }}
                                        aria-live="polite"
                                        aria-label="15 days remaining"
                                    >
                                        15
                                    </span>
                                </span>
                                days
                            </div>
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-5xl">
                                    <span
                                        style={{ "--value": 10 }}
                                        aria-live="polite"
                                        aria-label="10 hours remaining"
                                    >
                                        10
                                    </span>
                                </span>
                                hours
                            </div>
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-5xl">
                                    <span
                                        style={{ "--value": 24 }}
                                        aria-live="polite"
                                        aria-label="24 minutes remaining"
                                    >
                                        24
                                    </span>
                                </span>
                                min
                            </div>
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-5xl">
                                    <span
                                        style={{ "--value": 59 }}
                                        aria-live="polite"
                                        aria-label="59 seconds remaining"
                                    >
                                        59
                                    </span>
                                </span>
                                sec
                            </div>
                        </div>
                    </div>
                    <h1 className="mb-2 text-3xl font-bold">Annual Tech Conference 2024</h1>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Countdown;
import React from 'react'
import Img1 from "../../../public/project1.png"
import Img2 from "../../../public/project2.png"
import Img3 from "../../../public/project3.png"
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const detail = [
    {
        company: "Date",
        year: "11 january, 2025",
        title: "Industry Website",
        results: [
            { title: "Modern Design", },
            { title: "Fully Responsive", },
            { title: "optimized above then 90%", },
        ],
        image: Img1
    },
    {
        company: "Date",
        year: "10 December, 2024",
        title: "Xales - Industry",
        results: [
            { title: "Modren Design", },
            { title: "Optimized Website", },
            { title: "Responsive + Rive Animations", },
        ],
        image: Img2
    },
    {
        company: "Date",
        year: "22 November, 2024",
        title: "Designer",
        results: [
            { title: "Modren Design", },
            { title: "Responsive + Optimized", },
            { title: "By using Next.js, Tailwind CSS and framer motion", },
        ],
        image: Img3
    },
];

function Servicescards() {
    return (
        <div className='w-full bg-black font-sans font-medium text-white px-52 max-xl:px-5 pt-10'>
            <div className='flex justify-start items-center gap-3 text-2xl'>
                <span className='w-3 h-3 bg-white rounded-full'></span>
                <h1>Services</h1>
            </div>
            <h1 className='text-9xl pb-16 pt-10 max-xl:text-7xl max-lg:texxt-6xl max-md:text-5xl'>My <span className='font-instrument text-[#929292]'>Services</span></h1>
            <div className='flex flex-col gap-14'>
                {detail.map(project => (
                    <div key={project.title} className='w-full sticky top-32 max-sm:top-20 bg-black xl:mx-auto rounded-3xl'>
                        <div className="bg-black/30 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl border px-8 py-8 pt-10 xl:pt-12 after:pointer-events-none max-md:px-3">
                            <div className="flex justify-between px-10 gap-48 items-center xl:sticky xl:top-0 max-lg:gap-10 max-lg:px-2 max-md:flex-col">
                                <div>
                                    <div
                                        className='text-white inline-flex font-bold tracking-widest uppercase text-sm gap-2 max-sm:hidden'>
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h3 className='font-serif text-2xl mt-2 xl:text-5xl md:pt-5'>{project.title}</h3>
                                    <hr className='botder-t-2 border-white/50 mt-5' />
                                    <ul className='flex flex-col gap-2 mt-4'>
                                    {project.results.map((result: { title: string }, index: number) => (
                                        <li key={index} className='flex items-center gap-2 text-md text-white/50'>
                                          <div className='w-5 h-5 border-2 border-white text-white flex justify-center items-center rounded-full'>
                                                <span><FaCheck className='size-3' /></span>
                                            </div>
                                                <span>{result.title}</span>
                                           </li>
                                         ))}
                                    </ul>
                                </div>
                                <div className='w-[476px] h-[376px] overflow-hidden object-cover border-2 border-white/50 max-sm:border-none rounded-3xl max-lg:w-[400px] max-lg:h-[400px] max-sm:w-[250px] max-sm:h-[250px]'>
                                    <Image width={500} height={500} src={project.image} alt={project.title} className='w-full h-full object-cover' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Servicescards
import Image from 'next/image'
import React from 'react'

const images = {
    image1: "/project1.png",
    image2: "/project2.png",
    image3: "/project3.png",
    image4: "/project4.png",
    image5: "/project5.png",
};


function Achievements() {

    const projects = [
        {
            title: "Site of the day",
            date: "2025",
            num: "01",
            name: "Awwards",
            img: images.image1,
        },
        {
            title: "Site of the day",
            date: "2024",
            num: "02",
            name: "CSSDA",
            img: images.image2,
        },
        {
            title: "Site of the day",
            date: "2025",
            num: "03",
            name: "CSS winner",
            img: images.image3,
        },
        {
            title: "Site of the day",
            date: "2024",
            num: "04",
            name: "CSSDA",
            img: images.image4,
        },
        {
            title: "Site of the day",
            date: "2024",
            num: "05",
            name: "Awwards",
            img: images.image5,
        },
    ];

    return (
        <div className='hidden w-full bg-black font-sans font-medium text-white px-20 max-lg:px-5 py-10 md:block'>
            <div className='flex justify-start items-center gap-4 text-2xl'>
                <span className='w-3 h-3 bg-white rounded-full'></span>
                <h1>Achievements & Awards</h1>
            </div>
            <h1 className='text-8xl py-4 max-lg:text-6xl max-md:text-4xl'>WHAT I&apos;VE ACHIEVED</h1>
            <div className="w-full my-20 font-normal">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='flex flex-col border-t-[1px] border-stone-400 hover:border-white py-8 relative group/project'
                    >
                        <div className="relative">
                            <div className='aspect-video lg:hidden'>
                                <Image
                                    src={project.img}
                                    alt={`${project.name} Image`}
                                    width={1920}
                                    height={1024}
                                    className='size-full object-cover'
                                />
                            </div>
                            <div className='flex justify-between items-center mt-10 lg:mt-0 lg:grid lg:[grid-template-columns:1fr_300px_max-content] lg:gap-8'>
                                <div className='flex w-full max-md:flex-col'>
                                    <h2 className='text-2xl lg:text-3xl max-2xl:text-xl text-left duration-500 max-md:w-full w-1/3'>{project.num}</h2>
                                    <h2 className='text-2xl lg:text-3xl max-2xl:text-xl text-left duration-500 max-md:w-full w-1/3'>{project.name}</h2>
                                    <h2 className='text-2xl lg:text-3xl max-2xl:text-xl text-left duration-500  max-md:w-fullw-1/3'>{project.title}</h2>
                                </div>
                                <div className="relative">
                                    <div className="absolute aspect-video left-1/2 -translate-x-1/2 w-full top-1/2 -translate-y-1/2 opacity-0 scale-50 group-hover/project:opacity-100 group-hover/project:scale-100 transition-all duration-500 z-10">
                                        <Image
                                            src={project.img}
                                            alt={`${project.name} Image`}
                                            width={1920}
                                            height={1024}
                                            className='size-full object-cover'
                                        />
                                    </div>
                                </div>
                                <h3 className='text-2xl max-2xl:text-xl'>{project.date}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Achievements
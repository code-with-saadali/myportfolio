import Link from 'next/link';
import Img1 from '../../../public/project1.png';
import Img2 from '../../../public/project2.png';
import Img3 from '../../../public/project3.png';
import Image from 'next/image';
import {motion} from 'framer-motion';

const MyProjects = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    className="min-h-[600px] bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl shadow-2xl flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-center my-12 text-gray-800">
        My Portfolio
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {/* Project 1 */}
        <div className="group relative shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
          <Link href="/project/1">
            <Image
              src={Img1}
              alt="Project 1"
              width={530}
              height={50}
              className="w-full h-64 object-cover transition-transform group-hover:rotate-6 group-hover:scale-110 duration-500"
            />
          </Link>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl font-semibold">Project 1</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="group relative shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
          <Link href="/project/2">
          <Image
              src={Img2}
              alt="Project 2"
              width={530}
              height={50}
              className="w-full h-64 object-cover transition-transform group-hover:rotate-6 group-hover:scale-110 duration-500"
            />
          </Link>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl font-semibold">Project 2</span>
          </div>
        </div>

        {/* Project 3 */}
        <div className="group relative shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
          <Link href="/project/3">
          <Image
              src={Img3}
              alt="Project 3"
              width={530}
              height={50}
              className="w-full h-64 object-cover transition-transform group-hover:rotate-6 group-hover:scale-110 duration-500"
            />
          </Link>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl font-semibold">Project 3</span>
          </div>
        </div>
      </div>zz
    </motion.div>
  )
}

export default MyProjects;
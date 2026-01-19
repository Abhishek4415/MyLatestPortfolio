import React, { useState } from 'react'
import { projects } from "../../content";
import Tilt from 'react-parallax-tilt';
import { MdMenuOpen } from 'react-icons/md';
import { motion, AnimatePresence } from "framer-motion";
export default function Project() {
  const [ModalOpen, setModalOpen] = useState(null);

  const handleProjectModal = (project) => {
      setModalOpen(project);
  }

  const handleClosemodal = () =>{
    setModalOpen(null);
  }

  return (

    <section
      id="work"
      className='pb-24 px-[12vw] md:px-[7vw] lg:px-[15vw] relative'
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECT</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>

      </div>

      {/* proejcts grid*/}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-around '>

        {projects.map((project) => (

          <div
            key={project.id}
            className='border boder-white bg-gray-900 backdrop-blur-md rounded-2xl  shadow-2xl hover:shadow-purple-500 hover:-translate-y-5 transition delay-200 '
            onClick={() => handleProjectModal(project)}

          >
            <Tilt>
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-65 object-cover p-4 rounded-[25px] hover:scale-120 hover:border border-white'
                />
              </div>
            </Tilt>
            <div className='p-5'>
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p>{project.description}</p>

              {/* map tags */}
              <div className="mt-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block mb-2   bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1.5 mr-2  hover:bg-amber-50 hover:text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>


        ))}


        {/* modal */}
        <div className=''>
          {ModalOpen && (
            <div className='fixed inset-0  flex items-center justify-center bg-black opacity-95  p-4 '>
              <div className='bg-black border border-white  rounded-xl  lg:w-full w-[90%] max-w-3xl overflow-hidden relative'>
                <div className='flex justify-end p-4'>
                  <button className='text-white text-3xl font-bold hover:text-purple-500'
                  onClick={()=>handleClosemodal()}
                  >
                    &times;
                  </button>
                </div>

                <div className="flex flex-col">
              <div className="w-full flex justify-center bg-black  px-4">
                <img
                  src={ModalOpen.image}
                  alt={ModalOpen.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-orange-400 mb-4 text-md">
                  {ModalOpen.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {ModalOpen.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {ModalOpen.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={ModalOpen.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    Github
                  </a>
                  <a
                    href={ModalOpen.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-blue-500 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </div>
                  
              

              </div>
                
            </div>
          )
          }

        </div>

      </div>

    </section>
  )
}

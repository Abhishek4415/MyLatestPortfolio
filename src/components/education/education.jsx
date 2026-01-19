import React from 'react'
import { education } from "../../content.js";
import Tilt from "react-parallax-tilt";
export default function Education() {
  return (
    <section id="education">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>


      {/* Education Timeline */}
      <div className='relative ' >
        {/* Vertical line */}
        <div className="absolute  sm:left-1/2 left-5 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <Tilt>

          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end" }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-5 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* content section */}
                        <div
              className={`w-full-50 sm:max-w-md p-2 mr-3 mb-5 sm:p-5 rounded-2xl shadow-2xl border border-white  backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]  sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-orange-500 ">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-orange-200 font-bold border-4  bg-clip-content p-3 ">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>



          </Tilt>

        ))}
      </div>

    </section>

  )
}

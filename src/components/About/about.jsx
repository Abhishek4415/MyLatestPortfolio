import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import idcard from "../../assets/idcard/idcard2.png"
//#585956
//#ececec

//#595351
export default function about() {
  return (
    <section id="about" className='flex-row md:flex justify-around '>
      {/* left side */}
      <div className='md:w-[35%] md:py-60 ml-10 mr-10 py-30 md:ml-30'>
        <h1 className='text-4xl'>
          I'M ABHISHEK !

        </h1>
        <span className="text-5xl font-bold text-amber-500">
          <Typewriter
            words={[
              'FULL STACK DEVELOPER',
              'APP DEVELOPER',
              'UI/UX DESIGNER',
              'CODER',
              'PROBLEM SOLVER'
            ]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursorRenderer={(cursor) => (
              <span className="text-[#8245ec]">{cursor}</span>
            )}
          />
        </span>

        <br />
        <br />
        <hr />

        <p className=''>I'm 21 year old, and was born in India'bihar.
          My expertise spans C++, Java, Python, React, Node.js, and MySQL, enabling me to design and build scalable, user-focused applications.
        </p>
        {/* resume  */}
        <a href="https://drive.google.com/file/d/18-8BeNiAX9gF_pMrL9p3KrtM-Y7azbC6/view?usp=sharing"
        target='_blank'
        rel='nodeopen nodereferrer'
        className='py-3 px-10 bg-amber-300 relative top-5 text-black rounded-4xl text-[18px] hover:bg-amber-50 transition delay-50 '>
            Download CV
        </a>
      </div>
      {/* right side */}
      <div className="">
        <div className="flex flex-col ml-10 md:mr-10 items-center w-80 h-100 relative md:top-30">
          {/* Strap */}
          <div className='text-2xl '>
            o
          </div>
          {/* Hanging card with enhanced effects */}
          <div className="animate-hang swing-origin drop-shadow-[0px_10px_30px_rgba(130,69,236,0.6)] hover:drop-shadow-[0px_15px_40px_rgba(251,191,36,0.8)] transition-all duration-500">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-4xl bg-gradient-to-r from-purple-500/50 to-amber-500/50 blur-xl animate-pulse"></div>
              <img className="relative rounded-4xl object-cover border-2 border-purple-500/30 hover:border-amber-500/50 transition-all duration-300" src={idcard} alt="ID Card" />
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        @keyframes hang-swing {
          0%   { transform: rotate(10deg); }
          50%  { transform: rotate(-10deg); }
          100% { transform: rotate(10deg); }
        }
        .animate-hang {
          animation: hang-swing 2s ease-in-out infinite;
          transform-origin: top center;
        }
              @media (max-width: 768px) {
      .animate-hang {
        animation: none;
      }
        
       
        
          
      
        `}
      </style>
    </section>
  )
}


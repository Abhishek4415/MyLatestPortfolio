import React from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import edunet from '../../assets/certificate/edunet.png';
import ibm from '../../assets/certificate/ibm.png';
import seek from '../../assets/certificate/seek.png';
import micro1 from '../../assets/certificate/micro.jpg';

const certifications = [
  { issuer: 'Edunet Foundation', credential: '6-week Artificial Intelligence & Machine Learning Internship under AICTE', image: edunet },
  { issuer: 'IBM SkillsBuild', credential: 'Artificial Intelligence Fundamentals', image: ibm },
  { issuer: 'UNESCO MGIEP', credential: 'SEEK: Self-directed Emotional Learning for Empathy and Kindness', image: seek },
  { issuer: 'Micro1', credential: "Outstanding performance during Micro1's AI Interview - July 19, 2026", image: micro1 },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-[7vw]">
      <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-white">CERTIFICATIONS</h2><div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div><p className="text-gray-400 mt-4 text-lg font-semibold">Credentials that support my technical and professional journey.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-6xl mx-auto">
        {certifications.map(({ issuer, credential, image }) => (
          <article key={issuer} className="overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/80 shadow-[0_0_20px_1px_rgba(130,69,236,0.25)] hover:-translate-y-2 hover:border-purple-400 hover:shadow-purple-500/40 transition-all">
            <a href={image} target="_blank" rel="noopener noreferrer" className="group relative block bg-black" aria-label={`Open ${issuer} certificate`}><img src={image} alt={`${issuer} certificate`} className="h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" /><span className="absolute inset-0 flex items-center justify-center bg-black/0 text-transparent transition-all group-hover:bg-black/50 group-hover:text-white"><FaExternalLinkAlt className="text-2xl" /></span></a>
            <div className="flex gap-4 p-5"><FaCertificate className="mt-1 shrink-0 text-2xl text-amber-400" /><div><h3 className="font-bold text-white">{issuer}</h3><p className="mt-1 text-sm leading-6 text-gray-400">{credential}</p></div></div>
          </article>
        ))}
      </div>
    </section>
  );
}

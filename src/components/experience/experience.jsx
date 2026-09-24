import React from 'react';
import { FaBrain, FaCheckCircle, FaUsers } from 'react-icons/fa';

const highlights = [
  { icon: FaBrain, text: 'Worked on Evals and Generalist Pipeline workflows for Large Language Models.' },
  { icon: FaCheckCircle, text: 'Reviewed and refined 1,000+ factual errors, ambiguous outputs, and response-quality issues.' },
  { icon: FaUsers, text: 'Contributed to 10+ evaluation and fine-tuning projects and led a team of 20+ evaluators.' },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-[12vw]">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">Building reliable AI systems through careful evaluation and human feedback.</p>
      </div>
      <article className="max-w-4xl mx-auto rounded-2xl border border-white/70 bg-gray-900/80 p-6 sm:p-10 shadow-[0_0_25px_1px_rgba(130,69,236,0.3)] hover:shadow-purple-500/40 transition-shadow">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-gray-700 pb-6">
          <div>
            <p className="text-amber-400 font-semibold tracking-wide">ETHARA.AI</p>
            <h3 className="text-2xl font-bold text-white mt-1">Post-Training Intern - LLM Evaluation & AI Training</h3>
          </div>
          <span className="w-fit rounded-full border border-purple-400/50 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">Feb 2026 - Jun 2026</span>
        </div>
        <div className="mt-7 grid gap-4">
          {highlights.map(({ icon: Icon, text }) => <div key={text} className="flex gap-4 rounded-xl bg-black/30 p-4 text-gray-300"><Icon className="mt-1 shrink-0 text-amber-400" /><p>{text}</p></div>)}
        </div>
        <div className="mt-7 flex flex-wrap gap-2">{['LLM Evaluation', 'Data Annotation', 'SFT', 'RLHF', 'RLVR', 'Quality Analysis'].map((skill) => <span key={skill} className="rounded-full bg-[#251f38] px-3 py-1 text-sm text-purple-300">{skill}</span>)}</div>
      </article>
    </section>
  );
}

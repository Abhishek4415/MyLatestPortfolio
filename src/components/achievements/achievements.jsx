import React from 'react';
import { FaAward, FaCode, FaTrophy } from 'react-icons/fa';

const achievements = [
  { icon: FaAward, title: "Dean's Honors Certificate", text: 'Academic excellence recognition in every semester.' },
  { icon: FaTrophy, title: 'Super 50 Program', text: 'Selected among the top 50 students out of 2,000.' },
  { icon: FaCode, title: 'LeetCode', text: '200+ problems solved, 1,500+ rating, and a 100-day streak.' },
];

export default function Achievements() {
  return <section id="achievements" className="py-24 px-6 md:px-[7vw]"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-white">ACHIEVEMENTS</h2><div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div><p className="text-gray-400 mt-4 text-lg font-semibold">Milestones that reflect consistent learning and problem solving.</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">{achievements.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-white/70 bg-gray-900 p-7 text-center shadow-[0_0_20px_1px_rgba(130,69,236,0.25)] hover:-translate-y-2 hover:shadow-purple-500/40 transition-all"><Icon className="mx-auto text-4xl text-amber-400" /><h3 className="mt-5 text-xl font-bold text-white">{title}</h3><p className="mt-3 text-gray-400">{text}</p></article>)}</div></section>;
}

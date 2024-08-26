import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => (
  <section id="education" className="py-20">
    <h2 className="text-3xl font-bold mb-8">Education</h2>
    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
      <GraduationCap className="mb-4" />
      <h3 className="text-xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
      <p className="text-gray-300">University of North Carolina at Chapel Hill • 2020 - 2024</p>
      <ul className="list-disc list-inside mt-4">
        <li>Major in Computer Science with a focus on Artificial Intelligence</li>
        <li>Minor in Data Science</li>
        <li>Relevant coursework: Machine Learning, Deep Learning, Computer Vision, Natural Language Processing</li>
      </ul>
    </div>
  </section>
);

export default Education;
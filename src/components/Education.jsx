import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => (
  <section id="education" className="py-20">
  <h2 className="text-3xl font-bold mb-8">Education</h2>
  <div className="grid grid-cols-1 gap-6">
    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
      <GraduationCap className="mb-4" />
      <h3 className="text-xl font-bold mb-2"><strong>The University of North Carolina at Chapel Hill, Bachelor of Sicence</strong></h3>
      <p className="text-gray-300"><strong>Chapel Hill, USA • 08/2024-Now</strong></p>
    </div>
    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
      <GraduationCap className="mb-4" />
      <h3 className="text-xl font-bold mb-2"><strong>The University of Sydney, Bachelor of Advanced Computing</strong></h3>
      <p className="text-gray-300"><strong>Sydney, Australia • 02/2023-06/2024</strong></p>
    </div>
    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
      <GraduationCap className="mb-4" />
      <h3 className="text-xl font-bold mb-2"><strong>No.2 High School of East China Normal University</strong></h3>
      <p className="text-gray-300"><strong>Shanghai, China • 09/2019-07/2022</strong></p>
    </div>
  </div>
</section>
);

export default Education;
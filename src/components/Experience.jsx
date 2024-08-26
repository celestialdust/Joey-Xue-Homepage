import React from 'react';
import { Briefcase, Code } from 'lucide-react';

const Experience = () => (
  <section id="experience" className="py-20">
  <h2 className="text-3xl font-bold mb-8">Experiences</h2>
  <div className="grid grid-cols-1 gap-6">
    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
      <Briefcase className="mb-4" />
      <h3 className="text-xl font-bold mb-2"><strong>Sign Language Translation, Online Research Assistant</strong></h3>
      <p className="text-gray-300"><strong>University of Sydney • 07/2023-08/2023</strong></p>
      <ul className="list-disc list-inside mt-4">
        <li><strong>Implemented a sign-language translation model using CNNs and LSTM</strong></li>
        <li><strong>Enhanced model accuracy by 15%</strong></li>
      </ul>
    </div>
    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
      <Briefcase className="mb-4" />
      <h3 className="text-xl font-bold mb-2"><strong>Data Mining Research, Online Research Assistant</strong></h3>
      <p className="text-gray-300"><strong>University of Sydney• 03/2023-07/2023</strong></p>
      <ul className="list-disc list-inside mt-4">
        <li><strong>Worked on applying Transformers and CNNs for large dataset analysis</strong></li>
        <li><strong>Investigated Transformer-based deep learning models, resulting in a journal paper</strong></li>
      </ul>
    </div>
    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
      <Briefcase className="mb-4" />
      <h3 className="text-xl font-bold mb-2"><strong>Smart Trash Can Design with Arduino, Student Researcher</strong></h3>
      <p className="text-gray-300"><strong>10/2020-10/2021</strong></p>
      <ul className="list-disc list-inside mt-4">
        <li><strong>Developed a smart trash can with Arduino, utilizing various sensors and motors</strong></li>
        <li><strong>Designed algorithm to detect trash capacity and methane gas concentration</strong></li>
      </ul>
    </div>
    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
      <Briefcase className="mb-4" />
      <h3 className="text-xl font-bold mb-2"><strong>IELTS Teacher, Online</strong></h3>
      <p className="text-gray-300"><strong>Current</strong></p>
      <ul className="list-disc list-inside mt-4">
        <li><strong>Currently teaching Chinese students online to prepare for the IELTS exam</strong></li>
        <li><strong>Develop and deliver comprehensive lesson plans covering all aspects of the IELTS test: Listening, Reading, Writing, and Speaking</strong></li>
        <li><strong>Provide personalized feedback and strategies to improve students' English language proficiency and test-taking skills</strong></li>
        <li><strong>Adapt teaching methods to accommodate diverse learning styles and proficiency levels</strong></li>
      </ul>
    </div>
  </div>
</section>

);

export default Experience;
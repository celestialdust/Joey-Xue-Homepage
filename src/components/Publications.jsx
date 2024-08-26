import React from "react";
import { FileText } from 'lucide-react';
const Publications = () => {
    return (
    <section id="publications" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Publications</h2>
      <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <FileText className="mb-4" />
        <h3 className="text-xl font-bold mb-2"><strong>Analysis of Transformer-Based Models for time series data, natural language processing, and computer vision</strong></h3>
        <p className="text-gray-300"><strong>Co-author • 10/2023</strong></p>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Collaborated on a comprehensive review of advanced data processing techniques</strong></li>
          <li><strong>Examined the evolution and applications of innovative algorithms</strong></li>
          <li><strong>Explored potential future developments and interdisciplinary applications</strong></li>
        </ul>
      </div>
    </section>)
}

export default Publications;
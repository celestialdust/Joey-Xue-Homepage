import React from 'react';
import {Award} from 'lucide-react';

const Awards = ()=>{
    return <section id="awards" className="py-20">
    <h2 className="text-3xl font-bold mb-8">Awards & Honors</h2>
    <div className="grid grid-cols-1 gap-6">
    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <Award className="mb-4" />
        <h3 className="text-xl font-bold mb-2"><strong>Mathematical Contest in Modeling (MCM/ICM) Meritorious Winner</strong></h3>
        <p className="text-gray-300"><strong>05/2024</strong></p>
        <ul className="list-disc list-inside mt-4">
        <li><strong>Led a team to a top 8% Meritorious Winner award in the global MCM/ICM competition, planning tasks and motivating members during the 4-day event.  </strong></li>
        <li><strong>Wrote report and developed Python and MATLAB programs collaboratively for mathematical modeling, delivering key insights and solutions for the Great Lakes dam management problem. </strong></li>
        </ul>
    </div>
    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <Award className="mb-4" />
        <h3 className="text-xl font-bold mb-2"><strong>The University of Sydney Vice Chancellor's International Scholarships</strong></h3>
        <p className="text-gray-300"><strong>01/2023</strong></p>
        <ul className="list-disc list-inside mt-4">
        <li><strong>Received a highly selective scholarship awarded for academic performance among international students prior to university enrollment.  </strong></li>
        </ul>
    </div>
    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
        <Award className="mb-4" />
        <h3 className="text-xl font-bold mb-2"><strong>The University of Sydney Dean's List</strong></h3>
        <p className="text-gray-300"><strong>05/2024</strong></p>
        <ul className="list-disc list-inside mt-4">
        <li><strong>Received a dean list awarded for outstanding academic performance in the 2023-2024 school year </strong></li>
        </ul>
    </div>
    </div>
    </section>
    }

    export default Awards;
import React from 'react';
import type { ResumeData } from '../../../types';

interface TemplateProps {
  data: ResumeData;
}

export function CorporateTemplate1({ data }: TemplateProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white shadow-lg p-8">
      <header className="border-b-2 border-gray-800 pb-4">
        <div className="flex items-center gap-6">
          {data.personalInfo.photo && (
            <img 
              src={data.personalInfo.photo} 
              alt={data.personalInfo.fullName}
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
            />
          )}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.personalInfo.fullName}</h1>
            <p className="text-xl text-gray-600">{data.personalInfo.title}</p>
            <div className="mt-2 text-gray-600">
              <p>{data.personalInfo.email} • {data.personalInfo.phone}</p>
              <p>{data.personalInfo.location}</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-gray-700">{data.personalInfo.summary}</p>
      </header>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-semibold text-gray-800">{exp.position}</h3>
              <p className="text-gray-600">{exp.startDate} - {exp.endDate}</p>
            </div>
            <p className="text-gray-700 font-medium">{exp.company}</p>
            <p className="mt-2 text-gray-600">{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-semibold text-gray-800">{edu.degree} in {edu.field}</h3>
              <p className="text-gray-600">{edu.graduationDate}</p>
            </div>
            <p className="text-gray-700">{edu.institution}</p>
          </div>
        ))}
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { Lightbulb, Award, Target, FileText } from 'lucide-react';

export function ResumeGuide() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Resume Writing Guide</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="text-purple-600" size={24} />
            <h3 className="text-xl font-semibold">Professional Summary</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Keep it concise (3-5 sentences)</li>
            <li>• Highlight your key achievements</li>
            <li>• Use industry-specific keywords</li>
            <li>• Tailor it to the job description</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-purple-600" size={24} />
            <h3 className="text-xl font-semibold">Work Experience</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Use action verbs (Led, Developed, Implemented)</li>
            <li>• Include quantifiable achievements</li>
            <li>• Focus on relevant experience</li>
            <li>• Show career progression</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-purple-600" size={24} />
            <h3 className="text-xl font-semibold">Skills Section</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• List relevant technical skills</li>
            <li>• Include soft skills</li>
            <li>• Match skills from job posting</li>
            <li>• Group skills by category</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-purple-600" size={24} />
            <h3 className="text-xl font-semibold">Formatting Tips</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Use consistent formatting</li>
            <li>• Choose a clean, professional font</li>
            <li>• Include white space</li>
            <li>• Keep it to 1-2 pages</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Pro Tips</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            Customize your resume for each job application
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            Use keywords from the job description to pass ATS systems
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            Proofread carefully for grammar and spelling errors
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            Update your resume regularly with new achievements
          </li>
        </ul>
      </div>
    </div>
  );
}
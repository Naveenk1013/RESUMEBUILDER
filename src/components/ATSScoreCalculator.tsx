import React from 'react';
import type { ResumeData } from '../types';

interface ATSScoreCalculatorProps {
  data: ResumeData;
  jobDescription?: string;
}

export function ATSScoreCalculator({ data, jobDescription }: ATSScoreCalculatorProps) {
  const calculateScore = () => {
    let score = 0;
    const maxScore = 100;

    // Basic information completeness
    if (data.personalInfo.fullName) score += 5;
    if (data.personalInfo.email) score += 5;
    if (data.personalInfo.phone) score += 5;
    if (data.personalInfo.summary && data.personalInfo.summary.length > 100) score += 10;

    // Experience quality
    score += Math.min(data.experience.length * 5, 20);
    data.experience.forEach(exp => {
      if (exp.description && exp.description.length > 100) score += 5;
    });

    // Skills relevance
    score += Math.min(data.skills.length * 2, 15);

    // Education
    score += Math.min(data.education.length * 5, 15);

    // Keywords matching if job description is provided
    if (jobDescription) {
      const keywords = jobDescription.toLowerCase().split(' ');
      const resumeText = JSON.stringify(data).toLowerCase();
      const matches = keywords.filter(word => resumeText.includes(word));
      score += Math.min(matches.length, 20);
    }

    return Math.min(score, maxScore);
  };

  const score = calculateScore();

  const getScoreColor = () => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getImprovementTips = () => {
    const tips = [];

    if (!data.personalInfo.summary || data.personalInfo.summary.length < 100) {
      tips.push('Add a detailed professional summary (100+ characters)');
    }

    if (data.experience.length < 2) {
      tips.push('Add more work experience entries');
    }

    if (data.skills.length < 8) {
      tips.push('List more relevant skills (aim for 8+)');
    }

    data.experience.forEach((exp, index) => {
      if (!exp.description || exp.description.length < 100) {
        tips.push(`Add more details to experience #${index + 1}`);
      }
    });

    return tips;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">ATS Score Analysis</h2>
      
      <div className="flex items-center gap-4 mb-6">
        <div className={`text-4xl font-bold ${getScoreColor()}`}>
          {score}/100
        </div>
        <div className="flex-1 bg-gray-200 rounded-full h-4">
          <div 
            className={`h-4 rounded-full ${score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Improvement Tips</h3>
        <ul className="list-disc list-inside space-y-2">
          {getImprovementTips().map((tip, index) => (
            <li key={index} className="text-gray-700">{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
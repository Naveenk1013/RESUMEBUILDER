import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { PhotoUpload } from './components/PhotoUpload';
import { TemplateCard } from './components/TemplateCard';
import { PersonalInfo } from './components/FormSections/PersonalInfo';
import { Experience } from './components/FormSections/Experience';
import { Education } from './components/FormSections/Education';
import { Skills } from './components/FormSections/Skills';
import { CorporateTemplate1 } from './components/ResumeTemplates/Corporate/Template1';
import { ATSScoreCalculator } from './components/ATSScoreCalculator';
import { ResumeGuide } from './components/ResumeGuide';
import { FormProvider, useForm } from 'react-hook-form';
import { Download } from 'lucide-react';
import { exportToPDF, exportToWord } from './utils/exportUtils';
import type { ResumeData, ResumeTemplate } from './types';

const TEMPLATES: ResumeTemplate[] = [
  {
    id: 'corporate-1',
    name: 'Executive Pro',
    category: 'CORPORATE',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400'
  },
  {
    id: 'sales-1',
    name: 'Sales Impact',
    category: 'SALES',
    thumbnail: 'https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&w=400'
  },
  {
    id: 'it-1',
    name: 'Tech Stack',
    category: 'IT',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&w=400'
  }
];

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate | null>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const methods = useForm<ResumeData>({
    defaultValues: {
      personalInfo: {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        title: '',
        summary: ''
      },
      experience: [],
      education: [],
      skills: [],
      languages: [],
      certifications: []
    }
  });

  const resumeData = methods.watch();

  const handleExportPDF = async () => {
    if (resumeRef.current) {
      try {
        await exportToPDF(resumeRef.current);
      } catch (error) {
        console.error('Failed to export PDF:', error);
      }
    }
  };

  const handleExportWord = async () => {
    try {
      await exportToWord(resumeData);
    } catch (error) {
      console.error('Failed to export Word document:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section id="templates" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Choose Your Template</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEMPLATES.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onSelect={setSelectedTemplate}
                isSelected={selectedTemplate?.id === template.id}
              />
            ))}
          </div>
        </section>

        {selectedTemplate && (
          <FormProvider {...methods}>
            <section id="builder" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-6">Build Your Resume</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Profile Photo</h3>
                      <PhotoUpload
                        value={resumeData.personalInfo.photo}
                        onChange={(photo) => methods.setValue('personalInfo.photo', photo)}
                      />
                    </div>
                    <PersonalInfo />
                    <Experience />
                    <Education />
                    <Skills />
                  </div>
                </div>

                <ATSScoreCalculator data={resumeData} />
                <ResumeGuide />
              </div>

              <div className="lg:sticky lg:top-8 space-y-4">
                <div className="flex gap-4 justify-end">
                  <button
                    onClick={handleExportPDF}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                  >
                    <Download size={20} />
                    Export PDF
                  </button>
                  <button
                    onClick={handleExportWord}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <Download size={20} />
                    Export Word
                  </button>
                </div>

                <div ref={resumeRef} className="bg-white rounded-xl shadow-lg p-8">
                  <CorporateTemplate1 data={resumeData} />
                </div>
              </div>
            </section>
          </FormProvider>
        )}
      </main>
    </div>
  );
}

export default App;
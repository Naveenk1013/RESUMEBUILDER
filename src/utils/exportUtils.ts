import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { Ref } from 'react';
import { jsPDF } from 'jspdf';
import type { ResumeData } from '../types';

export async function exportToPDF(resumeElement: HTMLElement) {
  const doc = new jsPDF({
    format: 'a4',
    unit: 'pt'
  });

  doc.html(resumeElement, {
    callback: (pdf) => {
      pdf.save('resume.pdf');
    },
    x: 20,
    y: 20,
    html2canvas: {
      scale: 0.75
    }
  });
}

export async function exportToWord(data: ResumeData) {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: data.personalInfo.fullName,
              bold: true,
              size: 32
            })
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: data.personalInfo.title,
              size: 24
            })
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `${data.personalInfo.email} • ${data.personalInfo.phone}`,
              size: 20
            })
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Professional Summary',
              bold: true,
              size: 28
            })
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: data.personalInfo.summary,
              size: 20
            })
          ]
        }),
        // Add more sections for experience, education, etc.
      ]
    }]
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, 'resume.docx');
}
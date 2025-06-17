/**
 * PDF Export Utility Functions
 */

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

/**
 * Export HTML element to PDF
 * @param element The HTML element to export
 * @param filename The name of the PDF file
 */
export const exportToPDF = async (element: HTMLElement, filename: string = 'resume.pdf') => {
  if (!element) return;

  try {
    // Create canvas from HTML element
    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better quality
      useCORS: true, // Allow loading images from other domains
      logging: false,
      backgroundColor: '#ffffff'
    });

    // A4 paper dimensions in pts (72 dpi)
    const a4Width = 595.28;
    const a4Height = 841.89;
    
    // Calculate scaling factor to fit content to A4
    const contentRatio = canvas.width / canvas.height;
    const a4Ratio = a4Width / a4Height;
    
    let pdfWidth, pdfHeight;
    
    if (contentRatio > a4Ratio) {
      // If content is wider than A4
      pdfWidth = a4Width;
      pdfHeight = a4Width / contentRatio;
    } else {
      // If content is taller than A4 or has same ratio
      pdfHeight = a4Height;
      pdfWidth = a4Height * contentRatio;
    }
    
    // Create PDF with A4
    const pdf = new jsPDF('p', 'pt', [a4Width, a4Height]);
    
    // Add image to PDF, centering it
    const leftMargin = (a4Width - pdfWidth) / 2;
    pdf.addImage(
      canvas.toDataURL('image/png'),
      'PNG',
      leftMargin,
      0,
      pdfWidth,
      pdfHeight
    );
    
    // Save PDF
    pdf.save(filename);
    
    return true;
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    return false;
  }
};

/**
 * Export HTML element to Image
 * @param element The HTML element to export
 * @param filename The name of the image file
 */
export const exportToImage = async (element: HTMLElement, filename: string = 'resume.png') => {
  if (!element) return;

  try {
    // Create canvas from HTML element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    // Create download link
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    return true;
  } catch (error) {
    console.error('Error exporting to image:', error);
    return false;
  }
}; 
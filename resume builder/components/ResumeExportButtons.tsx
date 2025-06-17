import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';

interface ResumeExportButtonsProps {
  resumeRef: React.RefObject<HTMLDivElement>;
  fileName?: string;
}

const ResumeExportButtons: React.FC<ResumeExportButtonsProps> = ({ 
  resumeRef, 
  fileName = 'my-resume' 
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [pdfQuality, setPdfQuality] = useState<number>(2); // Default quality: 2 = high

  // Function to handle printing
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: fileName,
    onBeforeGetContent: () => {
      setIsExporting(true);
      return Promise.resolve();
    },
    onAfterPrint: () => {
      setIsExporting(false);
    },
  });

  // Function to handle PDF export with quality options
  const handleExportPDF = async () => {
    if (!resumeRef.current) return;
    
    setIsExporting(true);
    
    try {
      const scale = pdfQuality; // Scale based on quality setting
      const resumeElement = resumeRef.current;
      
      const canvas = await html2canvas(resumeElement, {
        scale: scale,
        useCORS: true,
        allowTaint: true,
        scrollX: 0,
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
      });
      
      // Get the canvas dimensions
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const doc = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      
      // Add image to PDF
      doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      
      // If the resume is longer than one page, add new pages
      const pageCount = Math.ceil(imgHeight / pageHeight);
      
      // Add additional pages if needed
      for (let i = 1; i < pageCount; i++) {
        position = -pageHeight * i;
        doc.addPage();
        doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      }
      
      // Save the PDF
      doc.save(`${fileName}.pdf`);
    } catch (error) {
      console.error('Error exporting PDF:', error);
    } finally {
      setIsExporting(false);
      setShowOptions(false);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <button
          onClick={handlePrint}
          disabled={isExporting}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 flex items-center justify-center"
        >
          {isExporting ? (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
          )}
          Print
        </button>
        
        <div className="relative">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400 flex items-center justify-center"
          >
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export as PDF
          </button>
          
          {showOptions && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">PDF Quality</h3>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="pdfQuality"
                      value="1"
                      checked={pdfQuality === 1}
                      onChange={() => setPdfQuality(1)}
                    />
                    <span className="ml-2 text-sm text-gray-700">Draft (Smaller file)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="pdfQuality"
                      value="2"
                      checked={pdfQuality === 2}
                      onChange={() => setPdfQuality(2)}
                    />
                    <span className="ml-2 text-sm text-gray-700">High Quality</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="pdfQuality"
                      value="3"
                      checked={pdfQuality === 3}
                      onChange={() => setPdfQuality(3)}
                    />
                    <span className="ml-2 text-sm text-gray-700">Ultra Quality (Larger file)</span>
                  </label>
                </div>
                <div className="mt-4">
                  <button
                    onClick={handleExportPDF}
                    disabled={isExporting}
                    className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400 flex items-center justify-center"
                  >
                    {isExporting ? 'Exporting...' : 'Export Now'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {isExporting && (
        <div className="text-sm text-gray-600 animate-pulse">
          Preparing your resume, please wait...
        </div>
      )}
    </div>
  );
};

export default ResumeExportButtons; 
import React from 'react';
import BaseTemplate from './BaseTemplate';
import { TemplateOption } from './index';

interface ClassicTemplateProps {
  data: any;
  template: TemplateOption;
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ data, template }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto border border-gray-300 bg-white rounded shadow">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
          <p className="text-lg text-gray-700">{data.title}</p>
        </header>
        <BaseTemplate data={data} template={template} />
      </div>
    </div>
  );
};

export default ClassicTemplate; 
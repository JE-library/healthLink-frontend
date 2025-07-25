import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react'; // Optional: use your own icons or another library

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-bold text-primary-body font-primary-font">
          Frequently Asked Questions
        </h3>
        <p className="text-gray-600 mt-2">Find answers to the most common queries from our users.</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-4">
        {/* FAQ 1 */}
        <div
          className={`border border-blue-200 rounded-xl p-4 transition-all duration-300 cursor-pointer ${
            openIndex === 0 ? 'bg-blue-100' : 'bg-white'
          }`}
          onClick={() => toggle(0)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">What services does HealthLink offer?</h3>
            {openIndex === 0 ? <ChevronUp /> : <ChevronDown />}
          </div>
          {openIndex === 0 && (
            <p className="mt-2 text-sm text-gray-700">
              We offer virtual consultations, urgent care, mental health services, and more.
            </p>
          )}
        </div>

        {/* FAQ 2 */}
        <div
          className={`border border-blue-200 rounded-xl p-4 transition-all duration-300 cursor-pointer ${
            openIndex === 1 ? 'bg-blue-100' : 'bg-white'
          }`}
          onClick={() => toggle(1)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Do you accept insurance?</h3>
            {openIndex === 1 ? <ChevronUp /> : <ChevronDown />}
          </div>
          {openIndex === 1 && (
            <p className="mt-2 text-sm text-gray-700">
              Yes, we accept most major health insurance plans.
            </p>
          )}
        </div>

        {/* FAQ 3 */}
        <div
          className={`border border-blue-200 rounded-xl p-4 transition-all duration-300 cursor-pointer ${
            openIndex === 2 ? 'bg-blue-100' : 'bg-white'
          }`}
          onClick={() => toggle(2)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">What should I bring to my appointment?</h3>
            {openIndex === 2 ? <ChevronUp /> : <ChevronDown />}
          </div>
          {openIndex === 2 && (
            <p className="mt-2 text-sm text-gray-700">
              Please bring your ID, insurance card, and a list of your current medications.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;

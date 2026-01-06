// src/components/slides/GettingStartedSlide.jsx
import { Globe } from 'lucide-react';

export default function GettingStartedSlide() {
  return (
    <div className="h-full flex flex-col justify-start pt-6 pb-8 px-4 sm:px-6 md:px-8 overflow-y-auto">
      <div className="flex flex-col sm:flex-row items-center md:justify-center gap-3 sm:gap-4 mb-6">
        <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 flex-shrink-0" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center sm:text-left">
          Getting Started
        </h2>
      </div>

      <div className="bg-green-50 border-2 border-green-300 p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-green-800 mb-3">🎉 Good News!</h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          You don't need to download or install anything — just a modern browser and internet access.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
        {[
          {
            step: 1,
            title: "Open Browser",
            desc: "Go to:",
            content: "pictoblox.ai",
            color: "blue",
            note: "(May take 10–30 seconds to load)"
          },
          {
            step: 2,
            title: "Create Project",
            desc: "Click on:",
            content: '"Create New Project"',
            color: "purple"
          },
          {
            step: 3,
            title: "Choose Mode",
            desc: "Select:",
            content: "Scratch Mode",
            color: "orange",
            note: "Visual, drag-and-drop blocks!"
          }
        ].map((item, i) => (
          <div 
            key={i}
            className={`bg-white border-4 border-${item.color}-300 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-md`}
          >
            <div className={`bg-${item.color}-500 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4`}>
              {item.step}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">{item.title}</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-2">{item.desc}</p>
            <div className={`bg-${item.color}-100 p-2.5 sm:p-3 rounded-lg`}>
              <p className={`text-${item.color}-800 font-bold text-base sm:text-lg break-all`}>
                {item.content}
              </p>
            </div>
            {item.note && (
              <p className="text-xs sm:text-sm text-gray-500 mt-2 italic">{item.note}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 sm:mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl text-center">
        <p className="text-base sm:text-lg md:text-2xl font-bold">
          ✅ You're now in the PictoBlox editor! Let's explore.
        </p>
      </div>
    </div>
  );
}
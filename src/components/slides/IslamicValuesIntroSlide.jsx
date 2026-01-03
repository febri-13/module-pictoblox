// src/components/slides/IslamicValuesIntroSlide.jsx
import React from 'react';
import { BookOpen } from 'lucide-react';

export default function IslamicValuesIntroSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center overflow-y-auto">
      {/* Icon — scalable */}
      <div className="mb-4">
        <BookOpen className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-600 mx-auto" />
      </div>

      {/* Title — responsive text */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 px-2">
        Seeking Knowledge in Islam
      </h1>

      {/* Arabic Verse — bold, readable, RTL */}
      <div className="mb-6 w-full max-w-2xl">
        <p
          dir="rtl"
          lang="ar"
          className="text-2xl sm:text-3xl md:text-4xl font-mirza text-gray-900 leading-relaxed tracking-wide"
          style={{ 
            fontFamily: "'Amiri', 'Mirza', serif",
            lineHeight: '1.8',
            wordSpacing: '0.1em'
          }}
        >
          وَقُل رَّبِّ زِدْنِي عِلْمًا
        </p>
        <p className="text-base sm:text-lg text-gray-500 mt-2">
          — Surah Taha, 20:114
        </p>
      </div>

      {/* Transliteration & Translation — stacked on mobile */}
      <div className="w-full max-w-xl bg-emerald-50 rounded-xl p-4 sm:p-5 border border-emerald-200 mb-6">
        <div className="text-left space-y-3">
          <div>
            <span className="font-bold text-emerald-700 text-sm sm:text-base">Transliteration:</span>  
            <p className="text-base sm:text-lg text-gray-700 mt-1">
              <em>Wa qul, Rabbi zidnī ‘ilmā.</em>
            </p>
          </div>
          <div>
            <span className="font-bold text-emerald-700 text-sm sm:text-base">Translation:</span>  
            <p className="text-base sm:text-lg text-gray-700 mt-1">
              <em>“And say, ‘My Lord, increase me in knowledge.’”</em>
            </p>
          </div>
        </div>
      </div>

      {/* Reflection — concise for mobile */}
      <div className="w-full max-w-lg bg-white rounded-xl p-4 sm:p-5 border border-gray-200 shadow-sm mb-6">
        <p className="text-sm sm:text-base text-gray-700">
          Learning to code is an act of <strong>gratitude</strong> for the gift of intellect —  
          and a sincere response to this divine command.
        </p>
      </div>

      {/* Value Tags — wrap & smaller padding */}
      <div className="flex flex-wrap justify-center gap-2">
        <span className="px-3 py-1.5 text-xs sm:text-sm bg-emerald-100 text-emerald-800 rounded-full">
          Knowledge → Amanah
        </span>
        <span className="px-3 py-1.5 text-xs sm:text-sm bg-blue-100 text-blue-800 rounded-full">
          Creativity → Syukr
        </span>
        <span className="px-3 py-1.5 text-xs sm:text-sm bg-amber-100 text-amber-800 rounded-full">
          Debugging → Sabr & Tawakkul
        </span>
      </div>
    </div>
  );
}
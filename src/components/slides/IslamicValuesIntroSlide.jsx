// src/components/slides/IslamicValuesIntroSlide.jsx
import React from 'react';
import { BookOpen } from 'lucide-react';

export default function IslamicValuesIntroSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 text-center">
      {/* Icon */}
      <div className="mb-6">
        <BookOpen className="w-20 h-20 md:w-24 md:h-24 text-emerald-600 mx-auto" />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Seeking Knowledge in Islam
      </h1>

      {/* Arabic Verse — prominent & beautiful */}
      <div className="mb-6 max-w-4xl w-full">
        <p
          dir="rtl"
          lang="ar"
          className="text-3xl md:text-4xl font-mirza text-gray-900 leading-relaxed tracking-wide"
          style={{ fontFamily: "'Uthmanic', 'Amiri', 'Mirza', serif", lineHeight: '2.0' }}
        >
          وَقُل رَّبِّ زِدْنِي عِلْمًا
        </p>
        <p className="text-lg text-gray-500 mt-2 font-normal">
          — Surah Taha, 20:114
        </p>
      </div>

      {/* Transliteration & Translation */}
      <div className="max-w-3xl w-full bg-emerald-50 rounded-xl p-5 border border-emerald-200 mb-6">
        <p className="text-lg md:text-xl text-gray-700 font-medium">
          <span className="font-bold text-emerald-700">Transliteration:</span>  
          <br />
          <em>Wa qul, Rabbi zidnī ‘ilmā.</em>
        </p>
        <p className="text-lg md:text-xl text-gray-700 mt-3">
          <span className="font-bold text-emerald-700">Translation:</span>  
          <br />
          <em>“And say, ‘My Lord, increase me in knowledge.’”</em>
        </p>
      </div>

      {/* Reflection — link to coding */}
      <div className="max-w-2xl bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
        <p className="text-base md:text-lg text-gray-700">
          Learning to code is an act of <strong>gratitude</strong> for the gift of intellect —  
          and a sincere response to this divine command.
        </p>
      </div>

      {/* Value Tags */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
          Knowledge → Amanah (Trust)
        </span>
        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          Creativity → Syukr (Gratitude)
        </span>
        <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
          Debugging → Sabr & Tawakkul
        </span>
      </div>
    </div>
  );
}
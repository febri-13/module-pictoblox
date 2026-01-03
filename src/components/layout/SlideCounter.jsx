// src/components/layout/SlideCounter.jsx
export default function SlideCounter({ current, total, progress }) {
  return (
    <div className="fixed top-6 right-6 bg-white bg-opacity-90 backdrop-blur px-6 py-3 rounded-full shadow-lg z-40">
      <p className="text-lg font-semibold text-gray-700 flex items-center gap-3">
        {current} / {total}
        <span className="text-sm text-blue-600 ml-2">
          ({Math.round(progress)}%)
        </span>
      </p>
    </div>
  );
}
// src/components/layout/KeyboardHint.jsx
export default function KeyboardHint() {
  return (
    <div className="md:block fixed bottom-8 right-8 bg-white bg-opacity-90 backdrop-blur px-6 py-3 rounded-full shadow-lg z-40">
      <p className="text-sm text-gray-600">
        Use <kbd>←</kbd> <kbd>→</kbd> or <kbd>ESC</kbd> for menu
      </p>
    </div>
  );
}
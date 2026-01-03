// src/components/layout/MenuButton.jsx
export default function MenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed top-6 left-6 bg-white bg-opacity-90 backdrop-blur px-6 py-3 rounded-full shadow-lg z-40 hover:bg-gray-100 transition-all text-lg font-semibold text-gray-700"
      aria-label="Open menu"
    >
      ☰ Menu
    </button>
  );
}
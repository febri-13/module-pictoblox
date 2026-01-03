export default function SavingSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <div className="text-center mb-8">
        <div className="text-8xl mb-4">💾</div>
        <h2 className="text-6xl font-bold text-gray-800">Save Your Work!</h2>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl text-center">
          <div className="text-5xl mb-4">1</div>
          <p className="text-xl font-semibold">Click File → Save Project</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl text-center">
          <div className="text-5xl mb-4">2</div>
          <p className="text-xl font-semibold">Sign in with Google or email</p>
        </div>
        <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-6 rounded-2xl shadow-xl text-center">
          <div className="text-5xl mb-4">3</div>
          <p className="text-xl font-semibold">Name your project</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl text-center">
          <div className="text-5xl mb-4">4</div>
          <p className="text-xl font-semibold">Click Save!</p>
        </div>
      </div>

      <div className="bg-white border-4 border-green-400 rounded-2xl p-8 shadow-xl text-center">
        <h3 className="text-3xl font-bold text-green-700 mb-4">✅ Project Name Example:</h3>
        <div className="bg-gray-100 p-6 rounded-xl inline-block">
          <p className="text-4xl font-mono text-gray-800">Codie_Walk_Level7</p>
        </div>
      </div>

      <div className="mt-8 bg-blue-100 border-l-8 border-blue-500 p-6 rounded-r-2xl">
        <p className="text-2xl text-gray-700">
          📌 <strong>Teacher Tip:</strong> Save after every major change. Rule: <strong>Save → Test → Save again</strong>
        </p>
      </div>
    </div>
  );
}
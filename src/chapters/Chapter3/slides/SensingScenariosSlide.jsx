export default function SensingScenariosSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-16">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">Common Sensing Scenarios</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-lg">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
              <th className="py-4 px-6 text-left text-xl font-semibold">Scenario</th>
              <th className="py-4 px-6 text-left text-xl font-semibold">Block to Use</th>
              <th className="py-4 px-6 text-left text-xl font-semibold">Example Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="py-4 px-6 text-lg">Collision</td>
              <td className="py-4 px-6 font-mono text-blue-600">touching [mouse-pointer]?</td>
              <td className="py-4 px-6 text-lg">Catching a coin with the mouse</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-4 px-6 text-lg">Collision</td>
              <td className="py-4 px-6 font-mono text-blue-600">touching [Sprite1]?</td>
              <td className="py-4 px-6 text-lg">Enemy hitting the player sprite</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-4 px-6 text-lg">Keyboard</td>
              <td className="py-4 px-6 font-mono text-blue-600">key [space] pressed?</td>
              <td className="py-4 px-6 text-lg">Making the character jump</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-4 px-6 text-lg">Environment</td>
              <td className="py-4 px-6 font-mono text-blue-600">touching color [ ]?</td>
              <td className="py-4 px-6 text-lg">Checking if player fell into lava (red color)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-2xl text-center">
        <p className="text-2xl font-bold">Sensing blocks are your sprites' eyes and ears!</p>
      </div>
    </div>
  );
}
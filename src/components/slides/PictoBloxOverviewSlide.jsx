// src/components/slides/PictoBloxOverviewSlide.jsx
export default function PictoBloxOverviewSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-4 py-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-6 md:mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 text-white text-2xl font-bold mx-auto mb-4 shadow-md">
          🎮
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PictoBlox Overview</h1>
        <p className="text-gray-600 mt-2">Visual Learning Map for Level 7</p>
      </div>

      {/* ✅ SVG INLINE — responsive, no external file */}
      <div className="flex-1 flex items-center justify-center p-2 md:p-4">
        <div className="w-full max-w-5xl h-[65vh] bg-white rounded-2xl shadow-lg border overflow-auto">
          <svg
            viewBox="0 0 800 500"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <style>
              {`
                .root { fill: #FF5722; stroke: #E64A19; stroke-width: 2; }
                .branch1 { fill: #2196F3; stroke: #1976D2; stroke-width: 2; }
                .branch2 { fill: #4CAF50; stroke: #388E3C; stroke-width: 2; }
                .branch3 { fill: #FFC107; stroke: #FFA000; stroke-width: 2; }
                .branch4 { fill: #9C27B0; stroke: #7B1FA2; stroke-width: 2; }
                .leaf { fill: #ffffff; stroke: #ccc; stroke-width: 1; rx: 5; ry: 5; }
                .line { stroke: #555; stroke-width: 2; fill: none; }
                text { font-family: Arial, sans-serif; text-anchor: middle; dominant-baseline: middle; }
                .title { font-size: 16px; font-weight: bold; fill: white; }
                .label { font-size: 14px; fill: white; }
                .detail { font-size: 12px; fill: #333; }
                @media (max-width: 768px) {
                  .title { font-size: 14px; }
                  .label { font-size: 12px; }
                  .detail { font-size: 10px; }
                }
              `}
            </style>

            {/* Lines */}
            <path d="M400 250 L200 100" className="line" />
            <path d="M200 100 L200 130" className="line" />
            <path d="M400 250 L600 100" className="line" />
            <path d="M600 100 L600 130" className="line" />
            <path d="M400 250 L200 400" className="line" />
            <path d="M200 400 L200 430" className="line" />
            <path d="M400 250 L600 400" className="line" />
            <path d="M600 400 L600 430" className="line" />

            {/* Root */}
            <rect x="300" y="220" width="200" height="60" rx="10" ry="10" className="root" />
            <text x="400" y="250" className="title">PictoBlox for Beginners</text>

            {/* Branch 1 */}
            <rect x="100" y="70" width="200" height="40" rx="5" ry="5" className="branch1" />
            <text x="200" y="90" className="label">1. What is PictoBlox?</text>
            <rect x="100" y="120" width="200" height="70" className="leaf" />
            <text x="200" y="140" className="detail">Visual Coding (Drag & Drop)</text>
            <text x="200" y="155" className="detail">Based on Scratch</text>
            <text x="200" y="170" className="detail">Web & Desktop App</text>

            {/* Branch 2 */}
            <rect x="100" y="370" width="200" height="40" rx="5" ry="5" className="branch2" />
            <text x="200" y="390" className="label">2. Interface Parts</text>
            <rect x="100" y="420" width="200" height="70" className="leaf" />
            <text x="200" y="440" className="detail">Stage (Main Screen)</text>
            <text x="200" y="455" className="detail">Sprite List (Characters)</text>
            <text x="200" y="470" className="detail">Blocks Palette (Toolbox)</text>

            {/* Branch 3 */}
            <rect x="500" y="70" width="200" height="40" rx="5" ry="5" className="branch3" />
            <text x="600" y="90" className="label">3. Block Categories</text>
            <rect x="500" y="120" width="200" height="70" className="leaf" />
            <text x="600" y="140" className="detail">🔵 Events (Triggers)</text>
            <text x="600" y="155" className="detail">🟠 Motion (Move/Turn)</text>
            <text x="600" y="170" className="detail">🟣 Looks (Say/Switch)</text>

            {/* Branch 4 */}
            <rect x="500" y="370" width="200" height="40" rx="5" ry="5" className="branch4" />
            <text x="600" y="390" className="label">4. First Project</text>
            <rect x="500" y="420" width="200" height="70" className="leaf" />
            <text x="600" y="440" className="detail">Codie the Cat Walks!</text>
            <text x="600" y="455" className="detail">→ key = move right</text>
            <text x="600" y="470" className="detail">Click = say 'Hi!'</text>
          </svg>
        </div>
      </div>

      <div className="text-center mt-4 text-gray-500 text-xs md:text-sm">
        🎨 Diagram made with open-source tools — fully editable for teachers
      </div>
    </div>
  );
}
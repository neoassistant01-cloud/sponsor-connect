interface Program {
  id: number;
  name: string;
  sport: string;
  ageRange: string;
  description: string;
  needs: string[];
  location: string;
}

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{program.name}</h3>
          <p className="text-sm text-gray-500">{program.sport} • {program.ageRange}</p>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
          Active
        </span>
      </div>
      <p className="text-gray-600 mb-4">{program.description}</p>
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Looking for:</p>
        <div className="flex flex-wrap gap-2">
          {program.needs.map((need) => (
            <span key={need} className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
              {need}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {program.location}
      </div>
      <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
        Request Match
      </button>
    </div>
  );
}

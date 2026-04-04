import { useState } from 'react';
import SponsorCard from './components/SponsorCard';
import ProgramCard from './components/ProgramCard';
import { sponsors, programs } from './data';

type Tab = 'sponsors' | 'programs' | 'matches';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('sponsors');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">SponsorConnect</h1>
          <p className="text-gray-600">Connect youth sports programs with local sponsors</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-6">
            {(['sponsors', 'programs', 'matches'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-1 border-b-2 font-medium transition-colors ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {tab === 'sponsors' && ` (${sponsors.length})`}
                {tab === 'programs' && ` (${programs.length})`}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'sponsors' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Available Sponsors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsors.map((sponsor) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'programs' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Youth Sports Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'matches' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Suggested Matches</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">
                Based on program needs and sponsor categories, here are the best matches:
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-medium">Nike → AVHS Football</p>
                  <p className="text-sm text-gray-600">Equipment + Funding match</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="font-medium">Local Sports Bar → Apple Valley Youth Soccer</p>
                  <p className="text-sm text-gray-600">Funding + Venue match</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="font-medium">Valley Orthodontics → Farmington Little League</p>
                  <p className="text-sm text-gray-600">Services match</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

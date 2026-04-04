interface Sponsor {
  id: number;
  name: string;
  logo: string;
  description: string;
  categories: string[];
  location: string;
  website: string;
}

export default function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-600">
          {sponsor.logo}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{sponsor.name}</h3>
          <p className="text-sm text-gray-500">{sponsor.location}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{sponsor.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {sponsor.categories.map((cat) => (
          <span key={cat} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
            {cat}
          </span>
        ))}
      </div>
      <a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Learn More
      </a>
    </div>
  );
}

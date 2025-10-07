type JobCardProps = {
  title: string;
  description: string;
  location: string;
};

export default function JobCard({ title, description, location }: JobCardProps) {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-gray-500">{location}</p>
      <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
        Candidatar-se
      </button>
    </div>
  );
}
import JobCard from "../../app/components/jobcard";

export default function JobsPage() {
  const jobs = [
    { title: "Front-end Developer", description: "Vaga para Next.js + Tailwind", location: "João Pessoa" },
    { title: "Back-end Developer", description: "Vaga para Node.js + MongoDB", location: "Remoto" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Vagas Disponíveis</h1>
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          title={job.title}
          description={job.description}
          location={job.location}
        />
      ))}
    </div>
  );
}
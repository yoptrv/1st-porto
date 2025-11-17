export default function ProjectCard({ title, desc, image }) {
  return (
    <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-xl transition p-6 fade-up">
      <img src={image} className="rounded-xl mb-5" />

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 mb-4">{desc}</p>

      <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        View Detail
      </button>
    </div>
  );
}

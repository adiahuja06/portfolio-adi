export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-purple-700">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white border border-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-purple-700 mb-2">UPSC RAG Chatbot</h3>
          <p className="text-gray-600">
            AI system that answers UPSC questions using textbook context.
          </p>
        </div>
        <div className="bg-white border border-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-purple-700 mb-2">Number Plate Detection</h3>
          <p className="text-gray-600">
            YOLOv8 + OCR based automated enforcement system.
          </p>
        </div>
        <div className="bg-white border border-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-purple-700 mb-2">Forest Fire Detection</h3>
          <p className="text-gray-600">
            Real-time fire detection system for government use.
          </p>
        </div>
      </div>
    </section>
  );
}
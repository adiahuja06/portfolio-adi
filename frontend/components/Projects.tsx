export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        <div className="bg-[#1a1a1a] p-6 rounded-xl">
          <h3 className="text-xl font-semibold">UPSC RAG Chatbot</h3>
          <p className="text-gray-400 mt-2">
            AI system that answers UPSC questions using textbook context.
          </p>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Number Plate Detection</h3>
          <p className="text-gray-400 mt-2">
            YOLOv8 + OCR based automated enforcement system.
          </p>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Forest Fire Detection</h3>
          <p className="text-gray-400 mt-2">
            Real-time fire detection system for government use.
          </p>
        </div>

      </div>
    </section>
  );
}
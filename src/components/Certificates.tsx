import { Award, Download } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      title: "Cybersecurity Fundamentals",
      issuer: "Deloitte",
      gradient: "from-pink-500 to-purple-600",
      file: "/images/cyber deloitte.png", 
    },
    {
      title: "Oracle Certified Foundations Associate",
      issuer: "Oracle",
      gradient: "from-purple-500 to-cyan-600",
      file: "/images/oracle_ocr.png", 
    },
    {
      title: "Python Programming Certificate",
      issuer: "Professional Certification",
      gradient: "from-cyan-500 to-blue-600",
      file: "/images/python certificate.png", 
    },
    {
      title: "Generative AI Specialization",
      issuer: "Outskill",
      gradient: "from-blue-500 to-pink-600",
      file: "/images/outskill_generative_ai_.png", 
    },
    {
      title: "GenAI Springboard Program",
      issuer: "Industry Certification",
      gradient: "from-pink-500 to-orange-600",
      file: "/images/GenAI springboard.png", 
    },
    {
      title: "Agentic AI Fundamentals",
      issuer: "Google",
      gradient: "from-orange-500 to-purple-600",
      file: "/images/Google Agentic AI.png", 
    },
  ];

  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Professional Certificates</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="feature-card group hover:scale-105 transition-all duration-300"
            >
              {/* Show image preview if PNG/JPG */}
              {cert.file && cert.file.endsWith(".png") && (
                <img
                  src={cert.file}
                  alt={cert.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}

              <div
                className={`p-4 bg-gradient-to-br ${cert.gradient} rounded-xl w-fit mb-4 group-hover:rotate-6 transition-transform`}
              >
                <Award className="text-white" size={28} />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-cyan-300 text-sm mb-4">{cert.issuer}</p>

              {/* Download button if file is PDF */}
              {cert.file && cert.file.endsWith(".pdf") && (
                <a
                  href={cert.file}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-white font-semibold text-sm hover:shadow-lg hover:shadow-pink-500/50 transition-all group-hover:gap-3"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
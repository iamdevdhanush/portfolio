const AboutSection = () => {
  return (
    <section id="about" className="mb-20 scroll-mt-28">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-zinc-100 mb-6">About</h2>
        <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
          <p>
            I build backend systems and AI-powered applications. My work focuses on designing APIs, 
            managing data pipelines, and deploying containerized services. I work primarily with 
            Python, FastAPI, PostgreSQL, and Docker.
          </p>
          <p>
            I have led teams across multiple hackathons, building full-stack solutions under tight 
            deadlines. My projects range from multi-agent AI platforms for safety analytics to 
            distributed monitoring systems for energy intelligence.
          </p>
          <p>
            Currently exploring distributed systems, system design, and production-grade backend 
            architecture. I treat every project as an opportunity to build something that works 
            reliably in real conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

const projects = [
  {
    title: 'PlaySync',
    description: 'A full-stack web application that allows users to play songs in groups, create playlists, and create a group chat to discuss music. It uses the Spotify API for music streaming and authentication, Socket.IO for real-time communication.',
    tech: ['HTML','CSS','JavaScript','Python'],
  },
  {
    title: 'Real-Time AI Voice Companion',
    description: 'a full-stack AI application enabling real-time voice conversations through speech recognition, emotion detection, contextual LLM responses, and natural voice synthesis.',
    tech: ['FastAPI', 'Python', 'SQLite', 'faster-whisper', 'SpeechBrain', 'Groq LLM', 'JavaScript'],
},
  
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <p className="section-label">Projects</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="skills-grid">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Featured projects"
      title="Selected work"
      intro="Backend APIs and an applied RAG platform — with the architecture behind each one."
    >
      <div className="space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.04}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

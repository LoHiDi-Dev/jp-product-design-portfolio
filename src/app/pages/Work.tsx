import { Container } from '../components/Container';
import { ProjectCard } from '../components/ProjectCard';
import { selectedWork, personalWork, getDisplayChips } from '../data/workProjects';

export default function Work() {
  return (
    <div className="py-16">
      <Container>
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Work</h1>
          <p className="text-lg text-muted-foreground">
            Selected case studies demonstrating UX outcomes, scalable systems,
            and production delivery
          </p>
        </div>

        <div className="max-w-5xl">
          {/* Selected Work */}
          <section className="mb-16">
            <h2 className="text-2xl font-medium mb-6">Selected Work</h2>
            <p className="text-muted-foreground mb-6">
              Selected case studies showcasing product impact, measurable
              outcomes, and end-to-end delivery
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedWork.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  role={project.role}
                  timeline={project.timeline}
                  outcome={project.outcome}
                  tags={getDisplayChips(project)}
                  href={project.href}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                />
              ))}
            </div>
          </section>

          {/* Personal Work */}
          <section>
            <h2 className="text-2xl font-medium mb-6">Selected Personal Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalWork.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  role={project.role}
                  timeline={project.timeline}
                  outcome={project.outcome}
                  tags={getDisplayChips(project)}
                  href={project.href}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                  isPersonal={project.isPersonal}
                  badge={project.badge}
                />
              ))}
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}

import SectionTitle from "@/components/atoms/SectionTitle";
import ProjectCard from "@/components/molecules/ProjectCard";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>Proyectos destacados</SectionTitle>
        <p className="mb-10 max-w-2xl leading-relaxed text-gray-600">
          Una selección de proyectos académicos y prácticos en desarrollo backend,
          bases de datos, cloud, telecomunicaciones e IoT.
        </p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

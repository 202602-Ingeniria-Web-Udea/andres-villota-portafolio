import Image from "next/image";
import Tag from "@/components/atoms/Tag";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  github,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
      {/* Imagen del proyecto */}
      <div className="h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={`Imagen representativa del proyecto ${title}`}
          width={900}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mb-5 leading-relaxed text-gray-600">
          {description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>

        {github && (
          <div className="mt-auto border-t border-gray-100 pt-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-800"
            >
              Ver en GitHub
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
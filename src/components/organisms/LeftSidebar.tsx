import Image from "next/image";
import SkillBar from "@/components/atoms/SkillBar";

export default function LeftSidebar() {
  return (
    <aside className="bg-gray-950 px-6 py-8 text-white lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
      {/* Información personal */}
      <div className="border-b border-gray-800 pb-6 text-center">
        <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-blue-500">
          <Image
            src="/Foto.png"
            alt="Andrés Alejandro Villota Villota"
            width={128}
            height={128}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        <h2 className="text-xl font-bold">
          Andrés Alejandro
          <span className="block text-blue-400">Villota Villota</span>
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Estudiante de Ingeniería de Sistemas
        </p>
      </div>

      {/* Navegación */}
      <nav className="border-b border-gray-800 py-6">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-400">
          Navegación
        </h3>

        <div className="flex flex-col gap-2">
          <a
            href="#habilidades"
            className="rounded-md px-3 py-2 text-sm text-gray-300 transition hover:bg-gray-900 hover:text-blue-400"
          >
            Habilidades
          </a>

          <a
            href="#proyectos"
            className="rounded-md px-3 py-2 text-sm text-gray-300 transition hover:bg-gray-900 hover:text-blue-400"
          >
            Proyectos
          </a>

          <a
            href="#experiencia"
            className="rounded-md px-3 py-2 text-sm text-gray-300 transition hover:bg-gray-900 hover:text-blue-400"
          >
            Experiencia
          </a>

          <a
            href="#educacion"
            className="rounded-md px-3 py-2 text-sm text-gray-300 transition hover:bg-gray-900 hover:text-blue-400"
          >
            Educación
          </a>

          <a
            href="#contacto"
            className="rounded-md px-3 py-2 text-sm text-gray-300 transition hover:bg-gray-900 hover:text-blue-400"
          >
            Contacto
          </a>
        </div>
      </nav>

      {/* Datos de contacto */}
      <div className="border-b border-gray-800 py-6">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-400">
          Contacto
        </h3>

        <div className="space-y-3 text-sm">
          <div>
            <p className="font-medium text-gray-300">Ubicación</p>
            <p className="text-gray-400">Medellín, Colombia</p>
          </div>

          <div>
            <p className="font-medium text-gray-300">Correo</p>
            <a
              href="mailto:andres.villotav@udea.edu.co"
              className="break-all text-gray-400 transition hover:text-blue-400"
            >
              andres.villotav@udea.edu.co
            </a>
          </div>

          <div>
            <p className="font-medium text-gray-300">Teléfono</p>
            <a
              href="tel:+573202420420"
              className="text-gray-400 transition hover:text-blue-400"
            >
              +57 320 242 0420
            </a>
          </div>
        </div>
      </div>

      {/* Idiomas */}
      <div className="border-b border-gray-800 py-6">
        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-blue-400">
          Idiomas
        </h3>

        <div className="space-y-5">
          <SkillBar name="Español" level={100} />
          <SkillBar name="Inglés" level={60} />
        </div>
      </div>

      {/* Lenguajes de programación */}
      <div className="border-b border-gray-800 py-6">
        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-blue-400">
          Lenguajes
        </h3>

        <div className="space-y-5">
          <SkillBar name="Java" level={85} />
          <SkillBar name="JavaScript" level={75} />
          <SkillBar name="Python" level={70} />
          <SkillBar name="SQL" level={80} />
        </div>
      </div>

      {/* Habilidades extra */}
      <div className="pt-6">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-400">
          Habilidades extra
        </h3>

        <div className="flex flex-wrap gap-2">
          {[
            "Spring Boot",
            "Git / GitHub",
            "Docker",
            "PostgreSQL",
            "MySQL",
            "Linux",
            "Cloud",
            "IoT",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1 text-xs text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
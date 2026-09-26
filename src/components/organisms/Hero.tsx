export default function Hero() {
  return (
    <section className="bg-gray-950 text-white">
      <div className="mx-auto flex min-h-[520px] max-w-6xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            Portafolio profesional
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Andrés Alejandro
            <span className="block text-blue-500">Villota Villota</span>
          </h1>

          <h2 className="mb-6 text-xl font-medium text-gray-300 sm:text-2xl">
            Estudiante de Ingeniería de Sistemas
          </h2>

          <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Desarrollo soluciones de software con interés especial en backend,
            bases de datos, computación en la nube, telecomunicaciones e Internet
            de las Cosas. Me motiva convertir necesidades reales en sistemas
            funcionales, mantenibles y útiles.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition hover:border-blue-500 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

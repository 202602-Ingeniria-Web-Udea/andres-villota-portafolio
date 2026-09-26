export default function ContactSection() {
  return (
    <section id="contacto" className="bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Contacto
        </h2>

        <p className="mb-10 max-w-2xl leading-relaxed text-gray-400">
          Estoy interesado en oportunidades que me permitan continuar
          desarrollando mis habilidades en ingeniería de software,
          desarrollo backend y tecnologías de la información.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-800 p-6 transition hover:border-blue-500">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-500">
              Correo electrónico
            </p>

            <a
              href="mailto:andres.villotav@udea.edu.co"
              className="text-lg text-gray-200 transition hover:text-blue-400"
            >
              andres.villotav@udea.edu.co
            </a>
          </div>

          <div className="rounded-xl border border-gray-800 p-6 transition hover:border-blue-500">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-500">
              GitHub
            </p>

            <a
              href="https://github.com/AndresVillotaVillota"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-200 transition hover:text-blue-400"
            >
              github.com/AndresVillotaVillota
            </a>
          </div>

          <div className="rounded-xl border border-gray-800 p-6 transition hover:border-blue-500">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-500">
              Teléfono
            </p>

            <a
              href="tel:+573202420420"
              className="text-lg text-gray-200 transition hover:text-blue-400"
            >
              +57 320 242 0420
            </a>
          </div>

          <div className="rounded-xl border border-gray-800 p-6 transition hover:border-blue-500">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-500">
              Ubicación
            </p>

            <p className="text-lg text-gray-200">
              Medellín, Colombia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
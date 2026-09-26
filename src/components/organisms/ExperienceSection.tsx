import SectionTitle from "@/components/atoms/SectionTitle";
import ExperienceItem from "@/components/molecules/ExperienceItem";
import { experience } from "@/data/portfolio";

export default function ExperienceSection() {
    return (
        <section id="experiencia" className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-6">
                <SectionTitle>Experiencia</SectionTitle>

                <p className="mb-10 max-w-2xl leading-relaxed text-gray-600">
                    Experiencia profesional y laboral que ha fortalecido mis habilidades
                    técnicas, de comunicación, trabajo en equipo y atención al cliente.
                </p>

                <div className="space-y-8">
                    {experience.map((item) => (
                        <ExperienceItem
                            key={`${item.organization}-${item.period}`}
                            title={item.title}
                            organization={item.organization}
                            period={item.period}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
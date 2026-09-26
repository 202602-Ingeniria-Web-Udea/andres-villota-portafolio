import SectionTitle from "@/components/atoms/SectionTitle";
import EducationItem from "@/components/molecules/EducationItem";
import { education } from "@/data/portfolio";

export default function EducationSection() {
    return (
        <section id="educacion" className="bg-gray-50 py-20">
            <div className="mx-auto max-w-6xl px-6">
                <SectionTitle>Educación</SectionTitle>

                <p className="mb-10 max-w-2xl leading-relaxed text-gray-600">
                    Formación académica orientada al desarrollo de software,
                    tecnologías de la información y construcción de soluciones
                    tecnológicas.
                </p>

                <div className="space-y-6">
                    {education.map((item) => (
                        <EducationItem
                            key={`${item.institution}-${item.title}`}
                            title={item.title}
                            institution={item.institution}
                            period={item.period}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
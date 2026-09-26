import SectionTitle from "@/components/atoms/SectionTitle";
import SkillBar from "@/components/atoms/SkillBar";
import { skills } from "@/data/portfolio";

export default function SkillsSection() {
    return (
        <section id="habilidades" className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-6">
                <SectionTitle>Habilidades técnicas</SectionTitle>

                <p className="mb-10 max-w-2xl leading-relaxed text-gray-600">
                    Tecnologías y herramientas con las que he trabajado durante mi
                    formación académica y el desarrollo de proyectos de software.
                </p>

                <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
                    {skills.map((skill) => (
                        <SkillBar
                            key={skill.name}
                            name={skill.name}
                            level={skill.level}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
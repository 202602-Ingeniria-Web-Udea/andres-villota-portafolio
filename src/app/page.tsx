import Hero from "@/components/organisms/Hero";
import LeftSidebar from "@/components/organisms/LeftSidebar";
import SkillsSection from "@/components/organisms/SkillsSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import ExperienceSection from "@/components/organisms/ExperienceSection";
import EducationSection from "@/components/organisms/EducationSection";
import ContactSection from "@/components/organisms/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="lg:grid lg:grid-cols-[320px_1fr]">
        <LeftSidebar />

        <div className="min-w-0">
          <Hero />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
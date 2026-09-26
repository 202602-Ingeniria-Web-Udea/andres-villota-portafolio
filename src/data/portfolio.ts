import type { Education, Experience, Project, Skill } from "@/types/portfolio";

export const skills: Skill[] = [
  { name: "Java", level: 85 },
  { name: "Spring Boot", level: 80 },
  { name: "HTML", level: 85 },
  { name: "CSS", level: 75 },
  { name: "JavaScript", level: 75 },
  { name: "Python", level: 70 },
  { name: "SQL", level: 80 },
  { name: "Git / GitHub", level: 80 },
];

export const experience: Experience[] = [
  {
    title: "Asesor Comercial",
    organization: "SSH Telecomunicaciones",
    period: "2026 - Actualidad",
    description:
      "Asesoría comercial y acompañamiento a clientes en soluciones y servicios de telecomunicaciones.",
  },
  {
    title: "Guía / Mediador de Sala",
    organization: "Parque Explora",
    period: "Noviembre 2023 - Agosto 2025",
    description:
      "Acompañamiento y orientación a visitantes, mediación de experiencias interactivas y divulgación de contenidos en los diferentes espacios del museo.",
  },
];

export const education: Education[] = [
  {
    title: "Ingeniería de Sistemas",
    institution: "Universidad de Antioquia",
    period: "En curso",
    description:
      "Formación en desarrollo de software, arquitectura, bases de datos, redes, computación en la nube, seguridad, IoT y otras áreas de las tecnologías de la información.",
  },
];

export const projects: Project[] = [
  {
    title: "MikroSpot4G",
    description:
      "Plataforma para gestión y aprovisionamiento de servicios LTE, con automatización de ventas, límites de datos y expiración de servicios sobre infraestructura Linux.",
    technologies: ["PHP", "MariaDB", "Docker", "Linux", "Open5GS", "LTE"],
    image:
      "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200",
    github: "https://github.com/AndresVillotaVillota/MikroSpot4G-case-study",
  },
  {
    title: "Court Reserve",
    description:
      "Aplicación para la gestión de usuarios y reservas de canchas deportivas, desarrollada con arquitectura por capas y persistencia en PostgreSQL.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Gradle", "Thymeleaf"],
    image:
      "https://images.pexels.com/photos/2961946/pexels-photo-2961946.jpeg?auto=compress&cs=tinysrgb&w=1200",
    github: "https://github.com/AndresVillotaVillota/court-reserve",
  },
  {
    title: "Horse Pedigree",
    description:
      "Sistema web para la gestión de genealogía, propietarios, competencias y campeonatos de equinos.",
    technologies: ["Java", "Spring Boot", "JPA", "Hibernate", "MySQL"],
    image:
      "https://images.pexels.com/photos/13589988/pexels-photo-13589988.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "CITASalud",
    description:
      "Sistema para el agendamiento y gestión de citas, desarrollado aplicando una arquitectura por capas y mecanismos de autenticación y autorización.",
    technologies: ["Java", "Spring Boot", "JPA", "JWT"],
    image:
      "https://images.pexels.com/photos/7108319/pexels-photo-7108319.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Aula Inteligente IoT",
    description:
      "Sistema IoT orientado a automatizar un aula mediante sensores de presencia, temperatura y corriente, junto con actuadores para iluminación y ventilación.",
    technologies: ["ESP32-S3", "ESP-IDF", "IoT", "Sensores"],
    image:
      "https://images.pexels.com/photos/35652372/pexels-photo-35652372.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Cloud Lab UdeA",
    description:
      "Laboratorio académico de computación en la nube con despliegue de una aplicación web y flujo de trabajo basado en GitHub y Vercel.",
    technologies: ["Cloud", "GitHub", "Vercel", "Web"],
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    github: "https://github.com/AndresVillotaVillota/cloud-lab-udea",
  },
];

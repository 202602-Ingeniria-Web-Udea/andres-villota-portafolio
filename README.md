# Portafolio profesional — Andrés Alejandro Villota Villota

Portafolio web personal desarrollado con Next.js, React, TypeScript y Tailwind CSS. Presenta mi perfil profesional, habilidades técnicas, proyectos, experiencia laboral, formación académica y datos de contacto.

## Tecnologías

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Ejecutar localmente

Requisitos: Node.js y npm.

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Verificación para producción

```bash
npm run lint
npm run build
```

## Estructura principal

- `src/app`: página, layout global y estilos.
- `src/components/atoms`: componentes visuales pequeños y reutilizables.
- `src/components/molecules`: tarjetas y elementos compuestos.
- `src/components/organisms`: secciones principales del portafolio.
- `src/data/portfolio.ts`: contenido editable de habilidades, proyectos, experiencia y educación.
- `src/types/portfolio.ts`: interfaces TypeScript.
- `public/Foto.png`: fotografía del perfil.

## Despliegue

El proyecto está preparado para desplegarse en Vercel importando el repositorio de GitHub. Vercel detecta automáticamente Next.js y utiliza el comando de compilación `npm run build`.

## Autor

**Andrés Alejandro Villota Villota**  
Estudiante de Ingeniería de Sistemas — Universidad de Antioquia  
Medellín, Colombia

GitHub: `AndresVillotaVillota`

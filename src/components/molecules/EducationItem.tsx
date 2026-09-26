interface EducationItemProps {
  title: string;
  institution: string;
  period: string;
  description?: string;
}

export default function EducationItem({
  title,
  institution,
  period,
  description,
}: EducationItemProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            {title}
          </h3>

          <p className="font-medium text-gray-600">
            {institution}
          </p>
        </div>

        <span className="text-sm font-medium text-gray-500">
          {period}
        </span>
      </div>

      {description && (
        <p className="mt-4 leading-relaxed text-gray-600">
          {description}
        </p>
      )}
    </article>
  );
}
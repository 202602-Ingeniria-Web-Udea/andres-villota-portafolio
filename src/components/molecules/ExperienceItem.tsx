interface ExperienceItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export default function ExperienceItem({
  title,
  organization,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <article className="border-l-2 border-blue-500 pl-5">
      <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-bold text-gray-900">{title}</h3>

          <p className="text-sm font-medium text-gray-600">
            {organization}
          </p>
        </div>

        <span className="text-sm text-gray-500">
          {period}
        </span>
      </div>

      <p className="leading-relaxed text-gray-600">
        {description}
      </p>
    </article>
  );
}
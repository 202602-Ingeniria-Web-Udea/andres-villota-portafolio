interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded-md bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
      {children}
    </span>
  );
}
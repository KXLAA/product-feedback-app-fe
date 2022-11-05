interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function Header({ children, className }: HeaderProps) {
  return (
    <div className={`mb-6 w-full rounded bg-blue-300 ${className}`}>
      {children}
    </div>
  );
}

interface ShowProps {
  when?: boolean;
  children: React.ReactNode;
}

export function Show({ when, children }: ShowProps) {
  return when ? <>{children}</> : null;
}

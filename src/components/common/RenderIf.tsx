interface RenderIfProps {
  condition?: boolean;
  children: React.ReactNode;
}

export function RenderIf({ children, condition }: RenderIfProps) {
  return condition ? <>{children}</> : null;
}

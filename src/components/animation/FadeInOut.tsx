import { motion } from "@/components/animation/motion";

interface FadeInOutProps {
  children: React.ReactNode;
  noInitial?: boolean;
  className?: string;
}

export function FadeInOut(props: FadeInOutProps) {
  return (
    <motion.div
      className={props.className}
      initial={props.noInitial ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
}

import { useRef } from "react";
import { useInView } from "framer-motion";

export const useInViewMotion = (margin = "-50px") => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });
  return { ref, isInView };
};

import { useCallback, useEffect, useRef, useState } from "react";

export const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const callBackFunction = useCallback((entries) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  }, []);

  useEffect(() => {
    let observerValue = null;
    const observer = new IntersectionObserver(callBackFunction, options);
    if (containerRef.current) {
      observerValue = containerRef.current;
      observer.observe(containerRef.current);
    }
    return () => {
      if (observerValue) observer.unobserve(observerValue);
    };
  }, [callBackFunction, options]);
  return [containerRef, visible];
};

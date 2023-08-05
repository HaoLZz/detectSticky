import { useState, useRef, useEffect } from "react";

// https://github.com/yairEO/react-hooks/blob/master/hooks/useDetectSticky.js
/**
 * detects when a (CSS) sticky element changes "sticky" state
 * @param {object} ref optional react ref. if not provided, a new one will be used instead.
 * @param {object} observerSettings Observer's settings object
 */
const useDetectSticky = (ref, observerSettings = { threshold: [1] }) => {
  const [isSticky, setIsSticky] = useState(false);
  const newRef = useRef();
  ref ||= newRef;

  // mount
  useEffect(() => {
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        observerSettings
      );

    observer.observe(cachedRef);

    // unmount
    return () => {
      observer.unobserve(cachedRef);
    };
  }, []);

  return { isSticky, ref, setIsSticky };
};

export default useDetectSticky;

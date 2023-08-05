import { useState, useRef, useEffect } from "react";

// https://github.com/yairEO/react-hooks/blob/master/hooks/useDetectSticky.js
/**
 *
 * detects when a (CSS) sticky element changes "sticky" state
 * @param {Object} observerSettings Observer's settings object
 * @param {Array<number>} [observerSettings.threshold]
 * @param {Object} [observerSettings.root] optional react ref for root.defaults to null
 * @param {string} [observerSettings.rootMargin] offsets to add to the root's bounding box
 */
const useIntersectionObserver = (
  ref,
  observerSettings = {
    threshold: [0.0, 0.1],
    root: null,
    rootMargin: "0px 0px 0px 0px",
  }
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const internalRef = useRef(null);
  const rootRef = useRef(null);
  ref ||= internalRef;

  // mount
  useEffect(() => {
    const targetEl = ref.current;
    const options = { ...observerSettings, root: rootRef.current };
    console.log(options);
    const observer = new IntersectionObserver(([e]) => {
      console.log("observer cb", e);
      setIsIntersecting(e.isIntersecting);
    }, options);

    observer.observe(targetEl);

    // unmount
    return () => {
      observer.unobserve(targetEl);
    };
  }, []);

  return { isIntersecting, ref, rootRef, setIsIntersecting };
};

export default useIntersectionObserver;

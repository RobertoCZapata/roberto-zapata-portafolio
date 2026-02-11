import { useEffect, useRef, useState, RefObject } from 'react';

/**
 * useIntersectionObserver Hook Options
 */
interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  /**
   * Whether to trigger only once
   * If true, observer disconnects after first intersection
   * @default true
   */
  triggerOnce?: boolean;

  /**
   * Initial state for isIntersecting
   * @default false
   */
  initialIsIntersecting?: boolean;
}

/**
 * useIntersectionObserver Hook
 *
 * Detects when an element enters the viewport using the Intersection Observer API.
 * Perfect for triggering scroll animations with Framer Motion.
 *
 * @param options - Intersection Observer configuration options
 * @returns Object containing ref to attach to element and isIntersecting state
 *
 * @example
 * ```tsx
 * import { motion } from 'framer-motion';
 * import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';
 * import { fadeInUp } from '@/lib/utils/animations';
 *
 * function MyComponent() {
 *   const { ref, isIntersecting } = useIntersectionObserver({
 *     threshold: 0.2,
 *     triggerOnce: true
 *   });
 *
 *   return (
 *     <motion.div
 *       ref={ref}
 *       initial="hidden"
 *       animate={isIntersecting ? "visible" : "hidden"}
 *       variants={fadeInUp}
 *     >
 *       Content appears when scrolled into view
 *     </motion.div>
 *   );
 * }
 * ```
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
): {
  ref: RefObject<T>;
  isIntersecting: boolean;
} {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    triggerOnce = true,
    initialIsIntersecting = false,
  } = options;

  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(initialIsIntersecting);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: assume element is visible if API not supported
      console.warn('IntersectionObserver is not supported in this browser');
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;

        setIsIntersecting(isElementIntersecting);

        // If triggerOnce is true and element has intersected, disconnect observer
        if (isElementIntersecting && triggerOnce) {
          observer.disconnect();
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    // Cleanup: disconnect observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return { ref, isIntersecting };
}

/**
 * useIntersectionObserverMultiple Hook
 *
 * Similar to useIntersectionObserver but for multiple elements.
 * Returns an array of refs and their intersection states.
 *
 * @param count - Number of elements to observe
 * @param options - Intersection Observer configuration options
 * @returns Array of objects containing ref and isIntersecting state
 *
 * @example
 * ```tsx
 * const elements = useIntersectionObserverMultiple(3, { threshold: 0.2 });
 *
 * return (
 *   <>
 *     <motion.div ref={elements[0].ref} animate={elements[0].isIntersecting ? "visible" : "hidden"}>
 *       Item 1
 *     </motion.div>
 *     <motion.div ref={elements[1].ref} animate={elements[1].isIntersecting ? "visible" : "hidden"}>
 *       Item 2
 *     </motion.div>
 *     <motion.div ref={elements[2].ref} animate={elements[2].isIntersecting ? "visible" : "hidden"}>
 *       Item 3
 *     </motion.div>
 *   </>
 * );
 * ```
 */
export function useIntersectionObserverMultiple<T extends HTMLElement = HTMLDivElement>(
  count: number,
  options: UseIntersectionObserverOptions = {}
): Array<{ ref: RefObject<T>; isIntersecting: boolean }> {
  const elements = Array.from({ length: count }, () => ({
    ref: useRef<T>(null),
    isIntersecting: false,
  }));

  const [intersectionStates, setIntersectionStates] = useState<boolean[]>(
    Array(count).fill(options.initialIsIntersecting || false)
  );

  useEffect(() => {
    const {
      threshold = 0.1,
      root = null,
      rootMargin = '0px',
      triggerOnce = true,
    } = options;

    if (typeof IntersectionObserver === 'undefined') {
      setIntersectionStates(Array(count).fill(true));
      return;
    }

    const observers: IntersectionObserver[] = [];

    elements.forEach((element, index) => {
      if (!element.ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          const isElementIntersecting = entry.isIntersecting;

          setIntersectionStates((prev) => {
            const newStates = [...prev];
            newStates[index] = isElementIntersecting;
            return newStates;
          });

          if (isElementIntersecting && triggerOnce) {
            observer.disconnect();
          }
        },
        { threshold, root, rootMargin }
      );

      observer.observe(element.ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [count, options]);

  return elements.map((element, index) => ({
    ref: element.ref,
    isIntersecting: intersectionStates[index],
  }));
}

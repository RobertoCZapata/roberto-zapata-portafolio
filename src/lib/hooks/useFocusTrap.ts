import { useEffect, RefObject } from 'react';

/**
 * useFocusTrap Hook
 *
 * Traps keyboard focus within a specified element (typically a modal dialog).
 * When active, pressing Tab cycles focus only among focusable elements within
 * the trapped container, improving accessibility for keyboard and screen reader users.
 *
 * @param ref - React ref to the container element
 * @param isActive - Whether the focus trap is currently active
 *
 * @example
 * ```tsx
 * const modalRef = useRef<HTMLDivElement>(null);
 * useFocusTrap(modalRef, isModalOpen);
 *
 * return (
 *   <div ref={modalRef} role="dialog">
 *     <button>Close</button>
 *     <input type="text" />
 *     <button>Submit</button>
 *   </div>
 * );
 * ```
 *
 * Features:
 * - Automatically focuses first focusable element when activated
 * - Cycles Tab navigation within the container
 * - Supports Shift+Tab for reverse navigation
 * - Works with all focusable elements (buttons, links, inputs, etc.)
 * - Cleans up event listeners on deactivation
 */
export function useFocusTrap(ref: RefObject<HTMLElement>, isActive: boolean) {
  useEffect(() => {
    // Only activate trap if ref is valid and isActive is true
    if (!isActive || !ref.current) return;

    const element = ref.current;

    // Query all focusable elements within the container
    const focusableElements = element.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    // Convert NodeList to Array for easier manipulation
    const focusableArray = Array.from(focusableElements);

    if (focusableArray.length === 0) {
      console.warn('Focus trap: No focusable elements found in container');
      return;
    }

    const firstElement = focusableArray[0];
    const lastElement = focusableArray[focusableArray.length - 1];

    // Focus first element when trap activates
    firstElement?.focus();

    /**
     * Handle Tab key press to cycle focus within container
     */
    function handleTab(e: KeyboardEvent) {
      if (e.key !== 'Tab') return;

      // Shift+Tab (reverse tab)
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      }
      // Tab (forward tab)
      else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    }

    // Add event listener to container
    element.addEventListener('keydown', handleTab);

    // Cleanup: remove event listener when trap deactivates
    return () => {
      element.removeEventListener('keydown', handleTab);
    };
  }, [isActive, ref]);
}

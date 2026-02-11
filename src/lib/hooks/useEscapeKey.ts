import { useEffect, useCallback } from 'react';

/**
 * useEscapeKey Hook
 *
 * Executes a callback function when the Escape key is pressed.
 * Commonly used to close modals, dropdowns, or other dismissible UI elements.
 *
 * @param onEscape - Callback function to execute on Escape key press
 *
 * @example
 * ```tsx
 * const [isModalOpen, setIsModalOpen] = useState(false);
 * useEscapeKey(() => setIsModalOpen(false));
 *
 * return (
 *   <Modal isOpen={isModalOpen}>
 *     <p>Press Escape to close</p>
 *   </Modal>
 * );
 * ```
 *
 * Features:
 * - Listens globally for Escape key press
 * - Automatically cleans up event listener on unmount
 * - Uses useCallback to prevent unnecessary re-renders
 * - Works with any dismissible UI component
 */
export function useEscapeKey(onEscape: () => void) {
  // Memoize handler to prevent effect re-running on every render
  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onEscape();
      }
    },
    [onEscape]
  );

  useEffect(() => {
    // Add event listener to window for global Escape key detection
    window.addEventListener('keydown', handleEscape);

    // Cleanup: remove event listener when component unmounts or onEscape changes
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape]);
}

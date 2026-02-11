'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

/**
 * Theme Provider Component
 *
 * Wraps the application to provide theme switching functionality.
 * Uses next-themes for seamless dark mode support with no flash of unstyled content.
 *
 * Features:
 * - System theme detection (respects OS preference)
 * - localStorage persistence
 * - No flash of unstyled content (FOUC)
 * - SSR-friendly
 *
 * @param children - React children to wrap
 * @param props - Additional props passed to next-themes ThemeProvider
 *
 * @example
 * ```tsx
 * // In layout.tsx
 * <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
 *   {children}
 * </ThemeProvider>
 * ```
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

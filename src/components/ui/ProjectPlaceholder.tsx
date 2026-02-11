import { Globe, Wrench, Database, Code2 } from 'lucide-react';

interface ProjectPlaceholderProps {
  category: 'web' | 'tool' | 'api' | string;
  title: string;
  className?: string;
}

/**
 * Project Placeholder Component
 *
 * Displays an attractive placeholder for projects without images.
 * Features category-specific gradients and icons for visual appeal.
 *
 * @param category - Project category (web, tool, api)
 * @param title - Project title to display
 * @param className - Additional CSS classes
 *
 * @example
 * ```tsx
 * <ProjectPlaceholder
 *   category="web"
 *   title="E-commerce Platform"
 * />
 * ```
 */
export default function ProjectPlaceholder({
  category,
  title,
  className = '',
}: ProjectPlaceholderProps) {
  // Category-specific styling configuration
  const categoryStyles: Record<
    string,
    {
      gradient: string;
      icon: typeof Globe;
      iconColor: string;
    }
  > = {
    web: {
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      icon: Globe,
      iconColor: 'text-white/40',
    },
    tool: {
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      icon: Wrench,
      iconColor: 'text-white/40',
    },
    api: {
      gradient: 'from-green-500 via-emerald-500 to-cyan-500',
      icon: Database,
      iconColor: 'text-white/40',
    },
  };

  // Get style configuration for category, fallback to default
  const style = categoryStyles[category] || {
    gradient: 'from-gray-500 via-slate-500 to-zinc-500',
    icon: Code2,
    iconColor: 'text-white/40',
  };

  const Icon = style.icon;

  return (
    <div
      className={`
        relative h-48 bg-gradient-to-br ${style.gradient}
        overflow-hidden group
        ${className}
      `}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          className={`
            w-24 h-24 ${style.iconColor}
            transform transition-all duration-500
            group-hover:scale-110 group-hover:rotate-6
          `}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white/20 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>

      {/* Title Overlay */}
      <div
        className="
          absolute bottom-0 left-0 right-0
          p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent
          backdrop-blur-sm
          transform transition-transform duration-300
          group-hover:translate-y-0
        "
      >
        <p className="text-white font-semibold text-sm leading-tight line-clamp-2">
          {title}
        </p>
      </div>

      {/* Hover Overlay Effect */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br from-white/0 to-black/20
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      ></div>
    </div>
  );
}

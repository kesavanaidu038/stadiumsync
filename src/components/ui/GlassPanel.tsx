import { type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface GlassPanelProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  glow?: 'teal' | 'red' | 'green' | 'amber' | 'purple' | 'none';
  noPadding?: boolean;
}

const glowStyles = {
  teal: 'shadow-cyber border-cyber-teal/30',
  red: 'shadow-red-glow border-cyber-red/30',
  green: 'shadow-green-glow border-cyber-green/30',
  amber: 'shadow-amber-glow border-cyber-amber/30',
  purple: 'shadow-[0_0_20px_rgba(123,97,255,0.4)] border-cyber-purple/30',
  none: 'border-glass-border',
};

export const GlassPanel = ({
  children,
  className = '',
  glow = 'none',
  noPadding = false,
  ...motionProps
}: GlassPanelProps) => (
  <motion.div
    {...motionProps}
    className={`
      relative backdrop-blur-md bg-glass-bg border rounded-xl overflow-hidden
      ${glowStyles[glow]}
      ${noPadding ? '' : 'p-6'}
      ${className}
    `}
  >
    {/* Scan line effect */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
      <div className="absolute inset-0 bg-grid-pattern bg-grid" />
    </div>
    {/* Top accent line */}
    <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${
      glow === 'teal' ? 'from-transparent via-cyber-teal to-transparent' :
      glow === 'red' ? 'from-transparent via-cyber-red to-transparent' :
      glow === 'green' ? 'from-transparent via-cyber-green to-transparent' :
      glow === 'amber' ? 'from-transparent via-cyber-amber to-transparent' :
      glow === 'purple' ? 'from-transparent via-cyber-purple to-transparent' :
      'from-transparent via-glass-border to-transparent'
    }`} />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

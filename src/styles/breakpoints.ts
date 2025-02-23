import { Breakpoint } from "antd";

export const size: Record<Breakpoint, number> = {
  xs: 480, // Small screen mobile
  sm: 576, // Mobile screen
  md: 768, // Tablets
  lg: 992, // Laptops
  xl: 1200, // Desktop / Monitors
  xxl: 1600, // Big screens
};

export const device = {
  xs: `(max-width: ${size.xs}px)`,
  sm: `(max-width: ${size.sm}px)`,
  md: `(max-width: ${size.md}px)`,
  lg: `(max-width: ${size.lg}px)`,
  xl: `(max-width: ${size.xl}px)`,
  xxl: `(max-width: ${size.xxl}px)`,
};

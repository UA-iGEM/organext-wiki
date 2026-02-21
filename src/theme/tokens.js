/**
 * iGEM Wiki theme tokens – derived from style guide.
 * Use for CSS variables (globals.css) and as reference for Tailwind.
 */

export const colors = {
  // Base palette: sea green → nature, science, creativity
  primaryDark: '#092230',
  primary: '#097474',
  primaryLight: '#DBEFE2',
  // Alternative palette
  navy: '#061A57',
  blue: '#004576',
  aqua: '#9EE1DF',
}

export const fonts = {
  heading: ['Monument', 'system-ui', 'sans-serif'],
  body: ['Jura', 'system-ui', 'sans-serif'],
  mono: ['Anca Coder', 'ui-monospace', 'monospace'],
}

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
}

export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
}

export const radius = {
  sm: '0.375rem',
  DEFAULT: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  '2xl': '2rem',
  full: '9999px',
}

export default {
  colors,
  fonts,
  fontSizes,
  spacing,
  radius,
}

export const theme = {
  colors: {
    neonBlue: '#00f3ff',
    neonPurple: '#b026ff',
    neonPink: '#ff2d95',
    cyberDark: '#0a0a1f',
    cyberLight: '#2a2a4f',
    white: '#ffffff',
    gray: {
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
  fonts: {
    cyber: "'Orbitron', sans-serif",
    manga: "'Bangers', cursive",
    body: "'Inter', sans-serif",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  spacing: {
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
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    neon: {
      blue: '0 0 20px rgba(0, 243, 255, 0.5)',
      purple: '0 0 20px rgba(176, 38, 255, 0.5)',
      pink: '0 0 20px rgba(255, 45, 149, 0.5)',
    },
  },
  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.5s ease-in-out',
  },
  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    auto: 'auto',
  },
  container: {
    center: true,
    padding: '1rem',
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  animations: {
    glow: `
      @keyframes glow {
        0%, 100% {
          text-shadow: 
            0 0 10px rgba(0, 243, 255, 0.7),
            0 0 20px rgba(0, 243, 255, 0.5),
            0 0 30px rgba(0, 243, 255, 0.3);
        }
        50% {
          text-shadow: 
            0 0 20px rgba(176, 38, 255, 0.7),
            0 0 30px rgba(176, 38, 255, 0.5),
            0 0 40px rgba(176, 38, 255, 0.3);
        }
      }
    `,
    float: `
      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
    `,
    pulse: `
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }
    `,
  },
};

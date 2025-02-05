import { createGlobalStyle } from 'styled-components';

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
      600: '#4b5563'
    }
  },
  fonts: {
    body: "'Inter', sans-serif",
    cyber: "'Orbitron', sans-serif",
    manga: "'Bangers', cursive"
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  animations: {
    glow: `
      @keyframes glow {
        0%, 100% {
          text-shadow: 
            0 0 10px ${theme.colors.neonBlue}b3,
            0 0 20px ${theme.colors.neonBlue}80,
            0 0 30px ${theme.colors.neonBlue}4d;
        }
        50% {
          text-shadow: 
            0 0 20px ${theme.colors.neonPurple}b3,
            0 0 30px ${theme.colors.neonPurple}80,
            0 0 40px ${theme.colors.neonPurple}4d;
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
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
      }
    `
  }
};

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.cyberDark};
    color: ${theme.colors.white};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.cyber};
    line-height: 1.2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    color: inherit;
  }

  input, textarea, select {
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Animations */
  ${theme.animations.glow}
  ${theme.animations.float}
  ${theme.animations.pulse}

  .animate-glow {
    animation: glow 3s ease-in-out infinite;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-pulse {
    animation: pulse 2s ease-in-out infinite;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.cyberDark};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.cyberLight};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.neonBlue};
  }

  /* Selection */
  ::selection {
    background: ${theme.colors.neonPurple};
    color: ${theme.colors.white};
  }
`;

export default GlobalStyles;

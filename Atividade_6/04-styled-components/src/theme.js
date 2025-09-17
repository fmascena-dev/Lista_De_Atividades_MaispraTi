export const lightTheme = {
  colors: {
    primary: '#4a90e2',
    primaryDark: '#357abd',
    primaryLight: '#6fb0f7',
    accent: '#f39c12',
    success: '#2ecc71',
    error: '#e74c3c',
    text: {
      primary: '#333333',
      secondary: '#666666',
      light: '#999999'
    },
    background: {
      primary: '#f7f7f7',
      secondary: '#ffffff',
      card: '#ffffff'
    },
    border: '#e5e7eb',
    shadow: 'rgba(0, 0, 0, 0.1)'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px'
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
    md: '0 2px 4px rgba(0, 0, 0, 0.1)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  transitions: {
    fast: '150ms ease',
    normal: '200ms ease',
    slow: '250ms ease'
  }
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    text: {
      primary: '#e1e1e1',
      secondary: '#999999',
      light: '#666666'
    },
    background: {
      primary: '#1a1a1a',
      secondary: '#2d2d2d',
      card: '#2d2d2d'
    },
    border: '#374151',
    shadow: 'rgba(0, 0, 0, 0.3)'
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
    md: '0 2px 4px rgba(0, 0, 0, 0.2)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.2)'
  }
};
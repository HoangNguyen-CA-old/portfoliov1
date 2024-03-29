const size = {
  mobileS: '320px',
  mobileM: '370px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`
};

export const theme = {
  lighterPrimary: '#a5dcb2',
  darkerPrimary: '#599066',
  primary: '#7fcd91',
  secondary: '#f5eaea',
  darkerSecondary: '#938c8c',
  white: '#000000',
  black: '#ffffff',
  dark: '#4d4646',
  lighterDark: '#5b5656',
  darkerDark: '#363131'
};

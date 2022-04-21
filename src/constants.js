export const COLORS = {
  white: '0deg 0% 100%',
  gray: {
    100: '185deg 5% 95%',
    300: '190deg 5% 80%',
    500: '196deg 4% 60%',
    700: '220deg 5% 40%',
    900: '220deg 3% 20%',
  },
  primary: '340deg 65% 47%',
  primaryBright: '340deg, 93%, 59%',
  secondary: '240deg 60% 63%',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const breakpoints = {
  small: 600,
  medium: 900,
  large: 1500
}

export const QUERY = {
  mobileAndSmaller: `max-width: ${breakpoints.small / 16}rem`,
  tabletAndSmaller: `max-width: ${breakpoints.medium / 16}rem`,
  laptopAndSmaller: `max-width: ${breakpoints.large / 16}rem`
}
/**
 * Round x with n decimal.
 * @param {Number} x Number to be rounded.
 * @param {Number} n Number of digits after semi column.
 * @returns {Number} Number rounded.
 */
const round = (x, n) => Math.round(x * (n * 10)) / (n * 10);

const scaleN = (n) => round(Math.pow(1.2, n), 3);

const scale = n => `${scaleN(n)}rem`;

const colors = {
  white: '#D3D0CB',
  black: '#1E2019', // #393E41
  yellow: '#E2C044',
  red: '#FF0000',
  darkBlue: '#587B7F',
  blue: '#1E92CE', //monzilla
  green: '#9FE80C',
  gray: '#393E41',

  blackShades: [
    '#32342D'
  ]
};

const fontFamily = '"Cambo", serif';

const theme = {
  scale,
  scaleN,
  colors,
  fontFamily,
  mediaQuery,
  color: colors.white,
  bg: colors.black,
};

/* media querys */
export const mediaQuery = {
  HD: 'only screen and (min-width: 1440px)',  //Use
  Desktop: 'only screen and (min-width: 1024px)', //Use
  Medium: 'only screen and (min-width: 768px)', //Use
  Small: 'only screen and (max-width: 767px)',  // Use


  TabletPortrait: 'only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait)',
  TabletLandscape: 'only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape)',
  MobilePortrait: 'only screen and (min-device-width : 320px) and (max-device-width : 768px) and (orientation : portrait)',
  MobileLandscape: 'only screen and (min-device-width : 320px) and (max-device-width : 768px) and (orientation : landscape)'
}
export default theme;

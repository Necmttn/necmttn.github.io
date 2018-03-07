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
  first: "#7F5D80",
  firstLight: "#CFC0CF", //"#AF95B0",
  firstSuperLight: "#F4F0F4",
  firstDark: "#15191d",
  accent: "#FF6633",
  bright: "#ffffff",
  light: "#f3f3f3",
  middle: "#666666",
  dark: "#333333",
  superDark: "#111111",
  white: '#D3D0CB',
  black: '#1E2019', // #393E41
  yellow: '#E2C044',
  red: '#FF0000',
  darkBlue: '#587B7F',
  blue: '#1E92CE', //monzilla
  green: '#9dffc8',
  gray: '#393E41',
  darkGray: '#252423', //http://www.theworkshop.ch
  blackShades: [
    '#32342D'
  ]
}

const fontFamily = 'Open Sans, "Cambo", serif';


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


const post = {
  colors: {
    author: colors.middle,
    authorBorder: colors.firstLight,
    bold: colors.middle,
    blockquoteFrame: colors.light,
    copyright: colors.middle,
    link: colors.first,
    linkHover: colors.firstLight,
    meta: colors.middle,
    metaBorder: colors.first,
    text: colors.dark,
    title: colors.middle,
    subTitle: colors.superDark
  },
  backgrounds: {
    wrapper: colors.bright,
    meta: colors.light
  },
  sizes: {
    maxWidth: "70%"
  }
}

const menu = {
  colors: {
    menuItem: colors.dark,
    bar: colors.white
  }
}

const footer = {
  socialIcon: colors.white,
  quote: colors.gray,
  menuLink: colors.gray
}

const mediaQueryTresholds = {
  XL: "65em",
  L: "49em",
  M: "37em",
  S: "28em",
  XS: "21em"
}
export default {
  scale,
  scaleN,
  colors,
  post,
  menu,
  footer,
  fontFamily,
  mediaQuery,
  mediaQueryTresholds,
  color: colors.black,
  bg: colors.bright,
};

const fontSizeBase = 1;
const fontSizeUnity = 'rem';

const fontSizes = {
  1: `${fontSizeBase * 1.75}${fontSizeUnity}`, // 22.75px,
  2: `${fontSizeBase * 1.5}${fontSizeUnity}`, // 19.50px
  3: `${fontSizeBase * 1.35}${fontSizeUnity}`, // 17.55px
  4: `${fontSizeBase * 1.25}${fontSizeUnity}`, // 16.25px
  5: `${fontSizeBase * 1.15}${fontSizeUnity}`, // 14.95px,
  6: `${fontSizeBase * 1.05}${fontSizeUnity}`, // 13.95px,

  7: `${fontSizeBase * 0.95}${fontSizeUnity}`, // 12.35px
  8: `${fontSizeBase * 0.85}${fontSizeUnity}`, // 11.05px
  9: `${fontSizeBase * 0.75}${fontSizeUnity}`, // 9.75px
  10: `${fontSizeBase * 0.5}${fontSizeUnity}`, // 6.50px

  base: `${fontSizeBase}${fontSizeUnity}`, // 13px
  fluid: '100%', // 100%

  '2x': `${fontSizeBase * 2}${fontSizeUnity}`, // 26px
  '2qx': `${fontSizeBase * 2.25}${fontSizeUnity}`, // 29.25px
  '2hx': `${fontSizeBase * 2.5}${fontSizeUnity}`, // 32.5px
  '2tx': `${fontSizeBase * 2.75}${fontSizeUnity}`, // 35.75px

  '3x': `${fontSizeBase * 3}${fontSizeUnity}`, // 39px
  '3qx': `${fontSizeBase * 3.25}${fontSizeUnity}`, // 42.25px
  '3hx': `${fontSizeBase * 3.5}${fontSizeUnity}`, // 45.5px
  '3tx': `${fontSizeBase * 3.75}${fontSizeUnity}`, // 48.75px

  '4x': `${fontSizeBase * 4}${fontSizeUnity}`, // 52px
  '4qx': `${fontSizeBase * 4.25}${fontSizeUnity}`, // 55.25px
  '4hx': `${fontSizeBase * 4.5}${fontSizeUnity}`, // 58.5px
  '4tx': `${fontSizeBase * 4.75}${fontSizeUnity}`, // 61.75px

  '5x': `${fontSizeBase * 5}${fontSizeUnity}`, // 65px
  '5qx': `${fontSizeBase * 5.25}${fontSizeUnity}`, // 68.25px
  '5hx': `${fontSizeBase * 5.5}${fontSizeUnity}`, // 71.5px
};

const colors = {
  background: '#F3F6F9',
  base: {
    white: '#FFFFFF',
    primary: '#00693e',
    secondary: '#c6cd23',
    success: '#e1df3e',
    info: '#3a99d4',
    warning: '#fdc516',
    danger: '#e94b3e',
    light: '#f0f2f1',
    dark: '#996c32',
    gray100: '#F5F8FA',
    gray200: '#EFF2F5',
    gray300: '#E4E6EF',
    gray400: '#B5B5C3',
    gray500: '#A1A5B7',
    gray600: '#7E8299',
    gray700: '#5E6278',
    gray800: '#3F4254',
    gray900: '#181C32',
  },
  active: {
    white: '#F3F6F9',
    primary: '#15351d',
    secondary: '#b0b61e',
    success: '#bcba32',
    info: '#2f81b3',
    warning: '#d5a612',
    danger: '#c43f34',
    light: '#dcdfde',
    dark: '#7e5828',
  },
  light: {
    white: '#FFFFFF',
    primary: '#e6ebe8',
    secondary: '#f7f5cc',
    success: '#f7f5cc',
    info: '#e8f5fa',
    warning: '#fef7e0',
    danger: '#fcece9',
    light: '#f0f2f1',
    dark: '#f1ebe2',
  },
  shadow: {
    small: 'rgb(76 87 125 / 2%)',
    default: 'rgb(82 63 105 / 15%)',
  },
  text: {
    primary: '#7E8299',
    secondary: '#00693e',
    success: '#e1df3e',
    info: '#3a99d4',
    warning: '#fdc516',
    danger: '#e94b3e',
    white: '#FFFFFF',
    dark: '#181C32',
    muted: '#A1A5B7',
    gray100: '#F5F8FA',
    gray200: '#EFF2F5',
    gray300: '#E4E6EF',
    gray400: '#B5B5C3',
    gray500: '#A1A5B7',
    gray600: '#7E8299',
    gray700: '#5E6278',
    gray800: '#3F4254',
    gray900: '#181C32',
  },
};

const borderRadius = {
  default: '0.475rem',
  large: '0.625rem',
};

const borderSize = {
  default: '0.068rem',
};

const spacer = 1;
const spacerUnity = 'rem';

const spacing = {
  0: 0,
  1: `${spacer * 0.25}${spacerUnity}`,
  2: `${spacer * 0.5}${spacerUnity}`,
  3: `${spacer * 0.75}${spacerUnity}`,
  4: `${spacer * 1}${spacerUnity}`,
  5: `${spacer * 1.25}${spacerUnity}`,
  6: `${spacer * 1.5}${spacerUnity}`,
  7: `${spacer * 1.75}${spacerUnity}`,
  8: `${spacer * 2}${spacerUnity}`,
  9: `${spacer * 2.25}${spacerUnity}`,
  10: `${spacer * 2.5}${spacerUnity}`,
  11: `${spacer * 2.75}${spacerUnity}`,
  12: `${spacer * 3}${spacerUnity}`,
  13: `${spacer * 3.25}${spacerUnity}`,
  14: `${spacer * 3.5}${spacerUnity}`,
  15: `${spacer * 3.75}${spacerUnity}`,
  16: `${spacer * 4}${spacerUnity}`,
  17: `${spacer * 4.25}${spacerUnity}`,
  18: `${spacer * 4.5}${spacerUnity}`,
  19: `${spacer * 4.75}${spacerUnity}`,
  20: `${spacer * 5}${spacerUnity}`,
  21: `${spacer * 5.25}${spacerUnity}`,
  22: `${spacer * 5.5}${spacerUnity}`,
  23: `${spacer * 5.75}${spacerUnity}`,
  24: `${spacer * 6}${spacerUnity}`,
  25: `${spacer * 6.25}${spacerUnity}`,
  26: `${spacer * 6.5}${spacerUnity}`,
  27: `${spacer * 6.75}${spacerUnity}`,
  28: `${spacer * 7}${spacerUnity}`,
  29: `${spacer * 8.25}${spacerUnity}`,
  30: `${spacer * 8.5}${spacerUnity}`,
  31: `${spacer * 8.75}${spacerUnity}`,
  32: `${spacer * 9}${spacerUnity}`,
  33: `${spacer * 9.25}${spacerUnity}`,
  34: `${spacer * 9.5}${spacerUnity}`,
  35: `${spacer * 9.75}${spacerUnity}`,
  36: `${spacer * 10}${spacerUnity}`,
  37: `${spacer * 10.25}${spacerUnity}`,
  38: `${spacer * 10.5}${spacerUnity}`,
  39: `${spacer * 10.75}${spacerUnity}`,
  40: `${spacer * 11}${spacerUnity}`,
  41: `${spacer * 11.25}${spacerUnity}`,
  42: `${spacer * 11.5}${spacerUnity}`,
  43: `${spacer * 11.75}${spacerUnity}`,
  44: `${spacer * 12}${spacerUnity}`,
  45: `${spacer * 12.25}${spacerUnity}`,
  46: `${spacer * 12.5}${spacerUnity}`,
  47: `${spacer * 12.75}${spacerUnity}`,
  48: `${spacer * 13}${spacerUnity}`,
  49: `${spacer * 13.25}${spacerUnity}`,
  50: `${spacer * 13.5}${spacerUnity}`,
  51: `${spacer * 13.75}${spacerUnity}`,
  52: `${spacer * 14}${spacerUnity}`,
  53: `${spacer * 14.25}${spacerUnity}`,
  54: `${spacer * 14.5}${spacerUnity}`,
  55: `${spacer * 14.75}${spacerUnity}`,
  56: `${spacer * 15}${spacerUnity}`,
  57: `${spacer * 15.25}${spacerUnity}`,
  58: `${spacer * 15.5}${spacerUnity}`,
  59: `${spacer * 15.75}${spacerUnity}`,
  60: `${spacer * 16}${spacerUnity}`,
};

const theme = { borderRadius, borderSize, colors, fontSizes, spacing };

export default theme;

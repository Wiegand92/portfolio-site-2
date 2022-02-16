module.exports = {
  content: ['./src/**'],
  theme: {
    colors: {
      barnRed: {
        light: '#E00000',
        DEFAULT: '#780000',
        dark: '#520000',
      },
      carnelian: {
        light: '#EE4450',
        DEFAULT: '#C1121F',
        dark: '#950E17',
      },
      orange: '#f4a15d',
      papayaWhip: {
        DEFAULT: '#FDF0D5',
        dark: '#F9D48A',
      },
      prussianBlue: {
        light: '#5CC6FF',
        DEFAULT: '#003049',
        dark: '#001B29',
      },
      richBlack: {
        light: '#0F7A80',
        DEFAULT: '#07393C',
        dark: '#021112',
      },
      superiorBlue: {
        light: '#C6DAE6',
        DEFAULT: '#669BBC',
        dark: '#447A9C',
      },
    },
    extend: {
      width: {
        'thumbnail-sm': '282px',
        'thumbnail-lg': '800px',
      },
      height: {
        'thumbnail-sm': '183px',
        'thumbnail-lg': '525px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

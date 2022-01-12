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
      maxWidth: {
        'thumbnail-sm': '240px',
        'thumbnail-lg': '800px',
      },
      maxHeight: {
        'thumbnail-sm': '157px',
        'thumbnail-lg': '525px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

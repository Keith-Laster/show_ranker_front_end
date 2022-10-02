interface Color {
  light: string;
  dark: string;
}

export type ColorsProp = 'primary' | 'secondary';

const colors: Record<ColorsProp, Color> = {
  primary: {
    light: '#367BC9',
    dark: '#3B36C9',
  },
  secondary: {
    light: '#C5C936',
    dark: '#C98436',
  }
};

export default colors;
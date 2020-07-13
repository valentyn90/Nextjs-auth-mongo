import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { PaletteType } from '@material-ui/core';

export const createTheme = (type: PaletteType): Theme =>
  createMuiTheme({
    palette: {
      type,
      primary: {
        light: '#ACB3CA',
        main: '#465480',
        dark: '#232A40',
      },
      secondary: {
        light: '#CA97AA',
        main: '#803953',
        dark: '#401D2A',
      },
    },
  });

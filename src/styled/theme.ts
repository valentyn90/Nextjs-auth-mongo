import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

// export const themeStyled = {
//   colors: {
//     light: '#FFFFFF',
//     one: '#618C03',
//     two: '#A9BF04',
//     three: '#CCD96C',
//     four: '#A6A049',
//     five: '#D9CBA0',
//   },
// };

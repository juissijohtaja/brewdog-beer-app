import { grey, indigo, pink, amber, orange } from '@material-ui/core/colors'

const materialUiTheme = {
  palette: {
    primary: {
      main: amber[300],
    },
    secondary: {
      main: orange[500],
    },
    background: {
      default: grey[200]
    },
    darkAccent: {
      main: grey[900],
    },
    type: 'light',
  },
  overrides: {
    MuiInputBase: {
      input: {
        background: 'white',
      },
    },
  },
}
export default materialUiTheme
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import Routes from './Routes';

// importando componentes criados
import { Loading } from './view/components';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true
      }
    },
    MuiSelect: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true
      }
    }
  }
});



const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Loading />
        <Routes />   
      </ThemeProvider>
    </Provider>
  )
}

export default App;
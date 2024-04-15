import React from 'react';
import { Box, Button, TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

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
  const [plan, setPlan] = React.useState('');

  const handleChange = (event) => {
    setPlan(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <h1>Aplicação</h1>
      <Box sx={{ minWidth: 120, my: 2 }}>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
      <Box sx={{ minWidth: 120, my: 2 }}>
      <TextField />
      </Box>
      </Box>
      <Box sx={{ minWidth: 120, my: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Selecione um Plano</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={plan}
          label="Selecione um Plano"
          onChange={handleChange}
        >
          <MenuItem value={'basic'}>Básico</MenuItem>
          <MenuItem value={'medium'}>Intermediário</MenuItem>
          <MenuItem value={'premium'}>Premium</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </ThemeProvider>
  )
}

export default App;
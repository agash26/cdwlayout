import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Teams from './pages/Teams';
import { DataProvider } from "./context/DataContext";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',

    },
  });

  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Teams />
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;

import { useSelector } from 'react-redux';
import useAuth from './hooks/useAuth';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import LoadingScreen from 'utils/LoadingScreen';
// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

// ==============================|| APP ||============================== //

const App = () => {
  const { isInitialized } = useAuth();

  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>{isInitialized ? <Routes /> : <LoadingScreen />}</NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;

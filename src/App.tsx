import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Search from './pages/Search';
import About from './pages/About';
import { ThemeProvider, createTheme } from '@mui/material';
import { pink, teal } from '@mui/material/colors';
import Login from './pages/Login';
import Register from './pages/Register';
import AgentPage from './pages/AgentPage';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    white: true;
  }
}

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: pink,
    info: {
      main: '#0E7886',
    },
    warning: {
      main: '#F2A104',
    },
    error: {
      main: '#E63946',
    },
    white: {
      main: '#FFFFFF',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: teal[900],
          fontSize: '1rem',
          fontWeight: 'bold',
          paddingBottom: '0.5rem',
          paddingTop: '0.5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',

          '&:hover': {
            backgroundColor: 'primary.main',
          },

        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '3rem',
          fontWeight: 'bold',
          color: teal[900],
        },
        h2: {
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: teal[900],
        },
        h3: {
          fontSize: '2rem',
          fontWeight: 'bold',
          color: teal[900],
        },
        h4: {
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: teal[900],
        },
        h5: {
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: teal[900],
        },
        h6: {
          fontSize: '1rem',
          fontWeight: 'bold',
          color: teal[900],
        },
        body1: {
          fontSize: '1rem',
          color: teal[900],
        },
        body2: {
          fontSize: '0.9rem',
          color: teal[900],
        },
      },
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />

          <div style={{ margin: '2rem', height: '100%' }}>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/login" Component={Login} />
              <Route path="/register" Component={Register} />
              <Route path="/destinations" Component={Destinations} />
              <Route path="/search" Component={Search} />
              <Route path="/about" Component={About} />

              <Route path="/agent" element={<AgentPage />} />

              <Route path="*">"404 Not Found!"</Route>

            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

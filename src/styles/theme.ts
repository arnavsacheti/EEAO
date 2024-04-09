import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    typography: {
        fontFamily: "Rubik Mono One",
        fontWeightRegular: 300,
    },
    palette: {
        mode: 'light',  // This sets the mode of the theme to light
        text: {
            primary: '#141205',
        },
        background: {
            default: '#fefdfb',
        },
        primary: {
            main: '#687dd9',
        },
        secondary: {
            main: '#ece1b1',
        },
    },
});

const darkTheme = createTheme({
    typography: {
        fontFamily: "Rubik Mono One",
        fontWeightRegular: 300,
    },
    palette: {
        mode: 'dark',  // This sets the mode of the theme to dark
        text: {
            primary: '#faf8eb',
        },
        background: {
            default: '#040301',
        },
        primary: {
            main: '#263a97',
        },
        secondary: {
            main: '#4e4313',
        },
    },
});

export { lightTheme, darkTheme };
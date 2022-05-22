import React from 'react';
import '../styles/globals.css'
import {StyledEngineProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {deepPurple, indigo, red} from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: deepPurple,
        secondary: indigo,
        error: red
    },

});

const MyApp = ({Component, pageProps}) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <div className={`font-sans`}>
                    <Component {...pageProps} />
                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default MyApp;

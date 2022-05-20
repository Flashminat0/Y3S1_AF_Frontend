import React from 'react';
import '../styles/globals.css'
import {StyledEngineProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';

const MyApp = ({Component, pageProps}) => {
    return (
        <React.StrictMode>
            <StyledEngineProvider injectFirst>
                <CssBaseline/>
                <div className={`font-sans`}>
                    <Component {...pageProps} />
                </div>
            </StyledEngineProvider>
        </React.StrictMode>
    );
};

export default MyApp;

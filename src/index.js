import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {blueGrey} from '@material-ui/core/colors';

import App from './components/app';

const theme = createMuiTheme({
    palette: {
        primary: blueGrey
    }
});

    ReactDOM.render(
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </BrowserRouter>,
        document.getElementById('app')
    );

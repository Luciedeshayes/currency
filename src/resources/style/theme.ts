/**
 * This file contains the Material UI theme for the project
 */

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#191919',
            light: '#232323',
            dark: '#333333',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#1542C3',
            light: '#1572c3',
        },
        success: {
            main: '#14a267',
            light: '#6fca92',
        },
        danger: {
            main: '#c84813',
            light: '#ee7d49',
            contrastText: '#F13030',
        },
        edit: {
            main: '#9cabbb',
            light: '#d8dee5',
        },
        warning: {
            main: '#ef8f04',
            light: '#efad35',
        },
        info: {
            main: '#ef8f04',
        },
        colors: {
            white: '#FFFFFF',
            black: '#1D1D1D',
            grey: '#f9f9f9',
            greyDark: '#8f8f8f',
            red: '#ef3756',
            green: '#00eeae',
            home: '#333333',
            riders: '#f5a623',
            drivers: '#1542c3',
            reservations: '#b8e986',
            bookings: '#00eeae',
            partners: '#fce06b',
            companies: '#ef3756',
            bills: '#5856d6',
            snappay: '#77f2dc',
            table: {
                header: '#9aabbd',
                id: '#00a6ff',
                text: '#5d656b',
                hover: '#fbfdff',
                highlighted: '#FFFFFF',
                highlight: '#008eff',
                highlightTransparent: '#62bcff',
            },
        },
        spacing: 2,
    },
    mixins: {
        toolbar: {
            minHeight: 96,
        },
    },
});
export default theme;

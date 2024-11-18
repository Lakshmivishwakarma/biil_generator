import { createTheme } from '@mui/material/';

export const Theme = createTheme({

    palette: {
        primary: {
            main: "#19363f",
            light: "#0000ff"
        },
        secondary: {
            main: '#FFB6C1',
            light: "#00a39f",
        },
        success: {
            main: "#19363f",
        },
        info: {
            main: '#097969',
            light: "#066b8a"
        },
        background: {
            default: "#64748B"
        }
    },

    typography: {
        headerText: {
            "fontSize": 18
        },
        title1: {
            "fontSize" : 14
        },
        title2: {
            "fontSize" : 12
        },
        "fontFamily": "system-ui",
        
        "fontSize": 18,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});

export default Theme;

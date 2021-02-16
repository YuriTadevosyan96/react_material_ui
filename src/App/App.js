import {
    createMuiTheme,
    CssBaseline,
    makeStyles,
    ThemeProvider,
} from "@material-ui/core";
import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import "./App.css";
import Employees from "../pages/Employees/Employees";

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: "#ff408140",
        },
    },
    shape: {
        borderRadius: "12px",
    },
    overrides: {
        MuiAppBar: {
            root: {
                transform: "translateZ(0)",
            },
        },
    },
    props: {
        MuiIconButton: {
            disableRipple: true,
        },
    },
});

const useStyles = makeStyles({
    appMain: {
        paddingLeft: "320px",
        width: "100%",
    },
});

function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <SideMenu />
            <div className={classes.appMain}>
                <Header />
                <Employees />
            </div>
            <CssBaseline />
        </ThemeProvider>
    );
}

export default App;

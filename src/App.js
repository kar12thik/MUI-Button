import React from "react";
import "./styles.css";
import { Button, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: "oblique",
    color: "brown"
  }
});
export default function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography
          className={classes.helloThereStyle}
          variant="h1"
          color="primary"
        >
          Hello There !!!
        </Typography>
        <Button color="secondary" variant="outlined">
          My First Button using MUI
        </Button>
      </div>
    </ThemeProvider>
  );
}

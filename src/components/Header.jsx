import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "20px 0",
    background: "rgba(0, 0, 0, 0.87)",
    color: "#ffffff",
    fontSize: "2em",
  },
}));

const Header = () => {
  const classes = useStyles();
  return <div className={classes.header}>Header</div>;
};

export default Header;

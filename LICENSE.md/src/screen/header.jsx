import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  appbar: {
    backgroundColor: "transparent"
  },
  toolBar: {
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff"
  },
  img: {
    width: 100
  }
};

class Header extends Component {
  render() {
    let { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolBar}>
            {/* <img src={logo} alt="" className={classes.img} /> */}
            <Typography
              variant="headline"
              color="secondary"
              className={classes.flex}
            >
              Hoppy Munich
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);

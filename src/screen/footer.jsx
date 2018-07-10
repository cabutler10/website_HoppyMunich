import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    flexShrink: 0,
    padding: 15
  }
});

class Footer extends Component {
  render() {
    let { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="caption" color="inherit" align="center">
          &copy; 2018 Hoppy Munich
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);

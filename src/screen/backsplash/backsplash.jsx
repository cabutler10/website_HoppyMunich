import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import backsplash from "./snazzy-image.png";

const styles = theme => ({
  root: {
    backgroundImage: `url("${backsplash}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: 200,
    paddingBottom: 200,
    marginTop: -100
  },
  title2: {
    fontWeight: 600,
    fontSize: 30,
    paddingBottom: 30,
    paddingTop: 10,
    [theme.breakpoints.up("sm")]: {
      fontSize: 90,
      paddingBottom: 100,
      paddingTop: 30
    }
  },
  subtitle: {
    fontSize: 15,
    textTransform: "uppercase",
    [theme.breakpoints.up("sm")]: {
      fontSize: 30
    }
  }
});

const Backsplash = props => {
  let { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="display2" align="center" className={classes.title2}>
        Hoppy Munich
      </Typography>
      <Typography
        variant="display1"
        color="primary"
        align="center"
        className={classes.subtitle}
      >
        The resource for good beer in and around Munich
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Backsplash);

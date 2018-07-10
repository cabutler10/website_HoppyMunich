import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import GridList, { GridListTile } from "material-ui/GridList";
import image1 from "./photos/about1.jpg";
import image2 from "./photos/about2.jpg";
import image3 from "./photos/about3.jpg";
import image4 from "./photos/about4.jpg";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "30px 0 30px 0",
    [theme.breakpoints.up("sm")]: {
      padding: "100px 0 60px 0"
    }
  },
  item: {
    flexBasis: "100%",
    padding: "0 15px 0 15px",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "40%"
    }
  },
  title: {
    paddingBottom: 15,
    fontSize: 20,
    [theme.breakpoints.up("sm")]: {
      fontSize: 21
    }
  },
  title2: {
    paddingBottom: 15,
    fontSize: 24,
    [theme.breakpoints.up("sm")]: {
      paddingBottom: 45,
      fontSize: 38
    }
  },
  body: {
    paddingBottom: 15
  }
});

const About = props => {
  let { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.item}>
        <Typography
          gutterBottom
          variant="headline"
          color="error"
          className={classes.title}
        >
          Convenient, Professional, Reliable
        </Typography>
        <Typography
          variant="display1"
          color="primary"
          className={classes.title2}
        >
          Discover Our Hikes
        </Typography>
        <Typography
          variant="body1"
          color="primary"
          className={classes.body}
          gutterBottom
        >
          Pup Athletic Club (PAC) Dog Hiking is a dog walking service for
          Seattle's Eastside area that provides your pet with outdoor trail
          hikes.
        </Typography>
        <Typography variant="body1" color="primary" gutterBottom>
          Our hikers have not only a lifelong passion for dogs, but over 5 years
          of experience and coursework in dog training, animal behavior and
          animal physiology.
        </Typography>
      </div>
      <div className={classes.item}>
        {" "}
        <GridList cellHeight={250} cols={2} spacing={20}>
          <GridListTile key={1} cols={1}>
            <img src={image1} alt="" />
          </GridListTile>
          <GridListTile key={2} cols={1}>
            <img src={image2} alt="" />
          </GridListTile>
          <GridListTile key={3} cols={1}>
            <img src={image3} alt="" />
          </GridListTile>
          <GridListTile key={4} cols={1}>
            <img src={image4} alt="" />
          </GridListTile>
        </GridList>
      </div>
    </div>
  );
};

export default withStyles(styles)(About);

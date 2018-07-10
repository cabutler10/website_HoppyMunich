import React from "react";
import { withStyles } from "material-ui/styles";
import Cards from "../../components/card";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    paddingBottom: 60,
    paddingTop: 60,
    [theme.breakpoints.up("sm")]: {
      paddingBottom: 60,
      paddingTop: 60
    }
  },
  img: {
    flexBasis: "35%",
    paddingBottom: 15,
    paddingTop: 15
  }
});

const About = props => {
  let { classes } = props;
  let titles = ["Breweries", "Craft Beer Stores", "Brew Pubs", "Beergardens"];
  let texts = [
    "Best breweries in Munich",
    "Our favorite Craft Beer Stores",
    "Map Brew Pubs",
    "Map of Beergardens"
  ];
  let images = [img1, img2, img3, img4];
  return (
    <div className={classes.root}>
      {[0, 0, 0, 0].map((e, i) => (
        <div className={classes.img}>
          <Cards title={titles[i]} text={texts[i]} img={images[i]} />
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(About);

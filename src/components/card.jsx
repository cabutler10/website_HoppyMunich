import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

const styles = {
  media: {
    width: "100%",
    height: 300
  }
};

function Cards(props) {
  const { classes, handleClick, img, title, text } = props;
  return (
    <Card>
      <CardMedia
        onClick={handleClick}
        className={classes.media}
        image={img}
        title=""
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="headline"
          component="h2"
          align="center"
        >
          {title}
        </Typography>
        <Typography component="p" align="center">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

Card.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cards);

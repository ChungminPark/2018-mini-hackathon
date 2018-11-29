import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class RecommandArt extends React.Component{
  state = [
    
  ]
}

function startSlideShow() {
  console.log("멍멍")
  // <Link to={`/roster/${p.number}`}></Link>
}

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card} onClick={startSlideShow}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1024,c_fill,g_auto,h_576,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180223171957-the-kiss-gustav-klimt-hi-res.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            추천 명화
          </Typography>
          <Typography component="p">
            오늘의 추천 명화로 간편하게!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
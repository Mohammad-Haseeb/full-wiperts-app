import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './blog.css';
import { LineWeight } from '@material-ui/icons';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
 
const useStyles = makeStyles({
  root: {
    maxWidth: "325px",
    borderRadius:"23px",
    
  },
  fhead:{
      color:"#484848",
      LineWeight:"23px",
      fontSize:"18px",
      fontWeight:"bold",
      fontFamily:"Source Sans Pro"
  },
  date:{
         marginTop:"10px",
         fontFamily:"Lato",
         fontStyle:"normal",
         fontSize:"12px",
         lineHeight:"14px",
         color:"484848",
         opacity:"0.5"
  },
  media: {
    height: 164,
    marginTop:"0px",
    borderRadius:"23px",
    width:"100%",
    filter: "drop-shadow(0px 10px 20px rgba(28, 32, 38, 0.2))",
  },
  description:{
      marginTop:"10px",
     fontFamily:"Source Sans Pro",
     fontStyle:"normal",
     fontSize:"14px",
     lineHeight:"24px",
     color:"#000000",
     opacity:"0.54",
  },
});

export default function BlogCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        
        <CardMedia
          className={classes.media}
          image={props.images}
          title="Contemplative Reptile"
        ><div className="blogImageText"><Button className="blogImageTextbtn">Data-Removal</Button></div></CardMedia>
        <CardContent>
          <Typography className={classes.fhead}>
            {props.message}
          </Typography>
          <Typography className={classes.date}>
            {props.date}
          </Typography>
          <Typography className={classes.description}>
            {
                props.description
            }
          </Typography>
        </CardContent>
      </CardActionArea>
      <div  style={{display:"flex",justifyContent:"space-around"}}>
               <div>
                 <Button style={{color:"#02C873",fontFamily:"Source Sans Pro",fontStyle:"normal",fontWeight:"noraml",fontSize:"16px"}}>Read more</Button>
               </div>
               <div>
                 <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between", paddingTop:"05px"}}>
                    <div style={{paddingRight:"10px"}}><RemoveRedEyeIcon/></div>
                    <div><p className="cardEyePara">143 view</p></div>
                 </div>
               </div>
      </div>
    </Card>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './FAQ.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    margin:"0 auto",
    marginTop:"50px",
    boxShadow:" 20px 20px 40px rgba(21, 47, 85, 0.1)",
    borderRadius:"120px"
  },
  heading: {
    paddingTop:"20px",
    paddingBottom:"20px",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color:"#484848",
    fontStyle:"normal",
    fontWeight:"bolder",
    fontSize:"18px",
    fontFamily:"Source Sans Pro",
    lineHeight:"23px",

  },
}));

export default function FAQuestion(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion style={{borderRadius:"10px", boxShadow:"0px 10px 20px rgba(37, 37, 92, 0.15)"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  color="primary"></ExpandMoreIcon>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography class="innerAccordiantext">{props.description}</Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}

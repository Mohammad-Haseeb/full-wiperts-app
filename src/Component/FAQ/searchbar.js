import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import './FAQ.css';

const useStyles = makeStyles((theme) => ({
  root: {
     
  },
  input: {
    marginLeft: theme.spacing(1),
    fontFamily:"Source Sans Pro",

    flex: 1,
  },
  iconButton: {
    padding: 9,
    color:"white",
  },
 
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div component="form" className="root" style={{border:"0.5px solid #C1C1C1"}}>
      
      <InputBase
        className={classes.input}
        placeholder="Ex. Security settings"
        inputProps={{ 'Source Sans Pro': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
       <span style={{backgroundColor:"#02C873",height:"44px",width:"44px",borderRadius:"7px"}}>
        <SearchIcon />
       </span>
      </IconButton>
      
    </div>
  );
}

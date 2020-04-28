import React ,{Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    textfieldControl: {
      margin: theme.spacing(3), 
    },
  }));

export const AppTextField = (props) =>{
    const classes = useStyles();
    return (
    <Fragment>
    <TextField id={props.id} label={props.label} type={props.type} style={{ width: props.width }}  className={classes.textfieldControl} />
    </Fragment>
    )
}
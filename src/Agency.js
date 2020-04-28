import React from "react"
import { FormControl, FormLabel, TextField, FormGroup, InputLabel, Input, FormHelperText, FormControlLabel, Checkbox } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import  EnhancedTable  from "./AgencyGrid";
import { AppTextField } from "./AppTextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  }
}));

export const Agency = () => {
  const classes = useStyles();
  return (
      <form>
      <Typography paragraph variant="h5" style={{ color: '#78a02e' }}>
        Agent System - Test
      </Typography>

        <AppTextField id="agentNo" label="Agent No" type="number" width="10%" />
        <AppTextField id="postCode" label="Postcode"  width="10%"/>
        <AppTextField id="chain" label="Chain" width="10%" />
        <AppTextField id="branch" label="Branch" type="number" width="10%"/>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">States</FormLabel>
          <FormGroup row>
            <FormControlLabel control={<Checkbox name="pendingC" />} label="Pending" />
            <FormControlLabel control={<Checkbox name="notTakenUpC" />} label="NotTakenUp" />
            <FormControlLabel control={<Checkbox name="currentC" />} label="Current" />
            <FormControlLabel control={<Checkbox name="TmpFwC" />} label="TmpFw" />
            <FormControlLabel control={<Checkbox name="nFWC" />} label="FW" />
            <FormControlLabel control={<Checkbox name="cancelledC" />} label="Cancelled" />
          </FormGroup>
        </FormControl>
        <div>
        <AppTextField id="tradingName" label="Trading Name" width="40%" />
        <AppTextField id="legalName" label="Legal Name" width="40%"/>
        </div>
        
        <FormControl component="listagentfc" className={classes.formControl}>
          <FormLabel component="listagentfl">List Agents</FormLabel>
          <FormGroup row>
            <FormControlLabel control={<Checkbox name="yesNoC" />} label="Yes/No" />
            <FormControlLabel control={<Checkbox name="CommissionC" />} label="Commission" />
            <FormControlLabel control={<Checkbox name="Load/DiscountC" />} label="Load/Discount" />
          </FormGroup>
        </FormControl>
        <br />
        <EnhancedTable />

      </form>
   
  )
}
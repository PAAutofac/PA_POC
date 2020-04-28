import React from 'react';
import PropTypes from 'prop-types'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography';

function SimpleDialog(props) {
  const { open,onClose } = props;

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Access to the system has been denied.
      Your security profile does not allow access.
      </DialogTitle>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export const Claims = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
    <Typography paragraph variant="h5" style={{ color: '#78a02e' }}>
    Claims System - Test
    </Typography>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}

import React from 'react';
import Paper from 'material-ui/Paper';
import TableControlled from './TableControlled'

const style = {
  height: '100vh',
  width: '100%',
  maxWidth: '900px',
  margin: '0 auto',
  textAlign: 'center',
  display: 'block',
};

const PaperExampleRounded = () => (
  <div>
    <Paper style={style} zDepth={2} rounded={false}>
      <TableControlled />
    </Paper>
  </div>
);

export default PaperExampleRounded;

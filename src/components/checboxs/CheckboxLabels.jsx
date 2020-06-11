import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
  root: {
    color: '#000',
    '&$checked': {color: '#93B230',},
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);



const CheckboxLabels = (props) => {

  const [state, setState] = React.useState({
    [props.name]: false,
  });


  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  
  
  return (
    <FormGroup row>
      <FormControlLabel
        control={<GreenCheckbox 
          checked={state[props.name]} 
          onChange={handleChange} 
          onClick={props.handleChange(state, props.name)}
          name={props.name} />}
          label={props.description}
      />
    </FormGroup>
  );
}
export default CheckboxLabels;
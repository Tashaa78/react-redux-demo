import React from "react";
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


class SearchField extends React.Component {

  render() {

    return (
      <TextField
        id="search"
        type="search"
        label='Free Text Search'
        name="search"
        InputLabelProps={{
          shrink: true,
        }}
        placeholder="scie..."
        onChange={this.props.onChange}
        helperText="Type to search for a joke!"
        fullWidth
        margin="normal"
      />);
  };
}



export default SearchField;
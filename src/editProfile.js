import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class EditProfile extends Component {
   render() {
      return (
        <form onSubmit={this.props.formSubmitProp}>
          <TextField floatingLabelText="Name" type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />    <br/>        
          <RaisedButton label="Submit" type="submit" />
        </form>
      );
   }
}

export default EditProfile;
import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import EditProfile from './editProfile'




class App extends Component {

  constructor(props)
  {
    super(props);   
    this.state = {
      open: false,
      users: [],
      username:'',
      location:'',
      usernameNew:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({username:  event.target.value});
  }

  handleSubmit(e) {     
     e.preventDefault();  
     this.setState({usernameNew: this.state.username});
     this.setState({open: false});
    /*fetch('/users/edit', {
      method: 'post',
      body
    }).then(function(response) {
      if(response)
      {       
                   
      }
    }).then(function(data) {
     
    });*/
     
  }

  handleOpen = () => {
    this.setState({open: true});
  };
 
   handleClose = () => {
    this.setState({open: false});
  };
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ username : users.username, location : users.location ,usernameNew : users.username  }));
  }

  render() { 
    return (
      <div className="App">
       <div>
       <h3>Personal Information</h3>     
       <MuiThemeProvider>               
       <b>Name : </b>{ (this.state.usernameNew !== '') ? this.state.usernameNew : this.state.username } <RaisedButton label="EDIT NAME" onClick={this.handleOpen} /> <br/> 
       <b>City : </b>{this.state.location}       
       </MuiThemeProvider>     
       <MuiThemeProvider>       
        <Dialog
          title="Edit Name"          
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true} 
        >             
           <EditProfile myDataProp = {this.state.username} 
               updateStateProp = {this.handleChange} formSubmitProp= { this.handleSubmit}></EditProfile>             
        </Dialog>
        </MuiThemeProvider>
      </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { auth } from '../fire';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { setUser } from '../redux/actions';

import { savePost } from '../redux/actions';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      summary: '',
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        auth.onAuthStateChanged(user => {
          this.props.dispatch(setUser(user));
        });
      } else {
        this.props.history.push('/login');
      }
    });
  }
  onLogout() {
    auth.signOut();
  }

  handleChange(name, e) {
    this.setState({
      [name]: event.target.value,
    });
  }

  onSaveClick() {
    this.props.dispatch(savePost(this.state));
  }

  render() {
    return (
      <div>
        <TextField
          id="title-field"
          label="Title"
          value={this.state.title}
          onChange={this.handleChange.bind(this, 'title')}
          margin="normal"
        />
        <TextField
          id="text-field"
          label="Summary"
          multiline
          rowsMax="4"
          value={this.state.summary}
          onChange={this.handleChange.bind(this, 'summary')}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.onSaveClick.bind(this)}
        >
          Save
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isFetching, posts, user } = state;
  return { isFetching, posts, user };
}

export default connect(mapStateToProps)(NewPost);

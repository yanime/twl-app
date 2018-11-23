import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <div style={{ display: 'flex' }}>
            <Toolbar>
              <Typography variant="title" color="inherit">
                TWL App
              </Typography>
            </Toolbar>
          </div>
          {this.props.user && (
            <div>
              <span>{this.props.user.displayName}</span>
              <Link to={`/posts/new`} className="link">
                New Post
              </Link>
              <Button onClick={this.props.onLogout}>Log Out</Button>
            </div>
          )}
        </AppBar>
      </div>
    );
  }
}

export default Menu;

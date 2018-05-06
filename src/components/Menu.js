import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                TWL App
              </Typography>
            </div>
            {this.props.name ? (
              <span>{this.props.name}</span>
            ) : (
              <Button color="inherit" onClick={this.props.onLogout}>
                Log Out
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Menu;

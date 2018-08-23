import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

class Menu extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
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
            {this.props.user && (
              <div>
                <span>{this.props.user.displayName}</span>
                <Button color="inherit" onClick={this.props.onLogout}>
                  Log Out
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Menu;
